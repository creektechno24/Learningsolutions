import Image from 'next/image'
import Link from 'next/link'

export default function OrganizationalDevelopmentPage() {
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

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <div>

        <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-300 backdrop-blur-xl">

          Premium Service

        </span>

        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-white">

          Organizational
          <br />
          Development (OD)

        </h1>

        <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

          Organizational Development (OD) is like the engine room of a
          thriving company—it’s where strategy meets psychology to create
          a healthier, more adaptive workplace.

        </p>

      </div>

      {/* Right */}

      <div>

        <div className="group relative overflow-hidden rounded-[38px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[37px] bg-white p-5">

            <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-slate-50">

              <Image
                src="/images/premium-services/od.webp"
                alt="Organizational Development"
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

     {/* Benefits */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Organizational Excellence
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Key Benefits of Organizational Development
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {/* Card 1 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            📈
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Continuous Improvement
          </h3>

          <p className="leading-8 text-slate-600">
            OD fosters a culture of ongoing learning and refinement.
            Organizations regularly assess performance, identify gaps,
            and implement changes that improve workflows and service delivery.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            💬
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Enhanced Communication
          </h3>

          <p className="leading-8 text-slate-600">
            OD improves both internal and external communication channels.
            Clear messaging and feedback loops reduce misunderstandings
            and increase transparency.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            🎯
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Strategic Goal Alignment
          </h3>

          <p className="leading-8 text-slate-600">
            OD ensures that individual, team, and organizational goals
            are aligned so employees understand how their work contributes
            to the bigger picture.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            🔄
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Change Management
          </h3>

          <p className="leading-8 text-slate-600">
            OD equips organizations to handle change proactively.
            Structured change processes reduce resistance and increase
            adoption of new initiatives.
          </p>

        </div>

      </div>

      {/* Card 5 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-br from-cyan-600 to-sky-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
            🚀
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Employee Development
          </h3>

          <p className="leading-8 text-slate-600">
            OD emphasizes training, coaching, and skill-building.
            Employees grow professionally which enhances job satisfaction
            and retention.
          </p>

        </div>

      </div>

      {/* Card 6 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-br from-pink-600 to-rose-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
            ⚡
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Improved Organizational Agility
          </h3>

          <p className="leading-8 text-slate-600">
            OD helps companies adapt quickly to market shifts,
            technology disruptions, and internal challenges,
            making them more resilient and competitive.
          </p>

        </div>

      </div>

    </div>

  </div>

</section> 

   {/* Innovation Banner */}
<section className="relative py-24 overflow-hidden">

  {/* Premium Background */}

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_35%)]" />

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,0.35)]">

      {/* Top Gradient */}

      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

      <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

        {/* Decorative Glow */}

        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">

          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            Organizational Excellence

          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white">

            Boosted Innovation & Productivity

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-slate-300">

            By encouraging collaboration and creativity,
            Organizational Development drives innovation
            while increasing productivity through employee
            empowerment and support.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Impact */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Employee Experience
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Impact on Employees
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Positive Effects */}

      <div className="group overflow-hidden rounded-[38px] bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 p-[1px] shadow-[0_25px_70px_rgba(15,23,42,0.15)] transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[37px] bg-white p-10">

          <div className="mb-8 flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
              ✅
            </div>

            <h3 className="text-3xl font-bold text-emerald-700">
              Positive Effects
            </h3>

          </div>

          <div className="space-y-7">

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Greater Engagement
              </h4>

              <p className="leading-8 text-slate-600">
                Employees feel more connected to their work and the organization’s mission.
              </p>

            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Career Growth
              </h4>

              <p className="leading-8 text-slate-600">
                Access to learning and development opportunities enhances career trajectories.
              </p>

            </div>

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Job Satisfaction
              </h4>

              <p className="leading-8 text-slate-600">
                A supportive and transparent culture leads to happier employees.
              </p>

            </div>

            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Empowerment
              </h4>

              <p className="leading-8 text-slate-600">
                Employees are involved in decision-making and problem-solving.
              </p>

            </div>

            <div className="rounded-2xl border border-lime-100 bg-lime-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Reduced Turnover
              </h4>

              <p className="leading-8 text-slate-600">
                When people feel valued and see growth, they’re less likely to leave.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Potential Challenges */}

      <div className="group overflow-hidden rounded-[38px] bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 p-[1px] shadow-[0_25px_70px_rgba(15,23,42,0.15)] transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[37px] bg-white p-10">

          <div className="mb-8 flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
              ⚠️
            </div>

            <h3 className="text-3xl font-bold text-orange-600">
              Potential Challenges
            </h3>

          </div>

          <div className="space-y-7">

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Change Fatigue
              </h4>

              <p className="leading-8 text-slate-600">
                Too many changes without proper support can overwhelm employees.
              </p>

            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Misalignment
              </h4>

              <p className="leading-8 text-slate-600">
                If OD goals are not clearly communicated, employees may feel confused or disengaged.
              </p>

            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">

              <h4 className="font-bold text-xl text-slate-900 mb-2">
                Resistance to Change
              </h4>

              <p className="leading-8 text-slate-600">
                Without inclusive planning, employees may push back against new systems or structures.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* CTA */}
<section className="relative overflow-hidden py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100">

  {/* Background Effects */}

  <div className="absolute inset-0">

    <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />

    <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-violet-100 blur-3xl opacity-60" />

  </div>

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="group overflow-hidden rounded-[42px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-2">

      <div className="relative overflow-hidden rounded-[41px] bg-white">

        {/* Decorative Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

        <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Organizational Growth

          </span>

          <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-slate-900">

            Build a Workplace Where People & Performance Thrive

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">

            Organizational Development is a strategic approach to creating a
            workplace where employees and business performance grow together.
            If you're thinking about applying OD principles in your organization,
            we can help design a tailored strategy.

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