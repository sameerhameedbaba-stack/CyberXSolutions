import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'CyberXSolutions — AI agents, automation and cybersecurity for enterprise';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default social card, inherited by every route that does not define its own.
 * Drawn with plain divs — ImageResponse has no access to the site stylesheet.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Aurora wash */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            left: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(47,107,255,0.32), rgba(47,107,255,0) 68%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -140,
            right: -180,
            width: 660,
            height: 660,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(168,85,247,0.30), rgba(168,85,247,0) 68%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -260,
            left: 320,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(6,182,212,0.24), rgba(6,182,212,0) 70%)',
          }}
        />

        {/* Brand lockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 19,
              background: 'linear-gradient(135deg, #2F6BFF 0%, #7C3AED 52%, #EC4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* The mark's crossing strokes, rebuilt as rotated bars. */}
            <div
              style={{
                position: 'absolute',
                width: 39,
                height: 6,
                borderRadius: 9999,
                background: '#ffffff',
                transform: 'rotate(45deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: 39,
                height: 6,
                borderRadius: 9999,
                background: '#ffffff',
                transform: 'rotate(-45deg)',
              }}
            />
            <div
              style={{
                position: 'relative',
                width: 24,
                height: 24,
                borderRadius: 9999,
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 9999,
                  background: 'linear-gradient(135deg, #2F6BFF, #EC4899)',
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 800, letterSpacing: -1.2 }}>
            <span style={{ color: '#080C1B' }}>Cyber</span>
            <span style={{ color: '#7C3AED' }}>X</span>
            <span style={{ color: '#565F81' }}>Solutions</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -3.6,
              lineHeight: 1.02,
              color: '#080C1B',
            }}
          >
            The work runs itself.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -3.6,
              lineHeight: 1.02,
              color: '#2F6BFF',
              marginTop: 4,
            }}
          >
            You stay in control.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 27,
              color: '#565F81',
              marginTop: 26,
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            Agentic AI, automation and security systems that carry real operations end to end.
          </div>
        </div>

        {/* Footer rule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #ECEEF6',
            paddingTop: 26,
          }}
        >
          <div style={{ display: 'flex', fontSize: 23, color: '#565F81' }}>cyberxsolutions.us</div>
          <div style={{ display: 'flex', gap: 26, fontSize: 21, color: '#67718F' }}>
            <span>AI Agents</span>
            <span>Automation</span>
            <span>Cybersecurity</span>
            <span>Engineering</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
