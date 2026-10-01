import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Alvaro Ridge',
  description: 'Ponte en contacto para solicitar una cita o hacer una pregunta.',
}

export default function SpanishContact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ponte en contacto</h1>
        <p className="text-xl text-gray-600 mb-12">
          ¿Quieres empezar a cuidar tu salud mental? Escríbeme hoy.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Solicitud de cita</h2>
            <form action="https://formspree.io/f/xwlkbzpe" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Enviar solicitud
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Tu mensaje se enviará directamente a alvaro9ridge@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
