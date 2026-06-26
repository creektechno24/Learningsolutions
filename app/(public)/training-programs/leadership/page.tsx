import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

import {
  Users,
  Clock3,
  BarChart3,
  ArrowRight
} from 'lucide-react'
export default async function LeadershipPage() {
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
    'leadership'
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
                Leadership Training
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Leadership training is one of the most transformative
                investments an organization can make in its people.
                It equips individuals to inspire, influence and drive
                meaningful change.
              </p>

            </div>

            <div>

              <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

                <Image
                  src="/images/training-programs/ldp.webp"
                  alt="Leadership Training"
                  fill
                  priority
                  className="object-contain p-4"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Leadership Excellence
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Introduction to Leadership Training
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Empowering professionals with the mindset,
        confidence and capabilities required to inspire,
        influence and lead high-performing teams.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-indigo-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Leadership training is a structured development process
          that helps individuals build the skills, mindset and
          behaviors needed to lead teams, make strategic decisions
          and foster a positive work culture.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          It’s not limited to those in formal leadership roles—
          any employee with the potential to influence others
          can benefit.
        </p>

      </div>

    </div>

    {/* Key Goals */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold">
          Leadership Foundation
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Key Goals
        </h3>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-indigo-50 rounded-[30px] border border-indigo-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            01
          </div>

          <h3 className="text-2xl font-bold text-indigo-700 mb-5">
            Self Awareness
          </h3>

          <p className="text-slate-600 leading-8">
            Enhancing self-awareness and emotional intelligence.
          </p>

        </div>

        <div className="bg-blue-50 rounded-[30px] border border-blue-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            02
          </div>

          <h3 className="text-2xl font-bold text-blue-700 mb-5">
            Communication
          </h3>

          <p className="text-slate-600 leading-8">
            Building communication and decision-making skills.
          </p>

        </div>

        <div className="bg-violet-50 rounded-[30px] border border-violet-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            03
          </div>

          <h3 className="text-2xl font-bold text-violet-700 mb-5">
            Strategic Thinking
          </h3>

          <p className="text-slate-600 leading-8">
            Developing strategic thinking and vision-setting abilities.
          </p>

        </div>

        <div className="bg-purple-50 rounded-[30px] border border-purple-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">

          <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            04
          </div>

          <h3 className="text-2xl font-bold text-purple-700 mb-5">
            Leadership Mindset
          </h3>

          <p className="text-slate-600 leading-8">
            Cultivating resilience, adaptability and ethical leadership.
          </p>

        </div>

      </div>

    </div>

    {/* Impact */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact of Leadership Training
        </h3>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-indigo-50 rounded-3xl border border-indigo-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h3 className="text-xl font-bold text-indigo-700 mb-4">
            Boosts Confidence & Ownership
          </h3>

          <p className="text-slate-600">
            Employees gain clarity in their roles and feel empowered
            to take initiative. They become more decisive and accountable.
          </p>

        </div>

        <div className="bg-blue-50 rounded-3xl border border-blue-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h3 className="text-xl font-bold text-blue-700 mb-4">
            Communication & Influence
          </h3>

          <p className="text-slate-600">
            Leaders learn to articulate vision, give feedback and
            listen actively, fostering trust across teams.
          </p>

        </div>

        <div className="bg-violet-50 rounded-3xl border border-violet-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h3 className="text-xl font-bold text-violet-700 mb-4">
            Emotional Intelligence
          </h3>

          <p className="text-slate-600">
            Training enhances empathy, self-regulation and
            interpersonal awareness.
          </p>

        </div>

        <div className="bg-purple-50 rounded-3xl border border-purple-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h3 className="text-xl font-bold text-purple-700 mb-4">
            Career Growth
          </h3>

          <p className="text-slate-600">
            Employees develop competencies that prepare them
            for promotions and cross-functional roles.
          </p>

        </div>

        <div className="bg-sky-50 rounded-3xl border border-sky-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h3 className="text-xl font-bold text-sky-700 mb-4">
            Team Performance
          </h3>

          <p className="text-slate-600">
            Trained leaders build cohesive and motivated teams
            through coaching and delegation.
          </p>

        </div>

        <div className="bg-indigo-100 rounded-3xl border border-indigo-300 p-8 shadow-md hover:shadow-xl transition-all">

          <h3 className="text-xl font-bold text-indigo-800 mb-4">
            Organizational Culture
          </h3>

          <p className="text-slate-700">
            Strong leadership promotes innovation, inclusion
            and continuous improvement.
          </p>

        </div>

      </div>

    </div>

    {/* Highlight */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 rounded-[36px] p-14 text-center shadow-2xl">

        <h2 className="text-4xl font-bold text-white mb-8">
          Why Leadership Training Matters
        </h2>

        <p className="text-xl text-indigo-100 leading-9 max-w-4xl mx-auto">
          According to recent studies, relationships with managers
          account for up to 86% of job satisfaction, making
          leadership training a direct lever for retention,
          engagement and long-term organizational success.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* Change Management */}
<section className="py-24 bg-gradient-to-b from-blue-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}
    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Change Management
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Introduction to Change Management
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Helping employees embrace change, adapt faster and build resilient
        organizations through structured transformation strategies.
      </p>

    </div>

    {/* Introduction */}
    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-blue-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Change management is the structured approach to transitioning
          individuals, teams and organizations from a current state to
          a desired future state.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          It is not just about implementing new systems or processes.
          It is about helping people embrace, adopt and sustain change.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          Whether it is a shift in leadership, technology, strategy or
          culture, change management ensures that the human side of
          transformation is handled with care and intention.
        </p>

      </div>

    </div>

    {/* Core Elements */}
    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
          Core Framework
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Core Elements of Change Management
        </h3>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-blue-50 rounded-[30px] border border-blue-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            01
          </div>

          <h4 className="text-2xl font-bold text-blue-700 mb-5">
            Preparing Employees
          </h4>

          <p className="text-slate-600 leading-8">
            Preparing employees for change and helping them understand
            upcoming transitions.
          </p>

        </div>

        <div className="bg-sky-50 rounded-[30px] border border-sky-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            02
          </div>

          <h4 className="text-2xl font-bold text-sky-700 mb-5">
            Supporting The Transition
          </h4>

          <p className="text-slate-600 leading-8">
            Providing guidance, communication and support throughout
            the entire change journey.
          </p>

        </div>

        <div className="bg-indigo-50 rounded-[30px] border border-indigo-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            03
          </div>

          <h4 className="text-2xl font-bold text-indigo-700 mb-5">
            Reinforcing Behaviors
          </h4>

          <p className="text-slate-600 leading-8">
            Reinforcing new practices and ensuring long-term adoption
            of organizational change.
          </p>

        </div>

      </div>

    </div>

    {/* Impact */}
    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact of Change Management on Employees
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-blue-50 rounded-3xl border border-blue-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-blue-700 mb-4">
            Reduces Resistance & Anxiety
          </h4>

          <p className="text-slate-600">
            Provides clarity and reassurance during organizational change.
          </p>

        </div>

        <div className="bg-sky-50 rounded-3xl border border-sky-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-sky-700 mb-4">
            Improves Engagement & Morale
          </h4>

          <p className="text-slate-600">
            Builds trust through transparent communication.
          </p>

        </div>

        <div className="bg-cyan-50 rounded-3xl border border-cyan-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-cyan-700 mb-4">
            Enhances Productivity
          </h4>

          <p className="text-slate-600">
            Helps employees adapt faster with minimal disruption.
          </p>

        </div>

        <div className="bg-indigo-50 rounded-3xl border border-indigo-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-indigo-700 mb-4">
            Builds Resilience
          </h4>

          <p className="text-slate-600">
            Encourages adaptability and a long-term growth mindset.
          </p>

        </div>

        <div className="bg-blue-100 rounded-3xl border border-blue-300 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-blue-800 mb-4">
            Strengthens Culture
          </h4>

          <p className="text-slate-700">
            Aligns employees with organizational vision and shared goals.
          </p>

        </div>

      </div>

    </div>

    {/* Highlight */}
    <div className="mt-24">

      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 rounded-[36px] p-14 text-center shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Lead Change With Confidence
        </h3>

        <p className="text-xl text-blue-100 leading-9 max-w-4xl mx-auto">
          If you are planning to implement change management,
          we would be happy to help design a customized
          training roadmap tailored to your organization's
          transformation journey.
        </p>

        <button className="mt-10 bg-white text-blue-700 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
          Call Us Today
        </button>

      </div>

    </div>

    {/* Divider */}

    <div className="pt-24">

      <div className="flex items-center gap-6">

        <div className="flex-1 h-px bg-slate-300"></div>

        <span className="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">
          DIVERSITY & INCLUSION
        </span>

        <div className="flex-1 h-px bg-slate-300"></div>

      </div>

    </div>

  </div>

</section>

{/* Diversity & Inclusion */}
<section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}
    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Diversity & Inclusion
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Diversity & Inclusion
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Creating workplaces where every individual feels respected,
        valued and empowered to contribute to organizational success.
      </p>

    </div>

    {/* Introduction */}
    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-emerald-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Diversity and Inclusion (D&I) are strategic imperatives that
          shape how employees thrive, collaborate and innovate.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Diversity refers to the presence of differences in the workplace
          across race, gender, age, ethnicity, religion, sexual orientation,
          abilities and more.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          Inclusion is about creating an environment where everyone feels
          respected, valued and empowered to contribute fully.
        </p>

      </div>

    </div>

    {/* Goals */}
    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold">
          Key Objectives
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Diversity & Inclusion Goals
        </h3>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-emerald-50 rounded-[30px] border border-emerald-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            01
          </div>

          <h4 className="text-2xl font-bold text-emerald-700 mb-5">
            Culture Of Belonging
          </h4>

          <p className="text-slate-600 leading-8">
            Foster a workplace where everyone feels valued and respected.
          </p>

        </div>

        <div className="bg-teal-50 rounded-[30px] border border-teal-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            02
          </div>

          <h4 className="text-2xl font-bold text-teal-700 mb-5">
            Diverse Perspectives
          </h4>

          <p className="text-slate-600 leading-8">
            Leverage different viewpoints to drive innovation.
          </p>

        </div>

        <div className="bg-green-50 rounded-[30px] border border-green-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            03
          </div>

          <h4 className="text-2xl font-bold text-green-700 mb-5">
            Equal Opportunities
          </h4>

          <p className="text-slate-600 leading-8">
            Ensure fairness in opportunities and decision-making.
          </p>

        </div>

      </div>

    </div>

    {/* Impact */}
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

        <div className="bg-emerald-50 rounded-3xl border border-emerald-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="font-bold text-xl text-emerald-700 mb-4">
            Enhanced Engagement & Morale
          </h4>
          <p className="text-slate-600">
            Employees who feel seen and heard are more motivated,
            loyal and engaged.
          </p>
        </div>

        <div className="bg-teal-50 rounded-3xl border border-teal-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="font-bold text-xl text-teal-700 mb-4">
            Better Collaboration & Innovation
          </h4>
          <p className="text-slate-600">
            Diverse perspectives lead to stronger creativity
            and problem-solving.
          </p>
        </div>

        <div className="bg-green-50 rounded-3xl border border-green-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="font-bold text-xl text-green-700 mb-4">
            Talent Attraction & Retention
          </h4>
          <p className="text-slate-600">
            Inclusive workplaces attract top talent and
            improve retention.
          </p>
        </div>

        <div className="bg-lime-50 rounded-3xl border border-lime-200 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="font-bold text-xl text-lime-700 mb-4">
            Reduced Bias & Conflict
          </h4>
          <p className="text-slate-600">
            Encourages respectful dialogue and healthier
            workplace relationships.
          </p>
        </div>

        <div className="bg-emerald-100 rounded-3xl border border-emerald-300 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="font-bold text-xl text-emerald-800 mb-4">
            Better Decision-Making
          </h4>
          <p className="text-slate-700">
            Diverse viewpoints challenge groupthink and
            improve decisions.
          </p>
        </div>

        <div className="bg-teal-100 rounded-3xl border border-teal-300 p-8 shadow-md hover:shadow-xl transition-all">
          <h4 className="font-bold text-xl text-teal-800 mb-4">
            Cultural Competence
          </h4>
          <p className="text-slate-700">
            Helps employees work effectively across cultures,
            generations and backgrounds.
          </p>
        </div>

      </div>

    </div>

    {/* Highlight */}
    <div className="mt-24">

      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-green-600 rounded-[36px] p-14 text-center shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Build Inclusive Workplaces
        </h3>

        <p className="text-xl text-emerald-100 leading-9 max-w-4xl mx-auto">
          Organizations that embrace Diversity & Inclusion
          perform better, attract top talent and build
          resilient teams that reflect the world they serve.
        </p>

        <button className="mt-10 bg-white text-emerald-700 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
          Call Us Today
        </button>

      </div>

    </div>

    {/* Divider */}

    <div className="pt-24">

      <div className="flex items-center gap-6">

        <div className="flex-1 h-px bg-slate-300"></div>

        <span className="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">
          EXECUTIVE PRESENCE
        </span>

        <div className="flex-1 h-px bg-slate-300"></div>

      </div>

    </div>

  </div>

</section>

{/* Executive Presence */}
<section className="py-24 bg-gradient-to-b from-violet-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}
    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-violet-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Executive Presence
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Executive Presence
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Developing influential professionals who inspire confidence,
        communicate with clarity and lead with authenticity.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-violet-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Executive presence is the ability to inspire confidence,
          command respect and influence others, often without saying
          a word.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          It is not just about how someone looks or speaks. It is
          about how they carry themselves, communicate and connect
          with others.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          Executive presence is essential not only for senior leaders
          but also for emerging professionals who aspire to lead,
          influence and make a lasting impact.
        </p>

      </div>

    </div>

    {/* Key Traits */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-violet-100 text-violet-700 px-5 py-2 rounded-full text-sm font-semibold">
          Leadership Traits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Key Traits Of Executive Presence
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-violet-50 rounded-[28px] border border-violet-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            01
          </div>

          <h4 className="font-bold text-violet-700 text-lg">
            Confidence & Composure
          </h4>

        </div>

        <div className="bg-fuchsia-50 rounded-[28px] border border-fuchsia-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-fuchsia-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            02
          </div>

          <h4 className="font-bold text-fuchsia-700 text-lg">
            Clear Communication
          </h4>

        </div>

        <div className="bg-purple-50 rounded-[28px] border border-purple-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            03
          </div>

          <h4 className="font-bold text-purple-700 text-lg">
            Gravitas & Credibility
          </h4>

        </div>

        <div className="bg-indigo-50 rounded-[28px] border border-indigo-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            04
          </div>

          <h4 className="font-bold text-indigo-700 text-lg">
            Emotional Intelligence
          </h4>

        </div>

        <div className="bg-pink-50 rounded-[28px] border border-pink-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-pink-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            05
          </div>

          <h4 className="font-bold text-pink-700 text-lg">
            Authenticity & Integrity
          </h4>

        </div>

      </div>

    </div>

    {/* Impact */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-violet-100 text-violet-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact Of Executive Presence
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-violet-50 rounded-3xl border border-violet-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-violet-700 mb-4">
            Confidence & Credibility
          </h4>

          <p className="text-slate-600">
            Employees project assurance and are trusted
            with greater responsibilities.
          </p>

        </div>

        <div className="bg-fuchsia-50 rounded-3xl border border-fuchsia-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-fuchsia-700 mb-4">
            Communication & Influence
          </h4>

          <p className="text-slate-600">
            Employees communicate clearly and influence
            decisions effectively.
          </p>

        </div>

        <div className="bg-purple-50 rounded-3xl border border-purple-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-purple-700 mb-4">
            Leadership Effectiveness
          </h4>

          <p className="text-slate-600">
            Leaders motivate teams and earn respect
            through strong presence.
          </p>

        </div>

        <div className="bg-indigo-50 rounded-3xl border border-indigo-200 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-indigo-700 mb-4">
            Career Growth
          </h4>

          <p className="text-slate-600">
            Employees are viewed as leadership-ready
            and promotable.
          </p>

        </div>

        <div className="bg-violet-100 rounded-3xl border border-violet-300 p-6 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-violet-800 mb-4">
            Organizational Culture
          </h4>

          <p className="text-slate-700">
            Builds professionalism, accountability
            and trust across teams.
          </p>

        </div>

      </div>

    </div>

    {/* Highlight */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 rounded-[36px] p-14 text-center shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Develop Influential Leaders
        </h3>

        <p className="text-xl text-violet-100 leading-9 max-w-4xl mx-auto">
          Executive presence helps bridge the gap between
          technical competence and leadership potential,
          enabling professionals to create lasting impact.
        </p>

        <button className="mt-10 bg-white text-violet-700 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
          Call Us Today
        </button>

      </div>

    </div>

    {/* Divider */}

    <div className="pt-24">

      <div className="flex items-center gap-6">

        <div className="flex-1 h-px bg-slate-300"></div>

        <span className="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">
          PERFORMANCE MANAGEMENT
        </span>

        <div className="flex-1 h-px bg-slate-300"></div>

      </div>

    </div>

  </div>

</section>

{/* Performance Management */}
<section className="py-24 bg-gradient-to-b from-orange-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Performance Management
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Performance Management
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Empowering employees through continuous feedback,
        goal alignment and professional development.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-orange-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Performance management is a continuous, strategic process that
          helps align individual goals with organizational objectives.
          It involves setting clear expectations, monitoring progress,
          providing feedback and fostering development.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Unlike traditional performance appraisals, modern performance
          management is ongoing, development-focused and collaborative,
          involving managers and employees as partners.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          Its purpose is to create a culture of accountability, clarity
          and continuous improvement, where every employee understands
          their role in driving success.
        </p>

      </div>

    </div>

    {/* Modern Performance */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold">
          Core Principles
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Modern Performance Management
        </h3>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-orange-50 rounded-[30px] border border-orange-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            01
          </div>

          <h4 className="text-2xl font-bold text-orange-700 mb-5">
            Ongoing Process
          </h4>

          <p className="text-slate-600 leading-8">
            Continuous conversations and feedback
            rather than annual reviews.
          </p>

        </div>

        <div className="bg-amber-50 rounded-[30px] border border-amber-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mb-6">
            02
          </div>

          <h4 className="text-2xl font-bold text-amber-700 mb-5">
            Development Focused
          </h4>

          <p className="text-slate-600 leading-8">
            Encourages growth, learning and
            continuous improvement.
          </p>

        </div>

        <div className="bg-yellow-50 rounded-[30px] border border-yellow-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-xl mb-6">
            03
          </div>

          <h4 className="text-2xl font-bold text-yellow-700 mb-5">
            Collaborative Approach
          </h4>

          <p className="text-slate-600 leading-8">
            Managers and employees work together
            to achieve shared goals.
          </p>

        </div>

      </div>

    </div>

    {/* Impact */}

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

        <div className="bg-orange-50 rounded-3xl border border-orange-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-orange-700 mb-4">
            Clarity & Direction
          </h4>

          <p className="text-slate-600">
            Employees understand expectations and
            how their work contributes to business goals.
          </p>

        </div>

        <div className="bg-amber-50 rounded-3xl border border-amber-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-amber-700 mb-4">
            Continuous Feedback & Growth
          </h4>

          <p className="text-slate-600">
            Regular feedback encourages learning,
            adaptability and improvement.
          </p>

        </div>

        <div className="bg-yellow-50 rounded-3xl border border-yellow-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-yellow-700 mb-4">
            Engagement & Ownership
          </h4>

          <p className="text-slate-600">
            Employees become more involved in
            goals and take responsibility for outcomes.
          </p>

        </div>

        <div className="bg-orange-100 rounded-3xl border border-orange-300 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-orange-800 mb-4">
            Career Development
          </h4>

          <p className="text-slate-700">
            Identifies strengths, skill gaps and
            opportunities for advancement.
          </p>

        </div>

        <div className="bg-amber-100 rounded-3xl border border-amber-300 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-amber-800 mb-4">
            Productivity & Accountability
          </h4>

          <p className="text-slate-700">
            Clear goals and KPIs drive performance
            and improve quality of work.
          </p>

        </div>

        <div className="bg-yellow-100 rounded-3xl border border-yellow-300 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-yellow-800 mb-4">
            Well-Being & Job Satisfaction
          </h4>

          <p className="text-slate-700">
            Recognition and constructive feedback
            improve morale and reduce workplace stress.
          </p>

        </div>

      </div>

    </div>

    {/* Research */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 rounded-[36px] p-14 shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Research Insight
        </h3>

        <p className="text-xl text-orange-100 leading-9">
          According to research by CIPD, employees who experience
          systematic performance management report higher levels
          of task achievement, well-being and engagement compared
          to those without it.
        </p>

      </div>

    </div>

    {/* CTA */}

    <div className="mt-12">

      <div className="bg-white rounded-[36px] border-2 border-orange-100 p-12 shadow-xl text-center">

        <h3 className="text-4xl font-bold mb-6">
          Build A High-Performance Culture
        </h3>

        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-8">
          If you are planning to roll this out, we would be happy
          to help design a customized curriculum and roadmap
          tailored to your organization's performance culture.
        </p>

        <button className="mt-10 bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all hover:scale-105">
          Call Us Today
        </button>

      </div>

    </div>

    {/* Divider */}

    <div className="pt-24">

      <div className="flex items-center gap-6">

        <div className="flex-1 h-px bg-slate-300"></div>

        <span className="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">
          PROJECT MANAGEMENT
        </span>

        <div className="flex-1 h-px bg-slate-300"></div>

      </div>

    </div>

  </div>

</section>

{/* Project Management */}
<section className="py-24 bg-gradient-to-b from-cyan-50 via-white to-white">

  <div className="container mx-auto px-6">

    {/* Header */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <span className="inline-flex items-center bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        Project Management
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        Project Management
      </h2>

      <p className="text-xl text-slate-600 mt-6 leading-8">
        Delivering successful projects through structured planning,
        collaboration and execution excellence.
      </p>

    </div>

    {/* Introduction */}

    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-[36px] border-2 border-cyan-100 p-12 shadow-xl">

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Project management is the structured discipline of planning,
          executing and delivering initiatives within defined scope,
          time and budget.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          It involves coordinating resources, managing risks and
          aligning stakeholders to achieve specific goals.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          In today’s fast-paced business environment, project management
          is not just for project managers. It is a critical skill for
          employees involved in cross-functional work, innovation and
          strategic execution.
        </p>

      </div>

    </div>

    {/* Key Elements */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold">
          Core Elements
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Key Elements Of Project Management
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-cyan-50 rounded-[28px] border border-cyan-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            01
          </div>

          <h4 className="font-bold text-cyan-700 text-lg">
            Project Objectives
          </h4>

        </div>

        <div className="bg-sky-50 rounded-[28px] border border-sky-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            02
          </div>

          <h4 className="font-bold text-sky-700 text-lg">
            Timelines & Milestones
          </h4>

        </div>

        <div className="bg-blue-50 rounded-[28px] border border-blue-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            03
          </div>

          <h4 className="font-bold text-blue-700 text-lg">
            Resource Allocation
          </h4>

        </div>

        <div className="bg-indigo-50 rounded-[28px] border border-indigo-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            04
          </div>

          <h4 className="font-bold text-indigo-700 text-lg">
            Risk Management
          </h4>

        </div>

        <div className="bg-teal-50 rounded-[28px] border border-teal-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">

          <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
            05
          </div>

          <h4 className="font-bold text-teal-700 text-lg">
            Quality Monitoring
          </h4>

        </div>

      </div>

    </div>

    {/* Impact */}

    <div className="mt-24">

      <div className="text-center mb-14">

        <span className="inline-flex bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold">
          Employee Benefits
        </span>

        <h3 className="text-4xl font-bold mt-5">
          Impact On Employees
        </h3>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div className="bg-cyan-50 rounded-3xl border border-cyan-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-cyan-700 mb-4">
            Planning & Prioritization
          </h4>

          <p className="text-slate-600">
            Employees learn to break complex tasks into
            manageable steps and use resources effectively.
          </p>

        </div>

        <div className="bg-sky-50 rounded-3xl border border-sky-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-sky-700 mb-4">
            Collaboration & Communication
          </h4>

          <p className="text-slate-600">
            Clear responsibilities and timelines improve
            teamwork and stakeholder alignment.
          </p>

        </div>

        <div className="bg-blue-50 rounded-3xl border border-blue-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-blue-700 mb-4">
            Accountability & Ownership
          </h4>

          <p className="text-slate-600">
            Employees understand their contribution and
            take responsibility for deliverables.
          </p>

        </div>

        <div className="bg-indigo-50 rounded-3xl border border-indigo-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-indigo-700 mb-4">
            Reduced Stress & Burnout
          </h4>

          <p className="text-slate-600">
            Structured workflows and realistic timelines
            help reduce pressure and uncertainty.
          </p>

        </div>

        <div className="bg-teal-50 rounded-3xl border border-teal-200 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-teal-700 mb-4">
            Career Growth
          </h4>

          <p className="text-slate-600">
            Project management skills prepare employees
            for leadership and cross-functional roles.
          </p>

        </div>

        <div className="bg-cyan-100 rounded-3xl border border-cyan-300 p-8 shadow-md hover:shadow-xl transition-all">

          <h4 className="font-bold text-xl text-cyan-800 mb-4">
            Innovation & Agility
          </h4>

          <p className="text-slate-700">
            Teams adapt to change faster and embrace
            continuous improvement.
          </p>

        </div>

      </div>

    </div>

    {/* Highlight */}

    <div className="mt-24">

      <div className="bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-700 rounded-[36px] p-14 shadow-2xl">

        <h3 className="text-4xl font-bold text-white mb-8">
          Why Project Management Matters
        </h3>

        <p className="text-xl text-cyan-100 leading-9">
          Project management training empowers employees
          with clarity, confidence and control over their work.
          It helps organizations execute initiatives efficiently,
          improve collaboration and achieve strategic goals.
        </p>

      </div>

    </div>

    {/* CTA */}

    <div className="mt-12">

      <div className="bg-white rounded-[36px] border-2 border-cyan-100 p-12 shadow-xl text-center">

        <h3 className="text-4xl font-bold mb-6">
          Build High-Performing Project Teams
        </h3>

        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-8">
          If you are planning to roll this out, we would be happy
          to help design a customized curriculum and roadmap
          tailored to your team's needs and organizational goals.
        </p>

        <button className="mt-10 bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all hover:scale-105">
          Call Us Today
        </button>

      </div>

    </div>

  </div>

</section>
      
      {/* Available Courses */}
  

 <section className="pb-24 bg-gradient-to-b from-slate-50 via-white to-white">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
        Available Courses
      </span>

      <h2 className="text-5xl font-bold mt-6">
                Leadership Training Courses

      </h2>

      <p className="text-slate-600 text-xl mt-4 max-w-3xl mx-auto leading-8">
         Explore our leadership learning programs designed
        to develop confident leaders, strengthen decision-making,
        improve communication and build high-performing teams.
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
            <Link href="/courses?category=leadership">



        <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all">

                   View All Leadership Courses

        </button>

      </Link>

    </div>

  </div>

</section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-bold mb-6">
            Build Future Leaders Today
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-slate-200 mb-10">
            Develop confident, emotionally intelligent and
            high-performing leaders who can drive lasting impact.
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