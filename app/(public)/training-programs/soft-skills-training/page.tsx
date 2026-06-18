import Image from 'next/image'
import Link from 'next/link'

export default function SoftSkillsTrainingPage() {
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
                Soft Skills Training
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Soft Skills training is the secret sauce behind
                high-performing teams and emotionally intelligent workplaces.
              </p>

            </div>

            <div>

              <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

                <Image
                  src="/images/training-programs/sst.webp"
                  alt="Soft Skills Training"
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
              Introduction to Soft Skills Training
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              Soft skills refer to the interpersonal, communication and
              emotional intelligence abilities that shape how people
              interact, collaborate and lead.
            </p>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              Unlike hard skills (technical know-how), soft skills are
              transferable across roles and industries and are essential
              for building strong relationships and thriving in dynamic
              environments.
            </p>

            <p className="text-lg text-slate-600 leading-8">
              In today’s workplace, where automation handles many technical
              tasks, soft skills are what make employees indispensable.
            </p>

          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Impact of Soft Skills Training
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Improved Communication & Collaboration
              </h3>

              <p className="text-slate-600">
                Employees learn to express ideas clearly and listen actively.
                Reduces misunderstandings and strengthens team cohesion.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Boosted Emotional Intelligence
              </h3>

              <p className="text-slate-600">
                Enhances self-awareness, empathy and emotional regulation.
                Leads to better conflict resolution and workplace harmony.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Greater Adaptability & Resilience
              </h3>

              <p className="text-slate-600">
                Employees become more agile in responding to change.
                Builds confidence in navigating uncertainty and stress.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Enhanced Leadership & Influence
              </h3>

              <p className="text-slate-600">
                Develops skills like delegation, motivation and
                vision-setting. Prepares employees for future leadership roles.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Increased Productivity & Engagement
              </h3>

              <p className="text-slate-600">
                Better time management and goal-setting lead to higher output.
                Employees feel more valued and connected, reducing turnover.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Stronger Workplace Culture
              </h3>

              <p className="text-slate-600">
                Fosters respect, inclusivity and psychological safety.
                Encourages a growth mindset across the organization.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] p-12 border shadow-sm">

            <p className="text-lg text-slate-600 leading-8">
              According to recent studies, companies that invest in soft
              skills training see up to 25% higher profitability and
              2.5x longer employee retention rates.
            </p>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Soft Skills Categories
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Personal */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">

              <h3 className="text-2xl font-bold mb-6">
                Personal Soft Skills
              </h3>

              <ul className="space-y-3 text-slate-600">

                <li>• Self-awareness</li>
                <li>• Adaptability</li>
                <li>• Resilience</li>
                <li>• Work ethic</li>
                <li>• Time management</li>
                <li>• Stress management</li>
                <li>• Positive attitude</li>
                <li>• Integrity</li>
                <li>• Learning agility</li>

              </ul>

            </div>

            {/* Interpersonal */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">

              <h3 className="text-2xl font-bold mb-6">
                Interpersonal Soft Skills
              </h3>

              <ul className="space-y-3 text-slate-600">

                <li>• Communication</li>
                <li>• Active listening</li>
                <li>• Teamwork</li>
                <li>• Conflict resolution</li>
                <li>• Empathy</li>
                <li>• Networking</li>
                <li>• Cultural awareness</li>
                <li>• Customer service orientation</li>
                <li>• Persuasion</li>

              </ul>

            </div>

            {/* Professional */}
            <div className="bg-white rounded-3xl p-8 border shadow-sm">

              <h3 className="text-2xl font-bold mb-6">
                Professional Soft Skills
              </h3>

              <ul className="space-y-3 text-slate-600">

                <li>• Leadership</li>
                <li>• Decision-making</li>
                <li>• Problem-solving</li>
                <li>• Critical thinking</li>
                <li>• Negotiation</li>
                <li>• Creativity</li>
                <li>• Attention to detail</li>
                <li>• Mentoring / Coaching</li>
                <li>• Collaboration tools proficiency</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-bold mb-6">
            Soft Skills Training
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-slate-200 mb-10">
            Want to build a training roadmap together? Call us today.
          </p>

          <Link href="/contact">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
              Contact Us
            </button>
          </Link>

        </div>

      </section>

    </main>
  )
}