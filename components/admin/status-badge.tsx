interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  switch (status.toUpperCase()) {
    case "NEW":
      return (
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          NEW
        </span>
      );

    case "CONTACTED":
      return (
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
          CONTACTED
        </span>
      );

    case "RESOLVED":
      return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          RESOLVED
        </span>
      );

    case "APPROVED":
      return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          APPROVED
        </span>
      );

    case "PENDING":
      return (
        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
          PENDING
        </span>
      );

    case "REJECTED":
      return (
        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
          REJECTED
        </span>
      );

    default:
      return (
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
          {status}
        </span>
      );
  }
}