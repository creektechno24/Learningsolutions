'use client'

import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { StatusBadge } from '@/components/admin/status-badge'
import { AdminActionButtons } from '@/components/admin/admin-action-buttons'

export default function TrainersManagement() {
  const [trainers, setTrainers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTrainers()
  }, [])

  const fetchTrainers = async () => {
    try {
      const response = await fetch('/api/admin/trainers')
      const data = await response.json()
      setTrainers(data)
    } catch (error) {
      console.error('Error fetching trainers:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = (trainerId: string, newStatus: string) => {
    setTrainers(
      trainers.map((t) =>
        t.id === trainerId ? { ...t, status: newStatus } : t
      )
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Trainers Management</h1>
        <p className="text-gray-600">Review and approve trainer registrations</p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Expertise</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trainers.map((trainer) => (
              <TableRow key={trainer.id}>
                <TableCell>
                  {trainer.first_name} {trainer.last_name}
                </TableCell>
                <TableCell>{trainer.email}</TableCell>
                <TableCell>
                  {trainer.expertise?.slice(0, 2).join(', ') || 'N/A'}
                </TableCell>
                <TableCell>
                  <StatusBadge status={trainer.status} />
                </TableCell>
                <TableCell>
                  <AdminActionButtons
                    id={trainer.id}
                    status={trainer.status}
                    type="trainer"
                    onStatusChange={(newStatus) =>
                      handleStatusChange(trainer.id, newStatus)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {trainers.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No trainers found</p>
        </div>
      )}
    </div>
  )
}
