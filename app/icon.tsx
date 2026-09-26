import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/svg+xml'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 100%)',
          borderRadius: 6,
          fontSize: 20,
          fontWeight: 900,
          color: '#fbbf24',
          letterSpacing: -1,
        }}
      >
        LB
      </div>
    ),
    { ...size }
  )
}
