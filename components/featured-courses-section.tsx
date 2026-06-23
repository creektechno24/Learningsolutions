'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import { CourseCard } from './course-card'
import { Button } from '@/components/ui/button'

export function FeaturedCoursesSection() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {

        const response = await fetch('/api/courses?limit=6')

        const data = await response.json()

        setCourses(data.data || [])
      } catch (error) {
        console.error('Error fetching featured courses:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedCourses()
  }, [])

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-4 mb-12">
            <div className="h-5 w-48 bg-slate-200 rounded-full animate-pulse" />
            <div className="h-12 w-96 bg-slate-200 rounded-xl animate-pulse" />
            <div className="h-6 w-[600px] bg-slate-200 rounded-xl animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[500px] rounded-[32px] bg-slate-100 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 md:py-28 overflow-hidden bg-white">

      {/* Background Effects */}
<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />

<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">

  <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
    <Sparkles className="w-4 h-4" />
    Latest Courses
  </div>

  <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 mb-6">
    Explore Our
    <span className="text-blue-600">
      {" "}Latest Learning Programs
    </span>
  </h2>

  <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
    Discover expertly designed learning programs and professional development
    courses curated to help individuals and organizations achieve measurable
    growth and long-term success.
  </p>

  <div className="mt-6 flex justify-center">
    <Link href="/courses">
      <Button
        size="lg"
        className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700"
      >
        Browse All Courses
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </Link>
  </div>

</div>

        {/* Courses Grid */}
        {courses.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course: any) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 py-20 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              No Courses Available
            </h3>

            <p className="text-slate-600 mb-8">
              Recently published training programs will appear here soon.
            </p>

            <Link href="/courses">
              <Button className="rounded-xl">
                Explore Courses
              </Button>
            </Link>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-[40px] bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-10 md:p-14">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl rounded-full px-4 py-2 text-sm text-blue-100 mb-6">
                Professional Learning Solutions
              </div>

              <h3 className="text-4xl font-bold text-white leading-tight mb-5">
                Accelerate Professional Growth
              </h3>

              <p className="text-blue-100 text-lg leading-relaxed">
               Advance careers and strengthen teams through expert-led training,
industry-recognized programs, and practical learning experiences.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/trainers">
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-2xl bg-white text-blue-700 hover:bg-slate-100"
                  >
                    Find Trainers
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-2xl border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}