"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteContactButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact message?"
    );

    if (!confirmed) return;

    try {
      setLoading(true);

      const response = await fetch(`/api/admin/contact/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        alert("Failed to delete contact message.");
        return;
      }

      alert("Contact message deleted successfully.");

      router.refresh();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      title="Delete"
      className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50 disabled:opacity-50"
    >
      <Trash2 className="h-5 w-5" />
    </button>
  );
}