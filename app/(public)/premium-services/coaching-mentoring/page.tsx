import Image from 'next/image'
import Link from 'next/link'

export default function CoachingMentoringPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
                Premium Service
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
                Coaching & Mentoring
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Coaching and Mentoring are two of the most powerful tools for
                unlocking employee potential and building a culture of
                continuous growth.
              </p>
            </div>

            <div className="relative h-[500px] rounded-[32px] overflow-hidden bg-white shadow-2xl">
              <Image
                src="/images/premium-services/cm.webp"
                alt="Coaching and Mentoring"
                fill
                className="object-contain p-4"
              />
            </div>

          </div>

        </div>

      </section>

      {/* Introduction */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] p-12 border shadow-sm">

            <h2 className="text-4xl font-bold mb-8">
              Introduction to Coaching & Mentoring
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Coaching and mentoring are developmental approaches that focus on
              personalized guidance, skill enhancement, and career growth.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">

              <div className="bg-slate-50 rounded-2xl border p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Coaching
                </h3>

                <p className="text-slate-600 leading-7">
                  Coaching is typically short-term and performance-driven.
                  It helps employees improve specific skills, behaviors,
                  or outcomes through structured feedback and goal-setting.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Mentoring
                </h3>

                <p className="text-slate-600 leading-7">
                  Mentoring is long-term and relationship-based.
                  It involves experienced professionals guiding employees
                  through career decisions, challenges, and personal growth.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Impact Section */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Impact on Employees
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-[24px] p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Accelerated Skill Development
              </h3>

              <p className="text-slate-600">
                Employees receive targeted support to improve competencies and
                become role-ready faster.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Enhanced Confidence & Motivation
              </h3>

              <p className="text-slate-600">
                Regular feedback and encouragement build confidence and inspire
                employees to take initiative.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Better Decision Making
              </h3>

              <p className="text-slate-600">
                Coaches and mentors help employees think strategically and make
                informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Stronger Leadership Pipeline
              </h3>

              <p className="text-slate-600">
                Organizations develop future leaders internally and reduce
                external hiring dependency.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Better Mental Health
              </h3>

              <p className="text-slate-600">
                Mentoring creates a supportive environment that improves
                resilience and emotional wellbeing.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Higher Retention & Engagement
              </h3>

              <p className="text-slate-600">
                Employees with mentors show higher job satisfaction, loyalty,
                and long-term engagement.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Highlight Banner */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-[32px] p-12 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Building Future Leaders
            </h2>

            <p className="text-xl text-slate-200 max-w-4xl mx-auto">
              Future leaders are nurtured through mentorship, reducing
              recruitment costs and creating a strong leadership pipeline.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border p-12 text-center shadow-sm">

            <h2 className="text-5xl font-bold mb-6">
              Unlock Employee Potential
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              If you're planning to implement Coaching & Mentoring programs,
              we would be thrilled to help design a customized roadmap for
              your organization.
            </p>

            <Link href="/contact">
              <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold hover:scale-105 transition-all">
                Call Us Today
              </button>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}