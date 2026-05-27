'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnalyticsCard } from '@/components/admin/analytics-card'
import { Users, Building2, BookOpen, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/admin/analytics')
        const data = await response.json()
        setAnalytics(data)
      } catch (error) {
        console.error('Error fetching analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Platform overview and management</p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 flex-wrap">
        <Link href="/dashboard/admin/trainers">
          <Button variant="outline">Manage Trainers</Button>
        </Link>
        <Link href="/dashboard/admin/enterprises">
          <Button variant="outline">Manage Enterprises</Button>
        </Link>
        <Link href="/dashboard/admin/courses">
          <Button variant="outline">Manage Courses</Button>
        </Link>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsCard
          title="Total Trainers"
          value={analytics?.totalTrainers || 0}
          subtitle={`${analytics?.pendingTrainers || 0} pending approval`}
          icon={<Users size={20} className="text-blue-600" />}
        />
        <AnalyticsCard
          title="Total Enterprises"
          value={analytics?.totalEnterprises || 0}
          subtitle={`${analytics?.pendingEnterprises || 0} pending approval`}
          icon={<Building2 size={20} className="text-green-600" />}
        />
        <AnalyticsCard
          title="Total Courses"
          value={analytics?.totalCourses || 0}
          subtitle="Published courses"
          icon={<BookOpen size={20} className="text-purple-600" />}
        />
        <AnalyticsCard
          title="Total Inquiries"
          value={analytics?.totalInquiries || 0}
          subtitle="Training inquiries"
          icon={<MessageSquare size={20} className="text-orange-600" />}
        />
      </div>

      {/* Pending Approvals Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Pending Trainer Approvals</h3>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            {analytics?.pendingTrainers || 0}
          </p>
          <Link href="/dashboard/admin/trainers">
            <Button className="w-full">Review Trainers</Button>
          </Link>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Pending Enterprise Approvals</h3>
          <p className="text-2xl font-bold text-green-600 mb-4">
            {analytics?.pendingEnterprises || 0}
          </p>
          <Link href="/dashboard/admin/enterprises">
            <Button className="w-full">Review Enterprises</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
