'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { TrainerCard } from '@/components/trainer-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

<section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">  <div className="container mx-auto px-6 py-20">

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      CORPORATE TRAINING EXPERTS
    </span>

    <h1 className="text-5xl font-bold mt-6">
      Meet Our Expert Trainers
    </h1>

    <p className="text-xl text-slate-200 mt-4 max-w-3xl">
      Learn from experienced industry leaders, consultants and
      certified corporate trainers across India.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">

      <div>
        <h2 className="text-4xl font-bold">
        {pagination?.total || 0}+
        </h2>
        <p className="text-slate-300">
          Expert Trainers
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">
          100+
        </h2>
        <p className="text-slate-300">
          Programs
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">
          25+
        </h2>
        <p className="text-slate-300">
          Years Experience
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">
          2L+
        </h2>
        <p className="text-slate-300">
          Professionals Trained
        </p>
      </div>

    </div>

  </div>
</section>

      <div className="container mx-auto px-6 -mt-16 relative z-20">

     <div className="py-6">

  {/* Search Bar */}
 <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.12)] p-12 mb-14">

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
  <div className="flex justify-between items-center mb-10 mt-4">

    <div>
    <h2 className="text-4xl font-bold text-slate-900">
  Our Certified Corporate Trainers
</h2>

<p className="text-slate-500 text-lg mt-2">
  Connect with industry experts, facilitators and certified trainers for enterprise learning programs.
</p>
    </div>

  </div>

  {/* Cards */}
  {loading ? (
 <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-[420px] rounded-3xl bg-slate-200 animate-pulse"
        />
      ))}
    </div>
  ) : trainers.length > 0 ? (
    <>
   <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {trainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            {...trainer}
          />
        ))}
      </div>
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