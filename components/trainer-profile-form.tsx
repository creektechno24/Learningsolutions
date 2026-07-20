'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { X } from 'lucide-react'

interface TrainerProfileFormProps {
  initialData?: any
  onSubmit?: (data: any) => void
}

export function TrainerProfileForm({
  initialData,
  onSubmit,
}: TrainerProfileFormProps) {
  const [loading, setLoading] = useState(false)
  const [expertise, setExpertise] = useState<string[]>(
    initialData?.expertise || []
  )
  const [newExpertise, setNewExpertise] = useState('')
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    first_name: initialData?.first_name || '',
    last_name: initialData?.last_name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    bio: initialData?.bio || '',
    qualification: initialData?.qualification || '',
    years_of_experience: initialData?.years_of_experience || '',
    profile_image_url: initialData?.profile_image_url || '',
    designation: initialData?.designation || '',
certifications: initialData?.certifications || '',
specializations: initialData?.specializations || '',
industries_served: initialData?.industries_served || '',
methodology: initialData?.methodology || '',
awards: initialData?.awards || '',
testimonials: initialData?.testimonials || '',
linkedin: initialData?.linkedin || '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addExpertise = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newExpertise.trim()) {
      e.preventDefault()
      if (!expertise.includes(newExpertise.trim())) {
        setExpertise([...expertise, newExpertise.trim()])
        setNewExpertise('')
      }
    }
  }

  const removeExpertise = (item: string) => {
    setExpertise(expertise.filter((e) => e !== item))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/trainer/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          expertise,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to update profile')
      }

      const data = await response.json()
      toast({
        description: 'Profile updated successfully',
      })

      if (onSubmit) {
        onSubmit(data)
      }
    } catch (error) {
      console.error('[v0] Error updating profile:', error)
      toast({
        description:
          error instanceof Error ? error.message : 'Failed to update profile',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <Input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <Input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <Textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
          rows={4}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Qualification</label>
          <Input
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="e.g., MBA, PhD"
          />
        </div>

        <div>
  <label className="block text-sm font-medium mb-1">
    Designation / Role
  </label>

  <Input
    name="designation"
    value={formData.designation}
    onChange={handleChange}
    placeholder="Corporate Trainer"
  />
</div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Years of Experience
          </label>
          <Input
            name="years_of_experience"
            type="number"
            value={formData.years_of_experience}
            onChange={handleChange}
            placeholder="10"
          />
        </div>
      </div>

   

      <div>
        <label className="block text-sm font-medium mb-2">Expertise</label>
        <div className="flex gap-2 mb-2">
          <Input
            value={newExpertise}
            onChange={(e) => setNewExpertise(e.target.value)}
            onKeyDown={addExpertise}
            placeholder="Add expertise (press Enter)"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {expertise.map((item) => (
            <div
              key={item}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
            >
              {item}
              <button
                type="button"
                onClick={() => removeExpertise(item)}
                className="hover:text-blue-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
  <label className="block text-sm font-medium mb-1">
    Certifications
  </label>

  <Textarea
    name="certifications"
    value={formData.certifications}
    onChange={handleChange}
    rows={4}
    placeholder="PMP, Six Sigma, NLP Practitioner"
  />
</div>

<div>
  <label className="block text-sm font-medium mb-1">
    Specializations
  </label>

  <Textarea
    name="specializations"
    value={formData.specializations}
    onChange={handleChange}
    rows={4}
    placeholder="Leadership, Communication, Sales"
  />
</div>


<div>
  <label className="block text-sm font-medium mb-1">
    Industries Served
  </label>

  <Textarea
    name="industries_served"
    value={formData.industries_served}
    onChange={handleChange}
    rows={4}
    placeholder="IT, Banking, Manufacturing"
  />
</div>


<div>
  <label className="block text-sm font-medium mb-1">
    Methodology / Approach
  </label>

  <Textarea
    name="methodology"
    value={formData.methodology}
    onChange={handleChange}
    rows={4}
    placeholder="Interactive, Experiential, Gamified"
  />
</div>


<div>
  <label className="block text-sm font-medium mb-1">
    Awards & Recognition
  </label>

  <Textarea
    name="awards"
    value={formData.awards}
    onChange={handleChange}
    rows={4}
    placeholder="Best Trainer Award 2024"
  />
</div>


<div>
  <label className="block text-sm font-medium mb-1">
    Client Testimonials
  </label>

  <Textarea
    name="testimonials"
    value={formData.testimonials}
    onChange={handleChange}
    rows={5}
    placeholder="Client feedback and testimonials"
  />
</div>


<div>
  <label className="block text-sm font-medium mb-1">
    LinkedIn Profile
  </label>

  <Input
    name="linkedin"
    value={formData.linkedin}
    onChange={handleChange}
    placeholder="https://linkedin.com/in/username"
  />
</div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Saving...' : 'Save Profile'}
      </Button>
    </form>
  )
}
