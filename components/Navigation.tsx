'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/es')
  const pagePath = isSpanish ? pathname.replace(/^\/es/, '') || '/' : pathname
  const languageHref = isSpanish ? pagePath : `/es${pagePath === '/' ? '' : pagePath}`
  const links = isSpanish
    ? [
        { href: '/es', label: 'Inicio' },
        { href: '/es/about', label: 'Sobre mí' },
        { href: '/es/services', label: 'Servicios' },
        { href: '/es/contact', label: 'Contacto', primary: true },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact', primary: true },
      ]
  const languageLabel = isSpanish ? 'ENG' : 'ESP'

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={isSpanish ? '/es' : '/'} className="text-2xl font-bold text-primary" onClick={closeMenu}>
          Alvaro Ridge
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label, primary }) => (
              <Link
                key={href}
                href={href}
                className={primary
                  ? 'bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition'
                  : 'text-gray-700 hover:text-primary transition'}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href={languageHref}
            hrefLang={isSpanish ? 'en' : 'es'}
            aria-label={isSpanish ? 'Switch language to English' : 'Cambiar idioma a español'}
            title={isSpanish ? 'English' : 'Español'}
            className="text-xs font-semibold tracking-wide text-gray-500 hover:text-primary border border-gray-200 rounded px-2 py-1 transition"
          >
            {languageLabel}
          </Link>
          <button 
            className="md:hidden text-primary text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? (isSpanish ? 'Cerrar menú' : 'Close menu') : (isSpanish ? 'Abrir menú' : 'Open menu')}
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-4 space-y-2">
          {links.map(({ href, label, primary }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={primary
                ? 'block bg-primary text-white px-4 py-2 rounded'
                : 'block text-gray-700 hover:text-primary'}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
