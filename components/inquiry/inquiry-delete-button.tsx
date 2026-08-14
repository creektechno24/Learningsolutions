"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  id: string;
}

export default function InquiryDeleteButton({ id }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmed) return;

    try {
      setLoading(true);

      const response = await fetch(
        `/api/admin/inquiries/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Inquiry deleted successfully.");

      router.push("/dashboard/admin/inquiries");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="destructive"
      disabled={loading}
      onClick={handleDelete}
    >
      <Trash2 className="mr-2 h-4 w-4" />
      {loading ? "Deleting..." : "Delete Inquiry"}
    </Button>
  );
}