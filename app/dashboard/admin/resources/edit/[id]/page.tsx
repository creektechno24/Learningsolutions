import EditResourceForm from "@/components/admin/edit-resource-form";

export default async function EditResourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <EditResourceForm id={id} />;
}