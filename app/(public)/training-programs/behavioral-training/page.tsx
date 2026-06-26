import Image from 'next/image'
import Link from 'next/link'
import {
  MessageSquareText,
  Clock3,
  BarChart3,
  ArrowRight
} from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

export default async function BehavioralTrainingPage() {
  const supabase = await createClient()

const { data: courses } = await supabase
  .from('courses')
  .select(`
  id,
  title,
  slug,
  description,
  duration,
  level,
  course_categories!inner(
    slug
  )
`)
  .eq('is_published', true)
  .eq(
    'course_categories.slug',
    'behavioral-training'
  )
  .limit(6)
  return (
    <main className="min-h-screen bg-slate-50">

      
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
     <section className="py-24 bg-gradient-to-b from-violet-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-violet-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Behavioral Training
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Introduction to Behavioral Training
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Building emotionally intelligent professionals who communicate,
        collaborate and lead with confidence.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-violet-100 p-12 shadow-xl">

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

    {/* Objectives */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-violet-100 text-violet-700 px-5 py-2 rounded-full text-sm font-semibold">
          Training Objectives
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Core Development Areas
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-violet-50 rounded-[30px] border border-violet-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold mb-6">
            01
          </div>

          <h4 className="text-2xl font-bold text-violet-700 mb-4">
            Communication
          </h4>

          <p className="text-slate-600 leading-8">
            Improve workplace communication and collaboration.
          </p>

        </div>

        <div className="bg-fuchsia-50 rounded-[30px] border border-fuchsia-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-fuchsia-600 text-white flex items-center justify-center font-bold mb-6">
            02
          </div>

          <h4 className="text-2xl font-bold text-fuchsia-700 mb-4">
            Leadership
          </h4>

          <p className="text-slate-600 leading-8">
            Foster accountability and leadership mindset.
          </p>

        </div>

        <div className="bg-purple-50 rounded-[30px] border border-purple-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-6">
            03
          </div>

          <h4 className="text-2xl font-bold text-purple-700 mb-4">
            Adaptability
          </h4>

          <p className="text-slate-600 leading-8">
            Build resilience and adaptability to change.
          </p>

        </div>

        <div className="bg-indigo-50 rounded-[30px] border border-indigo-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-6">
            04
          </div>

          <h4 className="text-2xl font-bold text-indigo-700 mb-4">
            Workplace Culture
          </h4>

          <p className="text-slate-600 leading-8">
            Promote empathy, respect and inclusion.
          </p>

        </div>

      </div>

    </div>

    {/* Impact */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-violet-100 text-violet-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact of Behavioral Training
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div className="bg-violet-50 rounded-[30px] border border-violet-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="text-2xl font-bold text-violet-700 mb-4">
            Communication & Collaboration
          </h4>
          <p className="text-slate-600 leading-8">
            Employees communicate effectively and work better as teams.
          </p>
        </div>

        <div className="bg-fuchsia-50 rounded-[30px] border border-fuchsia-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="text-2xl font-bold text-fuchsia-700 mb-4">
            Emotional Intelligence
          </h4>
          <p className="text-slate-600 leading-8">
            Improves self-awareness, empathy and decision making.
          </p>
        </div>

        <div className="bg-purple-50 rounded-[30px] border border-purple-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="text-2xl font-bold text-purple-700 mb-4">
            Leadership Development
          </h4>
          <p className="text-slate-600 leading-8">
            Builds accountability and future leadership capabilities.
          </p>
        </div>

        <div className="bg-indigo-50 rounded-[30px] border border-indigo-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="text-2xl font-bold text-indigo-700 mb-4">
            Stress Management
          </h4>
          <p className="text-slate-600 leading-8">
            Helps employees manage workplace pressure effectively.
          </p>
        </div>

        <div className="bg-violet-100 rounded-[30px] border border-violet-300 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="text-2xl font-bold text-violet-800 mb-4">
            Conflict Resolution
          </h4>
          <p className="text-slate-700 leading-8">
            Encourages healthier workplace relationships and teamwork.
          </p>
        </div>

        <div className="bg-fuchsia-100 rounded-[30px] border border-fuchsia-300 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="text-2xl font-bold text-fuchsia-800 mb-4">
            Higher Engagement
          </h4>
          <p className="text-slate-700 leading-8">
            Employees stay motivated and committed to organizational goals.
          </p>
        </div>

      </div>

    </div>

    {/* Benefits */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 rounded-[36px] p-14 shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-10">
          Key Benefits
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-lg text-violet-100">

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

  </div>

</section>
      {/* Available Courses */}
<section className="pb-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex bg-violet-100 text-violet-700 px-6 py-2 rounded-full text-sm font-semibold">
        Available Courses
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Behavioral Training Courses
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Explore our behavioural learning programs designed
        to improve workplace effectiveness, communication,
        leadership and emotional intelligence.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      {courses?.map((course) => (

        <Link
          key={course.id}
          href={`/courses/${course.slug}`}
        >

          <div className="group bg-white rounded-[36px] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden h-full">

            {/* Header */}

            <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-8">

              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">

                <MessageSquareText className="h-10 w-10 text-white" />

              </div>

            </div>

            {/* Body */}

            <div className="p-8">

              <h3 className="text-2xl font-bold text-slate-900 mb-5 group-hover:text-violet-600 transition-colors">

                {course.title}

              </h3>

              <p className="text-slate-600 leading-8 line-clamp-3">

                {course.description}

              </p>

            </div>

            {/* Footer */}

            <div className="border-t px-8 py-6">

              <div className="flex justify-between items-center">

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <Clock3 className="h-5 w-5 text-violet-600" />

                    <div>

                      <p className="text-xs text-slate-500">
                        Duration
                      </p>

                      <p className="font-semibold text-slate-900">
                        {course.duration || "2 Days"}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <BarChart3 className="h-5 w-5 text-violet-600" />

                    <div>

                      <p className="text-xs text-slate-500">
                        Level
                      </p>

                      <p className="font-semibold text-slate-900">
                        {course.level || "Intermediate"}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="w-14 h-14 rounded-full border-2 border-violet-200 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all">

                  <ArrowRight className="h-6 w-6" />

                </div>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

    <div className="text-center mt-14">

      <Link href="/courses?category=behavioral-training">

        <button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">

          View All Behavioral Courses

        </button>

      </Link>

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