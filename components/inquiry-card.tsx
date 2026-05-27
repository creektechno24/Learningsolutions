'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface InquiryCardProps {
  inquiry: any
  onDelete?: (id: string) => void
}

export function InquiryCard({ inquiry, onDelete }: InquiryCardProps) {
  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{inquiry.subject}</h3>
            {inquiry.courses && (
              <p className="text-sm text-gray-600 mt-1">Course: {inquiry.courses.title}</p>
            )}
          </div>
          <Badge className={statusColors[inquiry.status] || 'bg-gray-100 text-gray-800'}>
            {inquiry.status}
          </Badge>
        </div>

        <p className="text-sm text-gray-700 line-clamp-2">{inquiry.message}</p>

        <div className="grid grid-cols-3 gap-2 text-sm">
          {inquiry.participant_count && (
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600">Participants</p>
              <p className="font-semibold">{inquiry.participant_count}</p>
            </div>
          )}
          {inquiry.budget && (
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600">Budget</p>
              <p className="font-semibold">${inquiry.budget.toLocaleString()}</p>
            </div>
          )}
          {inquiry.required_date && (
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-gray-600">Required Date</p>
              <p className="font-semibold">{formatDate(inquiry.required_date)}</p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-2 border-t">
          <p className="text-xs text-gray-500">
            Created: {formatDate(inquiry.created_at)}
          </p>
          <Link href={`/dashboard/enterprise/inquiries/${inquiry.id}`}>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
