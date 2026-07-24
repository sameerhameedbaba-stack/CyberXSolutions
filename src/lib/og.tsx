import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

type Accent = 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';

const accentColor: Record<Accent, string> = {
  blue: '#2F6BFF',
  violet: '#7C3AED',
  cyan: '#0891B2',
  emerald: '#059669',
  orange: '#EA580C',
  pink: '#DB2777',
  indigo: '#4F46E5',
};

const accentWash: Record<Accent, string> = {
  blue: 'rgba(47,107,255,0.30)',
  violet: 'rgba(124,58,237,0.30)',
  cyan: 'rgba(6,182,212,0.28)',
  emerald: 'rgba(16,185,129,0.28)',
  orange: 'rgba(249,115,22,0.26)',
  pink: 'rgba(236,72,153,0.28)',
  indigo: 'rgba(79,70,229,0.30)',
};

const BRAND_GRADIENT = 'linear-gradient(135deg, #2F6BFF 0%, #7C3AED 52%, #EC4899 100%)';

/**
 * The logo mark rebuilt from divs — ImageResponse cannot render the SVG
 * version, so the two crossing strokes are rotated bars.
 */
function LogoTile() {
  const bar = {
    position: 'absolute' as const,
    width: 34,
    height: 5,
    borderRadius: 9999,
    background: '#ffffff',
  };

  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 17,
        background: BRAND_GRADIENT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div style={{ ...bar, transform: 'rotate(45deg)' }} />
      <div style={{ ...bar, transform: 'rotate(-45deg)' }} />
      <div
        style={{
          position: 'relative',
          width: 21,
          height: 21,
          borderRadius: 9999,
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: 9999, background: BRAND_GRADIENT }} />
      </div>
    </div>
  );
}

/** Keeps footer stat labels from crowding each other. */
function trimLabel(label: string): string {
  return label.length > 24 ? `${label.slice(0, 23).trimEnd()}…` : label;
}

/**
 * Shared social card. Rendered with plain divs and inline styles — the
 * ImageResponse renderer has no access to the site stylesheet, and supports
 * only a flexbox subset of CSS.
 */
export function renderOgImage({
  eyebrow,
  title,
  lead,
  accent = 'blue',
  stats,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  accent?: Accent;
  stats?: { value: string; label: string }[];
}) {
  const color = accentColor[accent];
  const wash = accentWash[accent];

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
          padding: '64px 76px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -240,
            right: -180,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${wash}, rgba(255,255,255,0) 68%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -280,
            left: -140,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(47,107,255,0.20), rgba(255,255,255,0) 70%)',
          }}
        />

        {/* Brand lockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <LogoTile />
          <div style={{ display: 'flex', fontSize: 29, fontWeight: 800, letterSpacing: -1 }}>
            <span style={{ color: '#080C1B' }}>Cyber</span>
            <span style={{ color: '#7C3AED' }}>X</span>
            <span style={{ color: '#565F81' }}>Solutions</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color,
              marginBottom: 20,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 62 ? 58 : 70,
              fontWeight: 800,
              letterSpacing: -2.8,
              lineHeight: 1.06,
              color: '#080C1B',
              maxWidth: 1010,
            }}
          >
            {title}
          </div>
          {lead ? (
            <div
              style={{
                display: 'flex',
                fontSize: 25,
                color: '#565F81',
                marginTop: 22,
                maxWidth: 940,
                lineHeight: 1.4,
              }}
            >
              {lead}
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #ECEEF6',
            paddingTop: 24,
          }}
        >
          <div style={{ display: 'flex', fontSize: 22, color: '#565F81' }}>cyberxsolutions.us</div>
          {stats?.length ? (
            <div style={{ display: 'flex', gap: 40 }}>
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', fontSize: 30, fontWeight: 800, color, letterSpacing: -1 }}>
                    {stat.value}
                  </div>
                  <div style={{ display: 'flex', fontSize: 17, color: '#67718F', marginTop: 2 }}>
                    {trimLabel(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

/** Formats a service stat the same way the page does, for the card footer. */
export function formatStat(stat: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}): string {
  const figure = stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value.toLocaleString('en-US');
  return `${stat.prefix ?? ''}${figure}${stat.suffix ?? ''}`;
}
