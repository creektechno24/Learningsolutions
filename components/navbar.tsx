'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const supabase = createClient()

        const {
          data: { user },
        } = await supabase.auth.getUser()

        setUser(user)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    getUser()

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
          : 'bg-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-lg">
                LS
              </span>
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                LearningSolutions
              </h1>

              <p className="text-xs text-slate-500 -mt-1">
                Enterprise Training Platform
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/courses"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Courses
            </Link>

            <Link
              href="/trainers"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Trainers
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right */}
      <div className="hidden lg:flex items-center gap-3">
  <Link href="/auth/login">
    <Button
      variant="ghost"
      className="h-11 px-5 rounded-xl text-slate-700 hover:bg-slate-100"
    >
      Sign In
    </Button>
  </Link>

  <Link href="/auth/sign-up">
    <Button className="h-11 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
      Get Started
    </Button>
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-5 border-t border-slate-200 bg-white rounded-b-3xl shadow-2xl">

            <div className="flex flex-col gap-2">
              {[
                { label: 'Courses', href: '/courses' },
                { label: 'Trainers', href: '/trainers' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-5 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

          <div className="mt-5 pt-5 border-t border-slate-200 px-5">

  <div className="space-y-3">

    <Link href="/auth/login">
      <Button
        variant="outline"
        className="w-full h-11 rounded-xl"
      >
        Sign In
      </Button>
    </Link>

    <Link href="/auth/sign-up">
      <Button className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600">
        Get Started
      </Button>
    </Link>

  </div>

</div>

          </div>
        )}
      </div>
    </nav>
  )
}