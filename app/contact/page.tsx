import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact - Dr. Alvaro Ridge',
  description: 'Get in touch to schedule an appointment or ask questions.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Ready to start your journey to better mental health? Reach out today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-700 hover:text-primary">
                  (123) 456-7890
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:alvaro9ridge@gmail.com" className="text-gray-700 hover:text-primary">
                  alvaro9ridge@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Office Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Office Location</h3>
                <p className="text-gray-700">
                  [Your Office Address]<br />
                  [City, State ZIP]
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Appointment Request</h2>
            <form action="https://formspree.io/f/xwlkbzpe" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Send Request
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Your message will be sent directly to alvaro9ridge@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
