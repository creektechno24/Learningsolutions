import Link from "next/link";
import { Eye } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

interface Props {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}

export default async function AdminInquiriesPage({
  searchParams,
}: Props) {
  const supabase = await createClient();

  const params = await searchParams;

  const search = params.search || "";
  const status = params.status || "";

  let query = supabase
    .from("training_inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (search.trim()) {
  const term = `%${search}%`;

  query = query.or(
    [
      `company_name.ilike.${term}`,
      `contact_person.ilike.${term}`,
      `email.ilike.${term}`,
      `course.ilike.${term}`,
    ].join(",")
  );
}

  if (status) {
    query = query.eq("status", status);
  }

  const { data: inquiries } = await query;

  const totalCount = inquiries?.length || 0;

const newCount =
  inquiries?.filter((item) => item.status === "New").length || 0;

const inProgressCount =
  inquiries?.filter((item) => item.status === "In Progress").length || 0;

const resolvedCount =
  inquiries?.filter((item) => item.status === "Resolved").length || 0;

const closedCount =
  inquiries?.filter((item) => item.status === "Closed").length || 0;

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Training Inquiries
        </h1>

       

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-8">

  <div className="bg-white rounded-2xl border p-6 shadow-sm">
    <p className="text-slate-500 text-sm">Total</p>
    <h2 className="text-4xl font-bold mt-2">{totalCount}</h2>
  </div>

  <div className="bg-blue-50 rounded-2xl border p-6 shadow-sm">
    <p className="text-blue-700 text-sm">New</p>
    <h2 className="text-4xl font-bold text-blue-600 mt-2">
      {newCount}
    </h2>
  </div>

  <div className="bg-yellow-50 rounded-2xl border p-6 shadow-sm">
    <p className="text-yellow-700 text-sm">In Progress</p>
    <h2 className="text-4xl font-bold text-yellow-600 mt-2">
      {inProgressCount}
    </h2>
  </div>

  <div className="bg-green-50 rounded-2xl border p-6 shadow-sm">
    <p className="text-green-700 text-sm">Resolved</p>
    <h2 className="text-4xl font-bold text-green-600 mt-2">
      {resolvedCount}
    </h2>
  </div>

  <div className="bg-slate-50 rounded-2xl border p-6 shadow-sm">
    <p className="text-slate-700 text-sm">Closed</p>
    <h2 className="text-4xl font-bold text-slate-700 mt-2">
      {closedCount}
    </h2>
  </div>

</div>

       <form
  className="mb-6 flex flex-col gap-4 md:flex-row"
  method="GET"
>
  <input
    type="text"
    name="search"
    placeholder="Search company, contact, email or course..."
    defaultValue={search}
    className="w-full rounded-md border px-4 py-2"
  />

  <select
    name="status"
    defaultValue={status}
    className="rounded-md border px-4 py-2"
  >
    <option value="">All Status</option>
    <option value="New">New</option>
    <option value="In Progress">In Progress</option>
    <option value="Resolved">Resolved</option>
    <option value="Closed">Closed</option>
  </select>

  <button
    type="submit"
    className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
  >
    Search
  </button>
</form>

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3 text-left">Company</th>

            <th className="p-3 text-left">Contact</th>

            <th className="p-3 text-left">Course</th>

            <th className="p-3 text-left">Status</th>

            <th className="p-3 text-left">Date</th>

            <th className="p-3 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {inquiries?.map((item) => (

            <tr key={item.id} className="border-t">

              <td className="p-3">
                {item.company_name}
              </td>

              <td className="p-3">
                {item.contact_person}
              </td>

              <td className="p-3">
                {item.course}
              </td>

              <td className="p-3">
  <span
    className={`rounded-full px-3 py-1 text-xs font-medium ${
      item.status === "New"
        ? "bg-blue-100 text-blue-700"
        : item.status === "In Progress"
        ? "bg-yellow-100 text-yellow-700"
        : item.status === "Resolved"
        ? "bg-green-100 text-green-700"
        : "bg-gray-100 text-gray-700"
    }`}
  >
    {item.status}
  </span>
</td>

              <td className="p-3">
                {new Date(item.created_at).toLocaleDateString()}
              </td>

              <td className="p-3">

                <div className="flex justify-center">

                  <Link
                    href={`/dashboard/admin/inquiries/${item.id}`}
                    className="text-blue-600"
                  >
                    <Eye size={18} />
                  </Link>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}