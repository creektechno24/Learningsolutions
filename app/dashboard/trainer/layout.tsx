import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import LogoutButton from '@/components/logout-button'

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
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <aside className="w-72 bg-black text-white flex flex-col justify-between p-6">

        <div>

          {/* Logo */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold">
              Trainer Panel
            </h2>

            <p className="text-slate-400 mt-2 text-sm">
              LearningSolutions
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">

            <Link
              href="/dashboard/trainer"
              className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/trainer/profile"
              className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
            >
              My Profile
            </Link>

            <Link
              href="/dashboard/trainer/courses"
              className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Courses
            </Link>
    
             <Link
  href="/dashboard/trainer/resources"
  className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
>
  Resources
</Link>

          </nav>
        </div>

        {/* Logout */}
        <div className="pt-10">
          <LogoutButton />
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  )
}