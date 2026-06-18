import Link from 'next/link'

const programs = [
  {
    title: 'Behavioral Training',
    slug: 'behavioral-training',
  },
  {
    title: 'Core HR Trainings',
    slug: 'core-hr-trainings',
  },
  {
    title: 'Leadership',
    slug: 'leadership',
  },
  {
    title: 'Retail',
    slug: 'retail',
  },
  {
    title: 'Soft Skills Training',
    slug: 'soft-skills-training',
  },
  {
    title: 'Industrial Safety',
    slug: 'industrial-safety',
  },
  {
    title: 'IT & ITES',
    slug: 'it-ites',
  },
]

export default function TrainingProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="py-20">
        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-4">
            Curated Training Programs
          </h1>

          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
            Industry focused corporate training programs designed
            to improve performance, leadership and workplace
            effectiveness.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/training-programs/${program.slug}`}
              >
                <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                  <h2 className="text-2xl font-bold mb-3">
                    {program.title}
                  </h2>

                  <p className="text-slate-500">
                    Explore training programs and learning solutions.
                  </p>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>
    </main>
  )
}