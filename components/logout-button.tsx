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
      className="
w-full
flex
items-center
justify-center
rounded-xl
border
border-red-500
py-3
font-semibold
text-red-400
transition
hover:bg-red-600
hover:text-white
"
    >
      Logout
    </button>
  )
}