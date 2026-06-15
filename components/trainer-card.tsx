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
  hourly_rate,
  is_verified,
}: TrainerCardProps) {
  return (
    <Link href={`/trainers/${id}`} className="group block">
      <div className="relative h-[650px] flex flex-col overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200">

        {/* Premium Gradient Header */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700" />

        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute top-20 -left-10 w-28 h-28 rounded-full bg-white/10" />

        <div className="relative flex flex-col h-full p-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-8">

            <div className="flex items-center gap-4 flex-1">

              {/* Profile Image */}
              <div className="relative w-24 h-24 rounded-[28px] overflow-hidden border-4 border-white shadow-2xl bg-slate-100 flex-shrink-0">

                {profile_image_url ? (
                  <Image
                    src={profile_image_url}
                    alt={`${first_name} ${last_name}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                    {first_name?.charAt(0)}
                    {last_name?.charAt(0)}
                  </div>
                )}
              </div>

              {/* Trainer Info */}
              <div className="pt-3 flex-1">

                <div className="flex items-center gap-2 mb-2 flex-wrap">

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {first_name} {last_name}
                  </h3>

                  {is_verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-600 fill-blue-100 flex-shrink-0" />
                  )}
                </div>

                <p className="text-slate-500 text-sm font-medium">
                  {qualification || 'Professional Trainer'}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-all duration-300 flex-shrink-0">
              <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </div>
          </div>

          {/* Verified Badge */}
          {is_verified && (
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-100 rounded-full px-4 py-2 text-sm font-semibold mb-6 w-fit">
              <Award className="w-4 h-4" />
              Top Verified Trainer
            </div>
          )}

          {/* Bio */}
          <div className="min-h-[120px] mb-8">
            <p className="text-slate-600 leading-relaxed line-clamp-4">
              {bio || 'Experienced corporate trainer helping professionals and organizations achieve their learning goals.'}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <BriefcaseBusiness className="w-5 h-5 text-blue-700" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Experience
                  </p>

                  <h4 className="font-bold text-slate-900">
                    {years_of_experience || 0}+ Years
                  </h4>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">

              <p className="text-xs text-slate-500 mb-2">
                Hourly Rate
              </p>

              <h4 className="text-3xl font-bold text-blue-700">
                ${hourly_rate || 0}
              </h4>
            </div>
          </div>

          {/* Expertise */}
          <div className="min-h-[100px]">

            <div className="flex flex-wrap gap-2">

              {expertise?.slice(0, 4).map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                >
                  {skill}
                </div>
              ))}

              {expertise?.length > 4 && (
                <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  +{expertise.length - 4} More
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-8">

            <div className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center py-3 font-semibold transition-all duration-300 group-hover:shadow-lg">
              View Full Profile
            </div>

          </div>

        </div>
      </div>
    </Link>
  )
}