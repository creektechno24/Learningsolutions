import Image from 'next/image'
import Link from 'next/link'

export default function BehavioralTrainingPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
     {/* Hero Section */}
<section className="py-20 bg-slate-950">

  <div className="container mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>

        <span className="inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
          Curated Training Program
        </span>

        <h1 className="text-6xl font-bold text-white mt-6 mb-6">
          Behavioral Training
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed">
          Transform workplace behaviour through emotional intelligence,
          communication excellence, leadership development and
          interpersonal effectiveness.
        </p>

        {/*<div className="flex gap-4 mt-10">

          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all">
              Enquire Now
            </button>
          </Link>

          <Link href="/contact">
            <button className="border border-slate-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-900 transition-all">
              Contact Us
            </button>
          </Link>

        </div>*/}

      </div>

      {/* Right Image */}
      <div>

        <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

          <Image
            src="/images/training-programs/bt.webp"
            alt="Behavioral Training"
            fill
            className="object-contain p-4"
            priority
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
              Introduction to Behavioral Training
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              Behavioral training is one of the most transformative tools an
              organization can use to shape not just how employees work but
              how they think, interact and grow.
            </p>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              Behavioral training focuses on developing soft skills,
              emotional intelligence and interpersonal behaviours that
              influence how employees engage with their work and colleagues.
              Unlike technical training which teaches “how to do”,
              behavioral training teaches “how to be”.
            </p>

            <p className="text-lg text-slate-600 leading-8">
              In today's diverse and dynamic workplace, behavioural skills
              are often the differentiator between good employees and
              exceptional professionals.
            </p>

          </div>

        </div>

      </section>

      {/* Objectives */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Training Objectives
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                Communication
              </h3>

              <p className="text-slate-600">
                Improve workplace communication and collaboration.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                Leadership
              </h3>

              <p className="text-slate-600">
                Foster accountability and leadership mindset.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                Adaptability
              </h3>

              <p className="text-slate-600">
                Build resilience and adaptability to change.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                Workplace Culture
              </h3>

              <p className="text-slate-600">
                Promote empathy, respect and inclusion.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Impact Section */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Impact of Behavioral Training
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Enhanced Communication & Collaboration
              </h3>

              <p className="text-slate-600">
                Employees learn to express themselves clearly and listen
                actively, reducing misunderstandings and improving teamwork.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Emotional Intelligence
              </h3>

              <p className="text-slate-600">
                Helps employees manage emotions, improve relationships and
                make better decisions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Leadership Development
              </h3>

              <p className="text-slate-600">
                Encourages ownership, accountability and future leadership
                capabilities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Stress Management
              </h3>

              <p className="text-slate-600">
                Equips employees with techniques to handle workplace pressure
                effectively.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Conflict Resolution
              </h3>

              <p className="text-slate-600">
                Improves interpersonal relationships and creates a healthier
                work environment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Higher Engagement
              </h3>

              <p className="text-slate-600">
                Employees feel valued, motivated and committed to
                organizational goals.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="pb-20">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-[32px] p-12 border shadow-sm">

            <h2 className="text-4xl font-bold mb-10">
              Key Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>✓ Better teamwork and collaboration</div>
              <div>✓ Stronger communication skills</div>
              <div>✓ Increased emotional intelligence</div>
              <div>✓ Improved leadership capabilities</div>
              <div>✓ Effective conflict resolution</div>
              <div>✓ Higher employee engagement</div>
              <div>✓ Better stress management</div>
              <div>✓ Positive workplace culture</div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-bold mb-6">
            Transform Workplace Behaviour
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-slate-200 mb-10">
            Looking to implement Behavioral Training in your organization?
            We can design a customized training roadmap aligned with your
            business goals.
          </p>

          <Link href="/contact">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
              Contact Us Today
            </button>
          </Link>

        </div>

      </section>

    </main>
  )
}