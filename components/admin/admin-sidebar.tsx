'use client'

import Link from "next/link";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  FolderOpen,
  Briefcase,
  Mail,
} from "lucide-react";

export default function AdminSidebar() {

  return (
  
  <div className="flex h-full flex-col">

    {/* Logo */}

    <div className="border-b border-slate-700 pb-6">
      <Link
        href="/dashboard/admin"
        className="flex items-center gap-3"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg">
          LS
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            LearningSolutions
          </h2>

        
        </div>
      </Link>
    </div>

    {/* Menu */}

    <nav className="mt-8 flex-1 space-y-2">

      <Link
        href="/dashboard/admin"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-400"
      >
        <LayoutDashboard className="h-5 w-5" />
        Dashboard
      </Link>

      <Link
        href="/dashboard/admin/trainers"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-400"
      >
        <Users className="h-5 w-5" />
        Trainers
      </Link>

      <Link
        href="/dashboard/admin/courses"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-400"
      >
        <BookOpen className="h-5 w-5" />
        Courses
      </Link>

      <Link
        href="/dashboard/admin/resources"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-400"
      >
        <FolderOpen className="h-5 w-5" />
        Resources
      </Link>

      <Link
        href="/dashboard/admin/inquiries"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-400"
      >
        <Briefcase className="h-5 w-5" />
        Inquiries
      </Link>

      <Link
        href="/dashboard/admin/contact"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-400"
      >
        <Mail className="h-5 w-5" />
        Messages
      </Link>

    </nav>

    {/* Bottom */}

    <div className="border-t border-slate-800 pt-6">

      <div className="mb-5 rounded-2xl border border-slate-700 bg-slate-800 p-4">

        <p className="font-semibold text-white">
          Administrator
        </p>

        <p className="mt-1 text-xs font-medium text-emerald-400">
          ● Online
        </p>

      </div>


    </div>

  </div>

  )
}