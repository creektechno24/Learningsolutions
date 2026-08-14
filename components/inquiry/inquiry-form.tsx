"use client";

import { useState } from "react";

interface InquiryFormProps {
  onSuccess: () => void;
}

export default function InquiryForm({
  onSuccess,
}: InquiryFormProps) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    course: "",
    training_mode: "",
    participants: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          participants: formData.participants
            ? Number(formData.participants)
            : null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
        return;
      }

      alert("Inquiry submitted successfully.");

setFormData({
  company_name: "",
  contact_person: "",
  email: "",
  phone: "",
  course: "",
  training_mode: "",
  participants: "",
  message: "",
});

onSuccess();

// Refresh current page
window.location.reload();


    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        type="text"
        name="company_name"
        placeholder="Company Name"
        value={formData.company_name}
        onChange={handleChange}
        required
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        name="contact_person"
        placeholder="Contact Person"
        value={formData.contact_person}
        onChange={handleChange}
        required
        className="w-full rounded-lg border p-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Business Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        name="course"
        placeholder="Course Required"
        value={formData.course}
        onChange={handleChange}
        required
        className="w-full rounded-lg border p-3"
      />

      <select
        name="training_mode"
        value={formData.training_mode}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      >
        <option value="">Training Mode</option>
        <option value="Online">Online</option>
        <option value="Classroom">Classroom</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <input
        type="number"
        name="participants"
        placeholder="Number of Participants"
        value={formData.participants}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Training Requirements"
        value={formData.message}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}