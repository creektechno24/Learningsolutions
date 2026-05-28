export default function TrainerRejectedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-sm border p-10 text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-6">
          Profile Rejected
        </h1>

        <p className="text-xl text-slate-600">
          Your trainer profile was rejected by admin.
        </p>
      </div>
    </div>
  )
}