import Image from 'next/image'
import Link from 'next/link'

export default function ClientsIndustriesPage() {

  const industries = [
  {
    title: 'Automobile',
    image: '/images/clients-industries/automobile.webp',
    clients: [
      'Tata Motors Ltd.',
      'Mahindra & Mahindra Ltd.',
      'Mahindra Heavy Engines Ltd.',
      'Maruti Suzuki Ltd.',
      'Fiat India',
      'Royal Enfield',
      'JSW Motors',
    ],
  },

  {
    title: 'BFSI',
    image: '/images/clients-industries/bfsi.webp',
    clients: [
      'Andhra Bank',
      'Bank of Baroda',
      'State Bank of India',
      'ICICI Prudential Life Insurance',
      'Aviva Life Insurance',
      'Bharti Axa Life Insurance',
      'Bajaj Allianz Life & General Insurance',
      'HDFC Life Insurance',
      'IndiaFirst Life Insurance',
    ],
  },

  {
    title: 'Building, Construction & Real Estate',
    image: '/images/clients-industries/construction.webp',
    clients: [
      'UltraTech Cements',
      'Priya Cements (Rain Industries)',
      'DFW Consulting',
    ],
  },
  {
  title: 'Education',
  image: '/images/clients-industries/education.webp',
  clients: [
    'Balaji Institute of Technology & Science',
    "Rishi College of Technology for Women's",
    'Swami Vivekananda Institute of Technology',
    'AV College of Commerce and Arts',
    'Narayana Schools',
    'Woxsen University',
    'Blossom International School',
  ],
},

{
  title: 'Health Care',
  image: '/images/clients-industries/health.webp',
  clients: [
    'Apollo Pharmacy',
    'Aizant Drugs & Research',
    'Docmode Technologies',
    'Hetero Drugs',
    'Citizen Hospitals',
    'Yashoda Hospitals',
    "Dr. Reddy's Foundation",
  ],
},

{
  title: 'Manufacturing',
  image: '/images/clients-industries/industrial.webp',
  clients: [
    'Patil Group',
    'JK Fenner',
    'Hitachi',
    'Initial Coatings',
  ],
},

{
  title: 'Retail',
  image: '/images/clients-industries/retail.webp',
  clients: [
    'MTR Masala',
    'Eastern Masala',
    'DS Group',
    'Smoothtek Paints',
  ],
},

{
  title: 'Telecommunication',
  image: '/images/clients-industries/telecom.webp',
  clients: [
    'Airtel',
    
  ],
},
]

      return (
    <main className="min-h-screen bg-slate-50">

         <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-28">
    <div className="container mx-auto px-6 text-center">

      <span className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-300 px-5 py-2 rounded-full mb-6">
        Trusted Across Industries
      </span>

      <h1 className="text-6xl font-bold text-white">
        Clients & Industries
      </h1>

      <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
        Trusted by leading organizations across multiple industries,
        delivering impactful learning and development solutions.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
          <h3 className="text-4xl font-bold text-white">100+</h3>
          <p className="text-slate-300 mt-2">Clients</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
          <h3 className="text-4xl font-bold text-white">15+</h3>
          <p className="text-slate-300 mt-2">Industries</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
          <h3 className="text-4xl font-bold text-white">25,000+</h3>
          <p className="text-slate-300 mt-2">Professionals</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
          <h3 className="text-4xl font-bold text-white">500+</h3>
          <p className="text-slate-300 mt-2">Programs</p>
        </div>
      </div>

    </div>
  </section>
  {/* Industries */}
<section className="py-24">
  <div className="container mx-auto px-6">

    <div className="space-y-10">

      {industries.map((industry, index) => (
        <div
          key={industry.title}
          className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300"
        >

          <div
            className={`grid lg:grid-cols-2 ${
              index % 2 === 1
                ? 'lg:[&>*:first-child]:order-2'
                : ''
            }`}
          >

            {/* Image */}
            <div className="relative min-h-[420px]">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-14">

              <div className="flex flex-wrap gap-3 mb-5">

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Industry
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  {industry.clients.length} Clients
                </span>

              </div>

              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                {industry.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">

                {industry.clients.map((client) => (
                  <div
                    key={client}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5"></div>

                    <span className="text-slate-700">
                      {client}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

{/* Why Choose Us */}
<section className="pb-24">
  <div className="container mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-14">
      Why Organizations Choose Us
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-3xl p-8 border shadow-sm">
        <h3 className="font-bold text-xl mb-4">
          Industry Specific Programs
        </h3>

        <p className="text-slate-600">
          Tailored learning solutions aligned with business goals.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border shadow-sm">
        <h3 className="font-bold text-xl mb-4">
          Certified Trainers
        </h3>

        <p className="text-slate-600">
          Experienced facilitators with deep domain expertise.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border shadow-sm">
        <h3 className="font-bold text-xl mb-4">
          Customized Learning Paths
        </h3>

        <p className="text-slate-600">
          Programs designed around organizational requirements.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border shadow-sm">
        <h3 className="font-bold text-xl mb-4">
          Measurable Business Impact
        </h3>

        <p className="text-slate-600">
          Training linked to performance and business outcomes.
        </p>
      </div>

    </div>

  </div>
</section>

{/* CTA */}
<section className="pb-24">
  <div className="container mx-auto px-6">

    <div className="rounded-[40px] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-14 text-center text-white">

      <h2 className="text-5xl font-bold mb-6">
        Let's Build Future Ready Teams
      </h2>

      <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10">
        Partner with Creek Learning Solutions to create impactful
        learning experiences across industries.
      </p>

      <Link href="/contact">
        <button className="px-10 py-4 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-105 transition-all">
          Schedule Consultation
        </button>
      </Link>

    </div>

  </div>
</section>
   </main>
  )
}
