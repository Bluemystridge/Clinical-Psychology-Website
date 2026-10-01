import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre mí | Alvaro Ridge',
  description: 'Conoce la trayectoria, las credenciales y el enfoque de Alvaro Ridge en psicología clínica.',
}

export default function SpanishAbout() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Alvaro Ridge</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-primary mb-4">Te doy la bienvenida a mi consulta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soy Alvaro Ridge, psicólogo clínico colegiado en Madrid. Ofrezco terapia adaptada a cada persona. Mi experiencia profesional se centra en la ansiedad, la depresión, la neurodivergencia y el acompañamiento a personas LGBTQ+, así como en las transiciones vitales y la comunicación y gestión de las relaciones.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mi enfoque terapéutico</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Combino un enfoque terapéutico holístico e integrador que tiene en cuenta a la persona que hay detrás del diagnóstico. Mi objetivo es ayudarte a vivir una vida más plena y saludable.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Áreas de especialización</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Trastornos de ansiedad</h4>
                <p className="text-gray-700 text-sm">Desde la ansiedad generalizada hasta el pánico, te ayudo a desarrollar estrategias prácticas para afrontar la situación y encontrar alivio duradero.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Depresión</h4>
                <p className="text-gray-700 text-sm">Acompañamiento compasivo y basado en la evidencia durante los episodios depresivos.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Neurodivergencia</h4>
                <p className="text-gray-700 text-sm">Acompañamiento especializado para el TDAH, el autismo y otras experiencias neurodivergentes.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Acompañamiento LGBTQ+</h4>
                <p className="text-gray-700 text-sm">Un espacio seguro y afirmativo para todas las identidades y orientaciones sexuales.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Transiciones vitales</h4>
                <p className="text-gray-700 text-sm">Afronta los grandes cambios de la vida con claridad y confianza.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Comunicación en las relaciones</h4>
                <p className="text-gray-700 text-sm">Construye vínculos más saludables y auténticos con otras personas.</p>
              </div>
            </div>
          </div>

          <aside className="bg-primary text-white p-6 rounded-lg h-fit sticky top-20">
            <h3 className="text-xl font-semibold mb-6">Datos destacados</h3>
            <div className="space-y-4 text-sm">
              <div><p className="font-semibold">Titulación</p><p className="text-blue-100">Psicólogo clínico</p></div>
              <div><p className="font-semibold">Ubicación</p><p className="text-blue-100">Madrid</p></div>
              <div><p className="font-semibold">Modalidades</p><p className="text-blue-100">Terapia individual y de grupo</p></div>
              <div><p className="font-semibold">Enfoque</p><p className="text-blue-100">Integrador y holístico</p></div>
              <div><p className="font-semibold">Especialidades</p><p className="text-blue-100">Ansiedad, depresión, neurodivergencia, LGBTQ+, transiciones vitales y comunicación en las relaciones</p></div>
            </div>
          </aside>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">¿Te gustaría empezar?</h3>
          <p className="text-gray-700 mb-6">
            Si estás pensando en iniciar terapia o tienes preguntas sobre mis servicios, me encantará escucharte.
          </p>
          <Link href="/es/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Pedir una consulta
          </Link>
        </div>
      </div>
    </div>
  )
}
