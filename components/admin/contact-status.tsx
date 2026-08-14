"use client";

import { useState } from "react";

export default function ContactStatus({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  const [value, setValue] = useState(status);
  const [loading, setLoading] = useState(false);

  async function updateStatus() {
    try {
      setLoading(true);

      const response = await fetch(`/api/admin/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: value,
        }),
      });

      if (!response.ok) {
        alert("Failed to update status.");
        return;
      }

      alert("Status updated successfully.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">

      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded-lg border px-4 py-2"
      >
        <option>New</option>
        <option>In Progress</option>
        <option>Resolved</option>
        <option>Closed</option>
      </select>

      <button
        onClick={updateStatus}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        {loading ? "Updating..." : "Update Status"}
      </button>

    </div>
  );
}