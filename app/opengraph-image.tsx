import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Upstack Studio — AI-Enabled Software Engineering'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#05050a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '60px 72px',
          position: 'relative',
        }}
      >
        {/* Gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(117,199,218,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(48,45,131,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#75C7DA',
          }}
        >
          AI-Enabled Software Engineering
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#e8e8f4',
            letterSpacing: '-0.025em',
            maxWidth: '800px',
            marginBottom: '28px',
          }}
        >
          Upstack Studio
        </div>

        <div
          style={{
            fontSize: '22px',
            color: '#a8a6b8',
            lineHeight: 1.5,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Operations digitalisation, AI integration, and custom platform development
          for established, growing companies.
        </div>

        {/* Trust line */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            fontSize: '14px',
            color: '#6b6880',
          }}
        >
          <span>Trusted by Daikin · Magnum 4D · BookXcess</span>
          <span>Built on the LUDA™ Framework</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
