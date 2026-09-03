import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
        <p className="text-lg mb-8 opacity-90">
          Don't wait to prioritize your mental health. Contact me today to schedule your first appointment.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  )
}
