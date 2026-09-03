import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Alvaro Ridge',
  description: 'Learn about Alvaro Ridge\'s background, credentials, and approach to clinical psychology.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Alvaro Ridge</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-primary mb-4">Welcome to My Practice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am Alvaro Ridge, a licensed clinical psychologist in Madrid providing tailored therapy services. My professional experience focuses on anxiety, depression, neurodivergence, and LGBTQ+ support, as well as life transitions and relationship communication and management.
            </p>
            
            <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Areas of Specialization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Anxiety Disorders</h4>
                <p className="text-gray-700 text-sm">From generalized anxiety to panic, I help clients develop practical coping strategies and lasting relief.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Depression</h4>
                <p className="text-gray-700 text-sm">Supporting clients through depressive episodes with compassionate, evidence-based care.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Neurodivergence</h4>
                <p className="text-gray-700 text-sm">Specialized support for ADHD, autism, and other neurodivergent experiences.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">LGBTQ+ Support</h4>
                <p className="text-gray-700 text-sm">Creating a safe, affirming space for all identities and sexual orientations.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Life Transitions</h4>
                <p className="text-gray-700 text-sm">Navigating major life changes with clarity and confidence.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Relationship Communication</h4>
                <p className="text-gray-700 text-sm">Building healthier, more authentic connections with others.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-6 rounded-lg h-fit sticky top-20">
            <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">License</p>
                <p className="text-blue-100">Clinical Psychologist</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-blue-100">Madrid</p>
              </div>
              <div>
                <p className="font-semibold">Modalities</p>
                <p className="text-blue-100">Individual & Group Therapy</p>
              </div>
              <div>
                <p className="font-semibold">Approach</p>
                <p className="text-blue-100">Integrative & Holistic</p>
              </div>
              <div>
                <p className="font-semibold">Specialties</p>
                <p className="text-blue-100">Anxiety, Depression, Neurodivergence, LGBTQ+, Life Transitions, Relationship Communication</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ready to Begin?</h3>
          <p className="text-gray-700 mb-6">
            If you're considering therapy, or if you have questions about my services, I'd love to hear from you.
          </p>
          <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  )
}
