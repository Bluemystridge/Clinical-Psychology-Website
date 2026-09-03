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
            <h2 className="text-2xl font-semibold text-primary mb-4">Professional Background</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to my practice. I am a licensed clinical psychologist dedicated to providing compassionate, evidence-based care to individuals seeking mental health support and personal growth.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With years of experience in clinical psychology, I specialize in helping clients navigate life challenges, overcome anxiety and depression, and develop healthier coping strategies.
            </p>
            
            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Education & Credentials</h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Ph.D. in Clinical Psychology</li>
              <li>• Licensed Clinical Psychologist</li>
              <li>• Board Certified in Clinical Psychology</li>
              <li>• Specialized Training in Evidence-Based Therapies</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Therapeutic Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              I utilize evidence-based therapeutic approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and psychodynamic therapy. My approach is tailored to each client's unique needs and goals.
            </p>
          </div>

          <div className="bg-primary text-white p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm">
              <li><strong>License:</strong> Clinical Psychology</li>
              <li><strong>Experience:</strong> 10+ Years</li>
              <li><strong>Specialties:</strong> Anxiety, Depression, Life Transitions</li>
              <li><strong>Modalities:</strong> Individual & Group Therapy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
