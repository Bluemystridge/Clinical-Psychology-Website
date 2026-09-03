import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services - Alvaro Ridge',
  description: 'Explore the clinical psychology and counseling services offered.',
}

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical Services</h1>
        <p className="text-xl text-gray-600 mb-12">
          Comprehensive mental health support tailored to your unique needs
        </p>

        {/* Individual Therapy Section */}
        <div className="mb-16 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative w-full h-96 md:h-full">
              <Image
                src="/Individual Therapy.png"
                alt="Individual Therapy"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Individual Therapy</h2>
              <p className="text-lg text-gray-600 mb-6">
                One-on-one counseling sessions addressing anxiety, depression, trauma, and life challenges.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">What to Expect</h3>
                  <p className="text-gray-700">
                    In individual therapy, you'll work directly with me in a confidential, safe environment tailored specifically to your needs and goals. We'll explore your thoughts, feelings, and behaviors to develop practical strategies for positive change.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Session Details</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Standard sessions: 50 minutes</li>
                    <li>• Frequency: Typically weekly, adjustable based on needs</li>
                    <li>• Complete confidentiality guaranteed</li>
                    <li>• Evidence-based therapeutic approaches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Group Therapy Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Group Therapy</h2>
              <p className="text-lg text-gray-600 mb-6">
                Therapeutic sessions in a supportive group environment for shared experiences and collective healing.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Benefits of Group Work</h3>
                  <p className="text-gray-700">
                    Group therapy provides unique therapeutic benefits including peer support, shared experiences, learning from others facing similar challenges, and developing social skills in a safe environment. The group dynamic itself becomes a powerful healing force.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Session Details</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Standard sessions: 60 minutes</li>
                    <li>• Small group setting (6-8 participants)</li>
                    <li>• Strict confidentiality and respect maintained</li>
                    <li>• Diverse therapeutic focuses available</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="relative w-full h-96 md:h-full order-1 md:order-2">
              <Image
                src="/Group Therapy.png"
                alt="Group Therapy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Session Information */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-primary mb-2">Confidentiality</h3>
              <p className="text-gray-700">All sessions are completely confidential and protected by professional ethics guidelines and legal regulations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Flexible Scheduling</h3>
              <p className="text-gray-700">Sessions can be adjusted based on your availability and therapeutic needs to ensure consistent care.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Evidence-Based Care</h3>
              <p className="text-gray-700">All treatments are grounded in the latest clinical research and best practices in psychology.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg mb-6">Contact us today to schedule your first session and take the first step toward positive change.</p>
          <a href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
