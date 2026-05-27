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

export default function EnterprisesManagement() {
  const [enterprises, setEnterprises] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEnterprises()
  }, [])

  const fetchEnterprises = async () => {
    try {
      const response = await fetch('/api/admin/enterprises')
      const data = await response.json()
      setEnterprises(data)
    } catch (error) {
      console.error('Error fetching enterprises:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = (enterpriseId: string, newStatus: string) => {
    setEnterprises(
      enterprises.map((e) =>
        e.id === enterpriseId ? { ...e, status: newStatus } : e
      )
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Enterprises Management</h1>
        <p className="text-gray-600">Review and approve enterprise registrations</p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enterprises.map((enterprise) => (
              <TableRow key={enterprise.id}>
                <TableCell>{enterprise.company_name}</TableCell>
                <TableCell>{enterprise.email}</TableCell>
                <TableCell>{enterprise.industry || 'N/A'}</TableCell>
                <TableCell>
                  <StatusBadge status={enterprise.status} />
                </TableCell>
                <TableCell>
                  <AdminActionButtons
                    id={enterprise.id}
                    status={enterprise.status}
                    type="enterprise"
                    onStatusChange={(newStatus) =>
                      handleStatusChange(enterprise.id, newStatus)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {enterprises.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No enterprises found</p>
        </div>
      )}
    </div>
  )
}
