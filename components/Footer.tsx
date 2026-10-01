'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const isSpanish = usePathname().startsWith('/es')
  const links = isSpanish
    ? [
        { href: '/es/about', label: 'Sobre mí' },
        { href: '/es/services', label: 'Servicios' },
        { href: '/es/contact', label: 'Contacto' },
      ]
    : [
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
      ]

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Alvaro Ridge</h3>
            <p className="text-gray-400">
              {isSpanish
                ? 'Servicios profesionales de psicología clínica y terapia'
                : 'Professional clinical psychology and counseling services'}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{isSpanish ? 'Enlaces rápidos' : 'Quick Links'}</h4>
            <ul className="space-y-2 text-gray-400">
              {links.map(({ href, label }) => (
                <li key={href}><Link href={href} className="hover:text-primary transition">{label}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{isSpanish ? 'Sígueme' : 'Follow'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Alvaro Ridge. {isSpanish ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2">
            {isSpanish
              ? 'Aviso de confidencialidad y privacidad: toda la información de los clientes se trata con estricta confidencialidad.'
              : 'Confidentiality and Privacy Notice: All client information is treated with strict confidentiality.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
