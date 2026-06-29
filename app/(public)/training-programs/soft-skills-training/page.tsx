import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

import {
  Brain,
  Clock3,
  BarChart3,
  ArrowRight
} from 'lucide-react'

export default async function SoftSkillsTrainingPage() {
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
    'soft-skills'
  )
  .limit(6)
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
     {/* Introduction */}
<section className="py-24 bg-gradient-to-b from-violet-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-14">

        <span className="inline-flex bg-violet-100 text-violet-700 px-6 py-2 rounded-full text-sm font-semibold">
          Soft Skills Training
        </span>

        <h2 className="text-5xl font-bold text-slate-900 mt-6">
          Introduction To Soft Skills Training
        </h2>

        <p className="text-slate-600 text-xl mt-5 max-w-3xl mx-auto leading-8">
          Building communication, emotional intelligence and interpersonal
          excellence for today's workplace.
        </p>

      </div>

      <div className="bg-white border border-violet-100 rounded-[36px] shadow-xl overflow-hidden">

        <div className="h-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />

        <div className="p-12">

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">

              <p className="text-lg text-slate-600 leading-8 mb-8">
                Soft skills refer to the interpersonal, communication and
                emotional intelligence abilities that shape how people
                interact, collaborate and lead.
              </p>

              <p className="text-lg text-slate-600 leading-8 mb-8">
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

            <div>

              <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white h-full flex flex-col justify-center">

                <h3 className="text-2xl font-bold mb-6">
                  Why Soft Skills?
                </h3>

                <div className="space-y-5">

                  <div className="flex items-start gap-3">

                    <div className="w-3 h-3 rounded-full bg-white mt-2" />

                    <p className="text-violet-100">
                      Improve communication and collaboration.
                    </p>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="w-3 h-3 rounded-full bg-white mt-2" />

                    <p className="text-violet-100">
                      Build emotional intelligence and adaptability.
                    </p>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="w-3 h-3 rounded-full bg-white mt-2" />

                    <p className="text-violet-100">
                      Strengthen leadership and workplace relationships.
                    </p>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="w-3 h-3 rounded-full bg-white mt-2" />

                    <p className="text-violet-100">
                      Create confident, high-performing professionals.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Impact */}
      {/* Impact */}
<section className="pb-24 bg-gradient-to-b from-white via-violet-50/40 to-white">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex bg-violet-100 text-violet-700 px-6 py-2 rounded-full text-sm font-semibold">
        Employee Benefits
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Impact Of Soft Skills Training
      </h2>

      <p className="text-xl text-slate-600 mt-5 max-w-3xl mx-auto leading-8">
        Soft skills training empowers employees with stronger communication,
        adaptability and leadership capabilities that improve workplace
        performance and long-term career success.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      <div className="group bg-white rounded-[32px] border border-violet-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-violet-300 transition-all duration-300">

        <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-xl mb-6">
          01
        </div>

        <h3 className="text-2xl font-bold mb-5 group-hover:text-violet-700 transition-colors">
          Improved Communication & Collaboration
        </h3>

        <p className="text-slate-600 leading-8">
          Employees learn to express ideas clearly and listen actively,
          reducing misunderstandings while strengthening teamwork,
          collaboration and workplace relationships.
        </p>

      </div>

      <div className="group bg-white rounded-[32px] border border-purple-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300">

        <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl mb-6">
          02
        </div>

        <h3 className="text-2xl font-bold mb-5 group-hover:text-purple-700 transition-colors">
          Boosted Emotional Intelligence
        </h3>

        <p className="text-slate-600 leading-8">
          Enhances self-awareness, empathy and emotional regulation,
          enabling employees to resolve conflicts effectively and
          build healthier workplace relationships.
        </p>

      </div>

      <div className="group bg-white rounded-[32px] border border-indigo-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-300 transition-all duration-300">

        <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl mb-6">
          03
        </div>

        <h3 className="text-2xl font-bold mb-5 group-hover:text-indigo-700 transition-colors">
          Greater Adaptability & Resilience
        </h3>

        <p className="text-slate-600 leading-8">
          Employees become more agile when responding to change,
          building confidence to navigate uncertainty, pressure
          and evolving business environments.
        </p>

      </div>

      <div className="group bg-white rounded-[32px] border border-fuchsia-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-fuchsia-300 transition-all duration-300">

        <div className="w-14 h-14 rounded-2xl bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center font-bold text-xl mb-6">
          04
        </div>

        <h3 className="text-2xl font-bold mb-5 group-hover:text-fuchsia-700 transition-colors">
          Enhanced Leadership & Influence
        </h3>

        <p className="text-slate-600 leading-8">
          Develops delegation, motivation and decision-making skills,
          preparing employees to confidently lead teams and influence
          positive business outcomes.
        </p>

      </div>

      <div className="group bg-white rounded-[32px] border border-blue-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300">

        <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-6">
          05
        </div>

        <h3 className="text-2xl font-bold mb-5 group-hover:text-blue-700 transition-colors">
          Increased Productivity & Engagement
        </h3>

        <p className="text-slate-600 leading-8">
          Better planning, time management and goal-setting improve
          productivity while increasing employee engagement,
          motivation and commitment.
        </p>

      </div>

      <div className="group bg-white rounded-[32px] border border-cyan-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-cyan-300 transition-all duration-300">

        <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xl mb-6">
          06
        </div>

        <h3 className="text-2xl font-bold mb-5 group-hover:text-cyan-700 transition-colors">
          Stronger Workplace Culture
        </h3>

        <p className="text-slate-600 leading-8">
          Encourages respect, inclusivity, collaboration and a
          growth mindset, helping organizations build a positive
          and high-performing work culture.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Statistics */}
<section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6">

<div className="relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 rounded-[40px] p-14 shadow-2xl overflow-hidden">
                <p className="text-2xl text-white leading-10 font-medium max-w-4xl">
              According to recent studies, companies that invest in soft
              skills training see up to 25% higher profitability and
              2.5x longer employee retention rates.
            </p>

          </div>

        </div>

      </section>

      {/* Categories */}
       <section className="py-24 bg-[#0f1235] overflow-hidden">

           <div className="container mx-auto px-6">


     {/* Heading */}
    <div className="text-center mb-20">

      <span className="inline-flex bg-violet-500/20 text-violet-200 px-6 py-2 rounded-full text-sm font-semibold">
        Skill Mastery
      </span>

      <h2 className="text-5xl font-bold text-white mt-6">
        Soft Skills Categories
      </h2>

      <p className="text-slate-300 text-xl mt-5 max-w-3xl mx-auto leading-8">
        Master the personal, interpersonal and professional capabilities
        that define high-performing employees and future leaders.
      </p>

    </div>

            {/* Personal */}
            
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {/* Personal */}
  <div className="group bg-gradient-to-br from-pink-500 to-rose-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">

    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-bold mb-6">
      01
    </div>


<h3 className="text-2xl font-bold leading-tight mb-8">
      Personal Soft Skills
    </h3>

    <ul className="space-y-3 text-lg text-pink-100">

      <li>✓ Self-awareness</li>
      <li>✓ Adaptability</li>
      <li>✓ Resilience</li>
      <li>✓ Work ethic</li>
      <li>✓ Time management</li>
      <li>✓ Stress management</li>
      <li>✓ Positive attitude</li>
      <li>✓ Integrity</li>
      <li>✓ Learning agility</li>

    </ul>

  </div>

  {/* Interpersonal */}
  <div className="group bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">

    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-bold mb-6">
      02
    </div>

    <h3 className="text-2xl font-bold mb-8">
      Interpersonal Soft Skills
    </h3>

    <ul className="space-y-3 text-lg text-violet-100">

      <li>✓ Communication</li>
      <li>✓ Active listening</li>
      <li>✓ Teamwork</li>
      <li>✓ Conflict resolution</li>
      <li>✓ Empathy</li>
      <li>✓ Networking</li>
      <li>✓ Cultural awareness</li>
      <li>✓ Customer service orientation</li>
      <li>✓ Persuasion</li>

    </ul>

  </div>

  {/* Professional */}
  <div className="group bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">

    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-bold mb-6">
      03
    </div>

    <h3 className="text-2xl font-bold mb-8">
      Professional Soft Skills
    </h3>

    <ul className="space-y-3 text-lg text-cyan-100">

      <li>✓ Leadership</li>
      <li>✓ Decision-making</li>
      <li>✓ Problem-solving</li>
      <li>✓ Critical thinking</li>
      <li>✓ Negotiation</li>
      <li>✓ Creativity</li>
      <li>✓ Attention to detail</li>
      <li>✓ Mentoring / Coaching</li>
      <li>✓ Collaboration tools proficiency</li>

    </ul>

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
        Soft Skills Training Courses
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Explore our soft skills learning programs designed
        to improve communication, collaboration,
        leadership and workplace effectiveness.
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

                <Brain className="h-10 w-10 text-white" />

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

      <Link href="/courses?category=soft-skills-training">

        <button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">

          View All Soft Skills Courses

        </button>

      </Link>

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