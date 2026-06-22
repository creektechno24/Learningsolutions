//import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - Creek Learning Solutions',
  description:
    'Learn more about Creek Learning Solutions, a unit of Creek Techno Solutions Pvt. Ltd., Hyderabad, India.',
}

export default function AboutPage() {
const coreValues = [
  {
    letter: 'I',
    title: 'Integrity',
    image: '/images/about/integrity.jpeg',
    description:
      'We uphold the highest standards of honesty, ethics, and transparency in every engagement.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    image: '/images/about/innovation.jpeg',
    description:
      'We embrace creativity, new ideas, and emerging technologies to drive transformation.',
  },
  {
    letter: 'C',
    title: 'Collaboration',
    image: '/images/about/collaboration.jpeg',
    description:
      'We build strong partnerships and work together to achieve shared success.',
  },
  {
    letter: 'E',
    title: 'Empowerment',
    image: '/images/about/empowerment.jpeg',
    description:
      'We enable individuals and teams to unlock their full potential through learning.',
  },
  {
    letter: 'E',
    title: 'Excellence',
    image: '/images/about/excellence.jpeg',
    description:
      'We strive for outstanding quality, measurable impact, and continuous improvement.',
  },
]

  const differentiators = [
    {
      title: 'Tailored Learning Journeys',
      description:
        'No cookie-cutter content—every program is built around your team’s specific challenges and goals.',
    },
    {
      title: 'Interactive & Experiential',
      description:
        'We use simulations, role plays, case studies, and real-world scenarios to make learning stick.',
    },
    {
      title: 'End-to-End Support',
      description:
        'From needs analysis to post-training reinforcement, we’re with you every step of the way.',
    },
    {
      title: 'Global Standards, Local Relevance',
      description:
        'Our content meets international benchmarks while staying culturally and contextually relevant.',
    },
    {
      title: 'Measurable Impact',
      description:
        'We help you track ROI through assessments, feedback, and performance metrics.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_40%)]" />
<div className="relative container mx-auto px-4 md:px-6 py-24 md:py-32">
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
        Creek Learning Solutions
      </span>

      <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
        About Us
      </h1>

      <p className="mt-6 text-xl text-blue-100 leading-relaxed">
        Welcome to Creek Learning Solutions, a unit of Creek Techno
        Solutions Pvt. Ltd., Hyderabad, India.
      </p>
    </div>

    {/* Right Image */}
    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      <Image
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
        alt="Corporate Training"
        fill
        priority
        className="object-cover"
      />
    </div>

  </div>
</div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
       <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
  <div className="grid lg:grid-cols-3">

    {/* Left Content */}
    <div className="lg:col-span-2 p-8 md:p-12">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Who We Are
      </span>

      <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-8">
        Welcome to Creek Learning Solutions
      </h2>

      <div className="space-y-6 text-lg leading-8 text-slate-700">
        <p>
          🙏 Welcome to Creek Learning Solutions, A unit of Creek Techno
          Solutions Pvt. Ltd. Hyderabad, India. We are more than just a
          training provider—we are partners in transformation.
        </p>

        <p>
          With 25+ years of experience and founded with a vision to elevate
          workplace performance and empower professionals, we have trained and
          coached more than 2+ lakh professionals across various domains.
        </p>

        <p>
          We specialize in delivering customized, high-impact corporate
          training solutions on a Pan India basis across industries that align
          with your business goals and industry demands.
        </p>

        <p>
          We are a premier corporate training provider committed to
          transforming workplaces through impactful learning experiences.
        </p>

        <p>
          Our team of certified facilitators, instructional designers, and
          industry experts bring decades of experience across multiple sectors.
        </p>

        <p>
          We also offer Train-the-Trainer (TTT) certification programs,
          helping organizations build a culture of continuous development.
        </p>
      </div>
    </div>

    {/* Right Highlights */}
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-8 md:p-10 text-white">

      <h3 className="text-2xl font-bold mb-8">
        Why Organizations Choose Us
      </h3>

      <div className="space-y-5">

        <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
          <h4 className="text-3xl font-bold">25+</h4>
          <p className="text-blue-100">
            Years of Experience
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
          <h4 className="text-3xl font-bold">2+ Lakh</h4>
          <p className="text-blue-100">
            Professionals Trained
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
          <h4 className="text-3xl font-bold">Pan India</h4>
          <p className="text-blue-100">
            Training Delivery
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
          <h4 className="text-3xl font-bold">TTT</h4>
          <p className="text-blue-100">
            Certification Programs
          </p>
        </div>

      </div>
    </div>

  </div>
</div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                🌟 Vision
              </h3>

              <p className="text-slate-700 text-lg leading-8">
                To be the most trusted partner in corporate learning, shaping
                future-ready professionals and thriving organizations.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-indigo-700 mb-4">
                🎯 Mission
              </h3>

              <p className="text-slate-700 text-lg leading-8">
                To deliver high-impact training solutions that foster growth,
                innovation, and excellence across industries. We empower
                individuals and teams through tailored learning experiences,
                expert facilitation, and globally recognized certifications.
              </p>
            </div>
          </div>

          {/* Core Values */}
        {/* Core Values - IICEE Framework */}
<div className="mt-20">

  <div className="text-center mb-14">
    <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
      Our Core Values
    </span>

    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
      The IICEE Framework
    </h2>

    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
      Integrity, Innovation, Collaboration, Empowerment and Excellence form
      the foundation of how we deliver learning solutions, build partnerships,
      and create lasting impact.
    </p>
  </div>

{/* First Row */}
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

  {coreValues.slice(0, 3).map((value) => (
    <div
      key={value.title}
      className="group overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >

     <div className="h-[280px] flex items-center justify-center bg-white p-4">
  <Image
    src={value.image}
    alt={value.title}
    width={500}
    height={350}
    className="h-[240px] w-full object-contain group-hover:scale-105 transition duration-700"
  />
</div>

      <div className="p-5">

        <div className="flex items-center gap-3 mb-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            {value.letter}
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            {value.title}
          </h3>

        </div>

        <p className="text-slate-600 leading-6">
          {value.description}
        </p>

      </div>

    </div>
  ))}

</div>

{/* Second Row */}
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">

  {coreValues.slice(3).map((value) => (
    <div
      key={value.title}
      className="group overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >

     <div className="h-[280px] flex items-center justify-center bg-white p-4">
  <Image
    src={value.image}
    alt={value.title}
    width={500}
    height={350}
    className="h-[240px] w-full object-contain group-hover:scale-105 transition duration-700"
  />
</div>

      <div className="p-5">

        <div className="flex items-center gap-3 mb-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            {value.letter}
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            {value.title}
          </h3>

        </div>

        <p className="text-slate-600 leading-6">
          {value.description}
        </p>

      </div>

    </div>
  ))}

</div>

</div>
          {/* What Sets Us Apart */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
              What Sets Us Apart
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}