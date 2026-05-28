'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface AdminActionButtonsProps {
  id: string
  status: 'approved' | 'pending' | 'rejected'
  type: 'trainer'
  onStatusChange: (
    status: 'approved' | 'pending' | 'rejected'
  ) => void
}

export function AdminActionButtons({
  id,
  status,
  onStatusChange,
}: AdminActionButtonsProps) {
  const [loading, setLoading] = useState(false)

  const updateStatus = async (
    newStatus: 'approved' | 'pending' | 'rejected'
  ) => {
    try {
      setLoading(true)

      const response = await fetch(
        `/api/admin/trainers/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      )

      const data = await response.json()

      console.log(data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed')
      }

      onStatusChange(newStatus)
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