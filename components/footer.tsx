import Link from 'next/link'
import Image from 'next/image'

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>

              <Link
                href="/"
                className="flex items-center gap-4 mb-6"
              >

                {/* Replace logo path later */}
              <Image
  src="/favicon-32x32.png"
  alt="Creek Learning Solutions"
  width={120}
  height={120}
  className="object-contain"
/>

                <div className="min-w-[260px]">
                  <h3 className="text-2xl font-bold leading-tight">
                    Creek Learning Solutions
                  </h3>

                  <p className="text-sm text-blue-300">
                    Inspiring People! Aspiring Life!!
                  </p>
                </div>

              </Link>

                <p className="text-slate-400 leading-8">
  Delivering leadership, behavioral, HR, retail,
  and professional learning solutions that empower
  individuals and organizations to achieve
  sustainable growth.
</p>

              {/* Social */}
              <div className="flex items-center gap-4 mt-8">

                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"
                >
                  <Linkedin size={18} />
                </a>

            
              </div>

            </div>

            {/* Quick Links */}
            <div>

              <h4 className="text-lg font-semibold mb-6">
                Quick Links
              </h4>

              <ul className="space-y-4 text-slate-400">

                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Courses
                  </Link>
                </li>

                <li>
                  <Link
                    href="/trainers"
                    className="hover:text-white transition-colors"
                  >
                    Trainers
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>

            </div>

            {/* Training Programs */}
            <div>

              <h4 className="text-lg font-semibold mb-6">
                Training Programs
              </h4>

              <ul className="space-y-4 text-slate-400">

  <li>
    <Link href="/training-programs/behavioral-training" className="hover:text-white transition-colors">
      Behavioral Training
    </Link>
  </li>

  <li>
    <Link href="/training-programs/leadership" className="hover:text-white transition-colors">
      Leadership
    </Link>
  </li>

  <li>
    <Link href="/training-programs/soft-skills-training" className="hover:text-white transition-colors">
      Soft Skills Training
    </Link>
  </li>

  <li>
    <Link href="/training-programs/core-hr-trainings" className="hover:text-white transition-colors">
      Core HR Trainings
    </Link>
  </li>

  <li>
    <Link href="/training-programs/retail" className="hover:text-white transition-colors">
      Retail Training
    </Link>
  </li>

  <li>
    <Link href="/training-programs/it-ites" className="hover:text-white transition-colors">
      IT & ITES Training
    </Link>
  </li>

</ul>
            </div>

            {/* Premium Services + Contact */}
            <div>

                <h4 className="text-lg font-semibold mb-6">
                Premium Services
              </h4>
<ul className="space-y-4 text-slate-400 mb-10">

  <li>
    <Link href="/premium-services/coaching-mentoring" className="hover:text-white transition-colors">
      Coaching & Mentoring
    </Link>
  </li>

  <li>
    <Link href="/premium-services/assessment-development-centre" className="hover:text-white transition-colors">
      Assessment Development Centre
    </Link>
  </li>

  <li>
    <Link href="/premium-services/organizational-development" className="hover:text-white transition-colors">
      Organizational Development
    </Link>
  </li>

  <li>
    <Link href="/premium-services/psychometric-test" className="hover:text-white transition-colors">
      Psychometric Tests
    </Link>
  </li>

  <li>
    <Link href="/premium-services/boot-camps-ttt" className="hover:text-white transition-colors">
      Boot Camps & TTT
    </Link>
  </li>

  <li>
    <Link href="/premium-services/outbound-training" className="hover:text-white transition-colors">
      Outbound Training
    </Link>
  </li>

</ul>

              <h4 className="text-lg font-semibold mb-5">
                Contact
              </h4>

              <div className="space-y-4 text-slate-400">

                <div className="flex gap-3">
                  <Mail size={18} className="text-blue-400" />
                  <span>
                    info@creeklearningsolutions.com
                  </span>
                </div>

                <div className="flex gap-3">
                  <Phone size={18} className="text-blue-400" />
                  <span>
                    +91 9322393157
                  </span>
                </div>

                 <div className="flex gap-3">
                  <Phone size={18} className="text-blue-400" />
                  <span>
                   +91 9618331539
                  </span>
                </div>

                <div className="flex gap-3">
                 <MapPin size={18} className="text-blue-400" />
                  <span>
                    Hyderabad, Telangana, India
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-500 text-sm">
              © 2026 Creek Learning Solutions. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-500">

              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>

              <Link
  href="/disclaimer"
  className="hover:text-white transition-colors"
>
  Disclaimer
</Link>

<Link
  href="/website-usage-policy"
  className="hover:text-white transition-colors"
>
  Website Usage Policy
</Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}