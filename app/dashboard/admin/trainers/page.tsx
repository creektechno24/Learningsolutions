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

import StatusBadge  from '@/components/admin/status-badge'



import { AdminActionButtons } from '@/components/admin/admin-action-buttons'

interface Trainer {
  id: string
  first_name: string
  last_name: string
  email: string
  status: 'approved' | 'pending' | 'rejected'
  approved: boolean
}

export default function TrainersManagement() {
  const [trainers, setTrainers] = useState<Trainer[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTrainers()
  }, [])

  const fetchTrainers = async () => {
    try {
      const response = await fetch('/api/admin/trainers')

      const data = await response.json()

      setTrainers(data || [])
    } catch (error) {
      console.error('Error fetching trainers:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = (
  trainerId: string,
  newStatus: 'approved' | 'pending' | 'rejected'
) => {
    setTrainers((prev) =>
      prev.map((trainer) =>
        trainer.id === trainerId
          ? {
              ...trainer,
              status: newStatus,
              approved: newStatus === 'approved',
            }
          : trainer
      )
    )
  }

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-lg text-gray-600">
          Loading trainers...
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Trainers Management
        </h1>

        <p className="text-slate-600">
          Review and approve trainer registrations
        </p>
      </div>

      {/* Table */}

      <div className="border rounded-2xl overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>

              <TableHead>Email</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {trainers.length > 0 ? (
              trainers.map((trainer) => (
                <TableRow key={trainer.id}>
                  <TableCell className="font-medium">
                    {trainer.first_name}{' '}
                    {trainer.last_name}
                  </TableCell>

                  <TableCell>
                    {trainer.email}
                  </TableCell>

                  <TableCell>
                   <StatusBadge
  status={
    trainer.status as
      | 'approved'
      | 'pending'
      | 'rejected'
  }
/>
                  </TableCell>

                  <TableCell className="text-right">
                   <AdminActionButtons
  id={trainer.id}
  status={trainer.status}
  type="trainer"
/>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-10 text-gray-500"
                >
                  No trainers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}