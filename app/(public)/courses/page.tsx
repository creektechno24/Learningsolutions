'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CourseCard } from '@/components/course-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

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


  const categoryTitles: Record<string, string> = {
  'behavioral-training': 'Behavioral Training',
  'core-hr-trainings': 'Core HR Trainings',
  leadership: 'Leadership',
  retail: 'Retail',
  'soft-skills': 'Soft Skills Training',
  'industrial-safety': 'Industrial Safety',
  'it-ites': 'IT & ITES',
}


  useEffect(() => {
  setCategory(searchParams?.get('category') || '')
}, [searchParams])

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

        const response = await fetch(
  `/api/courses?${params.toString()}`,
  {
    cache: 'no-store',
  }
)
        const data: PaginationData = await response.json()
        console.log(data.pagination)

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
   <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header */}
  <section className="relative overflow-hidden py-40 md:py-52">

  {/* Background Image */}
  <div className="absolute inset-0">
  <Image
  src="/images/hero/image2.jpg"
  alt="Corporate Training"
  fill
  className="object-cover object-center"
/>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-slate-950/75" />

  <div className="relative container mx-auto px-6 text-center">

    <span className="inline-block px-5 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 mb-6">
      Premium Training Programs
    </span>

    <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
      Discover. Learn. Grow.
    </h1>

    <p className="mt-6 text-xl text-slate-200 max-w-3xl mx-auto">
      Explore our premium collection of professional training programs designed
      to build skills, enhance productivity, and drive growth.
    </p>

  </div>

  </section>



<div className="container mx-auto px-6 -mt-24 relative z-20 pb-8">

 <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl rounded-[40px] shadow-[0_30px_100px_rgba(15,23,42,0.15)] border border-white p-10 md:p-14">

    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-5">
      Professional Learning Programs
    </span>

    <h2 className="text-5xl font-bold text-slate-900 mb-4">
      {category
        ? categoryTitles[category]
        : 'All Training Programs'}
    </h2>

    <p className="text-lg text-slate-600">
      {pagination.total} published courses available for learning and workforce development.
    </p>

    <div className="flex flex-wrap gap-10 mt-10 pt-8 border-t border-slate-200">

  <div>
    <p className="text-3xl font-bold text-slate-900">
      500+
    </p>

    <p className="text-slate-500">
      Training Programs
    </p>
  </div>

  <div>
    <p className="text-3xl font-bold text-slate-900">
      100+
    </p>

    <p className="text-slate-500">
      Expert Trainers
    </p>
  </div>

  <div>
    <p className="text-3xl font-bold text-slate-900">
      50+
    </p>

    <p className="text-slate-500">
      Corporate Clients
    </p>
  </div>

</div>

  </div>


    <div className="flex items-center gap-3 mt-5">
  <div className="h-3 w-3 rounded-full bg-green-500"></div>

  <span className="text-slate-600 font-medium">
    {pagination.total} Active Training Programs
  </span>
</div>

</div>



<section className="container mx-auto px-6 -mt-2 relative z-30 mb-10">

  <div className="max-w-6xl mx-auto">

   <div className="p-2">

      <div className="flex flex-wrap gap-4">

           <Link href="/courses">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      !category
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1'
    }`}
  >
    All Categories
  </button>
</Link>

<Link href="/courses?category=behavioral-training">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      category === 'behavioral-training'
        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg scale-105'
        : 'bg-white hover:bg-blue-600 hover:text-white'
    }`}
  >
    Behavioral Training
  </button>
</Link>

<Link href="/courses?category=core-hr-trainings">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      category === 'core-hr-trainings'
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white hover:bg-blue-600 hover:text-white'
    }`}
  >
    Core HR Trainings
  </button>
</Link>

<Link href="/courses?category=leadership">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      category === 'leadership'
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white hover:bg-blue-600 hover:text-white'
    }`}
  >
    Leadership
  </button>
</Link>

<Link href="/courses?category=retail">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      category === 'retail'
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white hover:bg-blue-600 hover:text-white'
    }`}
  >
    Retail
  </button>
</Link>

<Link href="/courses?category=soft-skills">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      category === 'soft-skills'
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white hover:bg-blue-600 hover:text-white'
    }`}
  >
    Soft Skills
  </button>
</Link>

<Link href="/courses?category=industrial-safety">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      category === 'industrial-safety'
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white hover:bg-blue-600 hover:text-white'
    }`}
  >
    Industrial Safety
  </button>
</Link>

<Link href="/courses?category=it-ites">
  <button
    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
      category === 'it-ites'
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white hover:bg-blue-600 hover:text-white'
    }`}
  >
    IT & ITES
  </button>
</Link>


      </div>

    </div>

  </div>

</section>




 <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="space-y-8"> 
          {/* Sidebar - Filters */}
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.12)] p-12 mb-14">

  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

  <div className="mb-8">
    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
      Find The Right Program
    </p>

    <h3 className="text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
      Search Training Programs
    </h3>

    <p className="text-slate-500 mt-4 text-lg max-w-3xl leading-relaxed">
      Explore professional learning programs by category, level and specialization.
    </p>
  </div>

  <div className="grid lg:grid-cols-4 gap-6 items-center">

    <Input
      placeholder="Course Name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="h-16 rounded-3xl border-slate-200 bg-slate-50 px-6 text-lg"
    />

    <select
      value={level}
      onChange={(e) => setLevel(e.target.value)}
      className="h-16 rounded-3xl border border-slate-200 px-5 bg-slate-50"
    >
      <option value="">All Levels</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>

    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="h-16 rounded-3xl border border-slate-200 px-5 bg-slate-50"
    >
      <option value="created_at">Newest</option>
      <option value="price_low">Price: Low to High</option>
      <option value="price_high">Price: High to Low</option>
    </select>

    <Button className="h-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold">
      Search Programs
    </Button>

  </div>

  <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">

    <p className="text-slate-600 font-medium">
      Showing {pagination?.total || 0} training programs
    </p>

    <Button
      variant="outline"
      className="rounded-2xl border-slate-200 px-6"
      onClick={() => {
        setSearch('')
        setCategory('')
        setLevel('')
        setSort('created_at')
      }}
    >
      Reset Filters
    </Button>

  </div>

</div>

          {/* Main Content */}
          <div>
            {loading ? (
              <div className="rounded-[32px] bg-slate-50 border border-slate-100 p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded-lg h-96 animate-pulse" />
                ))}
              </div>
              </div>
            ) : courses.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {courses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-12">
                    {currentPage > 1 && (
                      <Link href={`/courses?page=${currentPage - 1}`}>
                       <Button
  variant="outline"
  className="rounded-xl px-4"
>
  <ChevronLeft size={16} className="mr-2" />
  Previous
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
  className="rounded-xl min-w-[44px]"
>
  {pageNum}
</Button>
                        </Link>
                      )
                    })}

                    {currentPage < pagination.pages && (
                      <Link href={`/courses?page=${currentPage + 1}`}>
                        <Button
  variant="outline"
  className="rounded-xl px-4"
>
  Next
  <ChevronRight size={16} className="ml-2" />
</Button>
                      </Link>
                    )}
                  </div>
                )}

                <section className="mt-20">

  <div className="rounded-[32px] bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-10 md:p-14 text-center">

    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm mb-6">
      Corporate Learning Solutions
    </span>

    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Need Custom Corporate Training?
    </h3>

    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
      Looking for customized learning programs for your workforce?
      Our training consultants can help design the right solution
      aligned with your business goals.
    </p>

    <Link href="/contact">
      <Button
        size="lg"
        className="rounded-2xl bg-white text-blue-700 hover:bg-slate-100"
      >
        Contact Our Team
      </Button>
    </Link>

  </div>

</section>
              </>

              
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center">

  <h3 className="text-2xl font-bold text-slate-900 mb-3">
    No Training Programs Found
  </h3>

  <p className="text-slate-600 mb-8">
    We couldn't find any courses matching your search criteria.
    Try adjusting your filters or browse all categories.
  </p>

  <Button
    variant="outline"
    onClick={() => {
      setSearch('')
      setCategory('')
      setLevel('')
      setSort('created_at')
    }}
  >
    Clear Filters
  </Button>

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
