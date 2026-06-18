import Image from 'next/image'

export default function RetailPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-20 bg-slate-950">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
                Curated Training Program
              </span>

              <h1 className="text-6xl font-bold text-white mt-6 mb-6">
                Retail Training
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Comprehensive retail training solutions designed to
                improve customer experience, sales performance and
                operational excellence.
              </p>

            </div>

            <div>

              <div className="relative h-[450px] rounded-[32px] overflow-hidden bg-white shadow-2xl">

                <Image
                  src="/images/training-programs/rrr.png"
                  alt="Retail Training"
                  fill
                  priority
                  className="object-contain p-4"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-24">

        <div className="container mx-auto px-6">

          <div className="max-w-4xl mx-auto bg-white rounded-[32px] border p-12 text-center shadow-sm">

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Retail Training Program
            </h2>

            <p className="text-lg text-slate-600 leading-8">
              Detailed program content will be updated soon.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}