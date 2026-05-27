        import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-3xl rounded-full" />

      <div className="relative">

        {/* Top CTA */}
        {/*
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

             
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-blue-100 mb-6">
                  Enterprise Learning Platform
                </div>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                  Ready To Upskill Your Workforce?
                </h2>

                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Accelerate business growth with expert-led enterprise
                  learning, customized corporate training programs, and
                  scalable workforce transformation solutions.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <div className="flex flex-col sm:flex-row gap-4">

                  <Link href="/courses">
                    <Button
                      size="lg"
                      className="h-14 px-8 rounded-2xl bg-white text-slate-900 hover:bg-slate-100"
                    >
                      Explore Courses
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20"
                    >
                      Contact Sales
                    </Button>
                  </Link>

                </div>
              </div>

            </div>

          </div>
        </div>*/}

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                  <span className="text-white text-xl font-bold">
                    LS
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    LearningSolutions
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Enterprise Training Platform
                  </p>
                </div>

              </Link>

              <p className="text-slate-400 leading-relaxed text-lg max-w-lg mb-8">
                Empowering organizations through enterprise-grade workforce
                development, expert-led corporate learning, and scalable
                training solutions for modern businesses.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">

                {[
                  {
                    value: '500+',
                    label: 'Trainings',
                  },
                  {
                    value: '100+',
                    label: 'Experts',
                  },
                  {
                    value: '50+',
                    label: 'Companies',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h4 className="text-2xl font-bold text-white">
                      {item.value}
                    </h4>

                    <p className="text-sm text-slate-400 mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}

              </div>

            </div>

            {/* Training Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Training Programs
              </h4>

              <ul className="space-y-4 text-slate-400">

                {[
                  'Leadership Training',
                  'Technical Upskilling',
                  'Cloud Computing',
                  'Data Science',
                  'Cybersecurity',
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/courses"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Company
              </h4>

              <ul className="space-y-4 text-slate-400">

                {[
                  {
                    label: 'About Us',
                    href: '/about',
                  },
                  {
                    label: 'Expert Trainers',
                    href: '/trainers',
                  },
                  {
                    label: 'Enterprise Solutions',
                    href: '/contact',
                  },
                  {
                    label: 'Contact',
                    href: '/contact',
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Contact
              </h4>

              <div className="space-y-4 text-slate-400">

                <p>
                  info@learningsolutions.com
                </p>

                <p>
                  +1 (234) 567-890
                </p>

                <p>
                  Enterprise Learning Solutions Worldwide
                </p>

              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-500 text-sm">
              © 2025 LearningSolutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-500">

              <Link
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                href="#"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}