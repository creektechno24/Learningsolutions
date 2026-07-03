import Link from 'next/link'

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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%)]" />

        <div className="container mx-auto px-6 relative z-10">

          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
              Our Business Ecosystem
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white leading-tight">
              Group Brands
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-8">
              Creek Learning Solutions is supported by a strong ecosystem of
              specialized businesses focused on technology, talent development,
              recruitment and professional growth.
            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-8 text-center">
              <h3 className="text-4xl font-bold text-white">3</h3>
              <p className="mt-2 text-slate-300">
                Group Brands
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-8 text-center">
              <h3 className="text-4xl font-bold text-white">100+</h3>
              <p className="mt-2 text-slate-300">
                Corporate Clients
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-8 text-center">
              <h3 className="text-4xl font-bold text-white">25K+</h3>
              <p className="mt-2 text-slate-300">
                Professionals Impacted
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-8 text-center">
              <h3 className="text-4xl font-bold text-white">500+</h3>
              <p className="mt-2 text-slate-300">
                Learning Programs
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Brands Section */}
      <section className="py-24">

        <div className="container mx-auto px-6">

          <div className="text-center mb-16">

            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium">
              Our Brands
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Driving Excellence Across Domains
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              Together our brands create a comprehensive ecosystem that supports
              organizations through technology, learning, talent acquisition and
              workforce transformation.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {brands.map((brand) => (
              <div
                key={brand.title}
                className="group bg-white rounded-[32px] border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >

                <div
                  className={`h-3 bg-gradient-to-r ${brand.color}`}
                />

                <div className="p-10">

                  <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                    {brand.category}
                  </span>

                  <h3 className="mt-6 text-3xl font-bold text-slate-900 leading-tight">
                    {brand.title}
                  </h3>

                  <p className="mt-6 text-slate-600 leading-8">
                    {brand.description}
                  </p>

                  <div className="mt-10">

                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-white font-semibold hover:bg-blue-600 transition-all"
                    >
                      Visit Website
                    </a>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Our Ecosystem */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[40px] border shadow-lg p-12 lg:p-16">

            <h2 className="text-5xl font-bold text-center text-slate-900 mb-14">
              Why Our Ecosystem Matters
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="rounded-3xl bg-slate-50 p-8">
                <h3 className="font-bold text-xl mb-4">
                  Technology
                </h3>
                <p className="text-slate-600">
                  Modern business and digital transformation solutions.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-8">
                <h3 className="font-bold text-xl mb-4">
                  Learning
                </h3>
                <p className="text-slate-600">
                  Corporate training and capability development programs.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-8">
                <h3 className="font-bold text-xl mb-4">
                  Talent
                </h3>
                <p className="text-slate-600">
                  Recruitment, staffing and workforce solutions.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-8">
                <h3 className="font-bold text-xl mb-4">
                  Growth
                </h3>
                <p className="text-slate-600">
                  End-to-end support for organizational success.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="rounded-[40px] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-14 text-center text-white">

            <h2 className="text-5xl font-bold mb-6">
              Partner With Our Ecosystem
            </h2>

            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10">
              Explore our group companies and discover how we can help
              accelerate your business growth, learning initiatives and
              workforce transformation.
            </p>

            <Link href="/contact">
              <button className="px-10 py-4 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-105 transition-all">
                Contact Us Today
              </button>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}