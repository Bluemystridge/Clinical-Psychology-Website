import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dr. Alvaro Ridge - Clinical Psychology & Counseling',
  description: 'Professional clinical psychology and counseling services for mental health and wellness.',
  metadataBase: new URL('https://alvaroridge.com'),
  openGraph: {
    type: 'website',
    url: 'https://alvaroridge.com',
    title: 'Dr. Alvaro Ridge - Clinical Psychology & Counseling',
    description: 'Professional clinical psychology and counseling services for mental health and wellness.',
    siteName: 'Alvaro Ridge Psychology',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
