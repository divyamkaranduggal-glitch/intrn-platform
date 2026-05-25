import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = localFont({
  src: [
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-800-normal.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource/inter/files/inter-latin-900-normal.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = localFont({
  src: [
    {
      path: '../node_modules/@fontsource/caveat/files/caveat-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'intrn — Trust-first internships for India',
  description: 'Join the waitlist for intrn, the trust-first internship marketplace where students get replies and companies get verified talent.',
  generator: 'v0.app',
  keywords: ['internship', 'India', 'students', 'startups', 'marketplace', 'jobs'],
  authors: [{ name: 'intrn' }],
  openGraph: {
    title: 'intrn — Trust-first internships for India',
    description: 'Join the waitlist for intrn, the trust-first internship marketplace where students get replies and companies get verified talent.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'intrn — Trust-first internships for India',
    description: 'Join the waitlist for intrn, the trust-first internship marketplace.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2D0ACD',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased bg-[#2D0ACD]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
