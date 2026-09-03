'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Dr. Alvaro Ridge
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-primary transition">Services</Link>
          <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition">Contact</Link>
        </div>

        <button 
          className="md:hidden text-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-primary">
            About
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-primary">
            Services
          </Link>
          <Link href="/contact" className="block bg-primary text-white px-4 py-2 rounded">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
