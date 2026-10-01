import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export async function generateMetadata(): Promise<Metadata> {
  const isSpanish = headers().get('x-locale') === 'es'
  const title = isSpanish
    ? 'Alvaro Ridge - Psicología clínica y servicios de terapia'
    : 'Alvaro Ridge - Clinical Psychology and Counseling Therapy Services'
  const description = isSpanish
    ? 'Servicios profesionales de psicología clínica y terapia para la salud mental y el bienestar.'
    : 'Professional clinical psychology and counseling therapy services for mental health and wellness.'

  return {
    title,
    description,
    metadataBase: new URL('https://alvaroridge.com'),
    openGraph: {
      type: 'website',
      url: 'https://alvaroridge.com',
      title,
      description,
      siteName: 'Alvaro Ridge Psychology',
      locale: isSpanish ? 'es_ES' : 'en_US',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = headers().get('x-locale') === 'es' ? 'es' : 'en'

  return (
    <html lang={locale}>
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
