import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import StatusBadge from "@/components/admin/status-badge";
import { Eye } from "lucide-react";
import { Search } from "lucide-react";


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
const {
  search = "",
  status = "ALL",
} = await searchParams;

 let query = supabase
  .from("inquiries")
  .select("*")
  .order("created_at", {
    ascending: false,
  });

if (search) {
  query = query.or(
    `name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%,subject.ilike.%${search}%`
  );
}

if (status !== "ALL") {
  query = query.eq("status", status);
}

const {
  data: inquiries,
  error,
} = await query;


  if (error) {
    return (
      <div className="text-red-600">
        {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Inquiries
        </h1>

        <p className="mt-2 text-slate-600">
          Manage all contact enquiries received from the website.
        </p>

      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
  <form action="/dashboard/admin/inquiries">
    <div className="relative w-full max-w-xl">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
      />

      <input
        type="text"
        name="search"
        defaultValue={search}
        placeholder="Search inquiries..."
        className="h-12 w-full rounded-xl border border-slate-300 pl-12 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      <input
        type="hidden"
        name="status"
        value={status}
      />

    </div>
  </form>

  <div className="mt-6 flex flex-wrap gap-3">
    {["ALL", "NEW", "CONTACTED", "RESOLVED"].map((item) => (
      <Link
        key={item}
        href={`/dashboard/admin/inquiries?search=${search}&status=${item}`}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
          status === item
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
      >
        {item}
      </Link>
    ))}
  </div>
</div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left">

              <th className="px-6 py-4 font-semibold">
                Name
              </th>

              <th className="px-6 py-4 font-semibold">
                Company
              </th>

              <th className="px-6 py-4 font-semibold">
                Email
              </th>

              <th className="px-6 py-4 font-semibold">
                Subject
              </th>

              <th className="px-6 py-4 font-semibold">
                Status
              </th>

              <th className="px-6 py-4 font-semibold">
                Date
              </th>

              <th className="px-6 py-4 font-semibold text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {inquiries?.length === 0 && (

              <tr>

                <td
                  colSpan={7}
                  className="py-12 text-center text-slate-500"
                >
                  No inquiries found.
                </td>

              </tr>

            )}

            {inquiries?.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-5 font-medium">
                  {item.name}
                </td>

                <td className="px-6 py-5">
                  {item.company || "-"}
                </td>

                <td className="px-6 py-5">
                  {item.email}
                </td>

                <td className="px-6 py-5">
                  {item.subject}
                </td>

                <td className="px-6 py-5">

                 <StatusBadge status={item.status} />

                </td>

                <td className="px-6 py-5">

                  {new Date(item.created_at).toLocaleDateString()}

                </td>

                <td className="px-6 py-5">

                   <div className="flex items-center justify-center">
                    <Link
                      href={`/dashboard/admin/inquiries/${item.id}`}
                      className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
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

    </div>
  );
}