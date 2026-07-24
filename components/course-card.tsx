'use client'

import Link from 'next/link'
//import Image from 'next/image'
import {
  Star,
  Clock3,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react'

interface CourseCardProps {
  id: string
  title: string
  slug: string
  description: string
  //duration?: string
    duration_hours?: number

price?: number
level: string
  course_categories: {
    name: string
  }
}

export function CourseCard({
title,
slug,
description,
duration_hours,
price,
level,
course_categories,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${slug}`} className="group">
      <div className="relative overflow-hidden rounded-[28px] bg-white border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 enterprise-shadow hover:enterprise-shadow-lg">

        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

        <div className="h-64 w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center">
  <BookOpen className="w-14 h-14 text-white/80" />
</div>
          

          {/* Top Badges */}
          <div className="absolute top-5 left-5 z-20 flex gap-2">
            <div className="bg-white/90 backdrop-blur-xl text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full">
              {course_categories?.name || 'General'}
            </div>

            <div className="bg-blue-600/90 backdrop-blur-xl text-white text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
              {level}
            </div>
          </div>

          {/* Rating */}
          <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-xl px-3 py-2 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />

            <span className="text-white text-sm font-semibold">
              4.8
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed line-clamp-3 mb-6">
            {description}
          </p>

          {/* Trainer */}
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
    LS
  </div>

  <div>
    <p className="text-sm text-slate-500">
      LearningSolutions
    </p>

    <h4 className="font-semibold text-slate-900">
      Professional Training
    </h4>
  </div>
</div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-5">
            <div className="flex items-center gap-2 text-slate-600">
              <Clock3 className="w-4 h-4" />
              

              <span className="text-sm font-medium">
  {duration_hours ? `${duration_hours} Hours` : 'Self Paced'}
</span>

            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500 mb-1">
                Starting From
              </p>

              <h4 className="text-2xl font-bold text-blue-700">
                ${price?.toFixed(0) || '99'}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}