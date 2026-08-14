"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import InquiryForm from "./inquiry-form";

interface InquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function InquiryModal({
  open,
  onOpenChange,
}: InquiryModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Submit Training Inquiry
          </DialogTitle>
        </DialogHeader>

        <InquiryForm
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}