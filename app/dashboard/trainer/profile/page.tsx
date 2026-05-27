'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { TrainerProfileForm } from '@/components/trainer-profile-form'
import { Spinner } from '@/components/ui/spinner'

export default function TrainerProfilePage() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/trainer/profile')

        if (response.status === 404) {
          setProfile(null)
        } else if (response.ok) {
          const data = await response.json()
          setProfile(data)
        } else {
          const err = await response.json()
          throw new Error(err.error || 'Failed to fetch profile')
        }
      } catch (err) {
        console.error('[v0] Error fetching profile:', err)
        setError(err instanceof Error ? err.message : 'Failed to load profile')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Trainer Profile</h1>
        <p className="text-gray-600 mt-2">
          Manage your trainer profile information and expertise
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg border p-6">
        <TrainerProfileForm initialData={profile} />
      </div>
    </div>
  )
}
