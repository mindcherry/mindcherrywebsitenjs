'use client'

import dynamic from 'next/dynamic'
import config from '../../sanity.config'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((m) => m.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6F6B5E',
          fontFamily: 'ui-monospace, "Geist Mono", monospace',
          fontSize: 12,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}
      >
        Loading studio…
      </div>
    ),
  },
)

export default function StudioClient() {
  // When the project ID isn't set yet (fresh checkout, no .env.local), show a
  // helpful setup guide instead of letting the studio throw "Configuration
  // must contain `projectId`" inside its error boundary.
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  if (!projectId) {
    return <SetupGuide />
  }

  return <NextStudio config={config} />
}

function SetupGuide() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#F5F2EA',
        color: '#0B0B0F',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'ui-monospace, "Geist Mono", monospace',
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#6F6B5E',
          }}
        >
          MindCherry Studio · setup
        </p>
        <h1
          style={{
            fontFamily: 'Fraunces, "Times New Roman", serif',
            fontSize: 48,
            lineHeight: 1.04,
            letterSpacing: '-0.022em',
            margin: '12px 0 24px',
          }}
        >
          One short step to publish posts.
        </h1>
        <p style={{ color: '#4E4E4E', fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
          The embedded Sanity Studio at <code>/studio</code> needs a project to
          connect to. Spin one up in 60 seconds, then drop two values into{' '}
          <code>.env.local</code>.
        </p>

        <ol style={{ paddingLeft: 20, lineHeight: 1.65, color: '#1A1A22' }}>
          <li style={{ marginBottom: 16 }}>
            Create a free project at{' '}
            <a
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#E91E46', textDecoration: 'underline' }}
            >
              sanity.io/manage
            </a>
            . Choose dataset <strong>production</strong>.
          </li>
          <li style={{ marginBottom: 16 }}>
            Add <code>http://localhost:3000</code> (and your prod domain later)
            to <strong>API → CORS Origins</strong> in the project settings.
          </li>
          <li style={{ marginBottom: 16 }}>
            Copy the project ID from the dashboard URL and paste it into{' '}
            <code>.env.local</code>:
            <pre
              style={{
                fontFamily: 'ui-monospace, "Geist Mono", monospace',
                background: '#0B0B0F',
                color: '#F5F2EA',
                padding: '12px 14px',
                borderRadius: 6,
                fontSize: 13,
                lineHeight: 1.5,
                overflowX: 'auto',
                whiteSpace: 'pre',
                marginTop: 10,
              }}
            >
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}
            </pre>
          </li>
          <li style={{ marginBottom: 16 }}>
            Restart <code>npm run dev</code> and reload this page. The studio
            will load with the post / author / category schemas already wired
            up.
          </li>
        </ol>

        <p
          style={{
            marginTop: 40,
            paddingTop: 16,
            borderTop: '1px solid rgba(11,11,15,0.12)',
            color: '#6F6B5E',
            fontSize: 13,
          }}
        >
          Marketing pages render with placeholder posts until the studio is
          connected — no broken layouts.
        </p>
      </div>
    </main>
  )
}
