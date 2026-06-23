import Image from 'next/image'
import Link from 'next/link'

export default function OrganizationalDevelopmentPage() {
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
                Organizational Development (OD)
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Organizational Development (OD) is like the engine room of a
                thriving company—it’s where strategy meets psychology to create
                a healthier, more adaptive workplace.
              </p>

            </div>

            <div className="relative h-[500px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

              <Image
                src="/images/premium-services/od.webp"
                alt="Organizational Development"
                fill
                className="object-contain p-4"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Key Benefits of Organizational Development
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Continuous Improvement
              </h3>

              <p className="text-slate-600 leading-8">
                OD fosters a culture of ongoing learning and refinement.
                Organizations regularly assess performance, identify gaps,
                and implement changes that improve workflows and service delivery.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Enhanced Communication
              </h3>

              <p className="text-slate-600 leading-8">
                OD improves both internal and external communication channels.
                Clear messaging and feedback loops reduce misunderstandings
                and increase transparency.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Strategic Goal Alignment
              </h3>

              <p className="text-slate-600 leading-8">
                OD ensures that individual, team, and organizational goals
                are aligned so employees understand how their work contributes
                to the bigger picture.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Change Management
              </h3>

              <p className="text-slate-600 leading-8">
                OD equips organizations to handle change proactively.
                Structured change processes reduce resistance and increase
                adoption of new initiatives.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Employee Development
              </h3>

              <p className="text-slate-600 leading-8">
                OD emphasizes training, coaching, and skill-building.
                Employees grow professionally which enhances job satisfaction
                and retention.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Improved Organizational Agility
              </h3>

              <p className="text-slate-600 leading-8">
                OD helps companies adapt quickly to market shifts,
                technology disruptions, and internal challenges,
                making them more resilient and competitive.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Innovation Banner */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-[32px] p-12 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Boosted Innovation & Productivity
            </h2>

            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-9">
              By encouraging collaboration and creativity, Organizational
              Development drives innovation while increasing productivity
              through employee empowerment and support.
            </p>

          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Impact on Employees
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Positive Effects */}
            <div className="bg-white rounded-[32px] border shadow-sm p-10">

              <h3 className="text-3xl font-bold text-green-600 mb-8">
                Positive Effects
              </h3>

              <div className="space-y-6">

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Greater Engagement
                  </h4>

                  <p className="text-slate-600">
                    Employees feel more connected to their work and the
                    organization’s mission.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Career Growth
                  </h4>

                  <p className="text-slate-600">
                    Access to learning and development opportunities enhances
                    career trajectories.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Job Satisfaction
                  </h4>

                  <p className="text-slate-600">
                    A supportive and transparent culture leads to happier employees.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Empowerment
                  </h4>

                  <p className="text-slate-600">
                    Employees are involved in decision-making and problem-solving.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Reduced Turnover
                  </h4>

                  <p className="text-slate-600">
                    When people feel valued and see growth, they’re less likely to leave.
                  </p>
                </div>

              </div>

            </div>

            {/* Challenges */}
            <div className="bg-white rounded-[32px] border shadow-sm p-10">

              <h3 className="text-3xl font-bold text-orange-600 mb-8">
                Potential Challenges
              </h3>

              <div className="space-y-6">

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Change Fatigue
                  </h4>

                  <p className="text-slate-600">
                    Too many changes without proper support can overwhelm employees.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Misalignment
                  </h4>

                  <p className="text-slate-600">
                    If OD goals are not clearly communicated, employees may feel
                    confused or disengaged.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Resistance to Change
                  </h4>

                  <p className="text-slate-600">
                    Without inclusive planning, employees may push back against
                    new systems or structures.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12 text-center">

            <h2 className="text-5xl font-bold mb-6">
              Build a Workplace Where People & Performance Thrive
            </h2>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-10 leading-8">
              Organizational Development is a strategic approach to creating a
              workplace where employees and business performance grow together.
              If you're thinking about applying OD principles in your organization,
              we can help design a tailored strategy.
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