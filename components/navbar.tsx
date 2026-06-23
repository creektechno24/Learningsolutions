'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function Navbar() {
    const pathname = usePathname()
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
      <div className="max-w-[1900px] mx-auto px-10">
        <div className="py-3">
   <div className="flex items-center justify-between">

<Link
  href="/"
  className="flex items-center gap-3"
>
  <Image
    src="/favicon-32x32.png"
    alt="Creek Learning Solutions"
    width={52}
    height={52}
    className="rounded-xl"
  />

  <div className="leading-tight">
    <span className="block text-xl font-bold text-slate-900">
      Creek Learning Solutions
    </span>

    <span className="block text-[11px] font-medium tracking-[0.06em] text-blue-600">
   Inspiring People! Aspiring Life!!
    </span>
  </div>
</Link>
  <div className="hidden xl:flex items-center gap-3 w-[320px] justify-end shrink-0">
  <Link href="/auth/login">
    <Button
      variant="ghost"
      className="h-11 px-5 rounded-xl"
    >
      Sign In
    </Button>
  </Link>

  <Link href="/auth/sign-up">
    <Button className="h-12 px-7 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-lg hover:shadow-xl transition-all">
      Get Started
    </Button>
  </Link>
</div>

</div>

  

   {/* Desktop Navigation */}
   <div className="hidden xl:flex items-center justify-center gap-10 border-t border-slate-100 mt-4 pt-4 ">
 <Link
  href="/"
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
    pathname === '/'
  ? 'text-blue-600'
  : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Home
</Link>

<Link
  href="/about"
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
    pathname === '/about'
  ? 'text-blue-600'
  : 'text-slate-700 hover:text-blue-600'
  }`}
>
  About Us
</Link>

<Link
  href="/courses"
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
    pathname.startsWith('/courses')
  ? 'text-blue-600'
  : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Courses
</Link>

<Link
  href="/trainers"
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
  pathname.startsWith('/trainers')
  ? 'text-blue-600'
  : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Trainers
</Link>

  <div className="relative group">
 <button
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
    pathname.startsWith('/training-programs')
      ? 'text-blue-600'
      : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Curated Training Programs
</button>

  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

 <Link
  href="/training-programs/behavioral-training"
  className="block px-5 py-3 hover:bg-slate-100"
>
  Behavioral Training
</Link>

<Link
href="/training-programs/core-hr-trainings"
  className="block px-5 py-3 hover:bg-slate-100"
>
  Core HR Trainings
</Link>

<Link
  href="/training-programs/leadership"
  className="block px-5 py-3 hover:bg-slate-100"
>
  Leadership
</Link>

<Link
  href="/training-programs/retail"

  className="block px-5 py-3 hover:bg-slate-100"
>
  Retail
</Link>

<Link
  href="/training-programs/soft-skills-training"
  className="block px-5 py-3 hover:bg-slate-100"
>
  Soft Skills
</Link>

<Link
  href="/training-programs/industrial-safety"
  className="block px-5 py-3 hover:bg-slate-100"
>
  Industrial Safety
</Link>

<Link
  href="/training-programs/it-ites"
  className="block px-5 py-3 hover:bg-slate-100"
>
  IT & ITES
</Link>

  </div>
</div>

<div className="relative group">
 <button
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
    pathname.startsWith('/premium-services')
      ? 'text-blue-600'
      : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Premium Services
</button>
<div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

    <Link
      href="/premium-services/assessment-development-centre"
      className="block px-5 py-3 hover:bg-slate-100 text-slate-700"
    >
      Assessment Development Centre (ADC)
    </Link>

    <Link
      href="/premium-services/boot-camps-ttt"
  className="block px-5 py-3 hover:bg-slate-100 text-slate-700"
    >
      Boot Camps & TTT Programs
    </Link>

    <Link
      href="/premium-services/coaching-mentoring"
      className="block px-5 py-3 hover:bg-slate-100 text-slate-700"
    >
      Coaching & Mentoring
    </Link>

    <Link
      href="/premium-services/csr-projects"
     className="block px-5 py-3 hover:bg-slate-100 text-slate-700"
    >
      CSR Projects
    </Link>

    <Link
      href="/premium-services/organizational-development"
     className="block px-5 py-3 hover:bg-slate-100 text-slate-700"
    >
      Organizational Development (OD)
    </Link>

    <Link
      href="/premium-services/outbound-training"
     className="block px-5 py-3 hover:bg-slate-100 text-slate-700"
    >
      Out Bound Training (OBT)
    </Link>

    <Link
      href="/premium-services/psychometric-test"
   className="block px-5 py-3 hover:bg-slate-100 text-slate-700"
    >
      Psychometric Test
    </Link>

  </div>
</div>

<Link
  href="/clients-industries"
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
    pathname.startsWith('/clients-industries')
      ? 'text-blue-600'
      : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Clients & Industries
</Link>

<Link
  href="/group-brands"
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
    pathname.startsWith('/group-brands')
      ? 'text-blue-600'
      : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Group Brands
</Link>

 <Link
  href="/contact"
  className={`text-[15px] font-semibold whitespace-nowrap transition-all ${
   pathname === '/contact'
  ? 'text-blue-600'
  : 'text-slate-700 hover:text-blue-600'
  }`}
>
  Contact Us
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
  { label: 'About Us', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Trainers', href: '/trainers' },
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