export default function TrainerPendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-sm border p-10 text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-5xl mb-8">
          ⏳
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Profile Under Review
        </h1>

        <p className="text-xl text-slate-600 leading-9">
          Your trainer profile has been submitted successfully.
          <br />
          Admin approval is pending.
        </p>
      </div>
    </div>
  )
}