import Image from 'next/image'
import Link from 'next/link'

export default function CoreHRTrainingsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="py-20 bg-slate-950">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
                Curated Training Program
              </span>

              <h1 className="text-6xl font-bold text-white mt-6 mb-6">
                Core HR Trainings
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Core HR trainings are essential for building a strong foundation
                in human resource management. They equip HR professionals with
                the skills and knowledge needed to handle the full employee
                lifecycle, ensure compliance and drive strategic initiatives.
              </p>

            </div>

            <div>

              <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

                <Image
                  src="/images/training-programs/core-hr.webp"
                  alt="Core HR Trainings"
                  fill
                  priority
                  className="object-contain p-4"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Core HR Training Categories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                Recruitment & Talent Acquisition
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Interviewing Techniques: Structured interviews, behavioral assessments.</li>
                <li>• Sourcing Strategies: Using job boards, social media and referrals.</li>
                <li>• Employer Branding: Positioning the company as a top employer.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                Onboarding & Orientation
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• New Hire Integration: Cultural immersion, role clarity.</li>
                <li>• Compliance Training: Company policies, legal requirements.</li>
                <li>• Buddy Programs: Peer support for smoother transitions.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                Performance Management
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Goal Setting & KPIs: SMART goals, OKRs.</li>
                <li>• Feedback & Appraisals: 360-degree feedback, continuous performance reviews.</li>
                <li>• Coaching & Development: Manager training for employee growth.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                Employee Relations
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Conflict Resolution: Mediation techniques, grievance handling.</li>
                <li>• Workplace Ethics: Respect, inclusivity and fairness.</li>
                <li>• Engagement Strategies: Surveys, pulse checks, action planning.</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                Compensation & Benefits
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Payroll Basics: Statutory compliance, salary structures.</li>
                <li>• Benefits Administration: Health insurance, retirement plans.</li>
                <li>• Total Rewards Strategy: Aligning rewards with performance.</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                HR Compliance & Labor Laws
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Employment Law: Contracts, termination, harassment policies.</li>
                <li>• Health & Safety: Workplace safety standards, risk mitigation.</li>
                <li>• Data Privacy: Handling employee data securely.</li>
              </ul>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                HR Technology & Analytics
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• HRIS Training: Navigating systems like SAP, Workday, Zoho.</li>
                <li>• People Analytics: Using data for decision-making.</li>
                <li>• Digital Transformation: Automating HR processes.</li>
              </ul>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-5">
                Learning & Development
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Training Needs Analysis: Identifying skill gaps.</li>
                <li>• Instructional Design: Creating effective learning programs.</li>
                <li>• Leadership Development: Succession planning, high-potential programs.</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Strengthen Your HR Team?
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-slate-200 mb-10">
            Empower HR professionals with the knowledge and skills required
            to manage the complete employee lifecycle effectively.
          </p>

          <Link href="/contact">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
              Request Proposal
            </button>
          </Link>

        </div>

      </section>

    </main>
  )
}