import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Check, X, Loader2 } from 'lucide-react'

interface AdminActionButtonsProps {
  id: string
  status: string
  type: 'trainer' | 'enterprise'
  onStatusChange?: (newStatus: string) => void
}

export function AdminActionButtons({
  id,
  status,
  type,
  onStatusChange,
}: AdminActionButtonsProps) {
  const [loading, setLoading] = useState(false)

  const handleApprove = async () => {
    setLoading(true)
    try {
      const endpoint = `/api/admin/${type === 'trainer' ? 'trainers' : 'enterprises'}/${id}`
      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved' }),
      })

      if (!response.ok) throw new Error('Failed to approve')
      onStatusChange?.('approved')
    } catch (error) {
      console.error('Approval error:', error)
      alert('Failed to approve')
    } finally {
      setLoading(false)
    }
  }

  const handleReject = async () => {
    setLoading(true)
    try {
      const endpoint = `/api/admin/${type === 'trainer' ? 'trainers' : 'enterprises'}/${id}`
      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'rejected' }),
      })

      if (!response.ok) throw new Error('Failed to reject')
      onStatusChange?.('rejected')
    } catch (error) {
      console.error('Rejection error:', error)
      alert('Failed to reject')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'approved' || status === 'rejected') {
    return null
  }

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant="default"
        onClick={handleApprove}
        disabled={loading}
        className="gap-1"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
        Approve
      </Button>
      <Button
        size="sm"
        variant="destructive"
        onClick={handleReject}
        disabled={loading}
        className="gap-1"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <X size={16} />}
        Reject
      </Button>
    </div>
  )
}
