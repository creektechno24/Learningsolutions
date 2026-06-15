'use client'



import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface AdminActionButtonsProps {
  id: string
  status: 'approved' | 'pending' | 'rejected'
  type: 'trainer' | 'enterprise' | 'training-request'
}
export function AdminActionButtons({
  id,
  status,
  type,
 // onStatusChange,
}: AdminActionButtonsProps) {
  const [loading, setLoading] = useState(false)

  const updateStatus = async (
    newStatus: 'approved' | 'pending' | 'rejected'
  ) => {
      console.log('ID:', id)
  console.log('TYPE:', type)

    try {
      setLoading(true)

     const endpoint =
  type === 'trainer'
    ? `/api/admin/trainers/${id}`
    : type === 'enterprise'
    ? `/api/admin/enterprises/${id}`
    : `/api/admin/training-requests/${id}`

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed')
      }

      //onStatusChange(newStatus)
      window.location.reload()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      {status !== 'approved' && (
        <Button
          size="sm"
          disabled={loading}
          onClick={() => updateStatus('approved')}
        >
          Approve
        </Button>
      )}

      {status !== 'rejected' && (
        <Button
          size="sm"
          variant="destructive"
          disabled={loading}
          onClick={() => updateStatus('rejected')}
        >
          Reject
        </Button>
      )}
    </div>
  )
}