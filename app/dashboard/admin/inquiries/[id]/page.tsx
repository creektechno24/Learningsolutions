import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import InquiryStatus from "@/components/inquiry/inquiry-status";
import InquiryDeleteButton from "@/components/inquiry/inquiry-delete-button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


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

  const { data: inquiry } = await supabase
    .from("training_inquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (!inquiry) {
    notFound();
  }

  return (


    
    <div className="space-y-8">

      <div className="flex items-center justify-between">
  <Link
    href="/dashboard/admin/inquiries"
    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
  >
    <ArrowLeft className="h-4 w-4" />
    Back to Inquiries
  </Link>
</div>

      <h1 className="text-3xl font-bold">
        Inquiry Details
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Company Details */}

        <div className="rounded-lg border p-6">

          <h2 className="mb-4 text-xl font-semibold">
            Company Information
          </h2>

          <div className="space-y-3">

            <p>
              <strong>Company :</strong> {inquiry.company_name}
            </p>

            <p>
              <strong>Contact Person :</strong>{" "}
              {inquiry.contact_person}
            </p>

            <p>
              <strong>Email :</strong> {inquiry.email}
            </p>

            <p>
              <strong>Phone :</strong> {inquiry.phone || "-"}
            </p>

          </div>

        </div>

        {/* Training Details */}

        <div className="rounded-lg border p-6">

          <h2 className="mb-4 text-xl font-semibold">
            Training Details
          </h2>

          <div className="space-y-3">

            <p>
              <strong>Course :</strong> {inquiry.course}
            </p>

            <p>
              <strong>Training Mode :</strong>{" "}
              {inquiry.training_mode || "-"}
            </p>

            <p>
              <strong>Participants :</strong>{" "}
              {inquiry.participants || "-"}
            </p>

            <p>
              <strong>Received :</strong>{" "}
              {new Date(
                inquiry.created_at
              ).toLocaleString()}
            </p>

          </div>

        </div>

      </div>

      {/* Message */}

      <div className="rounded-lg border p-6">

        <h2 className="mb-4 text-xl font-semibold">
          Training Requirement
        </h2>

        <p className="whitespace-pre-line">
          {inquiry.message || "-"}
        </p>

      </div>

      {/* Status */}

      <div className="rounded-lg border p-6">

        <h2 className="mb-4 text-xl font-semibold">
          Status
        </h2>

        <InquiryStatus
          id={inquiry.id}
          status={inquiry.status}
        />

        <div className="mt-6 border-t pt-6">
  <InquiryDeleteButton id={inquiry.id} />
</div>

      </div>

    </div>
  );
}