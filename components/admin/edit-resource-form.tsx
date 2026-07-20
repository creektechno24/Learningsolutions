"use client";

import { useEffect, useState } from "react";
import { uploadFile } from "@/lib/storage/upload";

interface Props {
  id: string;
}

interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  type: string;

  thumbnail: string;
  thumbnail_public_id: string;

  file_url: string;
  file_public_id: string;

  featured: boolean;
  published: boolean;

  display_order: number;
}

export default function EditResourceForm({
  id,
}: Props) {

  const [loading, setLoading] = useState(true);

  const [resource, setResource] =
    useState<Resource | null>(null);

    const [thumbnailFile, setThumbnailFile] =
  useState<File | null>(null);

const [resourceFile, setResourceFile] =
  useState<File | null>(null);

const [saving, setSaving] =
  useState(false);

  useEffect(() => {
    fetchResource();
  }, []);

  async function fetchResource() {

    try {

      const response = await fetch(
        `/api/admin/resources/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setResource(data.resource);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  if (!resource) return;

  try {
    setSaving(true);

    let thumbnail = resource.thumbnail;
    let thumbnail_public_id =
      resource.thumbnail_public_id;

    let file_url = resource.file_url;
    let file_public_id =
      resource.file_public_id;

    // remaining code next step

    // Upload new thumbnail if selected
if (thumbnailFile) {

  const upload = await uploadFile(
    thumbnailFile,
    "learning-solutions/resources/thumbnails"
  );

  thumbnail = upload.url;
  thumbnail_public_id = upload.publicId;

  console.log(upload);

}   


// Upload new resource file if selected
if (resourceFile) {

  const upload = await uploadFile(
    resourceFile,
    "learning-solutions/resources/files"
  );

  file_url = upload.url;
  file_public_id = upload.publicId;

}


const response = await fetch(
  `/api/admin/resources/${id}`,
  {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({

      title: resource.title,
      slug: resource.slug,
      description: resource.description,

      category: resource.category,
      type: resource.type,

      thumbnail,
      thumbnail_public_id,

      file_url,
      file_public_id,

      featured: resource.featured,
      published: resource.published,

      display_order:
        resource.display_order,

    }),
  }
);

const data = await response.json();

if (!data.success) {
  throw new Error(data.message);
}


alert("Resource updated successfully.");

window.location.href =
  "/dashboard/admin/resources";

    } catch (error) {
  console.log(error);
} finally {
  setSaving(false);
}
}

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="p-10">
        Resource not found.
      </div>
    );
  }

  return (

    <div className="max-w-5xl mx-auto rounded-3xl border bg-white p-10 shadow">

      <h1 className="mb-8 text-3xl font-bold">

        Edit Resource

      </h1>

<form
  onSubmit={handleSubmit}
  className="space-y-8"
>
  {/* Basic Information */}

  <div className="rounded-2xl border p-6">

    <h2 className="mb-6 text-xl font-semibold">
      Basic Information
    </h2>

    <div className="grid gap-5 md:grid-cols-2">

      <input
        value={resource.title}
        onChange={(e) =>
          setResource({
            ...resource,
            title: e.target.value,
          })
        }
        className="rounded-xl border p-4"
        placeholder="Title"
      />

      <input
        value={resource.slug}
        onChange={(e) =>
          setResource({
            ...resource,
            slug: e.target.value,
          })
        }
        className="rounded-xl border p-4"
        placeholder="Slug"
      />

      <select
        value={resource.category}
        onChange={(e) =>
          setResource({
            ...resource,
            category: e.target.value,
          })
        }
        className="rounded-xl border p-4"
      >
        <option>Framework</option>
        <option>Story</option>
        <option>PDF</option>
        <option>Document</option>
      </select>

      <select
        value={resource.type}
        onChange={(e) =>
          setResource({
            ...resource,
            type: e.target.value,
          })
        }
        className="rounded-xl border p-4"
      >
        <option>PDF</option>
        <option>DOCX</option>
        <option>PPT</option>
        <option>XLSX</option>
        <option>ZIP</option>
        <option>IMAGE</option>
        <option>VIDEO</option>
      </select>

    </div>

    <textarea
      value={resource.description}
      onChange={(e) =>
        setResource({
          ...resource,
          description: e.target.value,
        })
      }
      className="mt-5 h-40 w-full rounded-xl border p-4"
      placeholder="Description"
    />

  </div>

    <div className="rounded-2xl border p-6">

    <h2 className="mb-5 text-xl font-semibold">
      Thumbnail
    </h2>

    <img
      src={resource.thumbnail}
      className="mb-5 h-48 rounded-xl border object-cover"
    />

    <input
      type="file"
      accept="image/*"
      onChange={(e) =>
        setThumbnailFile(
          e.target.files?.[0] || null
        )
      }
    />

  </div>

  {/* Resource File */}

<div className="rounded-2xl border p-6">

  <h2 className="mb-5 text-xl font-semibold">
    Resource File
  </h2>

  <p className="mb-4 text-sm text-slate-500">
    Current Resource File
  </p>

  <div className="mb-5 flex items-center gap-3">

    <a
      href={resource.file_url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      View File
    </a>

    <a
      href={resource.file_url}
      download
      className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
    >
      Download
    </a>

  </div>

  <label className="mb-2 block text-sm font-medium">
    Replace Resource File
  </label>

  <input
    type="file"
    accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.mp4"
    onChange={(e) =>
      setResourceFile(
        e.target.files?.[0] || null
      )
    }
    className="block w-full rounded-xl border border-slate-300 p-3
      file:mr-4
      file:rounded-lg
      file:border-0
      file:bg-indigo-600
      file:px-4
      file:py-2
      file:text-white
      hover:file:bg-indigo-700"
  />

  {resourceFile && (
    <p className="mt-3 text-sm text-green-600">
      Selected: {resourceFile.name}
    </p>
  )}

</div>

    <div className="rounded-2xl border p-6">

    <h2 className="mb-5 text-xl font-semibold">
      Settings
    </h2>

    <div className="space-y-4">

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={resource.featured}
          onChange={(e) =>
            setResource({
              ...resource,
              featured: e.target.checked,
            })
          }
        />

        Featured

      </label>

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={resource.published}
          onChange={(e) =>
            setResource({
              ...resource,
              published: e.target.checked,
            })
          }
        />

        Published

      </label>

      <input
        type="number"
        value={resource.display_order}
        onChange={(e) =>
          setResource({
            ...resource,
            display_order: Number(e.target.value),
          })
        }
        className="rounded-xl border p-4"
      />

    </div>

  </div>

    <div className="flex justify-end gap-4">

    <button
      type="button"
      className="rounded-xl border px-6 py-3"
    >
      Cancel
    </button>

    <button
  type="submit"
  disabled={saving}
  className="rounded-xl bg-blue-600 px-6 py-3 text-white"
>
  {saving
    ? "Updating..."
    : "Update Resource"}
</button>

  </div>

</form>

    </div>

  );

}