import Link from 'next/link'

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Your Mental Health Journey</h1>
        <p className="text-xl mb-8 opacity-90">
          Expert clinical psychology and counseling services tailored to your needs
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link 
            href="/services" 
            className="bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition"
          >
            View Services
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-primary transition"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
