import Link from 'next/link'

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          Enterprise Panel
        </h2>

        <nav className="space-y-4">
          <Link
            href="/dashboard/enterprise"
            className="block hover:text-blue-400"
          >
            Dashboard
          </Link>

          <Link
            href="/dashboard/enterprise/profile"
            className="block hover:text-blue-400"
          >
            Company Profile
          </Link>

          <Link
            href="/dashboard/enterprise/inquiries"
            className="block hover:text-blue-400"
          >
            Training Inquiries
          </Link>

          <Link
            href="/dashboard/enterprise/trainings"
            className="block hover:text-blue-400"
          >
            My Trainings
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  )
}

