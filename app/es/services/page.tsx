import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios de psicología clínica | Alvaro Ridge',
  description: 'Conoce los servicios de psicología clínica y terapia disponibles.',
}

export default function SpanishServices() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Servicios clínicos</h1>
        <p className="text-xl text-gray-600 mb-12">
          Apoyo integral de salud mental adaptado a tus necesidades
        </p>

        <section className="mb-16 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative w-full h-96 md:h-full">
              <Image src="/Individual Therapy.png" alt="Terapia individual" fill className="object-cover" priority />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Terapia individual</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sesiones individuales para abordar la ansiedad, la depresión, el trauma y los desafíos de la vida.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Qué puedes esperar</h3>
                  <p className="text-gray-700">
                    En la terapia individual trabajaremos juntos en un entorno confidencial y seguro, adaptado a tus necesidades y objetivos. Exploraremos tus pensamientos, emociones y comportamientos para desarrollar estrategias prácticas que favorezcan un cambio positivo.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Detalles de las sesiones</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Duración habitual: 50 minutos</li>
                    <li>• Frecuencia: normalmente semanal, ajustable según tus necesidades</li>
                    <li>• Confidencialidad profesional</li>
                    <li>• Enfoques terapéuticos basados en la evidencia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Terapia de grupo</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sesiones terapéuticas en un entorno grupal de apoyo donde compartir experiencias y avanzar en compañía.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Beneficios del trabajo en grupo</h3>
                  <p className="text-gray-700">
                    La terapia de grupo ofrece beneficios únicos: apoyo entre iguales, experiencias compartidas, aprendizaje junto a personas que afrontan desafíos similares y desarrollo de habilidades sociales en un entorno seguro. La propia dinámica del grupo puede convertirse en una valiosa fuente de apoyo y cambio.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Detalles de las sesiones</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Duración habitual: 60 minutos</li>
                    <li>• Grupo reducido (6-8 participantes)</li>
                    <li>• Se mantienen la confidencialidad y el respeto</li>
                    <li>• Disponibilidad de distintos enfoques terapéuticos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative w-full h-96 md:h-full order-1 md:order-2">
              <Image src="/Group Therapy.png" alt="Terapia de grupo" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Información general</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-primary mb-2">Confidencialidad</h3>
              <p className="text-gray-700">Las sesiones son confidenciales y están sujetas a las normas deontológicas profesionales y a la legislación aplicable.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Horarios flexibles</h3>
              <p className="text-gray-700">Podemos adaptar las sesiones a tu disponibilidad y a tus necesidades terapéuticas para favorecer la continuidad del acompañamiento.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Atención basada en la evidencia</h3>
              <p className="text-gray-700">Los tratamientos se apoyan en la investigación clínica actual y en las buenas prácticas de la psicología.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">¿Te gustaría empezar?</h2>
          <p className="text-lg mb-6">Ponte en contacto para concertar tu primera sesión y dar el primer paso hacia un cambio positivo.</p>
          <Link href="/es/contact" className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition">
            Contactar
          </Link>
        </section>
      </div>
    </div>
  )
}
