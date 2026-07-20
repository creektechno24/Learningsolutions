import Image from 'next/image'

export default function AssessmentDevelopmentCentrePage() {
  return (
    <main className="min-h-screen bg-slate-50">

{/* Hero Section */}
<section className="relative min-h-[720px] overflow-hidden">

  <Image
    src="/images/premium-services/adc.webp"
    alt="Assessment Development Centre"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-blue-900/40" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.35),transparent_35%)]" />

  <div className="relative z-10 container mx-auto px-6 h-[720px] flex items-center">

    <div className="max-w-4xl">

      <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-blue-300 font-medium backdrop-blur-xl">
        Premium Corporate Solutions
      </span>

      <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white leading-tight">
        Assessment &
        <br />
        Development Centre
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
        Build a structured talent assessment ecosystem that helps identify
        high-potential employees, strengthen leadership pipelines and improve
        workforce capability through objective evaluation.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4">
          <p className="text-3xl font-bold text-white">
            100%
          </p>

          <p className="text-slate-300 text-sm mt-1">
            Objective Evaluation
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4">
          <p className="text-3xl font-bold text-white">
            360°
          </p>

          <p className="text-slate-300 text-sm mt-1">
            Competency Assessment
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4">
          <p className="text-3xl font-bold text-white">
            Future Ready
          </p>

          <p className="text-slate-300 text-sm mt-1">
            Leadership Pipeline
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

     {/* Setting Up ADC */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    {/* Heading */}

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
        Assessment Process
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Setting Up an Assessment & Development Center
      </h2>

    </div>

    <div className="space-y-10">

      {/* STEP 1 */}

      <div className="group rounded-[34px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="rounded-[33px] bg-white p-10">

          <div className="flex items-center gap-5 mb-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl font-bold text-white shadow-lg">
              01
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Define Objectives
            </h3>

          </div>

          <ul className="space-y-5 text-slate-600 leading-8">

            <li>
              • Clarify whether the ADC is for recruitment, leadership development, succession planning, or performance evaluation.
            </li>

            <li>
              • Align the center's goals with organizational strategy.
            </li>

          </ul>

        </div>

      </div>

      {/* STEP 2 */}

      <div className="group rounded-[34px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="rounded-[33px] bg-white p-10">

          <div className="flex items-center gap-5 mb-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-2xl font-bold text-white shadow-lg">
              02
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Identify Competencies
            </h3>

          </div>

          <ul className="space-y-5 text-slate-600 leading-8">

            <li>
              • Develop a competency framework based on job roles and organizational values.
            </li>

            <li>
              • Include behavioral, cognitive, and technical competencies.
            </li>

          </ul>

        </div>

      </div>

      {/* STEP 3 */}

      <div className="group rounded-[34px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="rounded-[33px] bg-white p-10">

          <div className="flex items-center gap-5 mb-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-2xl font-bold text-white shadow-lg">
              03
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Design Assessment Tools
            </h3>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
              Group exercises: Assess teamwork and leadership.
            </div>

            <div className="rounded-2xl bg-violet-50 border border-violet-100 p-6">
              Case studies: Test analytical thinking and decision-making.
            </div>

            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
              Role plays: Evaluate interpersonal and negotiation skills.
            </div>

            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6">
              Psychometric tests: Measure personality traits and cognitive ability.
            </div>

            <div className="rounded-2xl bg-slate-100 border p-6 md:col-span-2">
              Interviews: Provide deeper insights into motivation and fit.
            </div>

          </div>

        </div>

      </div>

      {/* STEP 4 */}

      <div className="group rounded-[34px] bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="rounded-[33px] bg-white p-10">

          <div className="flex items-center gap-5 mb-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-2xl font-bold text-white shadow-lg">
              04
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Train Assessors
            </h3>

          </div>

          <ul className="space-y-5 text-slate-600 leading-8">

            <li>
              • Select internal or external assessors with expertise in behavioral evaluation.
            </li>

            <li>
              • Train them to ensure consistency, fairness, and objectivity.
            </li>

          </ul>

        </div>

      </div>

      {/* STEP 5 */}

      <div className="group rounded-[34px] bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="rounded-[33px] bg-white p-10">

          <div className="flex items-center gap-5 mb-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-2xl font-bold text-white shadow-lg">
              05
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Pilot the Program
            </h3>

          </div>

          <ul className="space-y-5 text-slate-600 leading-8">

            <li>
              • Run a small-scale trial to refine tools and logistics.
            </li>

            <li>
              • Gather feedback to improve the experience and accuracy.
            </li>

          </ul>

        </div>

      </div>

      {/* STEP 6 */}

      <div className="group rounded-[34px] bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="rounded-[33px] bg-white p-10">

          <div className="flex items-center gap-5 mb-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 text-2xl font-bold text-white shadow-lg">
              06
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Implement and Monitor
            </h3>

          </div>

          <ul className="space-y-5 text-slate-600 leading-8">

            <li>
              • Roll out the ADC across relevant departments or roles.
            </li>

            <li>
              • Use structured scoring rubrics and feedback mechanisms.
            </li>

            <li>
              • Continuously monitor outcomes and refine the process.
            </li>

          </ul>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Benefits */}
<section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_35%)]" />

  <div className="container mx-auto px-6 max-w-7xl relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
        Key Advantages
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Benefits of an Assessment & Development Center
      </h2>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        Discover how Assessment & Development Centers create value for both
        organizations and employees through structured talent evaluation and
        development.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Organization */}

      <div className="group rounded-[36px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="relative h-full rounded-[35px] bg-white p-10 overflow-hidden">

          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">

            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-3xl shadow-xl">
              🏢
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              For the Organization
            </h3>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                <p className="font-semibold text-slate-900">
                  Objective decision-making
                </p>

                <p className="mt-2 text-slate-600">
                  Reduces bias in hiring and promotions.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 border border-violet-100 p-5">
                <p className="font-semibold text-slate-900">
                  Better talent identification
                </p>

                <p className="mt-2 text-slate-600">
                  Spot high-potential employees early.
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                <p className="font-semibold text-slate-900">
                  Improved workforce planning
                </p>

                <p className="mt-2 text-slate-600">
                  Aligns talent with future business needs.
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                <p className="font-semibold text-slate-900">
                  Enhanced leadership pipeline
                </p>

                <p className="mt-2 text-slate-600">
                  Builds a robust succession strategy.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Employees */}

      <div className="group rounded-[36px] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="relative h-full rounded-[35px] bg-white p-10 overflow-hidden">

          <div className="absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative">

            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-3xl shadow-xl">
              👥
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              For Employees
            </h3>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
                <p className="font-semibold text-slate-900">
                  Fair evaluation
                </p>

                <p className="mt-2 text-slate-600">
                  Transparent and standardized assessments.
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                <p className="font-semibold text-slate-900">
                  Personal development
                </p>

                <p className="mt-2 text-slate-600">
                  Insightful feedback helps individuals grow.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                <p className="font-semibold text-slate-900">
                  Increased engagement
                </p>

                <p className="mt-2 text-slate-600">
                  Employees feel valued and invested in.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 border border-violet-100 p-5">
                <p className="font-semibold text-slate-900">
                  Career clarity
                </p>

                <p className="mt-2 text-slate-600">
                  Helps employees understand their strengths and areas for improvement.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    {/* Employee Impact */}
<section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_35%)]" />

  <div className="container mx-auto px-6 max-w-7xl relative">

    <div className="text-center mb-20">

      <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
        Employee Growth
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Impact on Employees
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
        Assessment & Development Centers empower employees through objective
        feedback, career growth opportunities and continuous professional
        development.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {/* Card 1 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="h-full rounded-[31px] bg-white p-8">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🚀
          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">
            Boosts Morale
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Employees appreciate structured development opportunities.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="h-full rounded-[31px] bg-white p-8">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            🎯
          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">
            Self Awareness
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Feedback fosters introspection and continuous growth.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="h-full rounded-[31px] bg-white p-8">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            📈
          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">
            Internal Mobility
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Employees are more likely to explore new roles.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[32px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="h-full rounded-[31px] bg-white p-8">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            🌟
          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">
            Strong Culture
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Builds a performance-driven and learning-oriented environment.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


{/* CTA */}
<section className="relative overflow-hidden py-28">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-900 to-indigo-900" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.35),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.25),transparent_35%)]" />

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/10 p-16 text-center backdrop-blur-xl">

      <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 font-medium text-blue-300">
        Let's Build Future Leaders Together
      </span>

      <h2 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-white">
        Ready to Build a High-Performing Workforce?
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
        Should you be more interested to know more write to us today.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <a
          href="/contact"
          className="rounded-2xl bg-white px-10 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Contact Us
        </a>

        <a
          href="/contact"
          className="rounded-2xl border border-white/20 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
        >
          Request Consultation
        </a>

      </div>

      {/* Stats */}

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

          <h3 className="text-4xl font-bold text-white">
            100+
          </h3>

          <p className="mt-2 text-slate-300">
            Corporate Clients
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

          <h3 className="text-4xl font-bold text-white">
            25K+
          </h3>

          <p className="mt-2 text-slate-300">
            Professionals Trained
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

          <h3 className="text-4xl font-bold text-white">
            500+
          </h3>

          <p className="mt-2 text-slate-300">
            Learning Programs
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
     

    </main>
  )
}