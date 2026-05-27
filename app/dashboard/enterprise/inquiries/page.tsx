'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { InquiryCard } from '@/components/inquiry-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')
  const router = useRouter()

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          router.push('/auth/login')
          return
        }

        const url =
          filter === 'all'
            ? '/api/enterprise/inquiries'
            : `/api/enterprise/inquiries?status=${filter}`

        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed to fetch inquiries')
        const data = await res.json()
        setInquiries(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading inquiries')
      } finally {
        setLoading(false)
      }
    }

    fetchInquiries()
  }, [filter, router])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return

    try {
      const res = await fetch(`/api/enterprise/inquiries/${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Failed to delete inquiry')
      setInquiries((prev) => prev.filter((i) => i.id !== id))
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error deleting inquiry')
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading inquiries...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Training Inquiries</h1>
          <p className="text-gray-600 mt-2">Manage your training course inquiries</p>
        </div>
        <Link href="/dashboard/enterprise/inquiries/create">
          <Button>Create Inquiry</Button>
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
          {error}
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {['all', 'pending', 'in_progress', 'resolved', 'cancelled'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded font-medium transition-colors ${
              filter === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
          </button>
        ))}
      </div>

      {inquiries.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No inquiries found</p>
          <Link href="/dashboard/enterprise/inquiries/create">
            <Button>Create Your First Inquiry</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {inquiries.map((inquiry) => (
            <InquiryCard
              key={inquiry.id}
              inquiry={inquiry}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}
