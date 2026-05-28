
'use client'

import Link from 'next/link'
import {
  BriefcaseBusiness,
  MessageSquare,
  CalendarDays,
  BookOpen,
} from 'lucide-react'

export default function EnterpriseDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Enterprise Dashboard
        </h1>

        <p className="text-slate-600 mt-2">
          Manage training inquiries, employees and enterprise learning programs.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Trainings */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Active Trainings
              </p>

              <h2 className="text-3xl font-bold mt-2">
                12
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <BookOpen className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Inquiries */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Training Inquiries
              </p>

              <h2 className="text-3xl font-bold mt-2">
                6
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <MessageSquare className="text-green-600" />
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Upcoming Sessions
              </p>

              <h2 className="text-3xl font-bold mt-2">
                4
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <CalendarDays className="text-purple-600" />
            </div>
          </div>
        </div>

        {/* Company Status */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Company Status
              </p>

              <h2 className="text-xl font-bold mt-2 text-green-600">
                Active
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <BriefcaseBusiness className="text-orange-600" />
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
            href="/dashboard/enterprise/profile"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Company Profile
          </Link>

          <Link
            href="/dashboard/enterprise/inquiries"
            className="px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Training Inquiries
          </Link>

          <Link
            href="/dashboard/enterprise/trainings"
            className="px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            View Trainings
          </Link>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">
          Recent Activities
        </h3>

        <div className="space-y-4">
          {[
            'Leadership Training Inquiry Submitted',
            'AWS Cloud Training Scheduled',
            'Employee Upskilling Program Started',
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-xl p-4"
            >
              <div>
                <h4 className="font-semibold">
                  {activity}
                </h4>

                <p className="text-sm text-slate-500">
                  Enterprise Activity
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                Active
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
