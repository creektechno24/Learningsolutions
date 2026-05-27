'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { logout } from '@/lib/supabase/auth'
import { Menu, LogOut, Home } from 'lucide-react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userType, setUserType] = useState<'trainer' | 'enterprise' | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      setUser(user)
      setUserType(user.user_metadata?.user_type as 'trainer' | 'enterprise' | null)
      setLoading(false)
    }

    getUser()
  }, [router])

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-gray-900 text-white transition-all duration-300 overflow-hidden lg:w-64 lg:relative absolute h-full z-20`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold">LearningSolutions</h2>
          <p className="text-sm text-gray-400">{userType === 'trainer' ? 'Trainer' : userType === 'enterprise' ? 'Enterprise' : 'Admin'} Dashboard</p>
        </div>

        <nav className="space-y-2 px-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Overview</span>
          </Link>

          {userType === 'trainer' ? (
            <>
              <Link
                href="/dashboard/trainer/courses"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>My Courses</span>
              </Link>
              <Link
                href="/dashboard/trainer/profile"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>My Profile</span>
              </Link>
            </>
          ) : userType === 'enterprise' ? (
            <>
              <Link
                href="/dashboard/enterprise/inquiries"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>My Inquiries</span>
              </Link>
              <Link
                href="/dashboard/enterprise/profile"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>Company Profile</span>
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard/admin"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>Admin Dashboard</span>
              </Link>
              <Link
                href="/dashboard/admin/trainers"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>Manage Trainers</span>
              </Link>
              <Link
                href="/dashboard/admin/enterprises"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>Manage Enterprises</span>
              </Link>
              <Link
                href="/dashboard/admin/courses"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>Manage Courses</span>
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{user.email}</p>
              <p className="text-xs text-gray-600">{userType === 'trainer' ? 'Trainer' : userType === 'enterprise' ? 'Enterprise' : 'Admin'}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
