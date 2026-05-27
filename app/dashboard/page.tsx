'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { getTrainerProfile, getEnterpriseProfile } from '@/lib/supabase/auth'
import { Card } from '@/components/ui/card'

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [userType, setUserType] = useState<'trainer' | 'enterprise' | null>(null)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        const type = user.user_metadata?.user_type as 'trainer' | 'enterprise' | null
        setUserType(type)

        if (type === 'trainer') {
          const result = await getTrainerProfile(user.id)
          setProfile(result.data)
        } else if (type === 'enterprise') {
          const result = await getEnterpriseProfile(user.id)
          setProfile(result.data)
        }
      } catch (err) {
        console.error('Error fetching profile:', err)
      } finally {
        setLoading(false)
      }
    }

    getProfile()
  }, [])

  if (loading) {
    return <div className="text-center">Loading profile...</div>
  }

  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Your Dashboard</h2>

      {profile ? (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {userType === 'trainer' ? 'Your Profile' : 'Company Profile'}
            </h3>
            {userType === 'trainer' ? (
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="font-medium">Name:</span> {profile.first_name} {profile.last_name}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span> {profile.email}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Status:</span>{' '}
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      profile.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {profile.status}
                  </span>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Bio:</span> {profile.bio || 'Not set'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="font-medium">Company:</span> {profile.company_name}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span> {profile.email}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Status:</span>{' '}
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      profile.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {profile.status}
                  </span>
                </p>
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              {userType === 'trainer' ? (
                <>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">0</p>
                    <p className="text-sm text-gray-600">Active Courses</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">0</p>
                    <p className="text-sm text-gray-600">Total Students</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">0</p>
                    <p className="text-sm text-gray-600">Active Inquiries</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">0</p>
                    <p className="text-sm text-gray-600">Completed Trainings</p>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      ) : (
        <Card className="p-6 text-center">
          <p className="text-gray-600">Profile information not found. Please complete your profile setup.</p>
        </Card>
      )}

      {profile && profile.status === 'pending' && (
        <Card className="p-6 mt-6 bg-blue-50 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Account Pending Approval</h3>
          <p className="text-sm text-blue-800">
            Your account is currently under review. We&apos;ll notify you once it&apos;s been approved.
          </p>
        </Card>
      )}
    </div>
  )
}
