export const dynamic = 'force-static'

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://luckybear22casino.vercel.app/sitemap.xml
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
