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
        const response = await fetch('/api/courses?limit=6&sort=featured')

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
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Featured Enterprise Programs
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Discover Premium Workforce
              <span className="block text-blue-700">
                Learning Experiences
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore expertly curated enterprise learning programs designed to
              enhance workforce capabilities, technical expertise, and business
              performance.
            </p>
          </div>

          {/* CTA */}
          <div>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-7 rounded-2xl border-slate-300 hover:border-blue-200 hover:bg-blue-50"
              >
                Browse All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
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
              Featured enterprise programs will appear here soon.
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
                Enterprise Learning Solutions
              </div>

              <h3 className="text-4xl font-bold text-white leading-tight mb-5">
                Build A Future-Ready Workforce
              </h3>

              <p className="text-blue-100 text-lg leading-relaxed">
                Accelerate organizational growth with customized enterprise
                learning programs, expert trainers, and scalable workforce
                transformation solutions.
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
                    Contact Sales
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