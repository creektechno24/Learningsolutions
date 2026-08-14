import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Eye} from "lucide-react";

import DeleteContactButton from "@/components/admin/delete-contact-button";


function getStatusClasses(status: string) {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-700";

    case "In Progress":
      return "bg-yellow-100 text-yellow-700";

    case "Resolved":
      return "bg-green-100 text-green-700";

    case "Closed":
      return "bg-gray-100 text-gray-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}


export default async function ContactMessagesPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}) {
  const {
    search = "",
    status = "",
  } = await searchParams;

  const supabase = await createClient();

  let query = supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (search) {
    query = query.or(
      `name.ilike.%${search}%,email.ilike.%${search}%,subject.ilike.%${search}%`
    );
  }


  if (status && status !== "All") {
  query = query.eq("status", status);
}

  const { data: contacts, error } = await query;

  const totalContacts = contacts?.length ?? 0;

const newCount =
  contacts?.filter((c) => c.status === "New").length ?? 0;

const progressCount =
  contacts?.filter((c) => c.status === "In Progress").length ?? 0;

const resolvedCount =
  contacts?.filter((c) => c.status === "Resolved").length ?? 0;

const closedCount =
  contacts?.filter((c) => c.status === "Closed").length ?? 0;

  if (error) {
    return (
      <div className="text-red-600">
        Failed to load contact messages.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Contact Messages
        </h1>

        <p className="mt-2 text-slate-600">
          Manage contact messages submitted through the website.
        </p>
      </div>


      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

  <div className="rounded-xl border bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">Total</p>
    <p className="mt-2 text-3xl font-bold">
      {totalContacts}
    </p>
  </div>

  <div className="rounded-xl border bg-blue-50 p-5">
    <p className="text-sm text-blue-700">New</p>
    <p className="mt-2 text-3xl font-bold text-blue-700">
      {newCount}
    </p>
  </div>

  <div className="rounded-xl border bg-yellow-50 p-5">
    <p className="text-sm text-yellow-700">
      In Progress
    </p>
    <p className="mt-2 text-3xl font-bold text-yellow-700">
      {progressCount}
    </p>
  </div>

  <div className="rounded-xl border bg-green-50 p-5">
    <p className="text-sm text-green-700">
      Resolved
    </p>
    <p className="mt-2 text-3xl font-bold text-green-700">
      {resolvedCount}
    </p>
  </div>

  <div className="rounded-xl border bg-gray-100 p-5">
    <p className="text-sm text-gray-700">
      Closed
    </p>
    <p className="mt-2 text-3xl font-bold text-gray-700">
      {closedCount}
    </p>
  </div>

</div>


  <form className="flex flex-wrap gap-3">

  <input
    type="text"
    name="search"
    defaultValue={search}
    placeholder="Search by name, email or subject..."
    className="flex-1 rounded-lg border px-4 py-2"
  />

  <select
    name="status"
    defaultValue={status}
    className="rounded-lg border px-4 py-2"
  >
    <option value="">All Status</option>
    <option value="New">New</option>
    <option value="In Progress">In Progress</option>
    <option value="Resolved">Resolved</option>
    <option value="Closed">Closed</option>
  </select>

  <button
    type="submit"
    className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
  >
    Search
  </button>

</form>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Email</th>

              <th className="p-4 text-left">Subject</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Date</th>

              <th className="p-4 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {contacts?.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-10 text-center text-slate-500"
                >
                  No contact messages found.
                </td>

              </tr>

            ) : (

              contacts?.map((contact) => (

                <tr
                  key={contact.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4">{contact.name}</td>

                  <td className="p-4">{contact.email}</td>

                  <td className="p-4">{contact.subject}</td>

                  <td className="p-4">

                    <span
  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusClasses(
    contact.status
  )}`}
>
  {contact.status}
</span>

                  </td>

                  <td className="p-4">
                    {new Date(contact.created_at).toLocaleDateString()}
                  </td>

                  <td className="p-4">

   <div className="flex items-center gap-2">

  <Link
    href={`/dashboard/admin/contact/${contact.id}`}
    className="rounded-lg border p-2 text-blue-600 hover:bg-blue-50"
    title="View Details"
  >
    <Eye className="h-5 w-5" />
  </Link>

  <DeleteContactButton
    id={contact.id}
  />

</div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}