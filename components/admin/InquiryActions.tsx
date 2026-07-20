"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface InquiryActionsProps {
  inquiryId: string;
  status: string;
}

export default function InquiryActions({
  inquiryId,
  status,
}: InquiryActionsProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function updateStatus(newStatus: string) {
    try {
      setLoading(true);

      const response = await fetch(`/api/inquiries/${inquiryId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update inquiry.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteInquiry() {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this inquiry?"
  );

  if (!confirmDelete) return;

  try {

    setLoading(true);

    const response = await fetch(
      `/api/inquiries/${inquiryId}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    router.push("/dashboard/admin/inquiries");

    router.refresh();

  } catch (error) {

    console.error(error);

    alert("Failed to delete inquiry.");

  } finally {

    setLoading(false);

  }

}

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      {status !== "CONTACTED" && (
        <Button
          disabled={loading}
          onClick={() => updateStatus("CONTACTED")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Mark Contacted
        </Button>
      )}

      {status !== "RESOLVED" && (
        <Button
          disabled={loading}
          onClick={() => updateStatus("RESOLVED")}
          className="bg-green-600 hover:bg-green-700"
        >
          Mark Resolved
        </Button>
      )}

      <Button
  variant="destructive"
  disabled={loading}
  onClick={deleteInquiry}
>
  <Trash2 className="mr-2 h-4 w-4" />

  Delete Inquiry

</Button>

    </div>
  );
}