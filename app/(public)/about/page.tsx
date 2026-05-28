import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Award, Target } from 'lucide-react'

export const metadata = {
  title: 'About LearningSolutions - Enterprise Training Platform',
  description: 'Learn about LearningSolutions mission to transform professional development through expert training and mentorship.',
  openGraph: {
    title: 'About LearningSolutions',
    description: 'Discover our mission and values',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About LearningSolutions</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Empowering organizations through expert-led training and continuous professional development
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Our mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At LearningSolutions, we believe that quality education and professional development are key drivers of organizational success. We connect enterprises with world-class trainers and provide comprehensive learning solutions tailored to their unique needs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our platform enables seamless collaboration between experienced instructors and organizations seeking to upskill their workforce, fostering a culture of continuous learning and innovation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4">
                {[
                  { title: 'Excellence', desc: 'We maintain the highest standards in training quality and service delivery' },
                  { title: 'Integrity', desc: 'We build trust through transparency and ethical business practices' },
                  { title: 'Innovation', desc: 'We embrace new methodologies and technologies in education' },
                  { title: 'Impact', desc: 'We measure success by the real growth and achievements of our clients' },
                ].map((value, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">{value.title}</h3>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Our values"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Students Trained' },
              { number: '50+', label: 'Expert Trainers' },
              { number: '100+', label: 'Courses Available' },
              { number: '95%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LearningSolutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Verified Trainers',
                description: 'All trainers are thoroughly vetted with proven expertise and industry credentials',
              },
              {
                icon: Target,
                title: 'Custom Solutions',
                description: 'We tailor training programs to meet your organization&apos;s specific objectives',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Our team ensures seamless program delivery and maximum learning outcomes',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Connect with expert trainers and discover the perfect learning solutions for your team.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Courses
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
