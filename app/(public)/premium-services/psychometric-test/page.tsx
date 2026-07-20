import Image from 'next/image'
import Link from 'next/link'

export default function PsychometricTestPage() {
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

      {/* Left Content */}

      <div>

        <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-300 backdrop-blur-xl">

          Premium Service

        </span>

        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-white">

          Psychometric
          <br />

          Test

        </h1>

        <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400" />

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

          Psychometric Testing is one of the most insightful tools
          organizations use to understand, develop, and optimize
          their workforce.

        </p>

      </div>

      {/* Right Image */}

      <div>

        <div className="group relative overflow-hidden rounded-[38px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[37px] bg-white p-5">

            <div className="relative h-[520px] overflow-hidden rounded-[30px] bg-slate-50">

              <Image
                src="/images/premium-services/psychometric-test.webp"
                alt="Psychometric Test"
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
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

  {/* Background Glow */}

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="overflow-hidden rounded-[42px] bg-white shadow-[0_35px_90px_rgba(15,23,42,0.12)] border border-slate-200">

      {/* Premium Top Border */}

      <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      {/* Decorative Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

      <div className="relative p-10 lg:p-16">

        <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

          Scientific Assessments

        </span>

        <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-slate-900">

          Introduction to Psychometric Tests

        </h2>

        <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

        <div className="mt-12 space-y-8">

          <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 transition-all duration-300 hover:shadow-lg">

            <p className="text-lg leading-9 text-slate-600">

              Psychometric tests are standardized scientific assessments
              designed to measure an individual’s mental capabilities,
              personality traits, emotional intelligence, and behavioral style.

            </p>

          </div>

          <div className="rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-8 transition-all duration-300 hover:shadow-lg">

            <p className="text-lg leading-9 text-slate-600">

              These tests go beyond resumes and interviews by offering
              objective insights into how a person thinks, reacts,
              and fits into a role or team.

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      
      {/* Common Uses */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Practical Applications
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Common Uses of Psychometric Tests
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

      {/* Card 1 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="flex h-full flex-col items-center rounded-[31px] bg-white p-8 text-center">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            👥
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Recruitment and Selection
          </h3>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="flex h-full flex-col items-center rounded-[31px] bg-white p-8 text-center">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            👑
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Leadership Development
          </h3>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="flex h-full flex-col items-center rounded-[31px] bg-white p-8 text-center">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            🤝
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Team Building
          </h3>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="flex h-full flex-col items-center rounded-[31px] bg-white p-8 text-center">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            🎯
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Career Planning
          </h3>

        </div>

      </div>

      {/* Card 5 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-cyan-600 to-sky-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="flex h-full flex-col items-center rounded-[31px] bg-white p-8 text-center">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
            📈
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Succession Management
          </h3>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Types of Psychometric Tests */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Assessment Categories
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Types of Psychometric Tests
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Card 1 */}

      <div className="group rounded-[36px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🧠
          </div>

          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Aptitude Tests
          </h3>

          <p className="leading-8 text-slate-600">
            Measure logical reasoning, numerical ability,
            verbal skills, abstract thinking,
            and problem-solving capabilities.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[36px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            👤
          </div>

          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Personality Tests
          </h3>

          <p className="leading-8 text-slate-600">
            Assess behavioural preferences,
            communication style,
            work habits,
            and interpersonal characteristics.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[36px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            ❤️
          </div>

          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Emotional Intelligence Tests
          </h3>

          <p className="leading-8 text-slate-600">
            Evaluate self-awareness,
            empathy,
            emotional regulation,
            and relationship management.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[36px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            🎯
          </div>

          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Behavioural Assessments
          </h3>

          <p className="leading-8 text-slate-600">
            Identify behavioural tendencies,
            workplace responses,
            motivation,
            and decision-making patterns.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      

  {/* Impact of Psychometric Tests */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Employee Development
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Impact of Psychometric Tests
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

    </div>

    <div className="grid gap-8 md:grid-cols-2">

      {/* Card 1 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🎯
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Better Job Fit
          </h3>

          <p className="leading-8 text-slate-600">
            Employees are placed in roles that align with their natural
            strengths and preferences, leading to higher performance
            and satisfaction.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            📈
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Personalized Development
          </h3>

          <p className="leading-8 text-slate-600">
            Test results help identify learning needs,
            enabling tailored coaching, mentoring,
            and training plans.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            🤝
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Improved Team Dynamics
          </h3>

          <p className="leading-8 text-slate-600">
            Understanding personality differences helps
            employees collaborate more effectively
            and resolve conflicts constructively.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            🚀
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Stronger Leadership Pipeline
          </h3>

          <p className="leading-8 text-slate-600">
            High-potential employees can be identified
            early and prepared for future leadership
            responsibilities.
          </p>

        </div>

      </div>

      {/* Card 5 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-cyan-600 to-sky-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
            💡
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Increased Self-Awareness
          </h3>

          <p className="leading-8 text-slate-600">
            Employees gain a deeper understanding
            of their own behaviour, strengths,
            and areas for improvement.
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
            Greater Employee Engagement
          </h3>

          <p className="leading-8 text-slate-600">
            Employees feel understood and supported,
            improving motivation, commitment,
            and long-term retention.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

    {/* Highlight Banner */}
<section className="relative py-24 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_35%)]" />

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,0.35)]">

      <div className="h-2 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

      <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">

          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            Scientific Assessment

          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white">

            Better Decisions Through Better Insights

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-slate-300">

            Psychometric testing enables organizations to make
            smarter hiring decisions, develop stronger leaders,
            improve teamwork, and unlock employee potential
            through objective insights.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

    {/* CTA */}
<section className="relative overflow-hidden py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="absolute inset-0">

    <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />

    <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-violet-100 blur-3xl opacity-60" />

  </div>

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="group overflow-hidden rounded-[42px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-2">

      <div className="relative overflow-hidden rounded-[41px] bg-white">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

        <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Let's Get Started

          </span>

          <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-slate-900">

            Discover the Right Talent with Confidence

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">

            Whether you're hiring, developing leaders,
            or building stronger teams,
            psychometric testing provides valuable insights
            that support smarter people decisions.
            Contact us today to learn more.

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
                    d="M9 5l7 7-7 7" />
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