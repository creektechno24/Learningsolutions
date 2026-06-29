import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

import {
  Laptop,
  Clock3,
  BarChart3,
  ArrowRight
} from 'lucide-react'

export default async function ITITESPage() {

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
    'it-ites-training'
  )
  .limit(6)
  return (
   <section className="pb-24 bg-gradient-to-b from-cyan-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex bg-cyan-100 text-cyan-700 px-6 py-2 rounded-full text-sm font-semibold">
        Available Courses
      </span>

      <h2 className="text-5xl font-bold mt-6">
        IT & ITES Training Courses
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Explore our IT & ITES learning programs designed to improve
        technical capabilities, customer service and business operations.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      {courses?.map((course) => (

        <Link
          key={course.id}
          href={`/courses/${course.slug}`}
        >

          <div className="group bg-white rounded-[36px] border border-cyan-100 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-cyan-300 transition-all duration-300 overflow-hidden h-full">

            {/* Header */}

            <div className="bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-700 p-8">

              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">

                <Laptop className="h-10 w-10 text-white" />

              </div>

            </div>

            {/* Body */}

            <div className="p-8">

              <h3 className="text-2xl font-bold text-slate-900 mb-5 group-hover:text-cyan-600 transition-colors">

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

                    <Clock3 className="h-5 w-5 text-cyan-600" />

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

                    <BarChart3 className="h-5 w-5 text-cyan-600" />

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

                <div className="w-14 h-14 rounded-full border-2 border-cyan-200 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">

                  <ArrowRight className="h-6 w-6" />

                </div>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

    <div className="text-center mt-14">

      <Link href="/courses?category=it-ites-training">

        <button className="bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-700 hover:from-cyan-600 hover:via-sky-700 hover:to-blue-800 text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">

          View All IT & ITES Courses

        </button>

      </Link>

    </div>

  </div>

</section>
  )
}