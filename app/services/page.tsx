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
                src="/images/individual-therapy.png"
                alt="Individual Therapy"
                fill
                className="object-cover"
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
                    In individual therapy, you'll work directly with me in a confidential, safe environment tailored specifically to your needs and goals.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Session Details</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Standard sessions: 50 minutes</li>
                    <li>• Frequency: Typically weekly, adjustable based on needs</li>
                    <li>• Complete confidentiality guaranteed</li>
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
                    Group therapy provides unique therapeutic benefits including peer support, shared experiences, and learning from others facing similar challenges.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Session Details</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Standard sessions: 60 minutes</li>
                    <li>• Small group setting (6-8 participants)</li>
                    <li>• Strict confidentiality and respect maintained</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="relative w-full h-96 md:h-full order-1 md:order-2">
              <Image
                src="/images/group-therapy.png"
                alt="Group Therapy"
                fill
                className="object-cover"
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
              <p className="text-gray-700">All sessions are completely confidential and protected by professional ethics guidelines.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Flexible Scheduling</h3>
              <p className="text-gray-700">Sessions can be adjusted based on your availability and therapeutic needs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Evidence-Based Care</h3>
              <p className="text-gray-700">All treatments are grounded in the latest clinical research and best practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
