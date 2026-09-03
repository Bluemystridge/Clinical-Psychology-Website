export function Testimonials() {
  const testimonials = [
    {
      name: 'Rose F.',
      text: 'Alvaro has helped me understand myself, my tendencies, and my fears in a whole new light. His genuine questions and guidance have helped me get back in touch with parts of myself I haven\'t seen in years.',
      rating: 5
    },
    {
      name: 'James T.',
      text: 'Professional, compassionate, and truly listens. Made a real difference in my life.',
      rating: 5
    },
    {
      name: 'Emma L.',
      text: 'The best therapist I\'ve ever worked with. Clear guidance and genuine care.',
      rating: 5
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow">
              <div className="mb-4 text-yellow-400">{'★'.repeat(testimonial.rating)}</div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
