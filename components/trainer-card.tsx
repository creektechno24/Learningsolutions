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
<div className="relative h-full overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.15)]">
        {/* Header Gradient */}
<div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900" />
        {/* Decorative Shapes */}
       <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/5" />
<div className="absolute top-6 -left-10 h-28 w-28 rounded-full bg-white/5" />

        <div className="relative p-7 flex flex-col h-full">

          {/* Top Section */}
          <div className="flex items-start justify-between mb-4">

               <div className="flex flex-1 items-start gap-4">
                
              <div className="relative w-20 h-20 rounded-[28px] overflow-hidden border-[3px] border-white shadow-xl ring-1 ring-slate-200 bg-slate-100 flex-shrink-0">

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

                <div className="flex-1 pt-4">
 
                <div className="flex items-center gap-2 flex-wrap">

                  <h3  className="text-xl font-bold text-white line-clamp-1">
                    {first_name} {last_name}
                  </h3>

                  {is_verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-600 fill-blue-100" />
                  )}

                </div>


                <div className="mt-2 inline-flex items-center rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
  {qualification || "Corporate Trainer"}
</div>
         
            

              </div>

            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600">
              <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </div>

          </div>

          

          {/* Bio */}
          <div className="mb-5">
            <p className="text-slate-600 text-[15px] leading-6 line-clamp-2">
              {bio ||
                'Experienced corporate trainer helping organizations and professionals achieve measurable learning outcomes.'}
            </p>
          </div>

          {/* Stats */}
           {/* Trainer Info */}
<div className="flex items-center flex-wrap gap-4 mb-5 border-b border-slate-100 pb-5 text-sm">
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
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-blue-600 hover:text-white">
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

            <div className="w-full rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 py-3.5 text-center text-sm font-semibold tracking-wide text-white transition-all duration-300 group-hover:from-blue-700 group-hover:to-indigo-700">
              View Full Profile →
            </div>

          </div>

        </div>
      </div>
    </Link>
  )
}