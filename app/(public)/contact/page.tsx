'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    setLoading(true)

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit enquiry")
    }

    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)

  } catch (error) {
    console.error(error)
    alert("Something went wrong. Please try again.")
  } finally {
    setLoading(false)
  }
}

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
     {/* ================= HERO ================= */}

<section className="relative overflow-hidden bg-[#020817] py-32">

  {/* Background */}

  <div className="absolute inset-0">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_35%)]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.20),transparent_40%)]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

    <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

    <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[140px]" />

  </div>

  <div className="relative z-10 container mx-auto px-6">

    <div className="max-w-4xl mx-auto text-center">

      <span className="inline-flex rounded-full border border-blue-500/20 bg-white/10 px-6 py-3 text-blue-300 backdrop-blur-xl">

        Get In Touch

      </span>

      <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold text-white leading-tight">

        Contact Us

      </h1>

      <p className="mt-8 text-xl leading-9 text-slate-300 max-w-3xl mx-auto">

        Connect with Creek Learning Solutions and discover how we can help transform learning, leadership, performance and organizational growth.

      </p>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <a
          href="tel:+919059431539"
          className="rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919322393157"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          💬 WhatsApp
        </a>

      </div>

    </div>

  </div>

</section>

{/* ================= QUICK CONTACT CARDS ================= */}

<section className="relative -mt-14 z-20 pb-16">

  <div className="container mx-auto px-6">

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {/* Call */}

      <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)]">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100">

          <Phone className="h-8 w-8 text-blue-600" />

        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Call Us
        </h3>

        <p className="mt-3 text-slate-600">
          Corporate Training
        </p>

        <a
          href="tel:+919322393157"
          className="mt-5 block font-semibold text-blue-600 hover:underline"
        >
          +91 9322393157
        </a>

      </div>

     

      {/* Email */}

      <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(249,115,22,0.18)]">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-100">

          <Mail className="h-8 w-8 text-orange-600" />

        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Email
        </h3>

        <p className="mt-3 text-slate-600">
          Corporate Enquiries
        </p>

        <a
          href="mailto:info@creeklearningsolutions.com"
          className="mt-5 block font-semibold text-blue-600 hover:underline break-all"
        >
          info@creeklearningsolutions.com
        </a>

      </div>

      {/* Office */}

      <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(168,85,247,0.18)]">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-100">

          <MapPin className="h-8 w-8 text-purple-600" />

        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Office
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Hyderabad,
          <br />
          Telangana, India
        </p>

      </div>

      {/* Working Hours */}

<div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(124,58,237,0.18)]">

  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-100">

    <Clock className="h-8 w-8 text-violet-600" />

  </div>

  <h3 className="mt-6 text-2xl font-bold text-slate-900">
    Working Hours
  </h3>

  <p className="mt-3 leading-7 text-slate-600">
    Monday - Saturday
    <br />
    9:00 AM - 6:00 PM
  </p>

</div>

    </div>

  </div>

</section>

      {/* Content */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact Details */}
           {/* ================= CONTACT DETAILS ================= */}

<div>

  <div className="sticky top-8 space-y-6">

    {/* Header */}

    <div className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

        Contact Information

      </span>

      <h2 className="mt-5 text-3xl font-bold text-slate-900">

        Let's Talk

      </h2>

      <p className="mt-4 leading-8 text-slate-600">

        We'd love to hear about your learning,
        training and organizational development needs.

      </p>

    </div>

   {/* ================= Corporate Training ================= */}

<div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_35px_90px_rgba(37,99,235,0.15)]">

  {/* Glow */}

  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="relative">

    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

      Primary Contact

    </span>

    <div className="mt-6 flex items-start gap-5">

      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">

        <Phone className="h-8 w-8" />

      </div>

      <div className="flex-1">

        <h3 className="text-2xl font-bold text-slate-900">

          Corporate Training

        </h3>

        <p className="mt-2 text-slate-600">

          Speak directly with our corporate learning specialists.

        </p>

        <a
          href="tel:+919322393157"
          className="mt-5 block text-lg font-semibold text-slate-900 hover:text-blue-600"
        >
          +91 9322393157
        </a>

        <a
          href="https://wa.me/919322393157"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
        >

          <MessageCircle className="h-5 w-5" />

          Chat on WhatsApp

        </a>

      </div>

    </div>

  </div>

</div>

    

   {/* ================= Email Card ================= */}

<div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_35px_90px_rgba(249,115,22,0.15)]">

  <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-orange-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="relative">

    <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">

      Email Support

    </span>

    <div className="mt-6 flex items-start gap-5">

      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">

        <Mail className="h-8 w-8" />

      </div>

      <div className="flex-1">

        <h3 className="text-2xl font-bold text-slate-900">

          Email Us

        </h3>

        <p className="mt-2 text-slate-600">

          Send your corporate training enquiries anytime.

        </p>

        <a
          href="mailto:info@creeklearningsolutions.com"
          className="mt-5 block break-all text-lg font-semibold text-slate-900 transition hover:text-orange-600"
        >
          info@creeklearningsolutions.com
        </a>

      </div>

    </div>

  </div>

</div>

  {/* ================= Corporate Office ================= */}

<div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_35px_90px_rgba(168,85,247,0.15)]">

  {/* Glow */}

  <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-purple-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="relative">

    <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">

      Corporate Office

    </span>

    <div className="mt-6 flex items-start gap-5">

      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg">

        <MapPin className="h-8 w-8" />

      </div>

      <div className="flex-1">

        <h3 className="text-2xl font-bold text-slate-900">

          Hyderabad Office

        </h3>

        <p className="mt-3 leading-8 text-slate-600">

          Hyderabad,<br />

          Telangana,<br />

          India

        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-purple-200 px-5 py-3 font-semibold text-purple-700 transition-all duration-300 hover:bg-purple-50"
        >

          <MapPin className="h-5 w-5" />

          View on Map

        </a>

      </div>

    </div>

  </div>

</div>

    {/* ================= Working Hours ================= */}

<div className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8 text-white shadow-[0_25px_80px_rgba(37,99,235,0.25)]">

  {/* Background Glow */}

  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />

  <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl" />

  <div className="relative">

    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">

      Business Hours

    </span>

    <div className="mt-6 flex items-start gap-5">

      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-md">

        <Clock className="h-8 w-8 text-white" />

      </div>

      <div className="flex-1">

        <h3 className="text-2xl font-bold">

          Working Hours

        </h3>

        <p className="mt-4 text-blue-100 leading-8">

          Monday – Saturday

          <br />

          9:00 AM – 6:00 PM

        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">

          <p className="text-sm text-blue-100">

            We typically respond to enquiries within <span className="font-semibold text-white">24 business hours</span>.

          </p>

        </div>

      </div>

    </div>

  </div>

</div>

  </div>

</div>

            {/* Contact Form */}
          {/* ================= PREMIUM CONTACT FORM ================= */}

<div className="lg:col-span-2">

  <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 lg:p-12 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">

    {/* Background Glow */}

    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 blur-[120px] opacity-70" />

    <div className="relative">

      {submitted ? (

        <div className="py-20 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

            <CheckCircle2 className="h-14 w-14 text-green-600" />

          </div>

          <h2 className="mt-8 text-4xl font-bold text-slate-900">

            Thank You!

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            We have received your enquiry successfully.
            Our corporate team will contact you shortly.

          </p>

        </div>

      ) : (

        <>

        {/* ================= Premium Info Bar ================= */}

<div className="mb-10 rounded-[30px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6">

  <div className="grid gap-6 md:grid-cols-3">

    {/* Companies */}

    <div className="flex items-center gap-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white text-xl">

        🏢

      </div>

      <div>

        <h4 className="font-bold text-slate-900">

          100+ Companies

        </h4>

        <p className="text-sm text-slate-600">

          Trusted Corporate Clients

        </p>

      </div>

    </div>

    {/* Response */}

    <div className="flex items-center gap-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white text-xl">

        ⚡

      </div>

      <div>

        <h4 className="font-bold text-slate-900">

          Quick Response

        </h4>

        <p className="text-sm text-slate-600">

          Within 24 Business Hours

        </p>

      </div>

    </div>

    {/* Experts */}

    <div className="flex items-center gap-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white text-xl">

        🎓

      </div>

      <div>

        <h4 className="font-bold text-slate-900">

          Expert Team

        </h4>

        <p className="text-sm text-slate-600">

          Corporate Learning Specialists

        </p>

      </div>

    </div>

  </div>

</div>

      {/* ================= Form Header ================= */}

<span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">

  Get In Touch

</span>

<h2 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">

  Let's Start the Conversation

</h2>

<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

  Whether you're planning corporate training,
  leadership development, leadership coaching,
  behavioral training or workforce transformation,
  our experts are ready to understand your
  requirements and recommend the right solution
  for your organization.

</p>

{/* Small Highlights */}

<div className="mt-8 flex flex-wrap gap-3">

  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">

    ✓ Corporate Training

  </span>

  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">

    ✓ Leadership Development

  </span>

  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">

    ✓ Soft Skills

  </span>

  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">

    ✓ Behavioral Training

  </span>

</div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-7"
          >

            {/* Row 1 */}

            <div className="grid gap-6 md:grid-cols-2">
<div>

  <label className="mb-3 block text-sm font-semibold text-slate-700">

    Full Name *

  </label>

  <Input
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    placeholder="Enter your full name"
    className="h-14 rounded-2xl border-slate-300 bg-slate-50 px-5 text-base transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
  />

</div>

            <div>

  <label className="mb-3 block text-sm font-semibold text-slate-700">

    Business Email *

  </label>

  <Input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="name@company.com"
    className="h-14 rounded-2xl border-slate-300 bg-slate-50 px-5 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
  />

</div>

            </div>

            {/* Row 2 */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-3 block font-semibold">

                  Company Name

                </label>

                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"

className="h-14 rounded-2xl border-slate-300 bg-slate-50 px-5 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>

             <div>

  <label className="mb-3 block text-sm font-semibold text-slate-700">

    Mobile Number

  </label>

  <Input
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="+91 98765 43210"
    className="h-14 rounded-2xl border-slate-300 bg-slate-50 px-5 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
  />

</div>

            </div>

            {/* Subject */}

            <div>

              <label className="mb-3 block font-semibold">

                Subject *

              </label>

              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Corporate Training Requirement"
                className="h-14 rounded-2xl border-slate-300 bg-slate-50 px-5 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

            </div>

            {/* Message */}

            <div>

              <label className="mb-3 block font-semibold">

                Message *

              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                placeholder="Please share your training requirements, expected audience size, preferred training mode (online/offline), and any additional details..."
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 p-5 leading-8 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none"
              />

            </div>

            {/* Buttons */}

           <div className="flex flex-wrap items-center gap-5 pt-4">

  {/* Submit */}

  <Button
    type="submit"
    disabled={loading}
    className="group h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-10 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)]"
  >

    {loading ? (

      <>

        <svg
          className="mr-3 h-5 w-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
            className="opacity-25"
          />

          <path
            d="M22 12a10 10 0 0 1-10 10"
            stroke="currentColor"
            strokeWidth="3"
            className="opacity-90"
          />

        </svg>

        Sending...

      </>

    ) : (

      <>

        Send Enquiry

        <ArrowUpRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

      </>

    )}

  </Button>

  {/* Back */}

  <Link href="/">

    <Button
      variant="outline"
      className="h-14 rounded-2xl border-slate-300 px-8 font-semibold transition-all duration-300 hover:border-blue-600 hover:bg-blue-50"
    >

      Back Home

    </Button>

  </Link>

</div>

          </form>

        </>

      )}

    </div>

  </div>

</div>

          </div>

        </div>

      </section>

    </main>
  )
}