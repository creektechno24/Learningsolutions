import Image from 'next/image'
import Link from 'next/link'

export default function CSRProjectsPage() {
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
                CSR Projects
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Corporate Social Responsibility (CSR) programs are strategic
                initiatives that companies undertake to contribute positively
                to society, the environment, and the broader community beyond
                their core business operations.
              </p>

            </div>

            <div className="relative h-[500px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

              <Image
                src="/images/premium-services/CSR.webp"
                alt="CSR Projects"
                fill
                className="object-contain p-4"
              />

            </div>

          </div>

        </div>

      </section>

      {/* What Are CSR Programs */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12">

            <h2 className="text-4xl font-bold mb-8">
              What Are CSR Programs?
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-10">
              CSR programs are voluntary actions taken by businesses to support
              social causes, promote environmental sustainability, uphold ethical
              labor practices and human rights, and engage with communities through
              philanthropy, volunteering, and infrastructure development.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-50 border rounded-2xl p-6">
                Support social causes such as education, healthcare and poverty alleviation.
              </div>

              <div className="bg-slate-50 border rounded-2xl p-6">
                Promote environmental sustainability through responsible initiatives.
              </div>

              <div className="bg-slate-50 border rounded-2xl p-6">
                Uphold ethical labor practices and human rights.
              </div>

              <div className="bg-slate-50 border rounded-2xl p-6">
                Engage communities through volunteering and development projects.
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            How Organizations Benefit from CSR
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">
                Stronger Brand Reputation
              </h3>

              <p className="text-slate-600">
                CSR builds trust, credibility and customer loyalty through
                sustainability and ethical initiatives.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">
                Employee Engagement & Retention
              </h3>

              <p className="text-slate-600">
                Employees feel more connected to organizations that reflect
                their values and purpose.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">
                Risk Management & Compliance
              </h3>

              <p className="text-slate-600">
                Ethical and environmental compliance helps reduce risks and
                protects reputation.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">
                Customer Loyalty & Revenue Growth
              </h3>

              <p className="text-slate-600">
                Consumers increasingly support socially responsible brands,
                helping drive growth.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">
                Community Development
              </h3>

              <p className="text-slate-600">
                CSR initiatives improve education, healthcare and infrastructure
                in local communities.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Types of CSR */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Types of CSR Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-[32px] border shadow-sm p-10">
              <h3 className="text-2xl font-bold mb-5">
                Environmental Responsibility
              </h3>

              <p className="text-slate-600 leading-8">
                Focuses on sustainability and reducing ecological impact through
                tree plantation drives, renewable energy adoption, recycling,
                water conservation and carbon footprint reduction.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-10">
              <h3 className="text-2xl font-bold mb-5">
                Ethical Responsibility
              </h3>

              <p className="text-slate-600 leading-8">
                Encourages fair labor practices, safe working conditions,
                anti-corruption measures, compliance and DEI programs.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-10">
              <h3 className="text-2xl font-bold mb-5">
                Philanthropic Responsibility
              </h3>

              <p className="text-slate-600 leading-8">
                Supports charitable giving, scholarships, NGO partnerships,
                disaster relief initiatives and volunteering programs.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-10">
              <h3 className="text-2xl font-bold mb-5">
                Economic Responsibility
              </h3>

              <p className="text-slate-600 leading-8">
                Focuses on skill development, entrepreneurship support,
                infrastructure projects and financial inclusion.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Training Company Role */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Role of Training Companies in Driving CSR Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="font-bold text-xl mb-4">
                Skill Development & Capacity Building
              </h3>

              <p className="text-slate-600">
                Deliver vocational training, digital literacy and soft-skills
                programs to underserved communities.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="font-bold text-xl mb-4">
                CSR Strategy & Implementation Training
              </h3>

              <p className="text-slate-600">
                Help organizations design and execute sustainable CSR initiatives.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="font-bold text-xl mb-4">
                Monitoring & Impact Assessment
              </h3>

              <p className="text-slate-600">
                Train teams to measure community impact and environmental outcomes.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="font-bold text-xl mb-4">
                Stakeholder Engagement Workshops
              </h3>

              <p className="text-slate-600">
                Facilitate collaboration between companies, NGOs and communities.
              </p>
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-8">
              <h3 className="font-bold text-xl mb-4">
                Customized CSR Learning Modules
              </h3>

              <p className="text-slate-600">
                Create industry-specific CSR learning solutions aligned with business goals.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Our Role Matters */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-[32px] p-12 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Why Our Role Matters
            </h2>

            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-9">
              Creek Learning Solutions acts as the bridge between corporate intent
              and community impact by designing inclusive and scalable programs,
              ensuring quality delivery and creating long-term value for both
              businesses and society.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12 text-center">

            <h2 className="text-5xl font-bold mb-6">
              Let's Build Meaningful Impact Together
            </h2>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-10 leading-8">
              Would you like help crafting a CSR training proposal or designing
              a curriculum for a specific initiative for your organization?
              We are just a call away.
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