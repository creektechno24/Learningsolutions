import Image from 'next/image'

export default function IndustrialSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
                Curated Training Program
              </span>

              <h1 className="text-6xl font-bold text-white mt-6 mb-6">
                Industrial Safety Training
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Industrial Safety training is a cornerstone of workplace
                well-being, especially in environments where physical hazards
                are part of daily operations.
              </p>

            </div>

           <div className="space-y-6">

  <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden shadow-2xl bg-white">
    <Image
      src="/images/training-programs/SSI-1.webp"
      alt="Industrial Safety"
      fill
      className="object-contain p-4"
    />
  </div>

  <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden shadow-2xl bg-white">
    <Image
      src="/images/training-programs/SSI-2.webp"
      alt="Industrial Safety"
      fill
      className="object-contain p-4"
    />
  </div>

</div>

          </div>

        </div>

      </section>

      {/* What Is Industrial Safety Training */}
      <section className="py-20">

        <div className="container mx-auto px-6 max-w-6xl">

          <div className="bg-white rounded-[32px] p-10 shadow-sm border">

            <h2 className="text-4xl font-bold mb-8">
              What Is Industrial Safety Training?
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Industrial Safety Training is a structured program designed to
              educate employees about:
            </p>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-slate-50 rounded-2xl p-5 border">
                Workplace hazards (chemical, mechanical, electrical, etc.)
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border">
                Safe operating procedures for machinery and equipment
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border">
                Emergency response protocols
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border">
                Use of Personal Protective Equipment (PPE)
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border md:col-span-2">
                Risk assessment and hazard identification
              </div>

            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">
              Training can be delivered through:
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                Classroom sessions
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                Online modules
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                Hands-on simulations
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                Toolbox talks and refresher courses
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Why Important */}
      <section className="pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Is It Important?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                1. Reduces Workplace Accidents
              </h3>

              <p className="text-slate-600">
                Proper training minimizes human error and unsafe practices.
              </p>

              <p className="text-slate-500 mt-4">
                Example: A manufacturing firm saw a 40% drop in accidents after
                implementing machinery safety training.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                2. Ensures Legal Compliance
              </h3>

              <p className="text-slate-600">
                Meets regulatory standards like OSHA, ISO, or local labor laws.
              </p>

              <p className="text-slate-500 mt-4">
                Avoids fines, shutdowns, and legal liabilities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                3. Boosts Employee Awareness
              </h3>

              <p className="text-slate-600">
                Workers become more alert to potential hazards.
              </p>

              <p className="text-slate-500 mt-4">
                Example: Chemical plant employees reduced spill incidents after
                hazard handling training.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                4. Improves Productivity
              </h3>

              <p className="text-slate-600">
                A safe environment allows employees to focus on tasks without
                fear.
              </p>

              <p className="text-slate-500 mt-4">
                Example: Logistics operations improved by 15% after lifting
                technique training.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                5. Enhances Confidence and Morale
              </h3>

              <p className="text-slate-600">
                Employees feel empowered to handle emergencies and operate
                equipment safely.
              </p>

              <p className="text-slate-500 mt-4">
                This leads to higher job satisfaction and lower turnover.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border">
              <h3 className="font-bold text-xl mb-4">
                6. Lowers Injury and Illness Rates
              </h3>

              <p className="text-slate-600">
                Reduces absenteeism and healthcare costs.
              </p>

              <p className="text-slate-500 mt-4">
                Fewer disruptions in workflow and better team cohesion.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          <div className="bg-white rounded-[32px] p-10 border shadow-sm">

            <h2 className="text-4xl font-bold mb-10">
              Impact on Employees
            </h2>

            <div className="overflow-x-auto">

              <table className="w-full border border-slate-200">

                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 text-left">Impact Area</th>
                    <th className="p-4 text-left">Description</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-t">
                    <td className="p-4 font-medium">Physical Well-being</td>
                    <td className="p-4">
                      Fewer injuries and long-term health issues
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-medium">Mental Health</td>
                    <td className="p-4">
                      Reduced stress and anxiety about workplace safety
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-medium">Professional Development</td>
                    <td className="p-4">
                      Skills in risk management and emergency response
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-medium">Engagement & Retention</td>
                    <td className="p-4">
                      Higher morale and loyalty due to a caring work environment
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-medium">Career Advancement</td>
                    <td className="p-4">
                      Safety certifications can lead to promotions and leadership roles
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

      {/* Long Term Benefits */}
      <section className="pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-4xl font-bold text-center mb-14">
            Long-Term Benefits for Organizations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl p-6 border shadow-sm">
              Lower insurance premiums
            </div>

            <div className="bg-white rounded-3xl p-6 border shadow-sm">
              Reduced downtime and equipment damage
            </div>

            <div className="bg-white rounded-3xl p-6 border shadow-sm">
              Improved reputation and trust with clients and regulators
            </div>

            <div className="bg-white rounded-3xl p-6 border shadow-sm">
              Culture of accountability and continuous improvement
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">

        <div className="container mx-auto px-6 text-center text-white">

          <p className="text-xl max-w-4xl mx-auto mb-10">
            If you’re looking to implement or improve safety training in your
            organization, we can help you design a tailored program or even
            simulate a training module. Want to explore that next? we are just
            a call away…
          </p>

        </div>

      </section>

    </main>
  )
}