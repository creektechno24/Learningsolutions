'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AdminSidebar() {
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <nav className="space-y-4">
      <Link
        href="/dashboard/admin"
        className="block hover:text-blue-400"
      >
        Dashboard
      </Link>

      <Link
        href="/dashboard/admin/trainers"
        className="block hover:text-blue-400"
      >
        Trainers
      </Link>

      <Link
        href="/dashboard/admin/courses"
        className="block hover:text-blue-400"
      >
        Courses
      </Link>

      <button
        type="button"
        onClick={() => setResourcesOpen(!resourcesOpen)}
        className="block w-full text-left hover:text-blue-400"
      >
        Resources
      </button>

      {resourcesOpen && (
        <div className="ml-4 space-y-3 border-l border-gray-700 pl-4">
          <Link
            href="/dashboard/admin/resources/frameworks"
            className="block hover:text-blue-400"
          >
            Frameworks
          </Link>

          <Link
            href="/dashboard/admin/resources/stories"
            className="block hover:text-blue-400"
          >
            Stories
          </Link>

          <Link
            href="/dashboard/admin/resources/pdfs"
            className="block hover:text-blue-400"
          >
            PDFs
          </Link>

          <Link
            href="/dashboard/admin/resources/documents"
            className="block hover:text-blue-400"
          >
            Documents
          </Link>
        </div>
      )}

      <Link
  href="/dashboard/admin/clients"
  className="block hover:text-blue-400"
>
  Clients
</Link>

      <Link
        href="/dashboard/admin/inquiries"
        className="block hover:text-blue-400"
      >
        Inquiries
      </Link>
    </nav>
  )
}