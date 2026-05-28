import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'

//import { Navbar } from '@/components/navbar'
//import { Footer } from '@/components/footer'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'LearningSolutions - Enterprise Training Platform',

  description:
    'Connect with expert trainers and discover comprehensive workforce learning solutions for enterprise growth and professional development.',

  keywords:
    'enterprise training, workforce development, corporate learning, expert trainers, professional courses',

  generator: 'Next.js',

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

  openGraph: {
    title: 'LearningSolutions - Enterprise Training Platform',

    description:
      'Empowering organizations through expert-led enterprise learning and scalable workforce development solutions.',

    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}
      >
       

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

    
        {/* Analytics */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}