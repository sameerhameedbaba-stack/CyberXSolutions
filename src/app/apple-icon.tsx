import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Safari needs a raster touch icon; the rest of the site uses the SVG mark. */
export default function AppleIcon() {
  const bar = {
    position: 'absolute' as const,
    width: 108,
    height: 17,
    borderRadius: 9999,
    background: '#ffffff',
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #2F6BFF 0%, #7C3AED 52%, #EC4899 100%)',
        }}
      >
        <div style={{ ...bar, transform: 'rotate(45deg)' }} />
        <div style={{ ...bar, transform: 'rotate(-45deg)' }} />
        <div
          style={{
            position: 'relative',
            width: 66,
            height: 66,
            borderRadius: 9999,
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 9999,
              background: 'linear-gradient(135deg, #2F6BFF, #EC4899)',
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
