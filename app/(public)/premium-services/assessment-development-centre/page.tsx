import Image from 'next/image'

export default function AssessmentDevelopmentCentrePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
<section className="relative h-[700px] bg-white">

  <Image
    src="/images/premium-services/adc.webp"
    alt="Assessment Development Centre"
    fill
    priority
    className="object-contain"
  />

</section>

      {/* Setup ADC */}
      <section className="py-20">

        <div className="container mx-auto px-6 max-w-6xl">

          <div className="bg-white rounded-[32px] p-10 border shadow-sm">

            <h2 className="text-4xl font-bold mb-10">
              Setting Up an Assessment & Development Center
            </h2>

            <div className="space-y-10">

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  1. Define Objectives
                </h3>

                <ul className="space-y-3 text-slate-600">
                  <li>
                    Clarify whether the ADC is for recruitment, leadership
                    development, succession planning, or performance evaluation.
                  </li>

                  <li>
                    Align the center’s goals with organizational strategy.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  2. Identify Competencies
                </h3>

                <ul className="space-y-3 text-slate-600">
                  <li>
                    Develop a competency framework based on job roles and
                    organizational values.
                  </li>

                  <li>
                    Include behavioral, cognitive, and technical competencies.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  3. Design Assessment Tools
                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="bg-slate-50 rounded-2xl p-5 border">
                    Group exercises: Assess teamwork and leadership.
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 border">
                    Case studies: Test analytical thinking and decision-making.
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 border">
                    Role plays: Evaluate interpersonal and negotiation skills.
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 border">
                    Psychometric tests: Measure personality traits and
                    cognitive ability.
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5 border md:col-span-2">
                    Interviews: Provide deeper insights into motivation and fit.
                  </div>

                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  4. Train Assessors
                </h3>

                <ul className="space-y-3 text-slate-600">
                  <li>
                    Select internal or external assessors with expertise in
                    behavioral evaluation.
                  </li>

                  <li>
                    Train them to ensure consistency, fairness, and objectivity.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  5. Pilot the Program
                </h3>

                <ul className="space-y-3 text-slate-600">
                  <li>
                    Run a small-scale trial to refine tools and logistics.
                  </li>

                  <li>
                    Gather feedback to improve the experience and accuracy.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  6. Implement and Monitor
                </h3>

                <ul className="space-y-3 text-slate-600">
                  <li>
                    Roll out the ADC across relevant departments or roles.
                  </li>

                  <li>
                    Use structured scoring rubrics and feedback mechanisms.
                  </li>

                  <li>
                    Continuously monitor outcomes and refine the process.
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-4xl font-bold text-center mb-14">
            Benefits of an Assessment & Development Center
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-[32px] p-8 border shadow-sm">

              <h3 className="text-2xl font-bold mb-6">
                For the Organization
              </h3>

              <div className="space-y-4 text-slate-600">
                <p>
                  Objective decision-making: Reduces bias in hiring and promotions.
                </p>

                <p>
                  Better talent identification: Spot high-potential employees early.
                </p>

                <p>
                  Improved workforce planning: Aligns talent with future business needs.
                </p>

                <p>
                  Enhanced leadership pipeline: Builds a robust succession strategy.
                </p>
              </div>

            </div>

            <div className="bg-white rounded-[32px] p-8 border shadow-sm">

              <h3 className="text-2xl font-bold mb-6">
                For Employees
              </h3>

              <div className="space-y-4 text-slate-600">
                <p>
                  Fair evaluation: Transparent and standardized assessments.
                </p>

                <p>
                  Personal development: Insightful feedback helps individuals grow.
                </p>

                <p>
                  Increased engagement: Employees feel valued and invested in.
                </p>

                <p>
                  Career clarity: Helps employees understand their strengths and
                  areas for improvement.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          <div className="bg-white rounded-[32px] p-10 border shadow-sm">

            <h2 className="text-4xl font-bold mb-10">
              Impact on Employees
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-50 rounded-2xl p-6 border">
                Boosts morale: Employees appreciate structured development
                opportunities.
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border">
                Encourages self-awareness: Feedback fosters introspection and
                growth.
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border">
                Promotes internal mobility: Employees are more likely to explore
                new roles.
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border">
                Strengthens culture: Builds a performance-driven and
                learning-oriented environment.
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <p className="text-xl max-w-4xl mx-auto">
            Should you be more interested to know more write to us today.
          </p>

        </div>

      </section>

    </main>
  )
}