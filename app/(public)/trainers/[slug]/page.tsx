'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Award, Mail, Phone, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { CourseCard } from '@/components/course-card'

export default function TrainerDetailPage() {
const params = useParams()

console.log('PARAMS =>', params)

const slug = params.slug as string

console.log('SLUG =>', slug)
  
  const [trainer, setTrainer] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await fetch(`/api/trainers/${slug}`)
        if (!response.ok) throw new Error('Trainer not found')
       const result = await response.json()

console.log( result)

setTrainer(result.data)
      } catch (error) {
        console.error('Error fetching trainer:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrainer()
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">Loading...</div>
      </main>
    )
  }

  if (!trainer) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <Link href="/trainers">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Trainers
            </Button>
          </Link>
          <div className="mt-8 bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">Trainer not found</p>
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
          <Link href="/trainers">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={20} />
              Back to Trainers
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Profile Section */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="md:w-1/4 flex-shrink-0">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
                {trainer.profile_image_url ? (
                  <Image
                    src={trainer.profile_image_url}
                    alt={`${trainer.first_name} ${trainer.last_name}`}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">
                      {trainer.first_name?.charAt(0)}
                      {trainer.last_name?.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="md:w-3/4">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    {trainer.first_name} {trainer.last_name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">{trainer.qualification}</p>
                  {trainer.is_verified && (
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <Award size={20} />
                      Verified Trainer
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">
                    ${trainer.hourly_rate}/hr
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-6 pb-6 border-b">
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="text-2xl font-bold">{trainer.years_of_experience}+ years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Courses Taught</p>
                  <p className="text-2xl font-bold">{trainer.courses?.length || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Students</p>
                  <p className="text-2xl font-bold">500+</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {trainer.bio}
              </p>

              {/* Contact Buttons */}
              <div className="flex gap-4">
                {trainer.email && (
                  <a href={`mailto:${trainer.email}`}>
                    <Button className="gap-2">
                      <Mail size={20} />
                      Send Email
                    </Button>
                  </a>
                )}
                {trainer.phone && (
                  <a href={`tel:${trainer.phone}`}>
                    <Button variant="outline" className="gap-2">
                      <Phone size={20} />
                      Call
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>


  

        {/* Expertise */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {trainer.expertise?.map((skill: string, index: number) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Courses */}
        {trainer.courses && trainer.courses.length > 0 && (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainer.courses.map((course: any) => (
                <div
                  key={course.id}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {course.thumbnail_url && (
                    <div className="relative w-full h-32 bg-gray-200">
                      <Image
                        src={course.thumbnail_url}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`}>
                      <Button size="sm" variant="outline" className="w-full">
                        View Course
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
