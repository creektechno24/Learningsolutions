import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import LogoutButton from '@/components/logout-button'

import {
  LayoutDashboard,
  UserRound,
  BookOpen,
  FolderOpen,
} from 'lucide-react'

export default async function TrainerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Not logged in
  if (!user) {
    redirect('/auth/login')
  }

  // Trainer profile check
  const { data: trainerProfile } = await supabase
    .from('trainer_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // No trainer profile
  if (!trainerProfile) {
    redirect('/auth/login')
  }

  // Pending trainer
  if (
    trainerProfile.status === 'pending' &&
    trainerProfile.approved === false
  ) {
    redirect('/dashboard/trainer-pending')
  }

  // Rejected trainer
  if (trainerProfile.status === 'rejected') {
    redirect('/dashboard/trainer-rejected')
  }

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-800 bg-slate-950 px-5 py-6 text-white">

        {/* Logo / Brand */}
        <div className="border-b border-slate-800 pb-6">

          <Link
            href="/dashboard/trainer"
            className="flex items-center gap-3"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold shadow-lg">
              LS
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-tight">
                LearningSolutions
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Trainer Portal
              </p>
            </div>

          </Link>

        </div>

        {/* Navigation */}
        <nav className="mt-8 flex-1 space-y-2">

          <Link
            href="/dashboard/trainer"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white"
          >
            <LayoutDashboard className="h-5 w-5 text-slate-400 transition group-hover:text-blue-400" />
            Dashboard
          </Link>

          <Link
            href="/dashboard/trainer/profile"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white"
          >
            <UserRound className="h-5 w-5 text-slate-400 transition group-hover:text-blue-400" />
            My Profile
          </Link>

          <Link
            href="/dashboard/trainer/courses"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white"
          >
            <BookOpen className="h-5 w-5 text-slate-400 transition group-hover:text-blue-400" />
            Courses
          </Link>

          <Link
            href="/dashboard/trainer/resources"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white"
          >
            <FolderOpen className="h-5 w-5 text-slate-400 transition group-hover:text-blue-400" />
            Resources
          </Link>

        </nav>

        {/* Trainer Status */}
        <div className="border-t border-slate-800 pt-5">

          <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">

            <p className="text-sm font-semibold text-white">
              Trainer Account
            </p>

            <div className="mt-2 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs text-emerald-400">
                Active
              </span>

            </div>

          </div>

          <LogoutButton />

        </div>

      </aside>

      {/* Main Content */}
      <main className="min-h-screen pl-72">

        <div className="p-8">
          {children}
        </div>

      </main>

    </div>
  )
}