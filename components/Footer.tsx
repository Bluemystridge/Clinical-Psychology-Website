import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Alvaro Ridge</h3>
            <p className="text-gray-400">Professional clinical psychology and counseling services</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@alvaroridge.com</p>
            <p className="text-gray-400">(123) 456-7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Alvaro Ridge. All rights reserved.</p>
          <p className="text-sm mt-2">Confidentiality and Privacy Notice: All client information is treated with strict confidentiality.</p>
        </div>
      </div>
    </footer>
  )
}
