import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'

import {
  ShieldCheck,
  Clock3,
  BarChart3,
  ArrowRight
} from 'lucide-react'
export default async function IndustrialSafetyPage() {
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
    'industrial-safety'
  )
  .limit(6)
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
                Curated Training Program
              </span>

              <h1 className="text-6xl font-bold text-white mt-6 mb-6">
                Industrial Safety Training
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Industrial Safety training is a cornerstone of workplace
                well-being, especially in environments where physical hazards
                are part of daily operations.
              </p>

            </div>

           <div className="space-y-6">

  <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden shadow-2xl bg-white">
    <Image
      src="/images/training-programs/SSI-1.webp"
      alt="Industrial Safety"
      fill
      className="object-contain p-4"
    />
  </div>

  <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden shadow-2xl bg-white">
    <Image
      src="/images/training-programs/SSI-2.webp"
      alt="Industrial Safety"
      fill
      className="object-contain p-4"
    />
  </div>

</div>

          </div>

        </div>

      </section>

      {/* What Is Industrial Safety Training */}
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6 max-w-7xl">

    <div className="bg-white rounded-[40px] border border-slate-200 shadow-xl p-12">

      <div className="text-center mb-14">

        <span className="inline-flex bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-semibold">
          Industrial Safety
        </span>

        <h2 className="text-5xl font-bold mt-6">
          What Is Industrial Safety Training?
        </h2>

        <p className="text-xl text-slate-600 leading-8 mt-6 max-w-3xl mx-auto">
          Industrial Safety Training is a structured program designed to
          educate employees about:
        </p>

      </div>

      {/* Safety Topics */}

      <div className="grid md:grid-cols-2 gap-8">

        <div className="group bg-gradient-to-br from-orange-500 to-red-500 rounded-[28px] p-8 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-5xl mb-6">⚠️</div>

          <h3 className="text-2xl font-bold mb-4">
            Workplace Hazards
          </h3>

          <p className="text-orange-100 leading-8">
            Workplace hazards (chemical, mechanical, electrical, etc.)
          </p>

        </div>

        <div className="group bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[28px] p-8 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-5xl mb-6">⚙️</div>

          <h3 className="text-2xl font-bold mb-4">
            Safe Operating Procedures
          </h3>

          <p className="text-blue-100 leading-8">
            Safe operating procedures for machinery and equipment
          </p>

        </div>

        <div className="group bg-gradient-to-br from-rose-500 to-pink-600 rounded-[28px] p-8 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-5xl mb-6">🚨</div>

          <h3 className="text-2xl font-bold mb-4">
            Emergency Response
          </h3>

          <p className="text-rose-100 leading-8">
            Emergency response protocols
          </p>

        </div>

        <div className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-[28px] p-8 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-5xl mb-6">🦺</div>

          <h3 className="text-2xl font-bold mb-4">
            Personal Protective Equipment
          </h3>

          <p className="text-green-100 leading-8">
            Use of Personal Protective Equipment (PPE)
          </p>

        </div>

        <div className="group md:col-span-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-[28px] p-8 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-5xl mb-6">📋</div>

          <h3 className="text-2xl font-bold mb-4">
            Risk Assessment & Hazard Identification
          </h3>

          <p className="text-violet-100 leading-8">
            Risk assessment and hazard identification
          </p>

        </div>

      </div>

      {/* Delivery Methods */}

      <div className="mt-20">

        <h3 className="text-4xl font-bold text-center mb-12">
          Training can be delivered through:
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-[28px] p-8 text-center text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-5">🏫</div>

            <h4 className="text-xl font-bold">
              Classroom sessions
            </h4>

          </div>

          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-[28px] p-8 text-center text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-5">💻</div>

            <h4 className="text-xl font-bold">
              Online modules
            </h4>

          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-[28px] p-8 text-center text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-5">🛠️</div>

            <h4 className="text-xl font-bold">
              Hands-on simulations
            </h4>

          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-[28px] p-8 text-center text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-5">👷</div>

            <h4 className="text-xl font-bold">
              Toolbox talks and refresher courses
            </h4>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Why Important */}
     <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6 max-w-7xl">

    <div className="text-center mb-16">

      <span className="inline-flex bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-semibold">
        Safety Benefits
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Why Is It Important?
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Industrial safety training helps organizations create safer,
        healthier and more productive workplaces.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="group bg-gradient-to-br from-red-500 to-rose-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">🚧</div>

        <h3 className="text-2xl font-bold mb-5">
          1. Reduces Workplace Accidents
        </h3>

        <p className="text-red-100 leading-8">
          Proper training minimizes human error and unsafe practices.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5 text-red-100 leading-7">
          Example: A manufacturing firm saw a 40% drop in accidents after
          implementing machinery safety training.
        </div>

      </div>

      {/* Card 2 */}

      <div className="group bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">📜</div>

        <h3 className="text-2xl font-bold mb-5">
          2. Ensures Legal Compliance
        </h3>

        <p className="text-blue-100 leading-8">
          Meets regulatory standards like OSHA, ISO, or local labor laws.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5 text-blue-100 leading-7">
          Avoids fines, shutdowns, and legal liabilities.
        </div>

      </div>

      {/* Card 3 */}

      <div className="group bg-gradient-to-br from-orange-500 to-amber-500 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">👀</div>

        <h3 className="text-2xl font-bold mb-5">
          3. Boosts Employee Awareness
        </h3>

        <p className="text-orange-100 leading-8">
          Workers become more alert to potential hazards.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5 text-orange-100 leading-7">
          Example: Chemical plant employees reduced spill incidents after
          hazard handling training.
        </div>

      </div>

      {/* Card 4 */}

      <div className="group bg-gradient-to-br from-emerald-500 to-green-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">📈</div>

        <h3 className="text-2xl font-bold mb-5">
          4. Improves Productivity
        </h3>

        <p className="text-green-100 leading-8">
          A safe environment allows employees to focus on tasks without
          fear.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5 text-green-100 leading-7">
          Example: Logistics operations improved by 15% after lifting
          technique training.
        </div>

      </div>

      {/* Card 5 */}

      <div className="group bg-gradient-to-br from-violet-600 to-purple-700 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">💪</div>

        <h3 className="text-2xl font-bold mb-5">
          5. Enhances Confidence and Morale
        </h3>

        <p className="text-violet-100 leading-8">
          Employees feel empowered to handle emergencies and operate
          equipment safely.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5 text-violet-100 leading-7">
          This leads to higher job satisfaction and lower turnover.
        </div>

      </div>

      {/* Card 6 */}

      <div className="group bg-gradient-to-br from-sky-500 to-blue-700 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">🏥</div>

        <h3 className="text-2xl font-bold mb-5">
          6. Lowers Injury and Illness Rates
        </h3>

        <p className="text-sky-100 leading-8">
          Reduces absenteeism and healthcare costs.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5 text-sky-100 leading-7">
          Fewer disruptions in workflow and better team cohesion.
        </div>

      </div>

    </div>

  </div>

</section>

      {/* Impact */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="container mx-auto px-6 max-w-7xl">

    <div className="text-center mb-16">

      <span className="inline-flex bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-semibold">
        Employee Benefits
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Impact on Employees
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto">
        Industrial Safety Training creates a healthier, safer and more
        productive workforce.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="group bg-gradient-to-br from-emerald-500 to-green-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">💚</div>

        <h3 className="text-2xl font-bold mb-5">
          Physical Well-being
        </h3>

        <p className="text-emerald-100 leading-8">
          Fewer injuries and long-term health issues
        </p>

      </div>

      {/* Card 2 */}

      <div className="group bg-gradient-to-br from-sky-500 to-blue-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">🧠</div>

        <h3 className="text-2xl font-bold mb-5">
          Mental Health
        </h3>

        <p className="text-sky-100 leading-8">
          Reduced stress and anxiety about workplace safety
        </p>

      </div>

      {/* Card 3 */}

      <div className="group bg-gradient-to-br from-violet-600 to-purple-700 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">📚</div>

        <h3 className="text-2xl font-bold mb-5">
          Professional Development
        </h3>

        <p className="text-violet-100 leading-8">
          Skills in risk management and emergency response
        </p>

      </div>

      {/* Card 4 */}

      <div className="group bg-gradient-to-br from-orange-500 to-red-500 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">🤝</div>

        <h3 className="text-2xl font-bold mb-5">
          Engagement & Retention
        </h3>

        <p className="text-orange-100 leading-8">
          Higher morale and loyalty due to a caring work environment
        </p>

      </div>

      {/* Card 5 */}

      <div className="group bg-gradient-to-br from-pink-500 to-rose-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">🚀</div>

        <h3 className="text-2xl font-bold mb-5">
          Career Advancement
        </h3>

        <p className="text-pink-100 leading-8">
          Safety certifications can lead to promotions and leadership roles
        </p>

      </div>

      {/* Card 6 */}

      <div className="group bg-gradient-to-br from-slate-700 to-slate-900 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center">

        <div className="text-6xl mb-6">🛡️</div>

        <h3 className="text-2xl font-bold mb-5">
          Safer Workplace
        </h3>

        <p className="text-slate-300 leading-8">
          Industrial Safety Training protects employees while improving
          confidence, productivity and long-term organizational success.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Long Term Benefits */}
     <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6 max-w-7xl">

    <div className="text-center mb-16">

      <span className="inline-flex bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full text-sm font-semibold">
        Organizational Benefits
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Long-Term Benefits for Organizations
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Investing in industrial safety creates long-term operational,
        financial and organizational value.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {/* Card 1 */}

      <div className="group bg-gradient-to-br from-emerald-500 to-green-600 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">💰</div>

        <h3 className="text-2xl font-bold mb-5">
          Lower Insurance Premiums
        </h3>

        <p className="text-emerald-100 leading-8">
          Lower insurance premiums
        </p>

      </div>

      {/* Card 2 */}

      <div className="group bg-gradient-to-br from-orange-500 to-red-500 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">⚙️</div>

        <h3 className="text-2xl font-bold mb-5">
          Operational Efficiency
        </h3>

        <p className="text-orange-100 leading-8">
          Reduced downtime and equipment damage
        </p>

      </div>

      {/* Card 3 */}

      <div className="group bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">🤝</div>

        <h3 className="text-2xl font-bold mb-5">
          Reputation & Trust
        </h3>

        <p className="text-blue-100 leading-8">
          Improved reputation and trust with clients and regulators
        </p>

      </div>

      {/* Card 4 */}

      <div className="group bg-gradient-to-br from-violet-600 to-purple-700 rounded-[32px] p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-5xl mb-6">📈</div>

        <h3 className="text-2xl font-bold mb-5">
          Continuous Improvement
        </h3>

        <p className="text-violet-100 leading-8">
          Culture of accountability and continuous improvement
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Available Courses */}
{/* Available Courses */}
<section className="pb-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex bg-violet-100 text-violet-700 px-6 py-2 rounded-full text-sm font-semibold">
        Available Courses
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Industrial Safety Training Courses
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Explore our industrial safety learning programs designed
        to improve workplace safety, regulatory compliance,
        hazard prevention and risk management.
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

                <ShieldCheck className="h-10 w-10 text-white" />

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

      <Link href="/courses?category=industrial-safety-training">

        <button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">

          View All Industrial Safety Courses

        </button>

      </Link>

    </div>

  </div>

</section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <p className="text-xl max-w-4xl mx-auto mb-10">
            If you’re looking to implement or improve safety training in your
            organization, we can help you design a tailored program or even
            simulate a training module. Want to explore that next? we are just
            a call away…
          </p>

        </div>

      </section>

    </main>
  )
}