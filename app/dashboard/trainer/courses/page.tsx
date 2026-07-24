'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Spinner } from '@/components/ui/spinner'
import { useRouter } from 'next/navigation'
import { BookOpen, Search } from 'lucide-react'

export default function CoursesListPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const router = useRouter()

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/trainer/courses')

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error || 'Failed to fetch courses')
      }

      const data = await response.json()
      setCourses(data)
    } catch (err) {
      console.error('[v0] Error fetching courses:', err)
      setError(err instanceof Error ? err.message : 'Failed to load courses')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const categories = [
  'all',
  ...new Set(
    courses
      .map((course) => course.course_categories?.name)
      .filter(Boolean)
  ),
]


 const filteredCourses = courses.filter((course) => {
  const matchesSearch = course.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

  const matchesCategory =
    selectedCategory === 'all' ||
    course.course_categories?.name === selectedCategory

  return matchesSearch && matchesCategory
})

 

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-gray-600 mt-2">
  Browse all published training courses.
</p>
        </div>
       
      </div>


<div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">

  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    {/* Search */}
  <div className="relative flex-1">

  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

  <input
    type="text"
    placeholder="Search courses..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
  />

</div>

    {/* Right Side */}
    <div className="flex items-center gap-4">

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === 'all'
              ? 'All Categories'
              : category}
          </option>
        ))}
      </select>

      <div className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
        {filteredCourses.length} Courses
      </div>

    </div>

  </div>

</div>

    



      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {courses.length === 0 ? (
       <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">

  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

    <BookOpen className="h-8 w-8 text-blue-600" />

  </div>

  <h3 className="text-xl font-semibold text-slate-900">
    No Courses Available
  </h3>

  <p className="mt-3 text-slate-600">
    Published courses assigned by the administrator will appear here.
  </p>

</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
           <div
  key={course.id}
  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
> 
             
 <div className="flex items-start justify-between mb-5">

  <div className="flex-1">

   <div className="flex items-center justify-between gap-3">

  <h3 className="text-xl font-semibold text-slate-900">
    {course.title}
  </h3>

  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 capitalize">
    {course.level}
  </span>

</div>

    <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
      {course.description || "No description available."}
    </p>


    <div className="mt-4">

  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">

    {course.course_categories?.name || "General"}

  </span>

</div>

  </div>

<div className="ml-4 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
<BookOpen className="h-5 w-5 text-blue-600" />
  </div>

</div>

<div className="grid grid-cols-2 gap-4 border-t pt-4">

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-500">
      Duration
    </p>

    <p className="font-medium">
      {course.duration_hours || "N/A"} Hours
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-500">
      Level
    </p>

    <p className="font-medium capitalize">
      {course.level}
    </p>
  </div>

</div>

<div className="mt-6 border-t pt-4 flex items-center justify-between">

  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
    Published
  </span>

  <Link
    href={`/dashboard/trainer/courses/${course.id}`}
    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
  >
    View Details →
  </Link>

</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
