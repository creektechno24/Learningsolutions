import Image from 'next/image'
import Link from 'next/link'

export default function BootCampsTTTPage() {
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

          Boot Camps &
          <br />
          Train-the-Trainer
          <br />
          (TTT) Programs

        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

          Boot Camps and Train-the-Trainer (TTT) programs are two powerhouse
          formats in corporate learning. They’re designed not just to transfer
          knowledge, but to ignite capability, confidence, and culture.

        </p>

      </div>

      {/* Right */}

      <div className="space-y-8">

        <div className="group relative overflow-hidden rounded-[34px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[33px] bg-white p-5">

            <div className="relative h-[280px] overflow-hidden rounded-[24px]">

              <Image
                src="/images/premium-services/bt-1.webp"
                alt="Boot Camps"
                fill
                priority
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />

            </div>

          </div>

        </div>

        <div className="group relative overflow-hidden rounded-[34px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[33px] bg-white p-5">

            <div className="relative h-[280px] overflow-hidden rounded-[24px]">

              <Image
                src="/images/premium-services/bt-2.webp"
                alt="TTT Programs"
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

  {/* Introduction */}
<section className="relative -mt-16 pb-24 z-20">

  <div className="container mx-auto px-6">

    <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

      {/* Decorative Background */}

      <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet-100 blur-3xl opacity-60" />

      <div className="relative p-10 lg:p-16">

        <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

          Premium Service

        </span>

        <h2 className="mt-8 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">

          Boot Camps & Train-the-Trainer (TTT) Programs

        </h2>

        <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

        <p className="mt-10 max-w-5xl text-lg leading-9 text-slate-600">

          Boot Camps and Train-the-Trainer (TTT) programs are two powerhouse
          formats in corporate learning. They’re designed not just to transfer
          knowledge, but to ignite capability, confidence, and culture.

        </p>

      </div>

    </div>

  </div>

</section>

    {/* Boot Camps */}
<section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="mb-16">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Corporate Learning
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Boot Camps
      </h2>

      <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {/* Card 1 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

            <span className="text-3xl">🚀</span>

          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Intensive Learning
          </h3>

          <p className="leading-8 text-slate-600">
            Designed to rapidly build knowledge, practical skills and confidence
            through immersive, focused learning experiences.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-r from-violet-600 to-fuchsia-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">

            <span className="text-3xl">🎯</span>

          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Practical Application
          </h3>

          <p className="leading-8 text-slate-600">
            Participants apply concepts immediately through real-world scenarios,
            collaborative activities and experiential exercises.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-r from-emerald-600 to-teal-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">

            <span className="text-3xl">📈</span>

          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Accelerated Growth
          </h3>

          <p className="leading-8 text-slate-600">
            Helps individuals quickly develop competencies that directly impact
            business performance and career progression.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group overflow-hidden rounded-[34px] bg-gradient-to-r from-orange-500 to-red-500 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

            <span className="text-3xl">🏆</span>

          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Business Outcomes
          </h3>

          <p className="leading-8 text-slate-600">
            Focused learning initiatives that improve capability, productivity
            and measurable organizational outcomes.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

    {/* TTT Programs */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="group overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-[1px] shadow-[0_25px_80px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2">

      <div className="relative rounded-[39px] bg-white overflow-hidden">

        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-100 blur-3xl opacity-60" />

        <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-blue-100 blur-3xl opacity-60" />

        <div className="relative p-10 lg:p-14">

          <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            Corporate Learning
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Train-the-Trainer (TTT) Programs
          </h2>

          <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />

          <p className="mt-10 text-lg leading-9 text-slate-600">
            TTT programs are designed to equip internal trainers,
            team leads, or subject matter experts with the skills
            to deliver training effectively. It’s not just about
            knowing the content—it’s about mastering facilitation,
            engagement, and instructional design.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="group rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-2xl text-white">
                🎓
              </div>

              <p className="text-lg font-medium leading-8 text-slate-700">
                Build a pool of certified internal trainers
              </p>

            </div>

            <div className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                📚
              </div>

              <p className="text-lg font-medium leading-8 text-slate-700">
                Ensure consistency and scalability of training
              </p>

            </div>

            <div className="group rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 text-2xl text-white">
                🚀
              </div>

              <p className="text-lg font-medium leading-8 text-slate-700">
                Empower leaders to coach and mentor others
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Impact */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-16">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Employee Development
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Impact on Employees
      </h2>

    </div>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* Boot Camp Impact */}

      <div className="group overflow-hidden rounded-[38px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-[1px] shadow-[0_25px_70px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[37px] bg-white p-10">

          <div className="mb-8 flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white">
              🚀
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Boot Camp Impact
            </h3>

          </div>

          <div className="space-y-6">

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <strong className="text-slate-900">
                Rapid Skill Acquisition:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Employees gain practical, job-ready skills in record time.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
              <strong className="text-slate-900">
                Confidence Boost:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Immersive learning builds self-assurance and readiness.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">
              <strong className="text-slate-900">
                Team Cohesion:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Cross-functional boot camps foster collaboration and shared purpose.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
              <strong className="text-slate-900">
                Mindset Shift:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Employees adopt a proactive, agile approach to challenges.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* TTT Impact */}

      <div className="group overflow-hidden rounded-[38px] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-[1px] shadow-[0_25px_70px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[37px] bg-white p-10">

          <div className="mb-8 flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-3xl text-white">
              🎓
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              TTT Program Impact
            </h3>

          </div>

          <div className="space-y-6">

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <strong className="text-slate-900">
                Leadership Development:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Trainers evolve into mentors and role models.
              </p>
            </div>

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
              <strong className="text-slate-900">
                Knowledge Retention:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Peer-led training improves learning stickiness.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
              <strong className="text-slate-900">
                Cultural Multiplication:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Trainers become ambassadors of company values and standards.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <strong className="text-slate-900">
                Scalable Learning:
              </strong>
              <p className="mt-2 leading-8 text-slate-600">
                Organizations reduce dependency on external trainers and scale faster.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Statistics */}
<section className="relative py-24 overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_35%)]" />

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,0.35)]">

      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

      <div className="p-12 lg:p-16 text-center">

        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
          Learning Impact
        </span>

        <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white">
          Learning Ecosystem Impact
        </h2>

        <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

        <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-slate-300">
          Organizations with strong internal training ecosystems report
          30–50% higher engagement and retention rates.
        </p>

      </div>

    </div>

  </div>

</section>

    {/* Certificate Image */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-16">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Recognition
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Certification
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

    </div>

    <div className="group relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_30px_90px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-2">

      <div className="relative overflow-hidden rounded-[39px] bg-white p-6">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet-100 blur-3xl opacity-60" />

        <div className="relative overflow-hidden rounded-[28px] bg-slate-50">

          <div className="relative h-[700px]">

            <Image
              src="/images/premium-services/certificate-creek.webp"
              alt="Certification"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* CTA */}
<section className="relative overflow-hidden py-28">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />

  <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

  <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_35px_100px_rgba(0,0,0,0.35)]">

      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

      <div className="px-10 py-16 lg:px-20 lg:py-20 text-center">

        <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
          Build Future-Ready Teams
        </h2>

        <div className="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

        <p className="mx-auto mt-10 max-w-4xl text-lg lg:text-xl leading-9 text-slate-300">

          If you're planning to roll out either of these programs,
          we would be thrilled to help you design a customized roadmap
          or draft sample modules tailored to your organization.

        </p>

        <div className="mt-14">

          <Link href="/contact">

            <button className="group rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-12 py-5 text-lg font-semibold text-white shadow-[0_20px_50px_rgba(59,130,246,0.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-105">

              <span className="flex items-center justify-center gap-3">

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

              </span>

            </button>

          </Link>

        </div>

      </div>

    </div>

  </div>

</section>

    </main>
  )
}