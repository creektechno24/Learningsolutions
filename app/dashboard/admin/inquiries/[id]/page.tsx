import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Building2,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import InquiryActions from "@/components/admin/InquiryActions";
import StatusBadge from "@/components/admin/status-badge";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function InquiryDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: inquiry, error } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !inquiry) {
    notFound();
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Inquiry Details
          </h1>

          <p className="mt-2 text-slate-600">
            View complete enquiry information.
          </p>

        </div>

        <Link
          href="/dashboard/admin/inquiries"
          className="rounded-xl border px-5 py-3 hover:bg-slate-100"
        >
          <ArrowLeft className="mr-2 inline h-4 w-4" />
          Back
        </Link>

      </div>

      {/* Card */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="grid gap-8 md:grid-cols-2">

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>{inquiry.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <span>{inquiry.phone || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="text-purple-600" />
                <span>{inquiry.company || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-orange-600" />
                <span>
                  {new Date(
                    inquiry.created_at
                  ).toLocaleString()}
                </span>
              </div>

            </div>

          </div>

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Inquiry Status
            </h3>

           <StatusBadge status={inquiry.status} />

          </div>

        </div>

        <div className="mt-10">

          <h3 className="mb-3 text-lg font-semibold">
            Subject
          </h3>

          <div className="rounded-xl bg-slate-50 p-5">

            {inquiry.subject}

          </div>

        </div>

        <div className="mt-8">

          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">

            <MessageSquare className="h-5 w-5" />

            Message

          </h3>

          <div className="rounded-xl bg-slate-50 p-6 leading-8">

            {inquiry.message}

          </div>

        </div>

      </div>
   <InquiryActions
  inquiryId={inquiry.id}
  status={inquiry.status}
/>

    </div>

    
  );
}