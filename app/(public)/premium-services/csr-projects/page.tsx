import Image from 'next/image'
import Link from 'next/link'

export default function CSRProjectsPage() {
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

          CSR
          <br />
          Projects

        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

          Corporate Social Responsibility (CSR) programs are strategic
          initiatives that companies undertake to contribute positively
          to society, the environment, and the broader community beyond
          their core business operations.

        </p>

      </div>

      {/* Right */}

      <div>

        <div className="group relative overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">

          <div className="rounded-[35px] bg-white p-5">

            <div className="relative h-[500px] overflow-hidden rounded-[28px]">

              <Image
                src="/images/premium-services/CSR.webp"
                alt="CSR Projects"
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

     {/* What Are CSR Programs */}
<section className="relative -mt-16 pb-24 z-20">

  <div className="container mx-auto max-w-7xl px-6">

    <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)]">

      {/* Premium Top Border */}

      <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />

      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

      <div className="relative p-10 lg:p-16">

        <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          CSR Foundation
        </span>

        <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-slate-900">
          What Are CSR Programs?
        </h2>

        <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

        <p className="mt-10 text-lg leading-9 text-slate-600">

          CSR programs are voluntary actions taken by businesses to support
          social causes, promote environmental sustainability, uphold ethical
          labor practices and human rights, and engage with communities through
          philanthropy, volunteering, and infrastructure development.

        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Card 1 */}

          <div className="group overflow-hidden rounded-[30px] bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-[29px] bg-white p-8">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🌍
              </div>

              <p className="text-lg leading-8 text-slate-700">
                Support social causes such as education, healthcare and poverty alleviation.
              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="group overflow-hidden rounded-[30px] bg-gradient-to-r from-emerald-600 to-teal-600 p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-[29px] bg-white p-8">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                🌱
              </div>

              <p className="text-lg leading-8 text-slate-700">
                Promote environmental sustainability through responsible initiatives.
              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="group overflow-hidden rounded-[30px] bg-gradient-to-r from-violet-600 to-fuchsia-600 p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-[29px] bg-white p-8">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
                ⚖️
              </div>

              <p className="text-lg leading-8 text-slate-700">
                Uphold ethical labor practices and human rights.
              </p>

            </div>

          </div>

          {/* Card 4 */}

          <div className="group overflow-hidden rounded-[30px] bg-gradient-to-r from-orange-500 to-red-500 p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-[29px] bg-white p-8">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                🤝
              </div>

              <p className="text-lg leading-8 text-slate-700">
                Engage communities through volunteering and development projects.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Benefits */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-16">

      <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
        Business Value
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        How Organizations Benefit from CSR
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {/* Card 1 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            ⭐
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Stronger Brand Reputation
          </h3>

          <p className="leading-8 text-slate-600">
            CSR builds trust, credibility and customer loyalty through
            sustainability and ethical initiatives.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            👥
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Employee Engagement & Retention
          </h3>

          <p className="leading-8 text-slate-600">
            Employees feel more connected to organizations that reflect
            their values and purpose.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            🛡️
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Risk Management & Compliance
          </h3>

          <p className="leading-8 text-slate-600">
            Ethical and environmental compliance helps reduce risks and
            protects reputation.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            📈
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Customer Loyalty & Revenue Growth
          </h3>

          <p className="leading-8 text-slate-600">
            Consumers increasingly support socially responsible brands,
            helping drive growth.
          </p>

        </div>

      </div>

      {/* Card 5 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-cyan-600 to-sky-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 xl:col-span-1">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
            🌍
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-5">
            Community Development
          </h3>

          <p className="leading-8 text-slate-600">
            CSR initiatives improve education, healthcare and infrastructure
            in local communities.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Types of CSR */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-16">

      <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
        CSR Categories
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Types of CSR Projects
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Environmental Responsibility */}

      <div className="group overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            🌱
          </div>

          <h3 className="mb-6 text-3xl font-bold text-slate-900">
            Environmental Responsibility
          </h3>

          <p className="leading-9 text-slate-600">
            Focuses on sustainability and reducing ecological impact through
            tree plantation drives, renewable energy adoption, recycling,
            water conservation and carbon footprint reduction.
          </p>

        </div>

      </div>

      {/* Ethical Responsibility */}

      <div className="group overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            ⚖️
          </div>

          <h3 className="mb-6 text-3xl font-bold text-slate-900">
            Ethical Responsibility
          </h3>

          <p className="leading-9 text-slate-600">
            Encourages fair labor practices, safe working conditions,
            anti-corruption measures, compliance and DEI programs.
          </p>

        </div>

      </div>

      {/* Philanthropic Responsibility */}

      <div className="group overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            ❤️
          </div>

          <h3 className="mb-6 text-3xl font-bold text-slate-900">
            Philanthropic Responsibility
          </h3>

          <p className="leading-9 text-slate-600">
            Supports charitable giving, scholarships, NGO partnerships,
            disaster relief initiatives and volunteering programs.
          </p>

        </div>

      </div>

      {/* Economic Responsibility */}

      <div className="group overflow-hidden rounded-[36px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[35px] bg-white p-10">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            💼
          </div>

          <h3 className="mb-6 text-3xl font-bold text-slate-900">
            Economic Responsibility
          </h3>

          <p className="leading-9 text-slate-600">
            Focuses on skill development, entrepreneurship support,
            infrastructure projects and financial inclusion.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Training Company Role */}
<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%)]" />

  <div className="container mx-auto max-w-7xl px-6 relative">

    <div className="text-center mb-16">

      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        CSR Enablement
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Role of Training Companies in Driving CSR Projects
      </h2>

      <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {/* Card 1 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🎓
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Skill Development & Capacity Building
          </h3>

          <p className="leading-8 text-slate-600">
            Deliver vocational training, digital literacy and soft-skills
            programs to underserved communities.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            📘
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            CSR Strategy & Implementation Training
          </h3>

          <p className="leading-8 text-slate-600">
            Help organizations design and execute sustainable CSR initiatives.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">
            📊
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Monitoring & Impact Assessment
          </h3>

          <p className="leading-8 text-slate-600">
            Train teams to measure community impact and environmental outcomes.
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-orange-500 to-red-600 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
            🤝
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Stakeholder Engagement Workshops
          </h3>

          <p className="leading-8 text-slate-600">
            Facilitate collaboration between companies, NGOs and communities.
          </p>

        </div>

      </div>

      {/* Card 5 */}

      <div className="group rounded-[34px] bg-gradient-to-br from-cyan-600 to-sky-700 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 xl:col-span-1">

        <div className="h-full rounded-[33px] bg-white p-8">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
            🧩
          </div>

          <h3 className="mb-5 text-2xl font-bold text-slate-900">
            Customized CSR Learning Modules
          </h3>

          <p className="leading-8 text-slate-600">
            Create industry-specific CSR learning solutions aligned with business goals.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Why Our Role Matters */}
<section className="relative py-24 overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_35%)]" />

  <div className="relative container mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_35px_100px_rgba(0,0,0,0.35)]">

      {/* Premium Top Border */}

      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />

      <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

        {/* Glow */}

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">

          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            CSR Leadership

          </span>

          <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white">

            Why Our Role Matters

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-slate-300">

            Creek Learning Solutions acts as the bridge between corporate intent
            and community impact by designing inclusive and scalable programs,
            ensuring quality delivery and creating long-term value for both
            businesses and society.

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

    <div className="group overflow-hidden rounded-[42px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-[0_35px_90px_rgba(15,23,42,0.15)] transition-all duration-500 hover:-translate-y-2">

      <div className="relative rounded-[41px] bg-white overflow-hidden">

        {/* Decorative Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

        <div className="relative px-10 py-16 lg:px-20 lg:py-20 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            Let's Build Together

          </span>

          <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-slate-900">

            Let's Build Meaningful Impact Together

          </h2>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">

            Would you like help crafting a CSR training proposal or designing
            a curriculum for a specific initiative for your organization?
            We are just a call away.

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