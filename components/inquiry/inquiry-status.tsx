"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface InquiryStatusProps {
  id: string;
  status: string;
}

export default function InquiryStatus({
  id,
  status,
}: InquiryStatusProps) {
  const router = useRouter();

  const [currentStatus, setCurrentStatus] = useState(status);

  const [isPending, startTransition] = useTransition();

  async function updateStatus() {
    const response = await fetch(
      `/api/admin/inquiries/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: currentStatus,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert("Status updated successfully.");

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-4">

      <select
        value={currentStatus}
        onChange={(e) =>
          setCurrentStatus(e.target.value)
        }
        className="rounded-md border px-3 py-2"
      >
        <option value="New">New</option>
        <option value="In Progress">
          In Progress
        </option>
        <option value="Resolved">
          Resolved
        </option>
        <option value="Closed">
          Closed
        </option>
      </select>

      <button
        onClick={updateStatus}
        disabled={isPending}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Updating..." : "Update Status"}
      </button>

    </div>
  );
}