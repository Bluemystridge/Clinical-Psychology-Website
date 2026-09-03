import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services - Alvaro Ridge',
  description: 'Explore the clinical psychology and counseling services offered.',
}

export default function Services() {
  const services = [
    {
      title: 'Individual Therapy',
      description: 'One-on-one counseling sessions addressing anxiety, depression, trauma, and life challenges.',
      image: '/images/individual-therapy.png'
    },
    {
      title: 'Group Therapy',
      description: 'Therapeutic sessions in a supportive group environment for shared experiences and collective healing.',
      image: '/images/group-therapy.png'
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical Services</h1>
        <p className="text-xl text-gray-600 mb-12">
          Comprehensive mental health support tailored to your unique needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Session Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-primary mb-2">Session Duration</h3>
              <p className="text-gray-700">Standard sessions are 50 minutes</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Frequency</h3>
              <p className="text-gray-700">Typically weekly, adjustable based on needs</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Confidentiality</h3>
              <p className="text-gray-700">All sessions are completely confidential</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
