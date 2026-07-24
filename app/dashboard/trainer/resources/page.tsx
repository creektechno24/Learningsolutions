'use client'

import { useEffect, useState } from "react";
import { Search, FileText } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  thumbnail: string;
  file_url: string;
  published: boolean;
}


export default function TrainerResourcesPage() {

  
const [resources, setResources] = useState<Resource[]>([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

useEffect(() => {
  fetchResources();
}, []);

  async function fetchResources(): Promise<void> {
try {
    const response = await fetch("/api/trainer/resources");
    const data = await response.json();

    if (data.success) {
      setResources(data.resources);
    }
  } catch (error) {
    console.error("Error fetching resources:", error);
  } finally {
    setLoading(false);
  }
}



if (loading) {
  return (
    <div className="p-8">
      <p className="text-lg text-slate-600">
        Loading resources...
      </p>
    </div>
  );
}

const categories = [
  "All",
  ...new Set(
    resources
      .map((resource) => resource.category.trim())
      .filter(Boolean)
  ),
].sort();

const filteredResources = resources.filter((resource) => {
  const keyword = search.toLowerCase();

  const matchesSearch =
    resource.title.toLowerCase().includes(keyword) ||
    resource.description.toLowerCase().includes(keyword) ||
    resource.category.toLowerCase().includes(keyword) ||
    resource.type.toLowerCase().includes(keyword);

  const matchesCategory =
    category === "All" || resource.category === category;

  return matchesSearch && matchesCategory;
});

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Resources
        </h1>

        <p className="mt-2 text-slate-600">
          Browse and download published training resources shared by the administrator.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row">
  <div className="relative flex-1">
    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

    <input
      type="text"
      placeholder="Search resources..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    />
  </div>

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
  >
    {categories.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
</div>

      {/* Empty State */}
     {filteredResources.length === 0 ? (
  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
      <FileText className="h-8 w-8 text-slate-500" />
    </div>

    <h2 className="mt-6 text-xl font-semibold text-slate-900">
      No Resources Available
    </h2>

    <p className="mt-2 text-slate-600">
      Published resources added by the administrator will appear here.
    </p>
  </div>
) : (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {filteredResources.map((resource) => (
    <div
      key={resource.id}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition"
    >
      {/* Thumbnail */}
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {resource.category}
          </span>

          <h2 className="mt-3 text-xl font-bold text-slate-900">
            {resource.title}
          </h2>

          <p className="mt-2 text-sm text-slate-600 line-clamp-3">
            {resource.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
            {resource.type}
          </span>

          <a
  href={resource.file_url}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
>
  Download
</a>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
)}
    </div>
  );
}