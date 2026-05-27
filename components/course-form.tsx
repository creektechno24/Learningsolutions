'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

interface CourseFormProps {
  courseId?: string
  initialData?: any
  onSubmit?: (data: any) => void
}

export function CourseForm({
  courseId,
  initialData,
  onSubmit,
}: CourseFormProps) {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<any[]>([])
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    long_description: initialData?.long_description || '',
    category_id: initialData?.category_id || '',
    duration_hours: initialData?.duration_hours || '',
    level: initialData?.level || 'beginner',
    price: initialData?.price || '',
    max_participants: initialData?.max_participants || '',
    seo_title: initialData?.seo_title || '',
    seo_description: initialData?.seo_description || '',
    seo_keywords: initialData?.seo_keywords || '',
  })

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/courses/categories')
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error('[v0] Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const method = courseId ? 'PATCH' : 'POST'
      const url = courseId
        ? `/api/trainer/courses/${courseId}`
        : '/api/trainer/courses'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to save course')
      }

      const data = await response.json()
      toast({
        description: courseId
          ? 'Course updated successfully'
          : 'Course created successfully',
      })

      if (onSubmit) {
        onSubmit(data)
      }
    } catch (error) {
      console.error('[v0] Error saving course:', error)
      toast({
        description:
          error instanceof Error ? error.message : 'Failed to save course',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Course Title</label>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Advanced Python Programming"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief course description"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Long Description
        </label>
        <Textarea
          name="long_description"
          value={formData.long_description}
          onChange={handleChange}
          placeholder="Detailed course information"
          rows={5}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Duration (hours)
          </label>
          <Input
            name="duration_hours"
            type="number"
            value={formData.duration_hours}
            onChange={handleChange}
            placeholder="40"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Price ($)</label>
          <Input
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            placeholder="99.99"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Max Participants
          </label>
          <Input
            name="max_participants"
            type="number"
            value={formData.max_participants}
            onChange={handleChange}
            placeholder="30"
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-semibold mb-4">SEO Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">SEO Title</label>
            <Input
              name="seo_title"
              value={formData.seo_title}
              onChange={handleChange}
              placeholder="SEO optimized title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              SEO Description
            </label>
            <Textarea
              name="seo_description"
              value={formData.seo_description}
              onChange={handleChange}
              placeholder="SEO meta description"
              rows={2}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              SEO Keywords
            </label>
            <Input
              name="seo_keywords"
              value={formData.seo_keywords}
              onChange={handleChange}
              placeholder="keyword1, keyword2, keyword3"
            />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Saving...' : courseId ? 'Update Course' : 'Create Course'}
      </Button>
    </form>
  )
}
