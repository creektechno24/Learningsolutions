'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Clock, Users, Award, Mail, Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${slug}`)
        if (!response.ok) throw new Error('Course not found')
        const data = await response.json()
        setCourse(data)
      } catch (error) {
        console.error('Error fetching course:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">Loading...</div>
      </main>
    )
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <Link href="/courses">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Courses
            </Button>
          </Link>
          <div className="mt-8 bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">Course not found</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Link href="/courses">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Course Image */}
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-8">
              {course.course_image_url ? (
                <Image
                  src={course.course_image_url}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl">No Image</span>
                </div>
              )}
            </div>

            {/* Title and Meta */}
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            
            <div className="flex gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-blue-600" />
                <span className="text-gray-700">{course.duration_hours} hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-blue-600" />
                <span className="text-gray-700">Max {course.max_participants} participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-blue-600" />
                <span className="text-gray-700 capitalize">{course.level}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Course</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {course.description}
              </p>
              {course.long_description && (
                <p className="text-gray-600 leading-relaxed">
                  {course.long_description}
                </p>
              )}
            </div>

            {/* Trainer Info */}
            {course.trainers && (
              <div className="bg-white rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">Your Trainer</h3>
                <div className="flex gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    {course.trainers.profile_image_url ? (
                      <Image
                        src={course.trainers.profile_image_url}
                        alt={`${course.trainers.first_name} ${course.trainers.last_name}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-200 flex items-center justify-center font-bold">
                        {course.trainers.first_name?.charAt(0)}
                        {course.trainers.last_name?.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">
                      {course.trainers.first_name} {course.trainers.last_name}
                    </h4>
                    {course.trainers.bio && (
                      <p className="text-gray-600 text-sm mb-2">{course.trainers.bio}</p>
                    )}
                    <p className="text-gray-600 text-sm">
                      ${course.trainers.hourly_rate}/hour
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg p-8 sticky top-4 space-y-6">
              {/* Price */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Price</p>
                <div className="text-4xl font-bold text-blue-600">
                  ${course.price?.toFixed(2) || '0.00'}
                </div>
              </div>

              {/* Enroll Button */}
              <Button size="lg" className="w-full">
                Enroll Now
              </Button>

              {/* Rating */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 mb-2">Rating</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">{course.rating?.toFixed(1) || '0.0'}</span>
                  <span className="text-yellow-500">★</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{course.view_count} students viewed this</p>
              </div>

              {/* Category */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 mb-2">Category</p>
                <p className="font-semibold">{course.course_categories?.name || 'General'}</p>
              </div>

              {/* Contact Trainer */}
              <div className="border-t pt-6 space-y-3">
                <p className="text-sm text-gray-600">Contact Trainer</p>
                {course.trainers?.email && (
                  <a href={`mailto:${course.trainers.email}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Mail size={16} />
                    Email
                  </a>
                )}
                {course.trainers?.phone && (
                  <a href={`tel:${course.trainers.phone}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Phone size={16} />
                    Call
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
