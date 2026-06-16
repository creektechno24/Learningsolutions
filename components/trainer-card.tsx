'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Award,
  ArrowUpRight,
  BriefcaseBusiness,
  BadgeCheck,
} from 'lucide-react'

interface TrainerCardProps {
  id: string
  first_name: string
  last_name: string
  bio: string
  profile_image_url: string
  expertise: string[]
  qualification: string
  years_of_experience: number
  hourly_rate: number
  is_verified: boolean
}

export function TrainerCard({
  id,
  first_name,
  last_name,
  bio,
  profile_image_url,
  expertise,
  qualification,
  years_of_experience,
  is_verified,
}: TrainerCardProps) {
  return (
    <Link
      href={`/trainers/${id}`}
      className="group block"
    >
      <div className="relative h-full overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

        {/* Header Gradient */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600" />

        {/* Decorative Shapes */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute top-10 -left-8 w-24 h-24 rounded-full bg-white/10" />

        <div className="relative p-6 flex flex-col h-full">

          {/* Top Section */}
          <div className="flex items-start justify-between mb-4">

            <div className="flex items-center gap-3 flex-1">

              <div className="relative w-16 h-16 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100 flex-shrink-0">

                {profile_image_url ? (
                  <Image
                    src={profile_image_url}
                    alt={`${first_name} ${last_name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                   <span className="text-white text-xl font-bold">
                      {first_name?.charAt(0)}
                      {last_name?.charAt(0)}
                    </span>
                  </div>
                )}

              </div>

              <div className="pt-4">

                <div className="flex items-center gap-2 flex-wrap">

                  <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
                    {first_name} {last_name}
                  </h3>

                  {is_verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-600 fill-blue-100" />
                  )}

                </div>

          <p className="text-slate-500 text-sm mt-1">
                  {qualification || 'Corporate Trainer'}
                </p>

              </div>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:bg-blue-600 transition-all">
              <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </div>

          </div>

          

          {/* Bio */}
          <div className="mb-4">
            <p className="text-slate-600 text-sm leading-6 line-clamp-2">
              {bio ||
                'Experienced corporate trainer helping organizations and professionals achieve measurable learning outcomes.'}
            </p>
          </div>

          {/* Stats */}
           {/* Trainer Info */}
<div className="flex items-center flex-wrap gap-3 mb-4 text-sm">

  <div className="flex items-center gap-2 text-slate-600">
    <BriefcaseBusiness className="w-4 h-4 text-blue-600" />
    <span>{years_of_experience || 0}+ Years</span>
  </div>

  <span className="w-1 h-1 bg-slate-300 rounded-full" />

  <span className="text-slate-600">
    {qualification || 'Certified Trainer'}
  </span>

</div>

          {/* Expertise */}
          <div className="mb-4">

            <div className="flex flex-wrap gap-2">

              {expertise?.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
              className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold"  >
                  {skill}
                </span>
              ))}

              {expertise?.length > 4 && (
                <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                  +{expertise.length - 4} More
                </span>
              )}

            </div>

          </div>

          {/* CTA */}
          <div className="mt-auto">

<div className="w-full rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center py-3 text-sm font-semibold tracking-wide">
              View Full Profile
            </div>

          </div>

        </div>
      </div>
    </Link>
  )
}