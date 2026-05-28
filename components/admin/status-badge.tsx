interface StatusBadgeProps {
  status: 'approved' | 'pending' | 'rejected'
}

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  if (status === 'approved') {
    return (
      <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
        Approved
      </span>
    )
  }

  if (status === 'rejected') {
    return (
      <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
        Rejected
      </span>
    )
  }

  return (
    <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
      Pending
    </span>
  )
}