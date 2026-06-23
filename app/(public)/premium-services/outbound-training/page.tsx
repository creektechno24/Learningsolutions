import Image from 'next/image'
import Link from 'next/link'

export default function OutboundTrainingPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>

              <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
                Premium Service
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
                Outbound Training (OBT)
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Outbound training is like hitting the refresh button on employee
                development—taking learning out of the boardroom and into the
                real world. It’s experiential, dynamic, and deeply impactful.
              </p>

            </div>

            {/* Right Images */}
            <div className="space-y-6">

              <div className="relative w-full h-[260px] rounded-[32px] overflow-hidden shadow-2xl bg-white">

                <Image
                  src="/images/premium-services/obt1.webp"
                  alt="Outbound Training"
                  fill
                  className="object-contain p-4"
                />

              </div>

              <div className="relative w-full h-[260px] rounded-[32px] overflow-hidden shadow-2xl bg-white">

                <Image
                  src="/images/premium-services/obt2.webp"
                  alt="Outbound Training Activities"
                  fill
                  className="object-contain p-4"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* What is Outbound Training */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12">

            <h2 className="text-4xl font-bold mb-8">
              What Is Outbound Training?
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Outbound training (OBT) is a form of experiential learning
              conducted outside the traditional work environment, often in
              outdoor or adventure settings. It uses hands-on activities to
              build skills like teamwork, leadership, communication, and
              problem-solving.
            </p>

            <p className="text-lg text-slate-600 leading-8">
              Think ropes courses, trust falls, obstacle challenges, or even
              building a bicycle for charity—each activity is designed to
              simulate workplace dynamics in a fresh, engaging way.
            </p>

          </div>

        </div>

      </section>

      {/* Impact Section */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Impact of Outbound Training on Employees
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Team Bonding & Collaboration
              </h3>

              <p className="text-slate-600 leading-8">
                Activities require interdependence, fostering trust and
                camaraderie. Employees learn to work together under pressure,
                improving team dynamics back at work.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Enhanced Communication
              </h3>

              <p className="text-slate-600 leading-8">
                Challenges demand clear, concise communication. Employees
                practice active listening and assertiveness in real-time.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Leadership Development
              </h3>

              <p className="text-slate-600 leading-8">
                Individuals step into leadership roles, make decisions, and
                guide teams. Builds confidence and strategic thinking.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Problem-Solving & Innovation
              </h3>

              <p className="text-slate-600 leading-8">
                Tasks often involve creative thinking and resourcefulness.
                Employees learn to approach problems from new angles.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Stress Relief & Motivation
              </h3>

              <p className="text-slate-600 leading-8">
                A break from routine boosts morale, energy, and focus.
                Employees return refreshed, engaged, and more committed.
              </p>
            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">
                Retention & Loyalty
              </h3>

              <p className="text-slate-600 leading-8">
                When employees feel invested in, they’re more likely to stay.
                Outbound training signals that the company values growth and
                well-being.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Highlight Banner */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-[32px] p-12 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Strategic Investment in Human Potential
            </h2>

            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-9">
              Outbound training is more than a day in the sun—it builds
              stronger teams, sharper minds, and more resilient leaders.
            </p>

          </div>

        </div>

      </section>

      {/* Final Thought */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12">

            <h2 className="text-4xl font-bold mb-8">
              Final Thought
            </h2>

            <p className="text-lg text-slate-600 leading-8">
              Outbound training is more than a day in the sun—it’s a strategic
              investment in human potential. It builds stronger teams, sharper
              minds, and more resilient leaders.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12 text-center">

            <h2 className="text-5xl font-bold mb-6">
              Build Stronger Teams Through Experience
            </h2>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-10 leading-8">
              If you’re considering designing an outbound program, we can help
              you tailor it to your team’s goals and culture. Ready to sketch
              out a plan? Call us today for more details.
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