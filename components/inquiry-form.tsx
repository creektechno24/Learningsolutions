'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

interface InquiryFormProps {
  initialData?: any
  onSubmit: (data: any) => Promise<void>
  isLoading?: boolean
}

export function InquiryForm({
  initialData,
  onSubmit,
  isLoading = false,
}: InquiryFormProps) {
  const [courses, setCourses] = useState<any[]>([])
  const [formData, setFormData] = useState({
    course_id: initialData?.course_id || '',
    subject: initialData?.subject || '',
    message: initialData?.message || '',
    budget: initialData?.budget || '',
    required_date: initialData?.required_date || '',
    participant_count: initialData?.participant_count || '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses?is_published=true')
        const data = await res.json()
        setCourses(data)
      } catch (err) {
        console.error('Error fetching courses:', err)
      }
    }

    fetchCourses()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      await onSubmit(formData)
      setSuccess('Inquiry submitted successfully!')
      if (!initialData) {
        setFormData({
          course_id: '',
          subject: '',
          message: '',
          budget: '',
          required_date: '',
          participant_count: '',
        })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit inquiry')
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="course_id" className="block text-sm font-medium mb-2">
            Select Course (Optional)
          </label>
          <select
            id="course_id"
            name="course_id"
            value={formData.course_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a course --</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Training inquiry subject"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Describe your training needs and requirements"
            rows={5}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="participant_count" className="block text-sm font-medium mb-2">
              Number of Participants
            </label>
            <Input
              id="participant_count"
              name="participant_count"
              type="number"
              value={formData.participant_count}
              onChange={handleChange}
              placeholder="e.g., 25"
              min="1"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Budget (Optional)
            </label>
            <Input
              id="budget"
              name="budget"
              type="number"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., 5000"
              min="0"
              step="100"
            />
          </div>

          <div>
            <label htmlFor="required_date" className="block text-sm font-medium mb-2">
              Required Date (Optional)
            </label>
            <Input
              id="required_date"
              name="required_date"
              type="date"
              value={formData.required_date}
              onChange={handleChange}
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            {success}
          </div>
        )}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </form>
    </Card>
  )
}
