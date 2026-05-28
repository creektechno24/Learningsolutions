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
  const [search, setSearch] = useState(searchParams?.get('search') || '')
  const [specialty, setSpecialty] = useState(searchParams?.get('specialty') || '')
  const [sort, setSort] = useState(searchParams?.get('sort') || 'created_at')

  const currentPage = parseInt(searchParams?.get('page') || '1')

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

        const response = await fetch(`/api/trainers?${params.toString()}`)
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
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Find Expert Trainers
          </h1>
          <p className="text-gray-600">
            Connect with verified and experienced professionals
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
                  placeholder="Trainer name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Specialty</h3>
                <Input
                  placeholder="e.g., JavaScript, Python..."
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Sort By</h3>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="created_at">Newest</option>
                  <option value="experience">Most Experienced</option>
                  <option value="rate_low">Rate: Low to High</option>
                  <option value="rate_high">Rate: High to Low</option>
                </select>
              </div>

              <Button 
                onClick={() => {
                  setSearch('')
                  setSpecialty('')
                  setSort('created_at')
                }} 
                variant="outline" 
                className="w-full"
              >
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
            ) : trainers.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {trainers.map((trainer) => (
                    <TrainerCard key={trainer.id} {...trainer} />
                  ))}
                </div>

                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-12">
                    {currentPage > 1 && (
                      <Link href={`/trainers?page=${currentPage - 1}`}>
                        <Button variant="outline" size="sm">
                          <ChevronLeft size={16} />
                        </Button>
                      </Link>
                    )}

                    {[...Array(pagination.pages)].map((_, index) => {
                      const pageNum = index + 1
                      const isActive = pageNum === currentPage
                      return (
                        <Link key={pageNum} href={`/trainers?page=${pageNum}`}>
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
                      <Link href={`/trainers?page=${currentPage + 1}`}>
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
                <p className="text-gray-600 text-lg">No trainers found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default function TrainersPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-12">Loading...</div>
      </main>
    }>
      <TrainersPageContent />
    </Suspense>
  )
}
