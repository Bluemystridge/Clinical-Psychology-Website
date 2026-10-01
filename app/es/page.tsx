import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Psicología clínica y terapia en Madrid | Alvaro Ridge',
  description: 'Servicios profesionales de psicología clínica y terapia en español, adaptados a tus necesidades.',
}

export default function SpanishHome() {
  const services = [
    {
      title: 'Terapia individual',
      image: '/Individual Therapy.png',
      description: 'Terapia individual para la ansiedad, la depresión y los desafíos de la vida.',
    },
    {
      title: 'Terapia de grupo',
      image: '/Group Therapy.png',
      description: 'Sesiones terapéuticas en un entorno grupal de apoyo.',
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Te acompaño en tu camino hacia el bienestar emocional</h1>
          <p className="text-xl mb-8 opacity-90">
            Servicios profesionales de psicología clínica y terapia adaptados a tus necesidades
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/es/services" className="bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition">
              Ver servicios
            </Link>
            <Link href="/es/contact" className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-primary transition">
              Pedir una cita
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Mis servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <div className="relative w-full h-64 mb-4">
                  <Image src={service.image} alt={service.title} fill className="object-cover rounded" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <p className="text-sm text-gray-500 mt-4">Las sesiones individuales duran 50 minutos</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/es/services" className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition">
              Conocer todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Lo que dicen mis clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-8 rounded-lg shadow">
              <div className="mb-4 text-yellow-400" aria-label="5 de 5 estrellas">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                «Alvaro me ha ayudado a comprenderme mejor, a entender mis tendencias y mis miedos desde una perspectiva completamente nueva. Sus preguntas sinceras y su orientación me han ayudado a reconectar con partes de mí que no veía desde hacía años».
              </p>
              <footer className="font-semibold text-gray-900">— Rose A.</footer>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-lg shadow">
              <div className="mb-4 text-yellow-400" aria-label="5 de 5 estrellas">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                «Tuve la suerte de conocer a Alvaro durante una etapa de grandes cambios. Me acompañó con paciencia, amabilidad y atención mientras afrontaba un tema delicado. Sus preguntas perspicaces me animaron a explorar emociones que no sabía que afectaban a mi bienestar. Su enfoque empático y sin prejuicios creó un espacio seguro y cómodo para una experiencia profundamente liberadora. Agradezco su apoyo y recomiendo a Alvaro a quienes busquen un terapeuta atento y compasivo».
              </p>
              <footer className="font-semibold text-gray-900">— Susie W.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Te gustaría dar el siguiente paso?</h2>
          <p className="text-lg mb-8 opacity-90">
            Tu salud mental merece atención. Ponte en contacto conmigo para concertar tu primera cita.
          </p>
          <Link href="/es/contact" className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition">
            Empezar hoy
          </Link>
        </div>
      </section>
    </>
  )
}
