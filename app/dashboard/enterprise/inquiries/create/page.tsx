'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { InquiryForm } from '@/components/inquiry-form'
import { createClient } from '@/lib/supabase/client'

export default function CreateInquiryPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (formData: any) => {
    setLoading(true)
    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      const res = await fetch('/api/enterprise/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to create inquiry')

      router.push('/dashboard/enterprise/inquiries')
    } catch (err) {
      throw err
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Training Inquiry</h1>
        <p className="text-gray-600 mt-2">
          Submit a new training inquiry to connect with our expert trainers
        </p>
      </div>

      <InquiryForm onSubmit={handleSubmit} isLoading={loading} />
    </div>
  )
}
