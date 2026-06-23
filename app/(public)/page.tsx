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
  title: 'Creek Learning Solutions',
  description:
    'Discover expert trainers, professional learning programs and workforce development solutions. for workforce transformation and professional development.',
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
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />

        {/* Video Background */}
<div className="absolute inset-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source
      src="/videos/video_preview.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/65" />
</div>

       <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 text-sm text-blue-100">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                India's Trusted Learning & Training Network
              </div>

              {/* Heading */}
              <div className="space-y-6">
               <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-white max-w-5xl mx-auto">
  Empower Your Workforce
  <span className="block text-blue-400">
   With Expert Learning Solutions
  </span>
</h1>
<p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
Connect with industry-leading trainers, professional learning programs,
and workforce development solutions designed for modern organizations.
</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
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
              <div className="grid grid-cols-3 gap-10 pt-10 max-w-3xl mx-auto">
                {[
                  {
                    value: '500+',
                    label: 'Training Programs',
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
            </div>
            </div>
      </section>


{/* Trusted Companies */}
<section className="py-8 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-center text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase mb-10">
      TRUSTED BY LEADING ORGANIZATIONS
    </p>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

      {[
        'Infosys',
        'TCS',
        'Wipro',
        'Accenture',
        'Cognizant',
      ].map((company) => (
        <div
          key={company}
          className="h-16 rounded-xl border bg-white shadow-sm hover:shadow-md transition-al flex items-center justify-center font-bold text-slate-700 hover:shadow-lg transition-all"
        >
          {company}
        </div>
      ))}

    </div>

  </div>
</section>

{/* Enterprise Solutions */}
<section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/40 blur-3xl rounded-full" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 rounded-full px-6 py-3 text-sm font-semibold mb-8">
              Professional Learning Solutions
            </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Learning Solutions Built For Professional Growth
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Deliver impactful learning experiences with expert-led
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
                title: 'Workforce Development',
                description:
                  'Scalable learning programs for leadership development, technical upskilling, and organizational growth.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-[36px] p-10 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
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
     <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100/50 blur-3xl rounded-full" />
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/50 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
         <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-6 py-3 text-sm font-semibold text-blue-700 mb-8">
  Professional Training Categories
</div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Professional Learning Programs
For Career & Business Growth
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Explore carefully designed learning programs delivered by industry experts to enhance leadership, technical excellence, communication skills, and organizational performance.
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
                className="
group
relative
overflow-hidden
rounded-[36px]
bg-white/90
backdrop-blur-xl
border border-slate-200
p-10
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
hover:border-blue-300
transition-all
duration-500
"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />

                <div className="relative">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl flex items-center justify-center mb-8">
                    <item.icon className="w-9 h-9 text-white" />
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
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 text-sm text-blue-100">
              Professional Training & Workforce Development
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready To Transform Your Workforce?
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Connect with verified professional trainers  and customized learning
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