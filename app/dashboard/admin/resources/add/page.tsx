'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { uploadFile } from '@/lib/storage/upload'

export default function AddResourcePage() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')

  const [category, setCategory] = useState('Framework')
  const [type, setType] = useState('PDF')

  const [featured, setFeatured] = useState(false)
  const [published, setPublished] = useState(true)

  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [resourceFile, setResourceFile] = useState<File | null>(null)

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    try {
      setLoading(true)

    let thumbnailUrl = ''
let thumbnailPublicId = ''

let fileUrl = ''
let filePublicId = ''

      // Upload Thumbnail

      if (thumbnail) {
        const uploadedThumbnail = await uploadFile(
          thumbnail,
          'learning-solutions/resources/thumbnails'
        )

        thumbnailUrl = uploadedThumbnail.url
thumbnailPublicId = uploadedThumbnail.publicId

      }

      // Upload Resource File

      if (resourceFile) {
        const uploadedResource = await uploadFile(
          resourceFile,
          'learning-solutions/resources/files'
        )

        fileUrl = uploadedResource.url
filePublicId = uploadedResource.publicId

      }

      const response = await fetch(
        '/api/admin/resources',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
  title,
  slug,
  description,
  category,
  type,

  thumbnail: thumbnailUrl,
  thumbnail_public_id: thumbnailPublicId,

  file_url: fileUrl,
  file_public_id: filePublicId,

  featured,
  published,
  display_order: 0,
}),
        }
      )

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message)
      }

      alert('Resource added successfully.')

      router.push('/dashboard/admin/resources')
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      {/* JSX Part 2 */}

      {/* Header */}

<div>

  <h1 className="text-4xl font-bold tracking-tight text-slate-900">
    Add New Resource
  </h1>

  <p className="mt-2 text-lg text-slate-600">
    Create and publish a new learning resource for the platform.
  </p>

</div>

{/* Basic Information */}

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <h2 className="text-2xl font-bold text-slate-900">
    Basic Information
  </h2>

  <p className="mt-2 text-slate-500">
    Enter the basic details of the resource.
  </p>

  <div className="mt-8 grid gap-6">

    {/* Title */}

    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Resource Title *
      </label>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter resource title"
        className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
        required
      />

    </div>

    {/* Slug */}

    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Slug *
      </label>

      <input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="leadership-framework"
        className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
        required
      />

    </div>

    {/* Description */}

    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Description *
      </label>

      <textarea
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter resource description..."
        className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
        required
      />

    </div>

  </div>

</div>

{/* Resource Details */}

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <h2 className="text-2xl font-bold text-slate-900">
    Resource Details
  </h2>

  <p className="mt-2 text-slate-500">
    Select the resource category and type.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

    {/* Category */}

    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Category *
      </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
      >

        <option value="Framework">
          Framework
        </option>

        <option value="Story">
          Story
        </option>

        <option value="PDF">
          PDF
        </option>

        <option value="Document">
          Document
        </option>

      </select>

    </div>

    {/* Resource Type */}

    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Resource Type *
      </label>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
      >

        <option value="PDF">PDF</option>

        <option value="DOCX">DOCX</option>

        <option value="PPT">PPT</option>

        <option value="PPTX">PPTX</option>

        <option value="XLS">XLS</option>

        <option value="XLSX">XLSX</option>

        <option value="ZIP">ZIP</option>

        <option value="Video">Video</option>

        <option value="Link">Link</option>

      </select>

    </div>

  </div>

</div>

{/* Upload Files */}

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <h2 className="text-2xl font-bold text-slate-900">
    Upload Files
  </h2>

  <p className="mt-2 text-slate-500">
    Upload the thumbnail image and the learning resource.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    {/* Thumbnail */}

    <div>

      <label className="mb-3 block text-sm font-semibold text-slate-700">
        Thumbnail Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setThumbnail(e.target.files?.[0] || null)
        }
        className="block w-full rounded-xl border border-slate-300 p-3 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
      />

      {thumbnail && (
        <p className="mt-3 text-sm text-green-600">
          Selected: {thumbnail.name}
        </p>
      )}

    </div>

    {/* Resource File */}

    <div>

      <label className="mb-3 block text-sm font-semibold text-slate-700">
        Resource File
      </label>

      <input
        type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.mp4"
        onChange={(e) =>
          setResourceFile(e.target.files?.[0] || null)
        }
        className="block w-full rounded-xl border border-slate-300 p-3 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-700"
      />

      {resourceFile && (
        <p className="mt-3 text-sm text-green-600">
          Selected: {resourceFile.name}
        </p>
      )}

    </div>

  </div>

</div>

{/* Publish Settings */}

<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <h2 className="text-2xl font-bold text-slate-900">
    Publish Settings
  </h2>

  <p className="mt-2 text-slate-500">
    Configure the visibility of this resource.
  </p>

  <div className="mt-8 space-y-6">

    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={featured}
        onChange={(e) =>
          setFeatured(e.target.checked)
        }
        className="h-5 w-5"
      />

      <span className="font-medium">
        Featured Resource
      </span>

    </label>

    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={published}
        onChange={(e) =>
          setPublished(e.target.checked)
        }
        className="h-5 w-5"
      />

      <span className="font-medium">
        Publish Resource
      </span>

    </label>

  </div>

</div>

{/* Action Buttons */}

<div className="flex items-center justify-end gap-4">

  <button
    type="button"
    onClick={() =>
      router.push('/dashboard/admin/resources')
    }
    className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
  >
    Cancel
  </button>

  <button
    type="submit"
    disabled={loading}
    className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {loading ? 'Saving...' : 'Save Resource'}
  </button>

</div>

    </form>
  )
}