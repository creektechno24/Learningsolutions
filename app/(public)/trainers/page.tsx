'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { TrainerCard } from '@/components/trainer-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Trainer {
  id: string
  first_name: string
  last_name: string
  bio: string
  profile_image_url: string
  expertise: string[]
  qualification: string
  years_of_experience: number
  hourly_rate: number
  is_verified: boolean
}

interface PaginationData {
  data: Trainer[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

function TrainersPageContent() {
  const searchParams = useSearchParams()

  const [trainers, setTrainers] = useState<Trainer[]>([])
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 1,
    total: 0,
  })

  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState(
    searchParams?.get('search') || ''
  )

  const [specialty, setSpecialty] = useState(
    searchParams?.get('specialty') || ''
  )

  const [sort, setSort] = useState(
    searchParams?.get('sort') || 'created_at'
  )

  const currentPage = parseInt(
    searchParams?.get('page') || '1'
  )

  useEffect(() => {
    const fetchTrainers = async () => {
      setLoading(true)

      try {
        const params = new URLSearchParams()

        params.set('page', currentPage.toString())
        params.set('limit', '12')

        if (search) params.set('search', search)
        if (specialty) {
  params.set(
    'specialty',
    specialty.toLowerCase().trim()
  )
}
        if (sort) params.set('sort', sort)

        const response = await fetch(
          `/api/trainers?${params.toString()}`
        )

        const data: PaginationData = await response.json()

        setTrainers(data.data || [])
        setPagination(
  data.pagination || {
    page: 1,
    pages: 1,
    total: 0,
  }
)
      } catch (error) {
        console.error('Error fetching trainers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrainers()
  }, [currentPage, search, specialty, sort])

  return (
    <main className="min-h-screen bg-slate-50">

<section className="relative h-[700px] overflow-hidden">

  {/* Background Image */}
 <Image
  src="/images/hero/training-hero1.jpg"
  alt="Corporate Trainers"
  fill
  priority
  className="object-cover object-center"
/>

  {/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate-950/75 to-black/20" />
  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 h-full flex items-center pt-20">

    <div className="max-w-3xl">

      <span className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 border border-blue-500/30 text-blue-100 font-medium">
        ⭐ CORPORATE TRAINING EXPERTS
      </span>

   <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] mt-8">
  Meet Our
  <br />
 <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
  Expert Trainers
</span>
</h1>

<p className="text-2xl text-white/90 mt-6 max-w-3xl leading-relaxed">
        Learn from experienced industry leaders,
        consultants and certified corporate trainers
        across India.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl">

        <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-4xl font-bold">
            {pagination.total}+
          </h3>
          <p className="text-slate-300">
            Expert Trainers
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
          <h3 className="text-4xl font-bold">
            100+
          </h3>
          <p className="text-slate-300">
            Programs
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
          <h3 className="text-4xl font-bold">
            25+
          </h3>
          <p className="text-slate-300">
            Years Experience
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
          <h3 className="text-4xl font-bold">
            2L+
          </h3>
          <p className="text-slate-300">
            Professionals Trained
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
   <div className="container mx-auto px-6 -mt-8 relative z-20">

     <div className="py-6">

  {/* Search Bar */}
<div className="relative overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(15,23,42,0.18)] border border-slate-200 p-12">

  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

  <div className="mb-8">
    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
      Find The Right Expert
    </p>

   <h3 className="text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
      Search Corporate Trainers
    </h3>

    <p className="text-slate-500 mt-4 text-lg max-w-3xl leading-relaxed">
      Explore trainers by expertise, industry experience and training specialization.
    </p>
  </div>

  <div className="grid lg:grid-cols-4 gap-6 items-center">
    <Input
      placeholder="Trainer Name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="h-16 rounded-3xl border-slate-200 bg-slate-50 px-6 text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    />

    <Input
      placeholder="Skill / Expertise"
      value={specialty}
      onChange={(e) => setSpecialty(e.target.value)}
      className="h-16 rounded-3xl border-slate-200 bg-slate-50 px-6 text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    />

    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="h-14 rounded-2xl border border-slate-200 px-5 bg-white"
    >
      <option value="created_at">Newest</option>
      <option value="experience">Most Experienced</option>
      <option value="rate_low">Lowest Rate</option>
      <option value="rate_high">Highest Rate</option>
    </select>

    <Button
      className="h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-base font-semibold"
    >
      Search Trainers
    </Button>

  </div>

  <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">

    <p className="text-slate-600 font-medium">
     Showing {pagination?.total || 0} expert trainers
    </p>

    <Button
      
  variant="outline"
  className="rounded-2xl border-slate-200 px-6"

      onClick={() => {
        setSearch('')
        setSpecialty('')
        setSort('created_at')
      }}
    >
      Reset Filters
    </Button>

  </div>

</div>

  {/* Heading */}
<div className="flex justify-between items-center mb-14 mt-20">
    <div>
      <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
  Our Experts
</p>
    <h2 className="text-5xl font-extrabold text-slate-900">
  Our Certified Corporate Trainers
</h2>

<p className="text-slate-500 text-lg mt-2">
  Connect with industry experts, facilitators and certified trainers for enterprise learning programs.
</p>
    </div>

  </div>

  {/* Cards */}
  {loading ? (
 <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-[420px] rounded-3xl bg-slate-200 animate-pulse"
        />
      ))}
    </div>
  ) : trainers.length > 0 ? (
    <>
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {trainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            {...trainer}
          />
        ))}
      </div>

    {/* Pagination */}
{pagination.pages > 1 && (
  <div className="flex items-center justify-center gap-4 mt-16">

    {currentPage > 1 && (
      <Link href={`/trainers?page=${currentPage - 1}`}>
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
        <Link
          key={pageNum}
          href={`/trainers?page=${pageNum}`}
        >
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
      <Link href={`/trainers?page=${currentPage + 1}`}>
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
    </>
  ) : (
    <div className="bg-white rounded-3xl border p-12 text-center">
      No trainers found
    </div>
  )}

</div>

      </div>
    </main>
  )
}

export default function TrainersPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
            Loading...
          </div>
        </main>
      }
    >
      <TrainersPageContent />
    </Suspense>
  )
}