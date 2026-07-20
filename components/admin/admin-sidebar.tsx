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

      {/* Resources */}

      

    <Link
  href="/dashboard/admin/resources"
  className="block hover:text-blue-400"
>
  Resources
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