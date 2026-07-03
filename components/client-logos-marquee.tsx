'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const logos = [
  "/client-logos/Andhra_bank_small-removebg-preview.png",
  "/client-logos/apollo.png",
  "/client-logos/AV-removebg-preview.png",
  "/client-logos/Bank-of-Baroda-Emblem-removebg-preview.png",
  "/client-logos/bits-removebg-preview.png",
  "/client-logos/Citizen_Hospital-removebg-preview.png",
  "/client-logos/ds-group-removebg-preview.png",
  "/client-logos/eastern-removebg-preview.png",
  "/client-logos/erptree.jpeg",
  "/client-logos/fiat.png",
  "/client-logos/hetero-removebg-preview.png",
  "/client-logos/Hitachi-Emblem.png",
  "/client-logos/icici-prudential-life-insurance-151047-removebg-preview.png",
  "/client-logos/Indiafirst-Life-Insurance-removebg-preview.png",
  "/client-logos/LIC-removebg-preview.png",
  "/client-logos/Mahindra-Logo-2000-600x338.png",
  "/client-logos/maruti-suzuki-logo1-removebg-preview.png",
  "/client-logos/mtr-removebg-preview.png",
  "/client-logos/Patil_Grp-removebg-preview.png",
  "/client-logos/rishi-removebg-preview.png",
  "/client-logos/svit-removebg-preview.png",
  "/client-logos/Tata-Motors-Logo-1988.png",
]

const firstRow = logos.slice(0, 11)
const secondRow = logos.slice(11)

export default function ClientLogosMarquee() {
  return (

   <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50">

  {/* Background Glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-3xl" />

  <div className="relative container mx-auto px-6">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
  Our Esteemed Clients
</span>
           <h2 className="text-5xl font-bold mt-6 text-slate-900">  
            Trusted By Leading Organizations
          </h2>

          <p className="text-slate-600 text-xl mt-5 max-w-3xl mx-auto leading-8">
            We proudly partner with leading organizations across multiple
            industries, delivering impactful learning and workforce
            development solutions.
          </p>

        </div>

        {/* First Row */}

        <Marquee
          speed={45}
          pauseOnHover
          gradient={false}
        >

          {firstRow.map((logo, index) => (

            <div
              key={index}
              className="mx-6"
            >

              <div className="w-[220px] h-[110px] bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6">

                <Image
                  src={logo}
                  alt="Client Logo"
                  width={170}
                  height={70}
                  className="object-contain max-h-[60px] w-auto"
                />

              </div>

            </div>

          ))}

        </Marquee>

        {/* Second Row */}

        <div className="mt-8">

          <Marquee
            speed={40}
            direction="right"
            pauseOnHover
            gradient={false}
          >

            {secondRow.map((logo, index) => (

              <div
                key={index}
                className="mx-6"
              >

                <div className="
w-[220px]
h-[110px]
bg-white/90
backdrop-blur-xl
rounded-[28px]
border
border-white
shadow-lg
hover:shadow-2xl
hover:-translate-y-1
hover:scale-105
transition-all
duration-300
flex
items-center
justify-center
p-6
">

                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={170}
                    height={70}
                    className="object-contain max-h-[60px] w-auto"
                  />

                </div>

              </div>

            ))}

          </Marquee>

        </div>

      </div>
      </div>

    </section>
  )
}