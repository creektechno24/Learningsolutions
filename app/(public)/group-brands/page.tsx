import Link from 'next/link'
import {
  ArrowUpRight,
  Laptop2,
  GraduationCap,
  Users,
  TrendingUp,
} from "lucide-react";

export default function GroupBrandsPage() {
  const brands = [
    {
      title: 'Creek Techno Solutions Pvt. Ltd.',
      category: 'Parent Company',
      website: 'https://www.creektechno.com',
      description:
        'Technology consulting, software solutions, digital transformation and enterprise business services.',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'The Trainers Fraternity',
      category: 'Trainers Job Portal',
      website: 'https://www.thetrainersfraternity.com',
      description:
        'A dedicated platform connecting trainers, facilitators, coaches and learning professionals with organizations.',
      color: 'from-violet-600 to-fuchsia-500',
    },
    {
      title: 'Creek Collaborations',
      category: 'Manpower Placement Services',
      website: 'https://www.creekcollaborations.com',
      description:
        'Recruitment, staffing and workforce solutions helping organizations build high-performing teams.',
      color: 'from-emerald-600 to-green-500',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
<section className="relative overflow-hidden bg-[#020817] py-32">

  {/* Background */}
  <div className="absolute inset-0">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_35%)]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.20),transparent_40%)]" />

    <div className="absolute -top-32 left-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[140px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="relative z-10 container mx-auto px-6">

    <div className="max-w-5xl mx-auto text-center">

      <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-white/10 backdrop-blur-xl px-6 py-3 text-sm font-semibold tracking-wide text-blue-300 shadow-lg">
        Our Business Ecosystem
      </span>

      <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">

        Group Brands

      </h1>

      <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-slate-300">

        Creek Learning Solutions is supported by a strong ecosystem of
        specialized businesses focused on technology, talent development,
        recruitment and professional growth.

      </p>

    </div>

    {/* Statistics */}
    <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <div className="group rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-2xl">
          🏢
        </div>

        <h3 className="text-4xl font-bold text-white">3</h3>

        <p className="mt-2 text-slate-300">
          Group Brands
        </p>

      </div>

      <div className="group rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white text-2xl">
          🤝
        </div>

        <h3 className="text-4xl font-bold text-white">100+</h3>

        <p className="mt-2 text-slate-300">
          Corporate Clients
        </p>

      </div>

      <div className="group rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 text-white text-2xl">
          🌍
        </div>

        <h3 className="text-4xl font-bold text-white">25K+</h3>

        <p className="mt-2 text-slate-300">
          Professionals Impacted
        </p>

      </div>

      <div className="group rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 text-white text-2xl">
          🚀
        </div>

        <h3 className="text-4xl font-bold text-white">500+</h3>

        <p className="mt-2 text-slate-300">
          Learning Programs
        </p>

      </div>

    </div>

  </div>

</section>

    {/* ========================= BRANDS SECTION ========================= */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

  {/* Background Decorations */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[140px] opacity-60" />

    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-100 blur-[140px] opacity-70" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="container relative z-10 mx-auto px-6">

    {/* Heading */}

    <div className="max-w-3xl mx-auto text-center mb-20">

      <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-6 py-2 font-semibold text-blue-700">

        Our Brands

      </span>

      <h2 className="mt-7 text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">

        Driving Excellence Across Domains

      </h2>

      <p className="mt-7 text-lg leading-8 text-slate-600">

        Together our brands create a comprehensive ecosystem that supports
        organizations through technology, learning, talent acquisition and
        workforce transformation.

      </p>

    </div>

    {/* Cards */}

    <div className="grid gap-10 lg:grid-cols-3">

      {brands.map((brand) => (

        <div
          key={brand.title}
          className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_35px_90px_rgba(37,99,235,0.18)]"
        >

          {/* Gradient Strip */}

          <div className={`h-2 w-full bg-gradient-to-r ${brand.color}`} />

          {/* Glow */}

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative p-10">

            {/* Logo Circle */}

            <div
              className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${brand.color} text-3xl font-bold text-white shadow-lg`}
            >

              {brand.title.charAt(0)}

            </div>

            {/* Category */}

            <span className="mt-8 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">

              {brand.category}

            </span>

            {/* Title */}

            <h3 className="mt-6 text-3xl font-bold leading-tight text-slate-900">

              {brand.title}

            </h3>

            {/* Description */}

            <p className="mt-6 leading-8 text-slate-600">

              {brand.description}

            </p>

            {/* Website */}

            <div className="mt-10">

              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-xl"
              >

                Visit Website

                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={20}
                />

              </a>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Why Our Ecosystem */}
    {/* ========================= WHY OUR ECOSYSTEM ========================= */}
<section className="relative py-28 overflow-hidden bg-white">

  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-50 blur-[150px]" />

    <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-indigo-50 blur-[120px]" />

  </div>

  <div className="relative z-10 container mx-auto px-6">

    {/* Header */}

    <div className="max-w-3xl mx-auto text-center mb-20">

      <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-6 py-2 font-semibold text-blue-700">

        Our Strength

      </span>

      <h2 className="mt-7 text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">

        Why Our Ecosystem Matters

      </h2>

      <p className="mt-7 text-lg leading-8 text-slate-600">

        Our integrated ecosystem enables organizations to accelerate innovation,
        develop talent, strengthen workforce capabilities and achieve sustainable
        business growth.

      </p>

    </div>

    {/* Feature Cards */}

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {/* Technology */}

      <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-9 shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_35px_90px_rgba(37,99,235,0.15)]">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">

            <Laptop2 size={30} />

          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">

            Technology

          </h3>

          <p className="mt-5 leading-8 text-slate-600">

            Modern business and digital transformation solutions.

          </p>

        </div>

      </div>

      {/* Learning */}

      <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-9 shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-3 hover:border-indigo-200 hover:shadow-[0_35px_90px_rgba(99,102,241,0.15)]">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-lg">

            <GraduationCap size={30} />

          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">

            Learning

          </h3>

          <p className="mt-5 leading-8 text-slate-600">

            Corporate training and capability development programs.

          </p>

        </div>

      </div>

      {/* Talent */}

      <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-9 shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-3 hover:border-emerald-200 hover:shadow-[0_35px_90px_rgba(16,185,129,0.15)]">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 text-white shadow-lg">

            <Users size={30} />

          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">

            Talent

          </h3>

          <p className="mt-5 leading-8 text-slate-600">

            Recruitment, staffing and workforce solutions.

          </p>

        </div>

      </div>

      {/* Growth */}

      <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-9 shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-3 hover:border-orange-200 hover:shadow-[0_35px_90px_rgba(249,115,22,0.15)]">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">

            <TrendingUp size={30} />

          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">

            Growth

          </h3>

          <p className="mt-5 leading-8 text-slate-600">

            End-to-end support for organizational success.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ========================= CTA SECTION ========================= */}
<section className="relative overflow-hidden py-28 bg-white">

  {/* Background Effects */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[140px] opacity-70" />

    <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-100 blur-[140px] opacity-70" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="relative z-10 container mx-auto px-6">

    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 px-8 py-16 lg:px-20 lg:py-20 text-center shadow-[0_35px_100px_rgba(37,99,235,0.35)]">

      {/* Floating Glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative">

        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-blue-100 backdrop-blur-xl">

          Let's Build Success Together

        </span>

        <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-white">

          Partner With Our Ecosystem

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg lg:text-xl leading-9 text-blue-100">

          Explore our group companies and discover how we can help
          accelerate your business growth, learning initiatives and
          workforce transformation.

        </p>

        <div className="mt-12">

          <Link href="/contact">

            <button className="group inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-2xl">

              Contact Us Today

              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

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