import Image from 'next/image'
import Link from 'next/link'

export default function LeadershipPage() {
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
                Leadership Training
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Leadership training is one of the most transformative
                investments an organization can make in its people.
                It equips individuals to inspire, influence and drive
                meaningful change.
              </p>

            </div>

            <div>

              <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

                <Image
                  src="/images/training-programs/ldp.webp"
                  alt="Leadership Training"
                  fill
                  priority
                  className="object-contain p-4"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Introduction */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Introduction to Leadership Training
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              Leadership training is a structured development process
              that helps individuals build the skills, mindset and
              behaviors needed to lead teams, make strategic decisions
              and foster a positive work culture.
            </p>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              It’s not limited to those in formal leadership roles—
              any employee with the potential to influence others
              can benefit.
            </p>

          </div>

        </div>

      </section>

      {/* Key Goals */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Key Goals
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Self Awareness
              </h3>

              <p className="text-slate-600">
                Enhancing self-awareness and emotional intelligence.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Communication
              </h3>

              <p className="text-slate-600">
                Building communication and decision-making skills.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Strategic Thinking
              </h3>

              <p className="text-slate-600">
                Developing strategic thinking and vision-setting abilities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Leadership Mindset
              </h3>

              <p className="text-slate-600">
                Cultivating resilience, adaptability and ethical leadership.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Impact Section */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Impact of Leadership Training
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Boosts Confidence & Ownership
              </h3>

              <p className="text-slate-600">
                Employees gain clarity in their roles and feel empowered
                to take initiative. They become more decisive and accountable.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Communication & Influence
              </h3>

              <p className="text-slate-600">
                Leaders learn to articulate vision, give feedback and
                listen actively, fostering trust across teams.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Emotional Intelligence
              </h3>

              <p className="text-slate-600">
                Training enhances empathy, self-regulation and
                interpersonal awareness.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Career Growth
              </h3>

              <p className="text-slate-600">
                Employees develop competencies that prepare them
                for promotions and cross-functional roles.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Team Performance
              </h3>

              <p className="text-slate-600">
                Trained leaders build cohesive and motivated teams
                through coaching and delegation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Organizational Culture
              </h3>

              <p className="text-slate-600">
                Strong leadership promotes innovation, inclusion
                and continuous improvement.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Highlight */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] p-12 border shadow-sm">

            <h2 className="text-4xl font-bold mb-8">
              Why Leadership Training Matters
            </h2>

            <p className="text-lg text-slate-600 leading-8">
              According to recent studies, relationships with managers
              account for up to 86% of job satisfaction, making
              leadership training a direct lever for retention and
              engagement.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-bold mb-6">
            Build Future Leaders Today
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-slate-200 mb-10">
            Develop confident, emotionally intelligent and
            high-performing leaders who can drive lasting impact.
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