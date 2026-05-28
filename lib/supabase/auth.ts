'use client'

import { createClient } from '@/lib/supabase/client'

export type UserType = 'trainer' | 'enterprise'

export interface SignUpData {
  email: string
  password: string
  userType: UserType
  firstName?: string
  lastName?: string
  companyName?: string
}

export interface LoginData {
  email: string
  password: string
}

export async function signUp(data: SignUpData) {
  const supabase = createClient()

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo:
        process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ??
        `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`,
      data: {
        user_type: data.userType,
        first_name: data.firstName || '',
        last_name: data.lastName || '',
        company_name: data.companyName || '',
      },
    },
  })

  if (authError) {
    return { error: authError.message }
  }

  return { data: authData, error: null }
}

export async function login(data: LoginData) {
  const supabase = createClient()

  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  })

  if (error) {
    return { error: error.message }
  }

  return { data: authData, error: null }
}

export async function logout() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    return { error: error.message }
  }

  return { error: null }
}

export async function createTrainerProfile(
  userId: string,
  data: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    bio?: string
    expertise?: string[]
    qualification?: string
    yearsOfExperience?: number
  }
) {
  const supabase = createClient()

  const { data: profile, error } = await supabase
    .from('trainer_profiles')
    .insert([
      {
        id: userId,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        bio: data.bio || null,
        expertise: data.expertise || [],
        qualification: data.qualification || null,
        years_of_experience: data.yearsOfExperience || 0,
        status: 'pending',
        approved: false,
      },
    ])
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  return { data: profile, error: null }
}

export async function createEnterpriseProfile(
  userId: string,
  data: {
    companyName: string
    email: string
    phone?: string
    website?: string
    industry?: string
    companySize?: string
    description?: string
  }
) {
  const supabase = createClient()

  const { data: profile, error } = await supabase
    .from('enterprise_profiles')
    .insert([
      {
        id: userId,
        company_name: data.companyName,
        email: data.email,
        phone: data.phone || null,
        website: data.website || null,
        industry: data.industry || null,
        company_size: data.companySize || null,
        description: data.description || null,
        status: 'pending',
      },
    ])
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  return { data: profile, error: null }
}

export async function getTrainerProfile(userId: string) {
  const supabase = createClient()

  const { data: profile, error } = await supabase
    .from('trainer_profiles')
    .select()
    .eq('id', userId)
    .single()

  if (error) {
    return { data: null, error: error.message }
  }

  return { data: profile, error: null }
}

export async function getEnterpriseProfile(userId: string) {
  const supabase = createClient()

  const { data: profile, error } = await supabase
    .from('enterprise_profiles')
    .select()
    .eq('id', userId)
    .single()

  if (error) {
    return { data: null, error: error.message }
  }

  return { data: profile, error: null }
}

export async function updateTrainerProfile(
  userId: string,
  data: Partial<{
    firstName: string
    lastName: string
    phone: string
    bio: string
    expertise: string[]
    profileImageUrl: string
    qualification: string
    yearsOfExperience: number
    hourlyRate: number
  }>
) {
  const supabase = createClient()

  const updateData: any = {}
  if (data.firstName) updateData.first_name = data.firstName
  if (data.lastName) updateData.last_name = data.lastName
  if (data.phone) updateData.phone = data.phone
  if (data.bio) updateData.bio = data.bio
  if (data.expertise) updateData.expertise = data.expertise
  if (data.profileImageUrl) updateData.profile_image_url = data.profileImageUrl
  if (data.qualification) updateData.qualification = data.qualification
  if (data.yearsOfExperience) updateData.years_of_experience = data.yearsOfExperience
  if (data.hourlyRate) updateData.hourly_rate = data.hourlyRate

  const { data: profile, error } = await supabase
    .from('trainer_profiles')
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  return { data: profile, error: null }
}

export async function updateEnterpriseProfile(
  userId: string,
  data: Partial<{
    companyName: string
    phone: string
    website: string
    industry: string
    companySize: string
    description: string
    logoUrl: string
  }>
) {
  const supabase = createClient()

  const updateData: any = {}
  if (data.companyName) updateData.company_name = data.companyName
  if (data.phone) updateData.phone = data.phone
  if (data.website) updateData.website = data.website
  if (data.industry) updateData.industry = data.industry
  if (data.companySize) updateData.company_size = data.companySize
  if (data.description) updateData.description = data.description
  if (data.logoUrl) updateData.logo_url = data.logoUrl

  const { data: profile, error } = await supabase
    .from('enterprise_profiles')
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  return { data: profile, error: null }
}
