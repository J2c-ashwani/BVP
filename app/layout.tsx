import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Bihar Vikas Party - A New Beginning for Bihar',
  description: 'Bihar Vikas Party (BVP) - A proposed political party committed to transparency, development, and merit-based leadership through BPSC-style candidate selection.',
  keywords: 'Bihar, Political Party, BVP, Bihar Vikas Party, Governance, Development',
  openGraph: {
    title: 'Bihar Vikas Party - A New Beginning for Bihar',
    description: 'Bihar Vikas Party (BVP) - A proposed political party committed to transparency, development, and merit-based leadership.',
    url: 'https://biharvikas.party',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bihar Vikas Party',
    description: 'A new beginning for Bihar\'s future',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="70" fontSize="60" fontWeight="bold" textAnchor="middle" fill="%230C2D72">BVP</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
    generator: 'v0.app'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0C2D72', // Updated from Royal Blue to Deep Blue
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
