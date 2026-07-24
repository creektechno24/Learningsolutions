import { createClient } from '@/lib/supabase/server'

import Link from 'next/link'
import {
  Users,
  BookOpen,
  MessageSquare,
  FolderOpen,
} from 'lucide-react'

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const { count: trainerCount } = await supabase
    .from('trainer_profiles')
    .select('*', {
      count: 'exact',
      head: true,
    })

  const { count: courseCount } = await supabase
    .from('courses')
    .select('*', {
      count: 'exact',
      head: true,
    })

  const { count: inquiryCount } = await supabase
    .from('inquiries')
    .select('*', {
      count: 'exact',
      head: true,
    })

    const { count: resourceCount } = await supabase
  .from('resources')
  .select('*', {
    count: 'exact',
    head: true,
  })

  const { count: pendingTrainerCount } = await supabase
    .from('trainer_profiles')
    .select('*', {
      count: 'exact',
      head: true,
    })
    .eq('status', 'pending')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Admin Dashboard
        </h1>

        <p className="text-slate-600 mt-2">
          Manage trainers, courses and inquiries.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Trainers */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Trainers
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {trainerCount || 0}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Users className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Courses
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {courseCount || 0}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <BookOpen className="text-purple-600" />
            </div>
          </div>
        </div>

        {/* Resources */}
<div className="bg-white rounded-2xl border p-6 shadow-sm">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-slate-500">
        Resources
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {resourceCount || 0}
      </h2>
    </div>

    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
      <FolderOpen className="text-emerald-600" />
    </div>
  </div>
</div>

        {/* Inquiries */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Inquiries
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {inquiryCount || 0}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <MessageSquare className="text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">
          Quick Actions
        </h3>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/dashboard/admin/trainers"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Manage Trainers
          </Link>

          <Link
            href="/dashboard/admin/courses"
            className="px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            Manage Courses
          </Link>

          <Link
  href="/dashboard/admin/resources"
  className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
>
  Manage Resources
</Link>

          <Link
            href="/dashboard/admin/inquiries"
            className="px-5 py-3 rounded-xl bg-orange-600 text-white hover:bg-orange-700 transition-colors"
          >
            Manage Inquiries
          </Link>
        </div>
      </div>

      {/* Pending Trainer Approvals */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">
          Pending Trainer Approvals
        </h3>

        <p className="text-4xl font-bold text-blue-600 mb-6">
          {pendingTrainerCount || 0}
        </p>

        <Link
          href="/dashboard/admin/trainers"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Review Trainers
        </Link>
      </div>
    </div>
  )
}