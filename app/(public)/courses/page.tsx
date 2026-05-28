'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CourseCard } from '@/components/course-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Course {
  id: string
  title: string
  slug: string
  description: string
  thumbnail_url: string
  duration_hours: number
  price: number
  rating: number
  level: string
  trainers: any
  course_categories: any
}

interface PaginationData {
  data: Course[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

function CoursesPageContent() {
  const searchParams = useSearchParams()
  const [courses, setCourses] = useState<Course[]>([])
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 1,
    total: 0,
  })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(searchParams?.get('search') || '')
  const [category, setCategory] = useState(searchParams?.get('category') || '')
  const [level, setLevel] = useState(searchParams?.get('level') || '')
  const [sort, setSort] = useState(searchParams?.get('sort') || 'created_at')

  const currentPage = parseInt(searchParams?.get('page') || '1')

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams()
        params.set('page', currentPage.toString())
        params.set('limit', '12')
        if (search) params.set('search', search)
        if (category) params.set('category', category)
        if (level) params.set('level', level)
        if (sort) params.set('sort', sort)

        const response = await fetch(`/api/courses?${params.toString()}`)
        const data: PaginationData = await response.json()
        setCourses(data.data || [])
        setPagination(data.pagination)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [currentPage, search, category, level, sort])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Explore Courses
          </h1>
          <p className="text-gray-600">
            Discover our comprehensive collection of professional training courses
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 space-y-6 sticky top-4">
              <div>
                <h3 className="font-semibold mb-3">Search</h3>
                <Input
                  placeholder="Course name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Level</h3>
                <div className="space-y-2">
                  {['beginner', 'intermediate', 'advanced'].map((l) => (
                    <label key={l} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="level"
                        value={l}
                        checked={level === l}
                        onChange={(e) => setLevel(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm capitalize">{l}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Sort By</h3>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="created_at">Newest</option>
                  <option value="rating">Top Rated</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>

              <Button onClick={() => {
                setSearch('')
                setCategory('')
                setLevel('')
                setSort('created_at')
              }} variant="outline" className="w-full">
                Clear Filters
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
                ))}
              </div>
            ) : courses.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {courses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-12">
                    {currentPage > 1 && (
                      <Link href={`/courses?page=${currentPage - 1}`}>
                        <Button variant="outline" size="sm">
                          <ChevronLeft size={16} />
                        </Button>
                      </Link>
                    )}

                    {[...Array(pagination.pages)].map((_, index) => {
                      const pageNum = index + 1
                      const isActive = pageNum === currentPage
                      return (
                        <Link key={pageNum} href={`/courses?page=${pageNum}`}>
                          <Button
                            variant={isActive ? 'default' : 'outline'}
                            size="sm"
                          >
                            {pageNum}
                          </Button>
                        </Link>
                      )
                    })}

                    {currentPage < pagination.pages && (
                      <Link href={`/courses?page=${currentPage + 1}`}>
                        <Button variant="outline" size="sm">
                          <ChevronRight size={16} />
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-gray-600 text-lg">No courses found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">Loading...</div>
      </main>
    }>
      <CoursesPageContent />
    </Suspense>
  )
}
