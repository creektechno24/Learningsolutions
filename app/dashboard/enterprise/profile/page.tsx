'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { EnterpriseProfileForm } from '@/components/enterprise-profile-form'
import { useRouter } from 'next/navigation'

export default function EnterpriseProfilePage() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          router.push('/auth/login')
          return
        }

        const res = await fetch('/api/enterprise/profile')
        if (!res.ok) throw new Error('Failed to fetch profile')
        const data = await res.json()
        setProfile(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading profile')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [router])

  const handleProfileSubmit = async (formData: any) => {
    try {
      const res = await fetch('/api/enterprise/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to update profile')
      const updated = await res.json()
      setProfile(updated)
    } catch (err) {
      throw err
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading profile...</div>
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">{error}</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Company Profile</h1>
        <p className="text-gray-600 mt-2">
          Update your company information and details
        </p>
      </div>

      {profile && (
        <EnterpriseProfileForm initialData={profile} onSubmit={handleProfileSubmit} />
      )}

      <div className="bg-blue-50 border border-blue-200 p-4 rounded">
        <h3 className="font-semibold text-blue-900 mb-2">Verification Status</h3>
        <p className="text-sm text-blue-800">
          Status: <span className="font-semibold">{profile?.status || 'pending'}</span>
        </p>
        {!profile?.is_verified && (
          <p className="text-sm text-blue-800 mt-2">
            Your company is pending verification by our admin team.
          </p>
        )}
      </div>
    </div>
  )
}
