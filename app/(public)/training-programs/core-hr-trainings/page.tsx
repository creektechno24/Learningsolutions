import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

import {
  Users,
  Clock3,
  BarChart3,
  ArrowRight
} from 'lucide-react'

export default async function CoreHRTrainingsPage() {
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
    'core-hr-trainings'
  )
  .limit(6)
  return (
    
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="py-20 bg-slate-950">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
                Curated Training Program
              </span>

              <h1 className="text-6xl font-bold text-white mt-6 mb-6">
                Core HR Trainings
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Core HR trainings are essential for building a strong foundation
                in human resource management. They equip HR professionals with
                the skills and knowledge needed to handle the full employee
                lifecycle, ensure compliance and drive strategic initiatives.
              </p>

            </div>

            <div>

              <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

                <Image
                  src="/images/training-programs/core-hr.webp"
                  alt="Core HR Trainings"
                  fill
                  priority
                  className="object-contain p-4"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Core HR Training Categories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="
bg-gradient-to-br
from-blue-50
to-white
rounded-3xl
p-8
border-2
border-blue-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-blue-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                Recruitment & Talent Acquisition
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Interviewing Techniques: Structured interviews, behavioral assessments.</li>
                <li>• Sourcing Strategies: Using job boards, social media and referrals.</li>
                <li>• Employer Branding: Positioning the company as a top employer.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="
bg-gradient-to-br
from-emerald-50
to-white
rounded-3xl
p-8
border-2
border-emerald-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-emerald-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                Onboarding & Orientation
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• New Hire Integration: Cultural immersion, role clarity.</li>
                <li>• Compliance Training: Company policies, legal requirements.</li>
                <li>• Buddy Programs: Peer support for smoother transitions.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="
bg-gradient-to-br
from-violet-50
to-white
rounded-3xl
p-8
border-2
border-violet-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-violet-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                Performance Management
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Goal Setting & KPIs: SMART goals, OKRs.</li>
                <li>• Feedback & Appraisals: 360-degree feedback, continuous performance reviews.</li>
                <li>• Coaching & Development: Manager training for employee growth.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="
bg-gradient-to-br
from-rose-50
to-white
rounded-3xl
p-8
border-2
border-rose-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-rose-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                Employee Relations
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Conflict Resolution: Mediation techniques, grievance handling.</li>
                <li>• Workplace Ethics: Respect, inclusivity and fairness.</li>
                <li>• Engagement Strategies: Surveys, pulse checks, action planning.</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="
bg-gradient-to-br
from-amber-50
to-white
rounded-3xl
p-8
border-2
border-amber-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-amber-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                Compensation & Benefits
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Payroll Basics: Statutory compliance, salary structures.</li>
                <li>• Benefits Administration: Health insurance, retirement plans.</li>
                <li>• Total Rewards Strategy: Aligning rewards with performance.</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="
bg-gradient-to-br
from-red-50
to-white
rounded-3xl
p-8
border-2
border-red-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-red-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                HR Compliance & Labor Laws
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Employment Law: Contracts, termination, harassment policies.</li>
                <li>• Health & Safety: Workplace safety standards, risk mitigation.</li>
                <li>• Data Privacy: Handling employee data securely.</li>
              </ul>
            </div>

            {/* Card 7 */}
            <div className="
bg-gradient-to-br
from-cyan-50
to-white
rounded-3xl
p-8
border-2
border-cyan-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-cyan-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                HR Technology & Analytics
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• HRIS Training: Navigating systems like SAP, Workday, Zoho.</li>
                <li>• People Analytics: Using data for decision-making.</li>
                <li>• Digital Transformation: Automating HR processes.</li>
              </ul>
            </div>

            {/* Card 8 */}
            <div className="
bg-gradient-to-br
from-indigo-50
to-white
rounded-3xl
p-8
border-2
border-indigo-200
shadow-sm
hover:-translate-y-2
hover:shadow-xl
hover:border-indigo-400
transition-all
duration-300
">
              <h3 className="text-2xl font-bold mb-5">
                Learning & Development
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Training Needs Analysis: Identifying skill gaps.</li>
                <li>• Instructional Design: Creating effective learning programs.</li>
                <li>• Leadership Development: Succession planning, high-potential programs.</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* Induction For Management Trainees */}
<section className="py-24 bg-gradient-to-b from-blue-50 via-white to-white">
  <div className="container mx-auto px-6">

    <div className="max-w-5xl mx-auto">

     <div className="text-center mb-16">

  <span className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
    Induction Training Program
  </span>

  <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-8">
    Induction For Management Trainees
  </h2>

</div>

<div className="bg-white border border-blue-100 rounded-[36px] p-12 shadow-xl">

  <p className="text-lg text-slate-600 leading-9 mb-8">
    For management trainees, Induction training programs are designed
    to help them quickly adapt to the organization, understand its
    culture and build the skills needed for future leadership roles.
    A well-structured induction program usually combines orientation,
    skill-building and experiential learning.
  </p>

  <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />

  <p className="text-lg text-slate-600 leading-9">
    The goal is not just to familiarize trainees with the company but
    to accelerate their readiness for leadership responsibilities.
    A strong induction program builds confidence, reduces attrition
    and ensures trainees align with organizational goals.
  </p>

</div>
</div>

    </div>

    {/* Core Training Areas */}
    <div className="mt-24">

  <div className="text-center mb-16">

    <span className="inline-flex bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
      Learning Modules
    </span>

    <h3 className="text-5xl font-bold mt-6">
      Core Training Areas
    </h3>

    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold mb-6">
    01
  </div>

  <h4 className="text-xl font-bold mb-4">
    Organizational Orientation
  </h4>

  <p className="text-slate-600 leading-8">
    Introduction to company history, mission, vision,
    values, policies and organizational structure.
  </p>

</div>

<div className="bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold mb-6">
    02
  </div>

  <h4 className="text-xl font-bold mb-4">
    Compliance & Policies
  </h4>

  <p className="text-slate-600 leading-8">
    Workplace ethics, code of conduct, HR policies,
    diversity, inclusion and legal requirements.
  </p>

</div>


<div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold mb-6">
    03
  </div>

  <h4 className="text-xl font-bold mb-4">
    Functional Skills
  </h4>

  <p className="text-slate-600 leading-8">
    Basics of finance, operations, marketing, HR and
    other key business functions.
  </p>

</div>


<div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold mb-6">
    04
  </div>

  <h4 className="text-xl font-bold mb-4">
    Soft Skills Development
  </h4>

  <p className="text-slate-600 leading-8">
    Communication, teamwork, negotiation,
    emotional intelligence and problem-solving.
  </p>

</div>


<div className="bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-bold mb-6">
    05
  </div>

  <h4 className="text-xl font-bold mb-4">
    Leadership Fundamentals
  </h4>

  <p className="text-slate-600 leading-8">
    Decision-making, strategic thinking and
    people management fundamentals.
  </p>

</div>


<div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-6">
    06
  </div>

  <h4 className="text-xl font-bold mb-4">
    Technology & Tools
  </h4>

  <p className="text-slate-600 leading-8">
    Digital platforms, project management tools
    and industry-specific software training.
  </p>

</div>


<div className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold mb-6">
    07
  </div>

  <h4 className="text-xl font-bold mb-4">
    On-The-Job Rotations
  </h4>

  <p className="text-slate-600 leading-8">
    Department rotations, project assignments
    and shadowing senior leaders.
  </p>

</div>


<div className="bg-gradient-to-br from-rose-50 to-white border border-rose-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold mb-6">
    08
  </div>

  <h4 className="text-xl font-bold mb-4">
    Mentorship & Feedback
  </h4>

  <p className="text-slate-600 leading-8">
    Guidance from mentors, performance reviews
    and continuous feedback sessions.
  </p>

</div>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"></div>

    {/* Induction Timeline */}
    {/* Induction Timeline */}
<div className="mt-28">

  <div className="text-center mb-16">

    <span className="inline-flex bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold">
      Learning Journey
    </span>

    <h3 className="text-5xl font-bold mt-6">
      Step-by-Step Induction Timeline
    </h3>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

    {/* Week 1 */}
    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="inline-flex px-4 py-2 rounded-full bg-blue-600 text-white font-semibold mb-6">
        Week 1
      </div>

      <h4 className="text-2xl font-bold mb-4">
        Orientation
      </h4>

      <p className="text-slate-600 leading-8">
        Company history, mission, vision,
        HR policies and key leaders.
      </p>

    </div>

    {/* Week 2 */}
    <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="inline-flex px-4 py-2 rounded-full bg-sky-600 text-white font-semibold mb-6">
        Week 2
      </div>

      <h4 className="text-2xl font-bold mb-4">
        Functional Overview
      </h4>

      <p className="text-slate-600 leading-8">
        Finance, operations, HR, marketing
        and departmental presentations.
      </p>

    </div>

    {/* Week 3 */}
    <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="inline-flex px-4 py-2 rounded-full bg-cyan-600 text-white font-semibold mb-6">
        Week 3
      </div>

      <h4 className="text-2xl font-bold mb-4">
        Soft Skills Training
      </h4>

      <p className="text-slate-600 leading-8">
        Communication, teamwork,
        critical thinking and presentations.
      </p>

    </div>

    {/* Week 4 */}
    <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="inline-flex px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold mb-6">
        Week 4
      </div>

      <h4 className="text-2xl font-bold mb-4">
        Leadership Exposure
      </h4>

      <p className="text-slate-600 leading-8">
        Leadership styles, decision-making
        and conflict resolution exercises.
      </p>

    </div>

    {/* Week 5-6 */}
    <div className="bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="inline-flex px-4 py-2 rounded-full bg-violet-600 text-white font-semibold mb-6">
        Week 5-6
      </div>

      <h4 className="text-2xl font-bold mb-4">
        Job Rotations
      </h4>

      <p className="text-slate-600 leading-8">
        Department rotations, project work
        and mentor interactions.
      </p>

    </div>

    {/* Week 7-8 */}
    <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="inline-flex px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold mb-6">
        Week 7-8
      </div>

      <h4 className="text-2xl font-bold mb-4">
        Technology & Tools
      </h4>

      <p className="text-slate-600 leading-8">
        ERP systems, analytics software
        and digital transformation tools.
      </p>

    </div>

    {/* Week 9-10 */}
    <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-[30px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="inline-flex px-4 py-2 rounded-full bg-amber-500 text-white font-semibold mb-6">
        Week 9-10
      </div>

      <h4 className="text-2xl font-bold mb-4">
        Capstone Project
      </h4>

      <p className="text-slate-600 leading-8">
        Solve a real business challenge,
        present to leadership and receive evaluation.
      </p>

    </div>

  </div>

</div>

    {/* Highlight */}
  {/* Highlight */}
<div className="mt-28">

  <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-14 lg:p-16 shadow-2xl">

    {/* Decorative Blur */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-cyan-300/10 blur-3xl" />

    <div className="relative z-10 max-w-5xl mx-auto text-center">

      <span className="inline-flex bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
        Ready To Get Started?
      </span>

      <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
        Build Future Leaders From Day One
      </h3>

      <p className="text-xl leading-9 text-blue-100 max-w-3xl mx-auto">
        Call us today to give a world-class experience
        to your Management Trainees.
      </p>

      <div className="mt-10">

        <Link href="/contact">

          <button className="bg-white text-blue-700 hover:bg-slate-100 px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 hover:-translate-y-1">
            Contact Our Experts
          </button>

        </Link>

      </div>

    </div>

  </div>

</div>
  </div>

</section>


{/* Competency Mapping */}
<section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="max-w-5xl mx-auto">

      <div className="text-center mb-14">

        <span className="inline-flex bg-emerald-600
text-white px-5 py-2 rounded-full text-sm font-semibold">
          Competency Mapping
        </span>

        <h2 className="text-5xl font-bold mt-6">
          Competency Mapping
        </h2>

      </div>

     <div className="bg-white rounded-[32px] border-2 border-emerald-100 p-10 shadow-sm">

            <p className="text-lg text-slate-600 leading-8">
          Competency Mapping is a strategic HR process used to identify
          and assess the specific skills, behaviors and attributes
          required for employees to perform effectively in their roles.
          It helps organizations align talent with business goals,
          improve performance and plan development initiatives.
        </p>

      </div>

    </div>

    {/* What Is Competency Mapping */}
    <div className="mt-20">

      <h3 className="text-4xl font-bold text-center mb-14">
        What Is Competency Mapping?
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-white
rounded-3xl
border-l-4
border-emerald-500
shadow-sm
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 p-8">
          <h4 className="text-xl font-bold mb-4">
            Defining Competencies
          </h4>

          <p className="text-slate-600">
            Knowledge, skills, abilities and behaviors
            critical for success in a role.
          </p>
        </div>

        <div className="bg-white
rounded-3xl
border-l-4
border-emerald-500
shadow-sm
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 p-8">
          <h4 className="text-xl font-bold mb-4">
            Assessing Current Capabilities
          </h4>

          <p className="text-slate-600">
            Evaluating employees against
            defined competencies.
          </p>
        </div>

        <div className="bg-white
rounded-3xl
border-l-4
border-emerald-500
shadow-sm
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 p-8">
          <h4 className="text-xl font-bold mb-4">
            Identifying Gaps
          </h4>

          <p className="text-slate-600">
            Highlighting areas for
            development or training.
          </p>
        </div>

        <div className="bg-white
rounded-3xl
border-l-4
border-emerald-500
shadow-sm
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 p-8">
          <h4 className="text-xl font-bold mb-4">
            Aligning Roles & Talent
          </h4>

          <p className="text-slate-600">
            Ensuring the right people
            are in the right roles.
          </p>
        </div>

      </div>

    </div>

    {/* Types of Competencies */}
    <div className="mt-24">

      <h3 className="text-4xl font-bold text-center mb-14">
        Types of Competencies
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-white
border-l-4
border-emerald-500
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 rounded-3xl p-8 border shadow-sm">
          <h4 className="text-xl font-bold mb-4">
            Core Competencies
          </h4>

          <p className="text-slate-600">
            Essential for all employees
            such as communication.
          </p>
        </div>

        <div className="bg-white
border-l-4
border-emerald-500
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 rounded-3xl p-8 border shadow-sm">
          <h4 className="text-xl font-bold mb-4">
            Functional
          </h4>

          <p className="text-slate-600">
            Specific to a job or department
            such as coding skills.
          </p>
        </div>

        <div className="bg-white
border-l-4
border-emerald-500
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 rounded-3xl p-8 border shadow-sm">
          <h4 className="text-xl font-bold mb-4">
            Leadership
          </h4>

          <p className="text-slate-600">
            Required for managerial roles
            such as strategic thinking.
          </p>
        </div>

        <div className="bg-white
border-l-4
border-emerald-500
hover:bg-emerald-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300 rounded-3xl p-8 border shadow-sm">
          <h4 className="text-xl font-bold mb-4">
            Behavioral
          </h4>

          <p className="text-slate-600">
            Soft skills like teamwork,
            adaptability and integrity.
          </p>
        </div>

      </div>

    </div>

    {/* Methods */}
    <div className="mt-24">

      <h3 className="text-4xl font-bold text-center mb-14">
        Methods of Competency Mapping
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div className="bg-emerald-50
border border-emerald-200 rounded-3xl p-8 border shadow-sm">
          Assessment Centers: Simulations,
          role plays and group exercises.
        </div>

        <div className="bg-teal-50
border border-teal-200 rounded-3xl p-8 border shadow-sm">
          Critical Incident Technique:
          Analyzing key success and failure events.
        </div>

        <div className="bg-cyan-50
border border-cyan-200 rounded-3xl p-8 border shadow-sm">
          Structured Interviews:
          Behavioral and competency-based questions.
        </div>

        <div className="bg-lime-50
border border-lime-200 rounded-3xl p-8 border shadow-sm">
          Questionnaires & Surveys:
          Self-assessments and peer reviews.
        </div>

        <div className="bg-green-50
border border-green-200 rounded-3xl p-8 border shadow-sm">
          Psychometric Tests:
          Measuring personality traits and cognitive ability.
        </div>

      </div>

    </div>

    {/* Benefits */}
    <div className="mt-24">

      <h3 className="text-4xl font-bold text-center mb-14">
        Benefits of Competency Mapping
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-emerald-600
text-white
rounded-3xl
p-6
shadow-lg
hover:scale-105
transition-all">
          Improved Hiring Decisions
        </div>

        <div className="bg-emerald-600
text-white
rounded-3xl
p-6
shadow-lg
hover:scale-105
transition-all">
          Targeted Training
        </div>

        <div className="bg-emerald-600
text-white
rounded-3xl
p-6
shadow-lg
hover:scale-105
transition-all">
          Succession Planning
        </div>

        <div className="bg-emerald-600
text-white
rounded-3xl
p-6
shadow-lg
hover:scale-105
transition-all">
          Performance Management
        </div>

        <div className="bg-emerald-600
text-white
rounded-3xl
p-6
shadow-lg
hover:scale-105
transition-all">
          Employee Development
        </div>

      </div>

    </div>

    {/* Real World Impact */}
    <div className="mt-24">

      <div className="bg-gradient-to-r from-emerald-600
via-teal-600
to-cyan-600 rounded-[32px] p-12 text-white">

        <h3 className="text-3xl font-bold mb-6">
          Real-World Impact
        </h3>

        <p className="text-lg leading-8 text-blue-100">
          Imagine mapping competencies for a sales role. You define key
          traits such as persuasion, product knowledge and resilience.
          After assessing current team members, you discover that 40%
          lack resilience under pressure. A targeted training module is
          then designed to build mental toughness, resulting in improved
          sales performance and reduced burnout.
        </p>

        <p className="text-xl font-semibold mt-8">
          Should you be more interested in this area,
          write to us today.
        </p>

      </div>

    </div>

    <div className="py-16">

<div className="flex items-center gap-6">

<div className="flex-1 h-px bg-slate-300"/>

<span className="uppercase tracking-[0.4em] text-xs font-bold text-slate-400">

SAFE WORKPLACE

</span>

<div className="flex-1 h-px bg-slate-300"/>

</div>

</div>

  </div>

</section>



{/* POSH Training */}
<section className="py-24 bg-gradient-to-b from-rose-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="max-w-5xl mx-auto">

      <div className="text-center mb-14">

        <span className="inline-flex bg-rose-600
text-white px-5 py-2 rounded-full text-sm font-semibold">
          POSH Training
        </span>

        <h2 className="text-5xl font-bold mt-6">
          Prevention of Sexual Harassment (POSH)
        </h2>

      </div>

    <div className="bg-white rounded-[32px] border-2 border-rose-100 p-10 shadow-sm">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          POSH is not just a legal checkbox; it is a cultural cornerstone
          for any respectful and inclusive workplace.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          POSH stands for Prevention of Sexual Harassment. It stems from
          the Sexual Harassment of Women at Workplace (Prevention,
          Prohibition and Redressal) Act, 2013, enacted in India to
          safeguard women from sexual harassment at work.
        </p>

      </div>

    </div>

    {/* What Is POSH Training */}
    <div className="mt-20">

      <h3 className="text-4xl font-bold text-center mb-14">
        What Is POSH Training?
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-white
rounded-3xl
p-8
border-l-4
border-rose-500
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300">
          Educate employees about what constitutes sexual harassment.
        </div>

        <div className="bg-white
rounded-3xl
p-8
border-l-4
border-rose-500
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300">
          Clarify reporting mechanisms and redressal procedures.
        </div>

        <div className="bg-white
rounded-3xl
p-8
border-l-4
border-rose-500
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300">
          Promote respectful workplace behavior.
        </div>

        <div className="bg-white
rounded-3xl
p-8
border-l-4
border-rose-500
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300">
          Ensure legal compliance for organizations.
        </div>

      </div>

    </div>

    {/* Why POSH Training */}
    <div className="mt-24">

      <h3 className="text-4xl font-bold text-center mb-14">
        Why Is POSH Training Necessary?
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-rose-50
border
border-rose-200
rounded-3xl
p-8
shadow-sm
hover:shadow-xl">

          <h4 className="text-xl font-bold mb-4">
            Legal Compliance
          </h4>

          <p className="text-slate-600">
            Organizations with 10+ employees must conduct
            regular POSH training sessions.
          </p>

        </div>

        <div className="bg-pink-50
border
border-pink-200
rounded-3xl
p-8
shadow-sm
hover:shadow-xl">

          <h4 className="text-xl font-bold mb-4">
            Awareness & Clarity
          </h4>

          <p className="text-slate-600">
            Helps employees understand acceptable and
            unacceptable workplace behavior.
          </p>

        </div>

        <div className="bg-fuchsia-50
border
border-fuchsia-200
rounded-3xl
p-8
shadow-sm
hover:shadow-xl">

          <h4 className="text-xl font-bold mb-4">
            Safe Workplace Culture
          </h4>

          <p className="text-slate-600">
            Encourages respect, inclusion and support
            for affected employees.
          </p>

        </div>

        <div className="bg-violet-50
border
border-violet-200
rounded-3xl
p-8
shadow-sm
hover:shadow-xl">

          <h4 className="text-xl font-bold mb-4">
            Reduces Incidents
          </h4>

          <p className="text-slate-600">
            Early recognition and reporting help
            prevent escalation.
          </p>

        </div>

      </div>

    </div>

    {/* Impact */}
    <div className="mt-24">

      <h3 className="text-4xl font-bold text-center mb-14">
        Impact On Employees & Organizations
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div className="bg-white
rounded-3xl
border-l-4
border-rose-500
p-8
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all">
          <h4 className="font-bold text-xl mb-3">
            Employee Awareness
          </h4>

          <p className="text-slate-600">
            Clear understanding of rights and responsibilities.
          </p>
        </div>

        <div className="bg-white
rounded-3xl
border-l-4
border-rose-500
p-8
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all">
          <h4 className="font-bold text-xl mb-3">
            Workplace Relationships
          </h4>

          <p className="text-slate-600">
            Builds trust, respect and stronger team dynamics.
          </p>
        </div>

         <div className="bg-white
rounded-3xl
border-l-4
border-rose-500
p-8
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all">
          <h4 className="font-bold text-xl mb-3">
            Productivity
          </h4>

          <p className="text-slate-600">
            Reduces emotional distress and improves morale.
          </p>
        </div>

           <div className="bg-white
rounded-3xl
border-l-4
border-rose-500
p-8
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all">
          <h4 className="font-bold text-xl mb-3">
            Organizational Reputation
          </h4>

          <p className="text-slate-600">
            Strengthens ethics, brand image and retention.
          </p>
        </div>
  
           <div className="bg-white
rounded-3xl
border-l-4
border-rose-500
p-8
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all">
          <h4 className="font-bold text-xl mb-3">
            Legal Protection
          </h4>

          <p className="text-slate-600">
            Protects the organization from legal and reputational risks.
          </p>
        </div>

         <div className="bg-white
rounded-3xl
border-l-4
border-rose-500
p-8
shadow-sm
hover:bg-rose-50
hover:-translate-y-2
hover:shadow-xl
transition-all">
          <h4 className="font-bold text-xl mb-3">
            Inclusivity
          </h4>

          <p className="text-slate-600">
            Encourages equal treatment across genders and roles.
          </p>
        </div>

      </div>

    </div>

    {/* Best Practices */}
    <div className="mt-24">

      <h3 className="text-4xl font-bold text-center mb-14">
        Best Practices For POSH Training
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-rose-600 text-white rounded-3xl p-6 border shadow-sm text-center">
          Conduct sessions at least twice a year
        </div>

        <div className="bg-pink-600 text-white rounded-3xl p-6 border shadow-sm text-center">
          Include all employees
        </div>

        <div className="bg-fuchsia-600 text-white rounded-3xl p-6 border shadow-sm text-center">
          Use case studies, role plays and quizzes
        </div>

        <div className="bg-violet-600 text-white rounded-3xl p-6 border shadow-sm text-center">
          Ensure confidentiality and accessibility
        </div>

        <div className="bg-purple-600 text-white rounded-3xl p-6 border shadow-sm text-center">
          Train the Internal Complaints Committee
        </div>

      </div>

    </div>

    {/* Highlight */}
    <div className="mt-24">

      <div className="bg-gradient-to-r from-rose-600
via-pink-600
to-violet-600 rounded-[32px] p-12 text-white text-center">

        <h3 className="text-3xl font-bold mb-6">
          POSH Creates Safer Workplaces
        </h3>

        <p className="text-xl text-rose-100 max-w-4xl mx-auto">
          POSH training shows that the organization cares about
          employees, which can increase job satisfaction,
          engagement and workplace trust.
        </p>

      </div>

    </div>

  </div>

</section>


{/*Available courses*/}

      <section className="pb-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
        Available Courses
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Core HR Training Courses
      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
        Explore our Core HR learning programs designed to strengthen
        recruitment, employee lifecycle management, compliance and
        workforce development.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      {courses?.map((course) => (

        <Link
          key={course.id}
          href={`/courses/${course.slug}`}
        >

          <div className="group bg-white rounded-[36px] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden h-full">

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8">

              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">

                <Users className="h-10 w-10 text-white" />

              </div>

            </div>

            {/* Content */}

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

      <Link href="/courses?category=core-hr-trainings">

        <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">

          View All Core HR Courses

        </button>

      </Link>

    </div>

  </div>

</section>
      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Strengthen Your HR Team?
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-slate-200 mb-10">
            Empower HR professionals with the knowledge and skills required
            to manage the complete employee lifecycle effectively.
          </p>

          <Link href="/contact">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
              Request Proposal
            </button>
          </Link>

        </div>

      </section>

    </main>
  )
}