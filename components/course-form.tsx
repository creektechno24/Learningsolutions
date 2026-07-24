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
  title: '',
  course_code: '',
  description: '',
  long_description: '',
  category_id: '',
  duration: '',
  level: 'beginner',
  delivery_mode: 'online',
  learning_objectives: '',
  modules_covered: '',
  prerequisites: '',
  assessment_method: '',
  price: '',
  seo_title: '',
  seo_description: '',
  seo_keywords: '',
})


useEffect(() => {
  if (!initialData) return

 setFormData({
  title: initialData.title || '',
  course_code: initialData.course_code || '',
  description: initialData.description || '',
  long_description: initialData.long_description || '',
  category_id: initialData.category_id || '',
  duration: initialData.duration || '',
  level: initialData.level || 'beginner',
  delivery_mode: initialData.delivery_mode || 'online',
  learning_objectives: initialData.learning_objectives || '',
  modules_covered: initialData.modules_covered || '',
  prerequisites: initialData.prerequisites || '',
  assessment_method: initialData.assessment_method || '',
  price: initialData.price || '',
  seo_title: initialData.seo_title || '',
  seo_description: initialData.seo_description || '',
  seo_keywords: initialData.seo_keywords || '',
})
}, [initialData])

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/courses/categories')
      const result = await response.json()

      setCategories(result.data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
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
  ? `/api/admin/courses/${courseId}`
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
  title: 'Success',
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
  <label className="block text-sm font-medium mb-1">
    Course Code
  </label>

  <Input
    name="course_code"
    value={formData.course_code}
    onChange={handleChange}
    placeholder="LDP-001"
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

      <div>
  <label className="block text-sm font-medium mb-1">
    Learning Objectives / Outcomes
  </label>

  <Textarea
    name="learning_objectives"
    value={formData.learning_objectives}
    onChange={handleChange}
    placeholder="Enter learning outcomes (one per line)"
    rows={5}
  />
</div>

<div>
  <label className="block text-sm font-medium mb-1">
    Modules / Topics Covered
  </label>

  <Textarea
    name="modules_covered"
    value={formData.modules_covered}
    onChange={handleChange}
    placeholder="Module 1 - Introduction&#10;Module 2 - Advanced Concepts&#10;Module 3 - Practical Exercises"
    rows={6}
  />
</div>

<div>
  <label className="block text-sm font-medium mb-1">
    Prerequisites
  </label>

  <Textarea
    name="prerequisites"
    value={formData.prerequisites}
    onChange={handleChange}
    placeholder="Enter prerequisites if any"
    rows={3}
  />
</div>

<div>
  <label className="block text-sm font-medium mb-1">
    Assessment Method
  </label>

  <Textarea
    name="assessment_method"
    value={formData.assessment_method}
    onChange={handleChange}
    placeholder="Quiz, Case Study, Project, Participation, Practical Assessment"
    rows={3}
  />
</div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
  Duration
</label>

<Input
  name="duration"
  value={formData.duration}
  onChange={handleChange}
  placeholder="2 Days / 16 Hours / 1 Week"
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

      <div>
  <label className="block text-sm font-medium mb-1">
    Mode of Delivery
  </label>

  <select
    name="delivery_mode"
    value={formData.delivery_mode}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  >
    <option value="online">Online</option>
    <option value="offline">Offline</option>
    <option value="hybrid">Hybrid</option>
  </select>
</div>

      <div className="grid md:grid-cols-2 gap-4">
      <div>
  <label className="block text-sm font-medium mb-1">
    Price ($)
  </label>

  <Input
    name="price"
    type="number"
    step="0.01"
    value={formData.price}
    onChange={handleChange}
    placeholder="99.99"
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
