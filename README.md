# Upstack Studio Website

AI-enabled software engineering firm website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui, Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adrianchinghc/upstackstudio-v4-testing.git
cd upstackstudio-v4-testing
```

### 2. Install dependencies

```bash
npm install
```

This will also set up Husky git hooks automatically via the `prepare` script.

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Required environment variables:

```env
# HubSpot Forms API (server-side only)
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_STRATEGY_FORM_ID=your_strategy_form_id
HUBSPOT_CONTACT_FORM_ID=your_contact_form_id
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

### Development

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build for production                    |
| `npm run start` | Start production server                 |

### Code Quality

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `npm run lint`         | Run ESLint                     |
| `npm run lint:fix`     | Run ESLint with auto-fix       |
| `npm run format`       | Format code with Prettier      |
| `npm run format:check` | Check code formatting          |
| `npm run typecheck`    | Run TypeScript type checking   |
| `npm run validate`     | Run lint, typecheck, and tests |

### Testing

| Command                 | Description                    |
| ----------------------- | ------------------------------ |
| `npm run test`          | Run tests in watch mode        |
| `npm run test:ci`       | Run tests once (CI mode)       |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:watch`    | Run tests in watch mode        |

### Security

| Command                  | Description                    |
| ------------------------ | ------------------------------ |
| `npm run security:audit` | Run npm audit (moderate level) |
| `npm run security:check` | Run npm audit (high level)     |

## Project Structure

```
upstack-studio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── services/           # Service pages
│   ├── work/               # Case studies
│   ├── blog/               # Blog with MDX
│   ├── contact/            # Contact form
│   ├── strategy-session/   # Pain primer form
│   └── [geo-pages]/        # Geo-targeted landing pages
├── components/
│   ├── common/             # Shared components
│   ├── forms/              # Form components
│   ├── hero/               # Hero section components
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── luda/               # LUDA framework section
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── constants.ts        # Site constants
│   └── hubspot.ts          # HubSpot server actions
├── content/
│   └── blog/               # MDX blog posts
├── public/
│   └── images/             # Static images
├── __tests__/              # Test files
│   ├── components/         # Component tests
│   └── lib/                # Utility tests
└── .github/
    └── workflows/          # GitHub Actions CI/CD
```

## Pre-commit Hooks

This project uses Husky to run checks before each commit:

1. **lint-staged**: Runs ESLint and Prettier on staged files
2. **Type checking**: Runs TypeScript compiler
3. **Tests**: Runs test suite

To skip hooks temporarily (not recommended):

```bash
git commit --no-verify -m "your message"
```

## Testing

Tests are written using Vitest and React Testing Library.

### Running tests

```bash
# Run in watch mode (development)
npm run test

# Run once (CI)
npm run test:ci

# Run with coverage
npm run test:coverage
```

### Writing tests

Place test files in `__tests__/` directory or alongside components with `.test.ts(x)` extension.

```tsx
// __tests__/components/Button.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

## CI/CD

GitHub Actions runs on every push and pull request to `main`:

1. **Lint**: ESLint and Prettier checks
2. **Type Check**: TypeScript compilation
3. **Test**: Vitest test suite
4. **Build**: Next.js production build
5. **Security**: npm audit for vulnerabilities

## Code Style

- **ESLint**: Next.js recommended rules + TypeScript
- **Prettier**: Single quotes, no semicolons, 2-space indent
- **Formatting**: Run `npm run format` before committing

## Deployment

The site is configured for deployment on Vercel.

```bash
# Build locally to verify
npm run build

# Preview production build
npm run start
```

## Environment Variables

| Variable                   | Description               | Required         |
| -------------------------- | ------------------------- | ---------------- |
| `HUBSPOT_PORTAL_ID`        | HubSpot account portal ID | Yes (production) |
| `HUBSPOT_STRATEGY_FORM_ID` | Strategy session form ID  | Yes (production) |
| `HUBSPOT_CONTACT_FORM_ID`  | Contact form ID           | Yes (production) |

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run validate` to ensure all checks pass
4. Commit your changes (pre-commit hooks will run)
5. Push and create a pull request

## License

Private - All rights reserved.
