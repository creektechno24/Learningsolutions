import Image from 'next/image'
import Link from 'next/link'

export default function BootCampsTTTPage() {
  return (
    <main className="min-h-screen bg-slate-50">

   {/* Hero Section */}
<section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

  <div className="container mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
          Premium Service
        </span>

        <h1 className="text-6xl font-bold text-white mt-6 mb-6">
          Boot Camps & Train-the-Trainer (TTT) Programs
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed">
          Boot Camps and Train-the-Trainer (TTT) programs are two powerhouse
          formats in corporate learning. They’re designed not just to transfer
          knowledge, but to ignite capability, confidence, and culture.
        </p>

      </div>

      {/* Right Side Images */}

      <div className="space-y-6">

        <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden shadow-2xl bg-white">

          <Image
            src="/images/premium-services/bt-1.webp"
            alt="Boot Camps"
            fill
            className="object-contain p-4"
          />

        </div>

        <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden shadow-2xl bg-white">

          <Image
            src="/images/premium-services/bt-2.webp"
            alt="TTT Programs"
            fill
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

          <div className="bg-white rounded-[32px] p-12 shadow-sm border">

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium mb-6">
              Premium Service
            </span>

            <h1 className="text-5xl font-bold text-slate-900 mb-8">
              Boot Camps & Train-the-Trainer (TTT) Programs
            </h1>

            <p className="text-lg text-slate-600 leading-8">
              Boot Camps and Train-the-Trainer (TTT) programs are two powerhouse formats in corporate learning.
              They’re designed not just to transfer knowledge, but to ignite capability,
              confidence, and culture.
            </p>

          </div>

        </div>

      </section>

      {/* Boot Camp Programs */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] p-12 border shadow-sm">

            <h2 className="text-4xl font-bold mb-8">
              Boot Camp Programs
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Boot camps are intensive, immersive training experiences that rapidly
              upskill employees in a short time. They’re often used for onboarding,
              product launches, technical skill development, or transformation initiatives.
              Think of them as the accelerator for learning — fast-paced, hands-on,
              and outcome-driven.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-50 border rounded-2xl p-6">
                Structured curriculum over days/weeks
              </div>

              <div className="bg-slate-50 border rounded-2xl p-6">
                Real-world simulations and role plays
              </div>

              <div className="bg-slate-50 border rounded-2xl p-6">
                Cross-functional collaboration
              </div>

              <div className="bg-slate-50 border rounded-2xl p-6">
                Immediate application of skills
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TTT Programs */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] p-12 border shadow-sm">

            <h2 className="text-4xl font-bold mb-8">
              Train-the-Trainer (TTT) Programs
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              TTT programs are designed to equip internal trainers,
              team leads, or subject matter experts with the skills
              to deliver training effectively. It’s not just about
              knowing the content—it’s about mastering facilitation,
              engagement, and instructional design.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                Build a pool of certified internal trainers
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                Ensure consistency and scalability of training
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                Empower leaders to coach and mentor others
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Impact on Employees
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-[32px] p-10 border shadow-sm">

              <h3 className="text-3xl font-bold mb-8">
                Boot Camp Impact
              </h3>

              <ul className="space-y-6 text-slate-600">

                <li>
                  <strong className="text-slate-900">
                    Rapid Skill Acquisition:
                  </strong>{' '}
                  Employees gain practical, job-ready skills in record time.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Confidence Boost:
                  </strong>{' '}
                  Immersive learning builds self-assurance and readiness.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Team Cohesion:
                  </strong>{' '}
                  Cross-functional boot camps foster collaboration and shared purpose.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Mindset Shift:
                  </strong>{' '}
                  Employees adopt a proactive, agile approach to challenges.
                </li>

              </ul>

            </div>

            <div className="bg-white rounded-[32px] p-10 border shadow-sm">

              <h3 className="text-3xl font-bold mb-8">
                TTT Program Impact
              </h3>

              <ul className="space-y-6 text-slate-600">

                <li>
                  <strong className="text-slate-900">
                    Leadership Development:
                  </strong>{' '}
                  Trainers evolve into mentors and role models.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Knowledge Retention:
                  </strong>{' '}
                  Peer-led training improves learning stickiness.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Cultural Multiplication:
                  </strong>{' '}
                  Trainers become ambassadors of company values and standards.
                </li>

                <li>
                  <strong className="text-slate-900">
                    Scalable Learning:
                  </strong>{' '}
                  Organizations reduce dependency on external trainers and scale faster.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-[32px] p-12 text-center text-white">

            <h2 className="text-4xl font-bold mb-6">
              Learning Ecosystem Impact
            </h2>

            <p className="text-xl text-slate-200 max-w-4xl mx-auto">
              Organizations with strong internal training ecosystems report
              30–50% higher engagement and retention rates.
            </p>

          </div>

        </div>

      </section>

      {/* Certificate Image */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] overflow-hidden border shadow-sm">

            <div className="relative h-[700px]">

              <Image
                src="/images/premium-services/certificate-creek.webp"
                alt="Certification"
                fill
                className="object-contain bg-white"
              />

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border p-12 text-center shadow-sm">

            <h2 className="text-5xl font-bold mb-6">
              Build Future-Ready Teams
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
              If you're planning to roll out either of these programs,
              we would be thrilled to help you design a customized roadmap
              or draft sample modules tailored to your organization.
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