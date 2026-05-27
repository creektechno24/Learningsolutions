import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
} from 'lucide-react'
import { FeaturedCoursesSection } from '@/components/featured-courses-section'

export const metadata = {
  title: 'LearningSolutions - Enterprise Training Platform',
  description:
    'Discover expert trainers and enterprise learning solutions for workforce transformation and professional development.',
  keywords:
    'enterprise training, corporate learning, workforce development, expert trainers, professional courses',
  openGraph: {
    title: 'LearningSolutions - Enterprise Training Platform',
    description:
      'Connect with expert trainers and scalable enterprise learning solutions.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 text-sm text-blue-100">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Trusted Enterprise Training Marketplace
              </div>

              {/* Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  Empower Your Workforce With
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Enterprise Learning
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Connect with industry-leading trainers, customized corporate
                  learning programs, and scalable workforce transformation
                  solutions designed for modern enterprises.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-2xl text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/30"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Link href="/trainers">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-2xl border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20"
                  >
                    Find Expert Trainers
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  {
                    value: '500+',
                    label: 'Enterprise Trainings',
                  },
                  {
                    value: '100+',
                    label: 'Expert Trainers',
                  },
                  {
                    value: '50+',
                    label: 'Corporate Clients',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                  alt="Enterprise Training"
                  width={700}
                  height={800}
                  className="object-cover w-full h-[600px]"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-10 top-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-blue-300" />
                  </div>

                  <div>
                    <p className="text-white font-semibold">
                      Workforce Upskilling
                    </p>

                    <p className="text-sm text-slate-300">
                      Enterprise Programs
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-10 bottom-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                    <Award className="w-7 h-7 text-indigo-300" />
                  </div>

                  <div>
                    <p className="text-white font-semibold">
                      Verified Experts
                    </p>

                    <p className="text-sm text-slate-300">
                      Industry Trainers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Companies */}
          
          <div className="mt-24 border-t border-white/10 pt-10">
            <p className="text-center text-sm uppercase tracking-[0.2em] text-slate-400 mb-8">
              Trusted By Growing Enterprises
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                'TechCorp',
                'InnovateX',
                'GlobalEdge',
                'FutureWorks',
                'NextGen',
              ].map((company) => (
                <div
                  key={company}
                  className="h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-300 font-semibold"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              Enterprise Learning Solutions
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Workforce Transformation Built For Modern Organizations
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Deliver scalable corporate learning experiences with expert-led
              training, customized learning paths, and enterprise-ready training
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Verified Expert Trainers',
                description:
                  'Industry-certified professionals with enterprise training experience across multiple domains.',
              },
              {
                icon: Target,
                title: 'Customized Learning Programs',
                description:
                  'Tailored corporate training solutions aligned with business goals and workforce transformation.',
              },
              {
                icon: Building2,
                title: 'Enterprise Workforce Enablement',
                description:
                  'Scalable learning programs for leadership development, technical upskilling, and organizational growth.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] p-8 border border-slate-200 hover:border-blue-200 transition-all duration-300 enterprise-shadow hover:enterprise-shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <FeaturedCoursesSection />

      {/* Enterprise Training Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              Enterprise Training Categories
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Comprehensive Corporate Learning Solutions
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Explore high-impact learning programs designed to strengthen
              workforce capabilities and accelerate organizational growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BriefcaseBusiness,
                title: 'Leadership Development',
                description:
                  'Develop future-ready leaders with executive coaching and management training.',
              },
              {
                icon: GraduationCap,
                title: 'Technical Upskilling',
                description:
                  'Enhance technical capabilities with industry-focused learning paths.',
              },
              {
                icon: Users,
                title: 'Team Enablement',
                description:
                  'Build high-performing teams through collaborative enterprise training.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[32px] bg-slate-50 border border-slate-200 p-8 hover:border-blue-200 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 text-sm text-blue-100">
              Enterprise Consultation & Workforce Development
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready To Transform Your Workforce?
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Connect with verified enterprise trainers and customized learning
              solutions designed to accelerate business growth and workforce
              performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-2xl text-base bg-white text-blue-700 hover:bg-slate-100"
                >
                  Submit Training Inquiry
                </Button>
              </Link>

              <Link href="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-2xl border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}