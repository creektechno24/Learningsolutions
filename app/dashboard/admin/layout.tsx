import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AdminSidebar from '@/components/admin/admin-sidebar'

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
      <aside className="w-64 shrink-0 bg-slate-950 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">
            Admin Panel
          </h2>

          <AdminSidebar />
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
      <main className="flex-1 overflow-x-hidden bg-slate-100 p-10">
        {children}
      </main>
    </div>
  )
}