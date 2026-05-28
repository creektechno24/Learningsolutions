
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Get logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If not logged in
  if (!user) {
    redirect('/auth/login')
  }

  // Get role from metadata
  const userType = user.user_metadata?.user_type

  // Role-based redirect
  if (userType === 'trainer') {
    redirect('/dashboard/trainer')
  }

  if (userType === 'enterprise') {
    redirect('/dashboard/enterprise')
  }

  if (userType === 'admin') {
    redirect('/dashboard/admin')
  }

  // Fallback
  redirect('/')
}

