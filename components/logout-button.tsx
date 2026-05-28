'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const supabase = createClient()

      await supabase.auth.signOut()

      router.replace('/')

      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded-xl font-semibold"
    >
      Logout
    </button>
  )
}