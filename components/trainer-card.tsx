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
    <Link href={`/trainers/${id}`} className="group">
      <div className="relative overflow-hidden rounded-[32px] bg-white border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 enterprise-shadow hover:enterprise-shadow-lg">

        {/* Top Glow */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

        {/* Floating Blur */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full" />

        <div className="relative p-8">

          {/* Profile Header */}
          <div className="flex items-start justify-between mb-8">

            {/* Profile */}
            <div className="flex items-center gap-4">

              {/* Image */}
              <div className="relative w-24 h-24 rounded-[28px] overflow-hidden border-4 border-white shadow-2xl bg-slate-100">

                {profile_image_url ? (
                  <Image
                    src={profile_image_url}
                    alt={`${first_name} ${last_name}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                    {first_name?.charAt(0)}
                    {last_name?.charAt(0)}
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="pt-3">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {first_name} {last_name}
                  </h3>

                  {is_verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-600 fill-blue-100" />
                  )}
                </div>

                <p className="text-slate-600 font-medium">
                  {qualification}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-blue-600 transition-all duration-300 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
            </div>
          </div>

          {/* Verified Badge */}
          {is_verified && (
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-100 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Verified Enterprise Trainer
            </div>
          )}

          {/* Bio */}
          <p className="text-slate-600 leading-relaxed line-clamp-3 mb-8">
            {bio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <BriefcaseBusiness className="w-5 h-5 text-blue-700" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Experience
                  </p>

                  <h4 className="font-bold text-slate-900">
                    {years_of_experience}+ Years
                  </h4>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <p className="text-xs text-slate-500 mb-2">
                Hourly Consulting
              </p>

              <h4 className="text-3xl font-bold text-blue-700">
                ${hourly_rate}
              </h4>
            </div>

          </div>

          {/* Expertise */}
          <div className="flex flex-wrap gap-3">
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
      </div>
    </Link>
  )
}