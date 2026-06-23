import Image from 'next/image'
import Link from 'next/link'

export default function PsychometricTestPage() {
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
                Psychometric Test
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Psychometric Testing is one of the most insightful tools
                organizations use to understand, develop, and optimize
                their workforce.
              </p>

            </div>

            {/* Right Image */}
            <div className="relative h-[500px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

              <Image
                src="/images/premium-services/psychometric-test.webp"
                alt="Psychometric Test"
                fill
                className="object-contain p-4"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Introduction */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12">

            <h2 className="text-4xl font-bold mb-8">
              Introduction to Psychometric Tests
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Psychometric tests are standardized scientific assessments
              designed to measure an individual’s mental capabilities,
              personality traits, emotional intelligence, and behavioral style.
            </p>

            <p className="text-lg text-slate-600 leading-8">
              These tests go beyond resumes and interviews by offering
              objective insights into how a person thinks, reacts,
              and fits into a role or team.
            </p>

          </div>

        </div>

      </section>

      {/* Common Uses */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Common Uses of Psychometric Tests
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white rounded-[28px] border shadow-sm p-6 text-center">
              Recruitment and Selection
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-6 text-center">
              Leadership Development
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-6 text-center">
              Team Building
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-6 text-center">
              Career Planning
            </div>

            <div className="bg-white rounded-[28px] border shadow-sm p-6 text-center">
              Succession Management
            </div>

          </div>

        </div>

      </section>

      {/* Types */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Types of Psychometric Tests
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Cognitive Ability Tests
              </h3>

              <p className="text-slate-600">
                Logical reasoning, numerical aptitude and cognitive capability assessments.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Personality Assessments
              </h3>

              <p className="text-slate-600">
                Big Five, MBTI and personality-based behavioral assessments.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Emotional Intelligence Tests
              </h3>

              <p className="text-slate-600">
                Assess emotional awareness, empathy and self-regulation.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Behavioral Style Inventories
              </h3>

              <p className="text-slate-600">
                Understand work styles, behavior patterns and team interactions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Impact of Psychometric Tests on Employees
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Better Role Fit & Job Satisfaction
              </h3>

              <p className="text-slate-600">
                Employees placed in roles aligned with their profiles
                perform better and feel more fulfilled.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Enhanced Self-Awareness
              </h3>

              <p className="text-slate-600">
                Employees understand their strengths, blind spots
                and preferred working styles.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Improved Team Dynamics
              </h3>

              <p className="text-slate-600">
                Understanding personalities helps build balanced teams
                and improve collaboration.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Targeted Development Plans
              </h3>

              <p className="text-slate-600">
                Personalized training and coaching strategies can be
                created using assessment insights.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Higher Retention & Career Growth
              </h3>

              <p className="text-slate-600">
                Employees who feel understood and supported are more
                likely to stay and grow.
              </p>

            </div>

            <div className="bg-white rounded-[32px] border shadow-sm p-8">

              <h3 className="text-xl font-bold mb-4">
                Reduced Bias in Hiring & Promotion
              </h3>

              <p className="text-slate-600">
                Objective assessments help ensure fair evaluation
                and minimize unconscious bias.
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
              Objective Insights for Better Decisions
            </h2>

            <p className="text-xl text-slate-200 max-w-4xl mx-auto">
              Psychometric assessments provide scientific insights that
              support recruitment, development, team effectiveness,
              and long-term organizational success.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] border shadow-sm p-12 text-center">

            <h2 className="text-5xl font-bold mb-6">
              Build a Smarter Workforce Strategy
            </h2>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-10 leading-8">
              If you’re planning to roll this out, we would be happy
              to help you design a customized curriculum or even draft
              sample lesson plans. Want to build a roadmap tailored to
              your team’s goals and culture?
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