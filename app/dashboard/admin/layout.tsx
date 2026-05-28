import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({
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

  // Not admin
  if (user.user_metadata?.user_type !== 'admin') {
    redirect('/dashboard')
  }

  async function logout() {
    'use server'

    const supabase = await createClient()

    await supabase.auth.signOut()

    redirect('/')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-950 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">
            Admin Panel
          </h2>

          <nav className="space-y-4">
            <Link
              href="/dashboard/admin"
              className="block hover:text-blue-400"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/admin/trainers"
              className="block hover:text-blue-400"
            >
              Trainers
            </Link>

            <Link
              href="/dashboard/admin/enterprises"
              className="block hover:text-blue-400"
            >
              Enterprises
            </Link>

            <Link
              href="/dashboard/admin/courses"
              className="block hover:text-blue-400"
            >
              Courses
            </Link>

            <Link
              href="/dashboard/admin/inquiries"
              className="block hover:text-blue-400"
            >
              Inquiries
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <form action={logout}>
          <button
            type="submit"
            className="w-full mt-10 bg-red-600 hover:bg-red-700 transition-colors text-white py-3 rounded-xl"
          >
            Logout
          </button>
        </form>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}