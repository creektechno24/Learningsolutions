'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import {
  Eye,
  Download,
  Pencil,
  Trash2,
  X,
  FileText,
  Calendar,
  Tag,
  Star,
} from "lucide-react";

interface Resource {
  id: string
  title: string
  slug: string
  description: string
  category: string
  type: string
  thumbnail: string
  file_url: string
  featured: boolean
  published: boolean
  created_at: string
}

interface ResourceTableProps {
  category?: string
}

export default function ResourceTable({
  category,
}: ResourceTableProps) {

  const [resources, setResources] = useState<Resource[]>([])

  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')

  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)



  const [statusFilter, setStatusFilter] = useState('all')

const [categoryFilter, setCategoryFilter] = useState('all')

  useEffect(() => {
    fetchResources()
  }, [])

  async function fetchResources() {




    try {

      const response = await fetch('/api/admin/resources')

      const data = await response.json()

      if (data.success) {
        setResources(data.resources)
      }

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }

  }

      async function handleDelete(id: string) {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this resource?"
  )

  if (!confirmDelete) return

  try {

    const response = await fetch(
      `/api/admin/resources/${id}`,
      {
        method: "DELETE",
      }
    )

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message)
    }

    alert("Resource deleted successfully.")

    fetchResources()

  } catch (error: any) {

    alert(error.message)

  }

}

  const stats = useMemo(() => {

  const filtered = category
    ? resources.filter(
        (item) =>
          item.category.toLowerCase() ===
          category.toLowerCase()
      )
    : resources

  return {

    total: filtered.length,

    frameworks: resources.filter(
      (r) => r.category === 'Framework'
    ).length,

    stories: resources.filter(
      (r) => r.category === 'Story'
    ).length,

    pdfs: resources.filter(
      (r) => r.category === 'PDF'
    ).length,

    documents: resources.filter(
      (r) => r.category === 'Document'
    ).length,

  }

}, [resources, category])


const filteredResources = resources.filter((resource) => {

  const matchesSearch =
    resource.title
      .toLowerCase()
      .includes(search.toLowerCase())

  const matchesCategory =
    categoryFilter === 'all'
      ? true
      : resource.category === categoryFilter

  const matchesStatus =
    statusFilter === 'all'
      ? true
      : statusFilter === 'published'
      ? resource.published
      : !resource.published

  return (
    matchesSearch &&
    matchesCategory &&
    matchesStatus
  )

})

  

  return (
    <div className="mx-auto max-w-7xl space-y-10">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">

            Resources

          </h1>

          <p className="mt-2 text-slate-600">

            Manage all learning resources.

          </p>

        </div>

        <Link
          href="/dashboard/admin/resources/add"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          + Add Resource
        </Link>

      </div>


      {/* Statistics */}

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      Total Resources
    </p>

    <h2 className="mt-3 text-4xl font-bold">
      {stats.total}
    </h2>
  </div>

  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      Frameworks
    </p>

    <h2 className="mt-3 text-4xl font-bold text-blue-600">
      {stats.frameworks}
    </h2>
  </div>

  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      Stories
    </p>

    <h2 className="mt-3 text-4xl font-bold text-violet-600">
      {stats.stories}
    </h2>
  </div>

  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      PDFs
    </p>

    <h2 className="mt-3 text-4xl font-bold text-emerald-600">
      {stats.pdfs}
    </h2>
  </div>

  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      Documents
    </p>

    <h2 className="mt-3 text-4xl font-bold text-orange-600">
      {stats.documents}
    </h2>
  </div>

</div>


{/* Search & Filters */}

<div className="rounded-3xl border bg-white p-6 shadow-sm">

  <div className="grid gap-4 lg:grid-cols-3">

    {/* Search */}

    <input
      type="text"
      placeholder="Search resources..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-blue-500"
    />

    {/* Category */}

    <select
      value={categoryFilter}
      onChange={(e) =>
        setCategoryFilter(e.target.value)
      }
      className="h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-blue-500"
    >
      <option value="all">
        All Categories
      </option>

      <option value="Framework">
        Frameworks
      </option>

      <option value="Story">
        Stories
      </option>

      <option value="PDF">
        PDFs
      </option>

      <option value="Document">
        Documents
      </option>

    </select>

    {/* Status */}

    <select
      value={statusFilter}
      onChange={(e) =>
        setStatusFilter(e.target.value)
      }
      className="h-12 rounded-xl border border-slate-200 px-4 outline-none focus:border-blue-500"
    >
      <option value="all">
        All Status
      </option>

      <option value="published">
        Published
      </option>

      <option value="draft">
        Draft
      </option>

    </select>

  </div>

</div>


{/* Resources Table */}

<div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

  <div className="overflow-x-auto">

    <table className="min-w-full">

      <thead className="border-b bg-slate-50">

        <tr>

          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
  Resource
</th>

          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
            Category
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
            Type
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
  Featured
</th>

          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
            Status
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
            Created
          </th>

          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {loading ? (

          <tr>

            <td
              colSpan={6}
              className="py-16 text-center text-slate-500"
            >
              Loading resources...
            </td>

          </tr>

        ) : filteredResources.length === 0 ? (

          <tr>

            <td
              colSpan={6}
              className="py-20 text-center"
            >

              <h3 className="text-xl font-semibold text-slate-800">

                No Resources Found

              </h3>

              <p className="mt-2 text-slate-500">

                Start by adding your first resource.

              </p>

            </td>

          </tr>

        ) : (

          filteredResources.map((resource) => (

            <tr
              key={resource.id}
              className="border-b hover:bg-slate-50"
            >

             <td className="px-6 py-5">

  <div className="flex items-center gap-4">

    <Image
  src={resource.thumbnail}
  alt={resource.title}
  width={56}
  height={56}
  className="rounded-xl border object-cover"
/>

    <div>

      <h3 className="font-semibold text-slate-900">
        {resource.title}
      </h3>

      <p className="text-sm text-slate-500">
        {resource.slug}
      </p>

    </div>

  </div>

</td>

              <td className="px-6 py-5">

                {resource.category}

              </td>

              <td className="px-6 py-5">

                {resource.type}

              </td>

              <td className="px-6 py-5">

  {resource.featured ? (

    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
      Featured
    </span>

  ) : (

    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
      No
    </span>

  )}

</td>

              <td className="px-6 py-5">

                {resource.published ? (

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

                    Published

                  </span>

                ) : (

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">

                    Draft

                  </span>

                )}

              </td>

              <td className="px-6 py-5">

                {new Date(
                  resource.created_at
                ).toLocaleDateString()}

              </td>

              <td className="px-6 py-5">

  <div className="flex justify-end items-center gap-2">

    {/* View */}


<button
  type="button"
  onClick={() => setSelectedResource(resource)}
  title="View Details"
  className="rounded-lg border p-2 text-blue-600 transition hover:bg-blue-50"
>
  <Eye size={18} />
</button>

    {/* Download */}

    <a
      href={`${resource.file_url}?fl_attachment`}
      title="Download"
      className="rounded-lg border p-2 text-emerald-600 transition hover:bg-emerald-50"
    >
      <Download size={18} />
    </a>

    {/* Edit */}

    <Link
      href={`/dashboard/admin/resources/edit/${resource.id}`}
      title="Edit"
      className="rounded-lg border p-2 text-amber-600 transition hover:bg-amber-50"
    >
      <Pencil size={18} />
    </Link>

    {/* Delete */}

    <button
      title="Delete"
      onClick={() => handleDelete(resource.id)}
      className="rounded-lg border p-2 text-red-600 transition hover:bg-red-50"
    >
      <Trash2 size={18} />
    </button>

  </div>

</td>

            </tr>

          ))

        )}

      </tbody>

    </table>

  </div>

  {/* Resource Details Modal */}

{selectedResource && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">

    <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">

      {/* Modal Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-7 py-5">

        <div>
          <p className="text-sm font-medium text-blue-600">
            Resource Details
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            {selectedResource.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setSelectedResource(null)}
          className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>

      </div>


      {/* Modal Content */}

      <div className="max-h-[75vh] overflow-y-auto p-7">

        <div className="grid gap-8 md:grid-cols-[220px_1fr]">

          {/* Thumbnail */}

          <div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">

              <Image
                src={selectedResource.thumbnail}
                alt={selectedResource.title}
                width={220}
                height={220}
                className="h-[220px] w-full object-cover"
              />

            </div>

          </div>


          {/* Details */}

          <div className="space-y-6">

            {/* Description */}

            <div>

              <p className="text-sm font-semibold text-slate-500">
                Description
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                {selectedResource.description || "No description available."}
              </p>

            </div>


            {/* Details Grid */}

            <div className="grid gap-4 sm:grid-cols-2">

              {/* Category */}

              <div className="rounded-2xl bg-slate-50 p-4">

                <div className="flex items-center gap-2 text-slate-500">

                  <Tag className="h-4 w-4" />

                  <span className="text-sm">
                    Category
                  </span>

                </div>

                <p className="mt-2 font-semibold text-slate-900">
                  {selectedResource.category}
                </p>

              </div>


              {/* Type */}

              <div className="rounded-2xl bg-slate-50 p-4">

                <div className="flex items-center gap-2 text-slate-500">

                  <FileText className="h-4 w-4" />

                  <span className="text-sm">
                    Type
                  </span>

                </div>

                <p className="mt-2 font-semibold text-slate-900">
                  {selectedResource.type}
                </p>

              </div>


              {/* Status */}

              <div className="rounded-2xl bg-slate-50 p-4">

                <p className="text-sm text-slate-500">
                  Status
                </p>

                <div className="mt-2">

                  {selectedResource.published ? (
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      Published
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      Draft
                    </span>
                  )}

                </div>

              </div>


              {/* Featured */}

              <div className="rounded-2xl bg-slate-50 p-4">

                <div className="flex items-center gap-2 text-slate-500">

                  <Star className="h-4 w-4" />

                  <span className="text-sm">
                    Featured
                  </span>

                </div>

                <p className="mt-2 font-semibold text-slate-900">
                  {selectedResource.featured ? "Yes" : "No"}
                </p>

              </div>


              {/* Created */}

              <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">

                <div className="flex items-center gap-2 text-slate-500">

                  <Calendar className="h-4 w-4" />

                  <span className="text-sm">
                    Created
                  </span>

                </div>

                <p className="mt-2 font-semibold text-slate-900">
                  {new Date(
                    selectedResource.created_at
                  ).toLocaleDateString()}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Modal Footer */}

      <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-7 py-5 sm:flex-row sm:justify-end">

        <button
          type="button"
          onClick={() => setSelectedResource(null)}
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Close
        </button>

        <a
          href={`${selectedResource.file_url}?fl_attachment`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Download className="h-4 w-4" />
          Download Resource
        </a>

      </div>

    </div>

  </div>
)}

</div>

    </div>
  )
}