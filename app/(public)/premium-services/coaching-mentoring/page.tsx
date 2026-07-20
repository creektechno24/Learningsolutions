import Image from 'next/image'
import Link from 'next/link'

export default function CoachingMentoringPage() {
  return (
    <main className="min-h-screen bg-slate-50">

   {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 lg:py-32">

  {/* Background Effects */}

  <div className="absolute inset-0">

    <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

    <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

  </div>

  <div className="relative container mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-300 backdrop-blur-xl">

          Premium Service

        </span>

        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-white">

          Coaching &
          <br />
          Mentoring

        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

          Coaching and Mentoring are two of the most powerful tools for
          unlocking employee potential and building a culture of
          continuous growth.

        </p>

      </div>

      {/* Right */}

      <div>

        <div className="group relative overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[35px] bg-white p-5">

            <div className="relative h-[500px] overflow-hidden rounded-[28px]">

              <Image
                src="/images/premium-services/cm.webp"
                alt="Coaching and Mentoring"
                fill
                priority
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Introduction */}
<section className="relative -mt-16 pb-24 z-20">

  <div className="container mx-auto max-w-7xl px-6">

    <div className="relative overflow-hidden rounded-[40px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)] border border-slate-200">

      {/* Premium Top Border */}

      <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />

      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

      <div className="relative p-10 lg:p-16">

        <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

          Professional Development

        </span>

        <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-slate-900">

          Introduction to Coaching & Mentoring

        </h2>

        <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

        <p className="mt-10 text-lg leading-9 text-slate-600">

          Coaching and mentoring are developmental approaches that focus on
          personalized guidance, skill enhancement, and career growth.

        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Coaching */}

          <div className="group overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-[31px] bg-white p-8">

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">

                🎯

              </div>

              <h3 className="mb-6 text-3xl font-bold text-slate-900">

                Coaching

              </h3>

              <p className="leading-8 text-slate-600">

                Coaching is typically short-term and performance-driven.
                It helps employees improve specific skills, behaviors,
                or outcomes through structured feedback and goal-setting.

              </p>

            </div>

          </div>

          {/* Mentoring */}

          <div className="group overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-600 to-fuchsia-600 p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-[31px] bg-white p-8">

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">

                🤝

              </div>

              <h3 className="mb-6 text-3xl font-bold text-slate-900">

                Mentoring

              </h3>

              <p className="leading-8 text-slate-600">

                Mentoring is long-term and relationship-based.
                It involves experienced professionals guiding employees
                through career decisions, challenges, and personal growth.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Impact Section */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-16">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Employee Growth
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Impact on Employees
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {/* Card 1 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🚀
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Accelerated Skill Development
          </h3>

          <p className="leading-8 text-slate-600">
            Employees receive targeted support to improve competencies and
            become role-ready faster.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            ⭐
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Enhanced Confidence & Motivation
          </h3>

          <p className="leading-8 text-slate-600">
            Regular feedback and encouragement build confidence and inspire
            employees to take initiative.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            📈
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Better Decision Making
          </h3>

          <p className="leading-8 text-slate-600">
            Coaches and mentors help employees think strategically and make
            informed decisions.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            👑
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Stronger Leadership Pipeline
          </h3>

          <p className="leading-8 text-slate-600">
            Organizations develop future leaders internally and reduce
            external hiring dependency.
          </p>

        </div>

      </div>

      {/* Card 5 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-cyan-600 to-sky-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
            💙
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Better Mental Health
          </h3>

          <p className="leading-8 text-slate-600">
            Mentoring creates a supportive environment that improves
            resilience and emotional wellbeing.
          </p>

        </div>

      </div>

      {/* Card 6 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-pink-600 to-rose-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
            🤝
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Higher Retention & Engagement
          </h3>

          <p className="leading-8 text-slate-600">
            Employees with mentors show higher job satisfaction, loyalty,
            and long-term engagement.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Highlight Banner */}
<section className="relative py-24 overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_35%)]" />

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,0.35)]">

      {/* Top Gradient */}

      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

      <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

        {/* Glow */}

        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">

          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            Leadership Development

          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white leading-tight">

            Building Future Leaders

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-slate-300">

            Future leaders are nurtured through mentorship,
            reducing recruitment costs and creating a strong
            leadership pipeline.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* CTA */}
<section className="relative overflow-hidden py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">

  {/* Background Decoration */}

  <div className="absolute inset-0">

    <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />

    <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-violet-100 blur-3xl opacity-60" />

  </div>

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="group overflow-hidden rounded-[42px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(15,23,42,0.15)] transition-all duration-500 hover:-translate-y-2">

      <div className="relative rounded-[41px] bg-white overflow-hidden">

        {/* Decorative Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

        <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Let's Get Started

          </span>

          <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-slate-900">

            Unlock Employee Potential

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-600">

            If you're planning to implement Coaching & Mentoring programs,
            we would be thrilled to help design a customized roadmap for
            your organization.

          </p>

          <div className="mt-14">

            <Link href="/contact">

              <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-12 py-5 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-105">

                Call Us Today

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>

              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </main>
  )
}