import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone, Building2, Calendar, MessageSquare } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ContactStatus from "@/components/admin/contact-status";


export default async function ContactDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: contact, error } = await supabase
    .from("contact_messages")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !contact) {
    notFound();
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <Link
            href="/dashboard/admin/contact"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Contact Messages
          </Link>

          <h1 className="mt-4 text-4xl font-bold">
            Contact Message
          </h1>

          <p className="mt-2 text-slate-600">
            View complete contact message details.
          </p>

        </div>

     <ContactStatus
  id={contact.id}
  status={contact.status}
/>
      </div>

      {/* Details */}

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-2xl border bg-white p-8 shadow-sm space-y-6">

          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-medium">{contact.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <p className="font-medium">
                {contact.phone || "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-purple-600" />
            <div>
              <p className="text-sm text-slate-500">Company</p>
              <p className="font-medium">
                {contact.company || "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-orange-600" />
            <div>
              <p className="text-sm text-slate-500">Received</p>
              <p className="font-medium">
                {new Date(contact.created_at).toLocaleString()}
              </p>
            </div>
          </div>

        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm space-y-6">

          <h2 className="text-2xl font-semibold">
            Message Details
          </h2>

          <div>
            <p className="text-sm text-slate-500">
              Name
            </p>

            <p className="mt-1 text-lg font-semibold">
              {contact.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Subject
            </p>

            <p className="mt-1 text-lg font-semibold">
              {contact.subject}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500 mb-3">
              Message
            </p>

            <div className="rounded-xl bg-slate-50 p-5 leading-8 whitespace-pre-wrap border">
              <MessageSquare className="mb-3 h-6 w-6 text-blue-600" />

              {contact.message}
            </div>
          </div>

        </div>

      </div>

      {/* Actions */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h3 className="mb-5 text-xl font-semibold">
          Quick Actions
        </h3>

        <div className="flex flex-wrap gap-4">

          <a
            href={`mailto:${contact.email}`}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Reply by Email
          </a>

          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="rounded-xl bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700"
            >
              Call Customer
            </a>
          )}

        </div>

      </div>

    </div>
  );
}