import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

import {
  ShoppingBag,
  Clock3,
  BarChart3,
  ArrowRight
} from 'lucide-react'
export default async function RetailPage() {
  const supabase = await createClient()

const { data: courses } = await supabase
  .from('courses')
  .select(`
    id,
    title,
    slug,
    description,
    duration,
    level,
    course_categories!inner(
      slug
    )
  `)
  .eq('is_published', true)
  .eq(
    'course_categories.slug',
    'retail'
  )
  .limit(6)
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-20 bg-slate-950">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
                Curated Training Program
              </span>

              <h1 className="text-6xl font-bold text-white mt-6 mb-6">
                Retail Training
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Comprehensive retail training solutions designed to
                improve customer experience, sales performance and
                operational excellence.
              </p>

            </div>

            <div>

              <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

                <Image
                  src="/images/training-programs/rrr.png"
                  alt="Retail Training"
                  fill
                  priority
                  className="object-contain p-4"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Customer Experience (CX) */}
<section className="py-24 bg-gradient-to-b from-sky-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Customer Experience
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Customer Experience (CX)
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Creating exceptional customer experiences through engaged,
        empowered and customer-focused employees.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-sky-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Customer experience refers to the total journey a customer
          has with a brand from first interaction to post-purchase
          support. It encompasses every touchpoint, emotion and
          perception that shapes loyalty and satisfaction.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Exceptional customer experience starts with employees.
          When employees are engaged, empowered and aligned with
          customer-centric values, they naturally deliver better service.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          Customer experience is not just a front-line concern.
          It is a cultural mindset that must permeate every level
          of the organization.
        </p>

      </div>

    </div>

    {/* Employee Benefits */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-sky-100 text-sky-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact On Employees
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div className="bg-sky-50 rounded-[30px] border border-sky-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold mb-6">
            01
          </div>

          <h4 className="text-2xl font-bold text-sky-700 mb-4">
            Engagement & Purpose
          </h4>

          <p className="text-slate-600 leading-8">
            Employees feel more connected to the organization's
            mission when they see the impact of their work on customers.
          </p>

        </div>

        <div className="bg-cyan-50 rounded-[30px] border border-cyan-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold mb-6">
            02
          </div>

          <h4 className="text-2xl font-bold text-cyan-700 mb-4">
            Communication & Empathy
          </h4>

          <p className="text-slate-600 leading-8">
            Active listening and thoughtful responses improve
            customer interactions and internal collaboration.
          </p>

        </div>

        <div className="bg-blue-50 rounded-[30px] border border-blue-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-6">
            03
          </div>

          <h4 className="text-2xl font-bold text-blue-700 mb-4">
            Accountability & Ownership
          </h4>

          <p className="text-slate-600 leading-8">
            Employees take more initiative to solve problems
            and go the extra mile for customers.
          </p>

        </div>

        <div className="bg-indigo-50 rounded-[30px] border border-indigo-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-6">
            04
          </div>

          <h4 className="text-2xl font-bold text-indigo-700 mb-4">
            Morale & Recognition
          </h4>

          <p className="text-slate-600 leading-8">
            Positive customer feedback reinforces pride,
            motivation and workplace appreciation.
          </p>

        </div>

        <div className="bg-teal-50 rounded-[30px] border border-teal-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold mb-6">
            05
          </div>

          <h4 className="text-2xl font-bold text-teal-700 mb-4">
            Skill Development
          </h4>

          <p className="text-slate-600 leading-8">
            Employees build emotional intelligence,
            adaptability and conflict resolution skills.
          </p>

        </div>

        <div className="bg-sky-100 rounded-[30px] border border-sky-300 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold mb-6">
            06
          </div>

          <h4 className="text-2xl font-bold text-sky-800 mb-4">
            Reduced Burnout
          </h4>

          <p className="text-slate-700 leading-8">
            Proper training and support reduce stress
            and improve employee well-being.
          </p>

        </div>

      </div>

    </div>

    {/* Highlight */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-sky-700 via-cyan-700 to-blue-700 rounded-[36px] p-14 shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Why Customer Experience Matters
        </h3>

        <p className="text-xl text-sky-100 leading-9">
          Exceptional customer experience begins with engaged
          employees. Organizations that invest in customer-centric
          cultures create stronger relationships, higher loyalty
          and sustainable business growth.
        </p>

      </div>

    </div>

    {/* CTA */}

    <div className="mt-12">

      <div className="bg-white rounded-[36px] border-2 border-sky-100 p-12 shadow-xl text-center">

        <h3 className="text-4xl font-bold mb-6">
          Build Customer-Centric Teams
        </h3>

        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-8">
          If you are planning to roll this out, we would love
          to help design a customized curriculum and roadmap
          tailored to your customer experience goals.
        </p>

        <button className="mt-10 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Call Us Today
        </button>

      </div>

    </div>

  </div>

</section>

{/* Product & Process Training */}
<section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Product & Process Training
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Product & Process Training
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Building operational excellence through product knowledge,
        standardized processes and continuous improvement.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-emerald-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Product and process training is designed to equip employees
          with a deep understanding of the organization’s offerings
          and the systems or workflows used to deliver them.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Product training focuses on features, benefits, use cases,
          competitive positioning and troubleshooting, while process
          training covers workflows, SOPs, compliance requirements
          and operational excellence.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          This training ensures employees across departments remain
          aligned, informed and capable of delivering consistent
          customer experiences.
        </p>

      </div>

    </div>

    {/* Training Areas */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold">
          Training Focus
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Core Training Areas
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-emerald-50 rounded-[30px] border border-emerald-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold mb-6">
            01
          </div>

          <h4 className="text-2xl font-bold text-emerald-700 mb-4">
            Product Knowledge
          </h4>

          <p className="text-slate-600 leading-8">
            Features, benefits, use cases and competitive positioning.
          </p>

        </div>

        <div className="bg-teal-50 rounded-[30px] border border-teal-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold mb-6">
            02
          </div>

          <h4 className="text-2xl font-bold text-teal-700 mb-4">
            Process Excellence
          </h4>

          <p className="text-slate-600 leading-8">
            SOPs, workflows and operational best practices.
          </p>

        </div>

        <div className="bg-green-50 rounded-[30px] border border-green-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-6">
            03
          </div>

          <h4 className="text-2xl font-bold text-green-700 mb-4">
            Compliance
          </h4>

          <p className="text-slate-600 leading-8">
            Regulatory requirements and quality standards.
          </p>

        </div>

        <div className="bg-lime-50 rounded-[30px] border border-lime-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-lime-600 text-white flex items-center justify-center font-bold mb-6">
            04
          </div>

          <h4 className="text-2xl font-bold text-lime-700 mb-4">
            Troubleshooting
          </h4>

          <p className="text-slate-600 leading-8">
            Problem-solving techniques and issue resolution.
          </p>

        </div>

      </div>

    </div>

    {/* Employee Benefits */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact On Employees
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div className="bg-emerald-50 rounded-[30px] border border-emerald-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-emerald-700 mb-4">
            Confidence & Competence
          </h4>

          <p className="text-slate-600 leading-8">
            Employees confidently answer questions,
            solve problems and represent the brand.
          </p>

        </div>

        <div className="bg-teal-50 rounded-[30px] border border-teal-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-teal-700 mb-4">
            Customer Experience
          </h4>

          <p className="text-slate-600 leading-8">
            Faster, more accurate and personalized
            customer interactions.
          </p>

        </div>

        <div className="bg-green-50 rounded-[30px] border border-green-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-green-700 mb-4">
            Efficiency & Consistency
          </h4>

          <p className="text-slate-600 leading-8">
            Standardized processes improve speed,
            quality and operational effectiveness.
          </p>

        </div>

        <div className="bg-lime-50 rounded-[30px] border border-lime-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-lime-700 mb-4">
            Engagement & Ownership
          </h4>

          <p className="text-slate-600 leading-8">
            Employees understand their contribution
            and take greater accountability.
          </p>

        </div>

        <div className="bg-emerald-100 rounded-[30px] border border-emerald-300 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-emerald-800 mb-4">
            Adaptability
          </h4>

          <p className="text-slate-700 leading-8">
            Teams adapt quickly to new products,
            processes and organizational changes.
          </p>

        </div>

        <div className="bg-teal-100 rounded-[30px] border border-teal-300 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-teal-800 mb-4">
            Collaboration
          </h4>

          <p className="text-slate-700 leading-8">
            Shared understanding improves teamwork,
            communication and innovation.
          </p>

        </div>

      </div>

    </div>

    {/* Highlight */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 rounded-[36px] p-14 shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Why Product & Process Training Matters
        </h3>

        <p className="text-xl text-emerald-100 leading-9">
          Employees who understand both products and processes
          perform more effectively, deliver better customer
          experiences and contribute to operational excellence.
        </p>

      </div>

    </div>

    {/* CTA */}

    <div className="mt-12">

      <div className="bg-white rounded-[36px] border-2 border-emerald-100 p-12 shadow-xl text-center">

        <h3 className="text-4xl font-bold mb-6">
          Build Operational Excellence
        </h3>

        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-8">
          We help organizations design customized Product &
          Process Training programs aligned to business goals,
          workflows and customer expectations.
        </p>

        <button className="mt-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Call Us Today
        </button>

      </div>

    </div>

  </div>

</section>

{/* Sales Training */}
<section className="py-24 bg-gradient-to-b from-orange-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Sales Training
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Sales Training
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Empowering sales professionals with the confidence,
        communication and strategies required to achieve
        sustainable business growth.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-orange-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Sales training is a structured development process that
          equips employees with the knowledge, skills and behaviors
          needed to sell effectively in today's competitive market.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          It covers everything from understanding products and
          customer needs to mastering communication, negotiation
          and closing techniques.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          Whether onboarding new hires or developing experienced
          sales professionals, effective sales training ensures
          teams remain confident, customer-focused and results-driven.
        </p>

      </div>

    </div>

    {/* Core Areas */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold">
          Sales Excellence
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Core Sales Training Areas
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-orange-50 rounded-[30px] border border-orange-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mb-6">
            01
          </div>

          <h4 className="text-2xl font-bold text-orange-700 mb-4">
            Customer-Centric Selling
          </h4>

          <p className="text-slate-600 leading-8">
            Understanding customer needs and creating value-driven solutions.
          </p>

        </div>

        <div className="bg-amber-50 rounded-[30px] border border-amber-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold mb-6">
            02
          </div>

          <h4 className="text-2xl font-bold text-amber-700 mb-4">
            Communication Skills
          </h4>

          <p className="text-slate-600 leading-8">
            Active listening, relationship building and persuasive communication.
          </p>

        </div>

        <div className="bg-yellow-50 rounded-[30px] border border-yellow-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold mb-6">
            03
          </div>

          <h4 className="text-2xl font-bold text-yellow-700 mb-4">
            Negotiation & Closing
          </h4>

          <p className="text-slate-600 leading-8">
            Managing objections and converting opportunities into sales.
          </p>

        </div>

        <div className="bg-red-50 rounded-[30px] border border-red-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center font-bold mb-6">
            04
          </div>

          <h4 className="text-2xl font-bold text-red-700 mb-4">
            Data-Driven Selling
          </h4>

          <p className="text-slate-600 leading-8">
            Leveraging insights, CRM tools and sales analytics.
          </p>

        </div>

      </div>

    </div>

    {/* Employee Benefits */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact On Employees
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div className="bg-orange-50 rounded-[30px] border border-orange-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-orange-700 mb-4">
            Confidence & Competence
          </h4>

          <p className="text-slate-600 leading-8">
            Employees confidently handle objections,
            pitch solutions and close deals effectively.
          </p>

        </div>

        <div className="bg-amber-50 rounded-[30px] border border-amber-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-amber-700 mb-4">
            Motivation & Morale
          </h4>

          <p className="text-slate-600 leading-8">
            Continuous development improves engagement
            and reduces burnout in demanding sales roles.
          </p>

        </div>

        <div className="bg-yellow-50 rounded-[30px] border border-yellow-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-yellow-700 mb-4">
            Communication & Influence
          </h4>

          <p className="text-slate-600 leading-8">
            Sales professionals learn to build trust,
            influence decisions and strengthen relationships.
          </p>

        </div>

        <div className="bg-red-50 rounded-[30px] border border-red-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-red-700 mb-4">
            Retention & Growth
          </h4>

          <p className="text-slate-600 leading-8">
            Employees feel supported and see clear
            career progression opportunities.
          </p>

        </div>

        <div className="bg-orange-100 rounded-[30px] border border-orange-300 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-orange-800 mb-4">
            Brand Representation
          </h4>

          <p className="text-slate-700 leading-8">
            Well-trained teams represent the organization
            professionally and consistently.
          </p>

        </div>

        <div className="bg-amber-100 rounded-[30px] border border-amber-300 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <h4 className="text-2xl font-bold text-amber-800 mb-4">
            Revenue Performance
          </h4>

          <p className="text-slate-700 leading-8">
            Improved win rates, larger deal sizes and
            stronger sales pipeline performance.
          </p>

        </div>

      </div>

    </div>

    {/* Highlight */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-orange-700 via-amber-700 to-red-700 rounded-[36px] p-14 shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Why Sales Training Matters
        </h3>

        <p className="text-xl text-orange-100 leading-9">
          Sales training is not just about techniques. It builds
          confidence, sharpens communication skills, improves customer
          relationships and creates a culture focused on performance
          and business growth.
        </p>

      </div>

    </div>

    {/* CTA */}

    <div className="mt-12">

      <div className="bg-white rounded-[36px] border-2 border-orange-100 p-12 shadow-xl text-center">

        <h3 className="text-4xl font-bold mb-6">
          Build High-Performing Sales Teams
        </h3>

        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-8">
          We help organizations design customized Sales Training
          programs aligned to business objectives, customer expectations
          and revenue growth strategies.
        </p>

        <button className="mt-10 bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Call Us Today
        </button>

      </div>

    </div>

  </div>

</section>

      

   <section className="pb-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
        Available Courses
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Retail Training Courses
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Explore our retail learning programs designed to improve
        customer experience, sales performance and operational excellence.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      {courses?.map((course) => (

        <Link
          key={course.id}
          href={`/courses/${course.slug}`}
        >

          <div className="group bg-white rounded-[36px] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden h-full">

            {/* Top */}

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8">

              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">

                <ShoppingBag className="h-10 w-10 text-white" />

              </div>

            </div>

            {/* Body */}

            <div className="p-8">

              <h3 className="text-2xl font-bold text-slate-900 mb-5 group-hover:text-blue-600 transition-colors">

                {course.title}

              </h3>

              <p className="text-slate-600 leading-8 line-clamp-3">

                {course.description}

              </p>

            </div>

            {/* Footer */}

            <div className="border-t px-8 py-6">

              <div className="flex justify-between items-center">

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <Clock3 className="h-5 w-5 text-blue-600" />

                    <div>

                      <p className="text-xs text-slate-500">
                        Duration
                      </p>

                      <p className="font-semibold text-slate-900">
                        {course.duration || "2 Days"}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <BarChart3 className="h-5 w-5 text-blue-600" />

                    <div>

                      <p className="text-xs text-slate-500">
                        Level
                      </p>

                      <p className="font-semibold text-slate-900">
                        {course.level || "Intermediate"}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="w-14 h-14 rounded-full border-2 border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">

                  <ArrowRight className="h-6 w-6" />

                </div>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

    <div className="text-center mt-14">

      <Link href="/courses?category=retail-training">

        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">

          View All Retail Courses

        </button>

      </Link>

    </div>

  </div>

</section>
    </main>
  )
}