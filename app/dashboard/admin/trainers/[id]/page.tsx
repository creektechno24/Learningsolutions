import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { AdminActionButtons } from "@/components/admin/admin-action-buttons";
import StatusBadge from "@/components/admin/status-badge";

interface Trainer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  designation: string | null;
  years_of_experience: number;
  expertise: string[] | null;
  linkedin: string | null;
  bio: string | null;
  status: "approved" | "pending" | "rejected";
}

export default async function TrainerDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: trainer, error } = await supabase
    .from("trainer_profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !trainer) {
    notFound();
  }

  return (
    <div className="p-8">
<div className="mb-6">
  <Link
    href="/dashboard/admin/trainers"
    className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
  >
    ← Back to Trainers
  </Link>
</div>

<div className="mb-8 flex items-start justify-between">
  <div>
    <h1 className="text-3xl font-bold text-slate-900">
      {trainer.first_name} {trainer.last_name}
    </h1>

    <p className="mt-2 text-slate-500">
      Trainer Profile Details
    </p>
  </div>

 <StatusBadge
  status={trainer.status}
/>
</div>


         <div className="rounded-2xl border bg-white p-8 shadow-sm">
     <div>
  <h2 className="border-b pb-3 text-xl font-semibold text-slate-900">
    Personal Information
  </h2>

  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

    <div>
      <p className="text-sm text-slate-500">
        Full Name
      </p>

      <p className="mt-1 font-medium text-slate-900">
        {trainer.first_name} {trainer.last_name}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">
        Email Address
      </p>

      <p className="mt-1 font-medium text-slate-900">
        {trainer.email}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">
        Phone Number
      </p>

      <p className="mt-1 font-medium text-slate-900">
        {trainer.phone || "-"}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">
        Account Status
      </p>

      <p className="mt-1 font-medium text-slate-900">
        {trainer.status}
      </p>
    </div>

  </div>
</div>

<div className="mt-10">
  <h2 className="border-b pb-3 text-xl font-semibold text-slate-900">
    Professional Information
  </h2>

  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

    <div>
      <p className="text-sm text-slate-500">
        Designation
      </p>

      <p className="mt-1 font-medium text-slate-900">
        {trainer.designation || "-"}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">
        Years of Experience
      </p>

      <p className="mt-1 font-medium text-slate-900">
        {trainer.years_of_experience || 0} Years
      </p>
    </div>

    <div className="md:col-span-2">
      <p className="text-sm text-slate-500">
        LinkedIn Profile
      </p>

      {trainer.linkedin ? (
        <a
          href={trainer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block text-blue-600 hover:underline"
        >
          {trainer.linkedin}
        </a>
      ) : (
        <p className="mt-1 font-medium text-slate-900">-</p>
      )}
    </div>

  </div>
</div>

<div className="mt-10">
  <h2 className="border-b pb-3 text-xl font-semibold text-slate-900">
    Areas of Expertise
  </h2>

  <div className="mt-6 flex flex-wrap gap-3">
    {trainer.expertise && trainer.expertise.length > 0 ? (
      trainer.expertise.map((skill:string) => (
        <span
          key={skill}
          className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
        >
          {skill}
        </span>
      ))
    ) : (
      <p className="text-slate-500">
        No expertise added.
      </p>
    )}
  </div>
</div>

<div className="mt-10">
  <h2 className="border-b pb-3 text-xl font-semibold text-slate-900">
    Professional Bio
  </h2>

  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
    {trainer.bio ? (
      <p className="whitespace-pre-line leading-7 text-slate-700">
        {trainer.bio}
      </p>
    ) : (
      <p className="text-slate-500">
        No professional bio provided.
      </p>
    )}
  </div>
</div>

<div className="mt-10 border-t pt-8">
  <h2 className="mb-6 text-xl font-semibold text-slate-900">
    Review Decision
  </h2>

  <div className="flex justify-end">
    <AdminActionButtons
      id={trainer.id}
      status={trainer.status}
      type="trainer"
    />
  </div>
</div>
      </div>
    </div>
  );
}