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
        if (specialty) params.set('specialty', specialty)
        if (sort) params.set('sort', sort)

        const response = await fetch(
          `/api/trainers?${params.toString()}`
        )

        const data: PaginationData = await response.json()

        setTrainers(data.data || [])
        setPagination(data.pagination)
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

    <section className="bg-white border-b">
  <div className="container mx-auto px-6 py-12">

    <div className="flex items-center justify-between">

      <div>
        <span className="text-blue-600 font-semibold text-sm">
          VERIFIED TRAINERS
        </span>

        <h1 className="text-4xl font-bold text-slate-900 mt-2">
          Expert Corporate Trainers
        </h1>

        <p className="text-slate-600 mt-3 max-w-2xl">
          Connect with experienced industry experts, consultants and
          enterprise trainers for your workforce development needs.
        </p>
      </div>

      <div className="hidden lg:flex gap-10">

        <div>
          <div className="text-3xl font-bold text-slate-900">
            {pagination.total}+
          </div>

          <div className="text-slate-500 text-sm">
            Trainers
          </div>
        </div>

        <div>
          <div className="text-3xl font-bold text-slate-900">
            100+
          </div>

          <div className="text-slate-500 text-sm">
            Programs
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

      <div className="container mx-auto px-6 py-12">

     <div className="container mx-auto px-6 py-10">

  {/* Search Bar */}
  <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 mb-10">

    <div className="grid md:grid-cols-4 gap-4">

      <Input
        placeholder="Search trainers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Input
        placeholder="Specialty (React, AWS...)"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-xl px-4"
      >
        <option value="created_at">Newest</option>
        <option value="experience">Experience</option>
        <option value="rate_low">Low Rate</option>
        <option value="rate_high">High Rate</option>
      </select>

      <Button
        variant="outline"
        onClick={() => {
          setSearch('')
          setSpecialty('')
          setSort('created_at')
        }}
      >
        Clear Filters
      </Button>

    </div>

  </div>

  {/* Heading */}
  <div className="flex justify-between items-center mb-8">

    <div>
      <h2 className="text-3xl font-bold text-slate-900">
        Expert Trainers
      </h2>

      <p className="text-slate-500">
        {pagination.total} Trainers Available
      </p>
    </div>

  </div>

  {/* Cards */}
  {loading ? (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-[420px] rounded-3xl bg-slate-200 animate-pulse"
        />
      ))}
    </div>
  ) : trainers.length > 0 ? (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
          <div className="container mx-auto px-6 py-12">
            Loading...
          </div>
        </main>
      }
    >
      <TrainersPageContent />
    </Suspense>
  )
}