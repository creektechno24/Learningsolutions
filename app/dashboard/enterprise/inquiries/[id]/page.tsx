'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function InquiryDetailPage() {
  const [inquiry, setInquiry] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updating, setUpdating] = useState(false)
  const [newStatus, setNewStatus] = useState('')
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          router.push('/auth/login')
          return
        }

        const res = await fetch(`/api/enterprise/inquiries/${id}`)
        if (!res.ok) throw new Error('Failed to fetch inquiry')
        const data = await res.json()
        setInquiry(data)
        setNewStatus(data.status)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading inquiry')
      } finally {
        setLoading(false)
      }
    }

    fetchInquiry()
  }, [id, router])

  const handleStatusChange = async () => {
    if (newStatus === inquiry.status) return

    setUpdating(true)
    try {
      const res = await fetch(`/api/enterprise/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!res.ok) throw new Error('Failed to update status')
      const updated = await res.json()
      setInquiry(updated)
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error updating status')
      setNewStatus(inquiry.status)
    } finally {
      setUpdating(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return

    try {
      const res = await fetch(`/api/enterprise/inquiries/${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Failed to delete inquiry')
      router.push('/dashboard/enterprise/inquiries')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error deleting inquiry')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return <div className="text-center py-8">Loading inquiry...</div>
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">{error}</div>
  }

  if (!inquiry) {
    return <div className="text-center py-8">Inquiry not found</div>
  }

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{inquiry.subject}</h1>
          <p className="text-gray-600 mt-2">Created: {formatDate(inquiry.created_at)}</p>
        </div>
        <Badge className={statusColors[inquiry.status] || 'bg-gray-100 text-gray-800'}>
          {inquiry.status.toUpperCase()}
        </Badge>
      </div>

      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-4">Inquiry Details</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Course</p>
            <p className="font-medium">
              {inquiry.courses?.title || 'General Inquiry (No specific course)'}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Message</p>
            <p className="mt-1">{inquiry.message}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {inquiry.participant_count && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">Participants</p>
                <p className="font-semibold text-lg">{inquiry.participant_count}</p>
              </div>
            )}
            {inquiry.budget && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">Budget</p>
                <p className="font-semibold text-lg">${inquiry.budget.toLocaleString()}</p>
              </div>
            )}
            {inquiry.required_date && (
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">Required Date</p>
                <p className="font-semibold">{new Date(inquiry.required_date).toLocaleDateString()}</p>
              </div>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold text-lg mb-4">Update Status</h2>
        <div className="space-y-4">
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <Button
            onClick={handleStatusChange}
            disabled={updating || newStatus === inquiry.status}
          >
            {updating ? 'Updating...' : 'Update Status'}
          </Button>
        </div>
      </Card>

      <div className="flex gap-2">
        <Button variant="outline" onClick={() => router.back()}>
          Back
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          Delete Inquiry
        </Button>
      </div>
    </div>
  )
}
