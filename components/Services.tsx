import Link from 'next/link'
import Image from 'next/image'

export function Services() {
  const services = [
    { 
      title: 'Individual Therapy', 
      image: '/Individual Therapy.png',
      desc: 'One-on-one counseling for anxiety, depression, and life challenges' 
    },
    { 
      title: 'Group Therapy', 
      image: '/Group Therapy.png',
      desc: 'Therapeutic sessions in a supportive group environment' 
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded"
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
              <p className="text-sm text-gray-500 mt-4">Standard sessions are 50 minutes</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
