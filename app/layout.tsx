import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://luckybear22casino.vercel.app'
const SITE_TITLE =
  'Lucky Bear Casino — официальный сайт, зеркало, бонусы и слоты 2026'
const SITE_DESCRIPTION =
  'Lucky Bear Casino (Лаки Бир Казино) — лицензионное онлайн-казино с быстрыми выплатами СБП 5 минут, бонусом 100% и фриспинами. Рабочее зеркало на сегодня, слоты, регистрация, кэшбэк.'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'lucky bear casino',
    'luckybear casino',
    'luckybear casino официальный',
    'lucky bear kazino',
    'лаки бир казино',
    'лакибир казино',
    'лаки бир казино зеркало',
    'лаки бир казино онлайн',
    'лаки бир казино официальный',
    'лаки бир казино официальный сайт',
    'лакибир казино официальный сайт',
    'лаки бир казино сайт',
    'luckybear casino зеркало',
    'luckybear casino официальный сайт',
  ],
  authors: [{ name: 'Lucky Bear Casino' }],
  creator: 'Lucky Bear Casino',
  publisher: 'Lucky Bear Casino',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Lucky Bear Casino',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0e1a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="application-name" content="Lucky Bear Casino" />
        <meta name="apple-mobile-web-app-title" content="Lucky Bear Casino" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="RU" />
        <meta name="rating" content="18+" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
        <meta property="og:site_name" content="Lucky Bear Casino" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="yandex-verification" content="69ce50a4a31d3271" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
