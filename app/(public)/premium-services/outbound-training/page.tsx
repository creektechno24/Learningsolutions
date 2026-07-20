import Image from 'next/image'
import Link from 'next/link'

export default function OutboundTrainingPage() {
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

          Outbound
          <br />
          Training (OBT)

        </h1>

        <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

          Outbound training is like hitting the refresh button on employee
          development—taking learning out of the boardroom and into the
          real world. It’s experiential, dynamic, and deeply impactful.

        </p>

      </div>

      {/* Right Images */}

      <div className="space-y-8">

        <div className="group rounded-[36px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[35px] bg-white p-4">

            <div className="relative h-[250px] overflow-hidden rounded-[28px] bg-slate-50">

              <Image
                src="/images/premium-services/obt1.webp"
                alt="Outbound Training"
                fill
                priority
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />

            </div>

          </div>

        </div>

        <div className="group rounded-[36px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 p-[1px] shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[35px] bg-white p-4">

            <div className="relative h-[250px] overflow-hidden rounded-[28px] bg-slate-50">

              <Image
                src="/images/premium-services/obt2.webp"
                alt="Outbound Training Activities"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* What is Outbound Training */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="overflow-hidden rounded-[42px] bg-white shadow-[0_35px_90px_rgba(15,23,42,0.12)] border border-slate-200">

      {/* Premium Top Border */}

      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      <div className="relative p-10 lg:p-16">

        {/* Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

        <div className="relative">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Experiential Learning

          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-slate-900">

            What Is Outbound Training?

          </h2>

          <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          <div className="mt-12 space-y-8">

            <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8">

              <p className="text-lg leading-9 text-slate-600">

                Outbound training (OBT) is a form of experiential learning
                conducted outside the traditional work environment, often in
                outdoor or adventure settings. It uses hands-on activities to
                build skills like teamwork, leadership, communication, and
                problem-solving.

              </p>

            </div>

            <div className="rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-8">

              <p className="text-lg leading-9 text-slate-600">

                Think ropes courses, trust falls, obstacle challenges, or even
                building a bicycle for charity—each activity is designed to
                simulate workplace dynamics in a fresh, engaging way.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Impact Section */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Employee Transformation
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Impact of Outbound Training on Employees
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {/* Card 1 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🤝
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Team Bonding & Collaboration
          </h3>

          <p className="leading-8 text-slate-600">
            Activities require interdependence, fostering trust and
            camaraderie. Employees learn to work together under pressure,
            improving team dynamics back at work.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            💬
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Enhanced Communication
          </h3>

          <p className="leading-8 text-slate-600">
            Challenges demand clear, concise communication. Employees
            practice active listening and assertiveness in real-time.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            👑
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Leadership Development
          </h3>

          <p className="leading-8 text-slate-600">
            Individuals step into leadership roles, make decisions, and
            guide teams. Builds confidence and strategic thinking.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            💡
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Problem-Solving & Innovation
          </h3>

          <p className="leading-8 text-slate-600">
            Tasks often involve creative thinking and resourcefulness.
            Employees learn to approach problems from new angles.
          </p>

        </div>

      </div>

      {/* Card 5 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-cyan-600 to-sky-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
            🌟
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Stress Relief & Motivation
          </h3>

          <p className="leading-8 text-slate-600">
            A break from routine boosts morale, energy, and focus.
            Employees return refreshed, engaged, and more committed.
          </p>

        </div>

      </div>

      {/* Card 6 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-pink-600 to-rose-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
            ❤️
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Retention & Loyalty
          </h3>

          <p className="leading-8 text-slate-600">
            When employees feel invested in, they’re more likely to stay.
            Outbound training signals that the company values growth and
            well-being.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

    {/* Highlight Banner */}
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

            Experiential Learning

          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white">

            Strategic Investment in Human Potential

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-slate-300">

            Outbound training is more than a day in the sun—it builds
            stronger teams, sharper minds, and more resilient leaders.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

   {/* Final Thought */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="overflow-hidden rounded-[42px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_30px_80px_rgba(15,23,42,0.18)]">

      <div className="relative rounded-[41px] bg-white overflow-hidden">

        {/* Decorative Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

        <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Final Thought

          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-slate-900">

            Final Thought

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">

            Outbound training is more than a day in the sun—it’s a strategic
            investment in human potential. It builds stronger teams, sharper
            minds, and more resilient leaders.

          </p>

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

            Let's Get Started

          </span>

          <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-slate-900">

            Build Stronger Teams Through Experience

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">

            If you’re considering designing an outbound program, we can help
            you tailor it to your team’s goals and culture. Ready to sketch
            out a plan? Call us today for more details.

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