import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  BookOpen,
  FolderOpen,
  User2,
} from 'lucide-react'

import { createClient } from '@/lib/supabase/server'

export default async function TrainerDashboardPage() {
  const supabase = await createClient()

  // USER
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // TRAINER PROFILE
  const { data: trainer } = await supabase
    .from('trainer_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!trainer) {
    redirect('/auth/login')
  }


  const { count: resourcesCount } = await supabase
  .from('resources')
  .select('*', {
    count: 'exact',
    head: true,
  })
  .eq('published', true)

  const { count: coursesCount } = await supabase
  .from('courses')
  .select('*', {
    count: 'exact',
    head: true,
  })
  .eq('published', true)

  // PENDING
  if (trainer.status === 'pending') {
    redirect('/dashboard/trainer-pending')
  }

  // REJECTED
  if (trainer.status === 'rejected') {
    redirect('/dashboard/trainer-rejected')
  }

  // APPROVED ONLY
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Trainer Dashboard
        </h1>

        <p className="text-slate-600 mt-2">
          Welcome back, {trainer.first_name}
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    {/* My Courses */}
<div className="bg-white rounded-2xl border p-6 shadow-sm">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-slate-500">
        My Courses
      </p>

    <h2 className="text-3xl font-bold mt-2">
  {coursesCount ?? 0}
</h2>
    </div>

    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
      <BookOpen className="text-blue-600" />
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
  {resourcesCount ?? 0}
</h2>
    </div>

    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
      <FolderOpen className="text-indigo-600" />
    </div>
  </div>
</div>
      

     

        {/* Profile Status */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Profile Status
              </p>

              <h2 className="text-xl font-bold mt-2 text-green-600">
                Approved
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <User2 className="text-green-600" />
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
            href="/dashboard/trainer/profile"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Edit Profile
          </Link>

         <Link
  href="/dashboard/trainer/resources"
  className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
>
  My Resources
</Link>
          <Link
            href="/dashboard/trainer/courses"
            className="px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            My Courses
          </Link>
        </div>
      </div>

    {/* Recent Resources */}
<div className="bg-white rounded-2xl border p-6 shadow-sm">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-semibold">
      Recent Resources
    </h3>

    <Link
      href="/dashboard/trainer/resources"
      className="text-sm font-medium text-blue-600 hover:text-blue-700"
    >
      View All
    </Link>
  </div>

  <div className="border rounded-xl p-6 text-center text-slate-500">
    Recent published resources will appear here.
  </div>
</div>
    </div>
  )
}