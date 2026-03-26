#!/usr/bin/env node

/**
 * Download all WordPress images from blog posts and update MDX files
 * to reference local images instead.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const blogDir = path.join(__dirname, '..', 'content', 'blog');
const imageDir = path.join(__dirname, '..', 'public', 'images', 'blog');

// Ensure image directory exists
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Extract all unique image URLs
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));
const urlPattern = /https:\/\/upstackstudio\.com\/wp-content\/uploads\/[^)"\s]+/g;

const imageUrls = new Set();
const urlToLocalPath = new Map();

files.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.match(urlPattern);
  if (matches) {
    matches.forEach(url => imageUrls.add(url));
  }
});

console.log(`Found ${imageUrls.size} unique images to download\n`);

// Generate local filename from URL
function getLocalFilename(url) {
  // Extract the path after /uploads/
  // e.g., https://upstackstudio.com/wp-content/uploads/2024/06/image.png
  // becomes: 2024-06-image.png
  const match = url.match(/\/uploads\/(\d{4})\/(\d{2})\/(.+)$/);
  if (match) {
    const [, year, month, filename] = match;
    // Clean filename - remove any query strings
    const cleanFilename = filename.split('?')[0];
    return `${year}-${month}-${cleanFilename}`;
  }
  // Fallback: use last part of URL
  const parts = url.split('/');
  return parts[parts.length - 1].split('?')[0];
}

// Download a single image
function downloadImage(url, localPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageDownloader/1.0)'
      },
      timeout: 30000
    }, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadImage(response.headers.location, localPath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }

      const fileStream = fs.createWriteStream(localPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(localPath, () => {}); // Delete partial file
        reject(err);
      });
    });

    request.on('error', reject);
    request.on('timeout', () => {
      request.destroy();
      reject(new Error(`Timeout for ${url}`));
    });
  });
}

// Process images in batches to avoid overwhelming the server
async function downloadAllImages() {
  const urls = Array.from(imageUrls);
  const batchSize = 10;
  let downloaded = 0;
  let failed = 0;
  const failures = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);

    await Promise.all(batch.map(async (url) => {
      const localFilename = getLocalFilename(url);
      const localPath = path.join(imageDir, localFilename);
      const publicPath = `/images/blog/${localFilename}`;

      // Skip if already downloaded
      if (fs.existsSync(localPath)) {
        urlToLocalPath.set(url, publicPath);
        downloaded++;
        return;
      }

      try {
        await downloadImage(url, localPath);
        urlToLocalPath.set(url, publicPath);
        downloaded++;
        process.stdout.write(`\rDownloaded: ${downloaded}/${urls.length} (${failed} failed)`);
      } catch (err) {
        failed++;
        failures.push({ url, error: err.message });
        // Still map to original URL if download fails
        urlToLocalPath.set(url, url);
      }
    }));
  }

  console.log(`\n\nDownload complete: ${downloaded} succeeded, ${failed} failed`);

  if (failures.length > 0) {
    console.log('\nFailed downloads:');
    failures.slice(0, 20).forEach(f => console.log(`  ${f.url}: ${f.error}`));
    if (failures.length > 20) {
      console.log(`  ... and ${failures.length - 20} more`);
    }
  }

  return urlToLocalPath;
}

// Update all MDX files with local paths
function updateMdxFiles(urlMap) {
  let updatedCount = 0;

  files.forEach(filename => {
    const filePath = path.join(blogDir, filename);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    urlMap.forEach((localPath, originalUrl) => {
      if (localPath !== originalUrl && content.includes(originalUrl)) {
        content = content.split(originalUrl).join(localPath);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      updatedCount++;
    }
  });

  console.log(`\nUpdated ${updatedCount} MDX files with local image paths`);
}

// Main execution
async function main() {
  console.log('Starting image download...\n');

  const urlMap = await downloadAllImages();
  updateMdxFiles(urlMap);

  console.log('\nDone!');
}

main().catch(console.error);
