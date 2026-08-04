"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InquiryModal from "@/components/inquiry/inquiry-modal";

export default function HomeCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          onClick={() => setOpen(true)}
          className="h-14 px-8 rounded-2xl text-base bg-white text-blue-700 hover:bg-slate-100"
        >
          Submit Training Inquiry
        </Button>

        <Link href="/courses">
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20"
          >
            Explore Programs
          </Button>
        </Link>
      </div>

      <InquiryModal
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}