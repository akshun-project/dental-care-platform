import Image from "next/image";

export default function Intro() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#EAF2F8] sm:aspect-[16/11]">
              <Image
                src="/images/intro-dental.jpg"
                alt="Dentist providing thoughtful dental care to a patient"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#07131F]/20 via-transparent to-transparent"
              />
            </div>

            {/* Floating detail */}
            <div className="absolute -bottom-5 right-4 max-w-[16rem] rounded-2xl border border-[#0F2438]/10 bg-white/95 p-5 shadow-[0_20px_60px_-25px_rgba(15,36,56,0.28)] backdrop-blur-sm sm:right-8 lg:-right-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#2C6BAF]">
                Patient first
              </p>

              <p className="mt-2 text-sm leading-6 text-[#344558]">
                A simpler way to find care, choose a time, and stay on top of
                every visit.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl lg:pl-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C6BAF]">
              Care, thoughtfully connected
            </p>

            <h2
              id="intro-heading"
              className="mt-6 max-w-xl text-[2.8rem] font-medium leading-[0.96] tracking-[-0.055em] text-[#0F2438] sm:text-5xl lg:text-[4.5rem]"
            >
              A healthier,
              <span className="block text-[#2C6BAF]">happier you.</span>
            </h2>

            <p className="mt-7 max-w-lg text-[16px] leading-8 text-[#526173] sm:text-lg">
              Dental care should feel clear and reassuring. DentiCare brings
              trusted professionals, convenient appointments, and your care
              information together in one place.
            </p>

            <div className="mt-10 grid gap-6 border-t border-[#0F2438]/10 pt-8 sm:grid-cols-3 lg:max-w-2xl">
              <div>
                <p className="text-sm font-semibold text-[#0F2438]">
                  Trusted care
                </p>
                <p className="mt-2 text-sm leading-6 text-[#697586]">
                  Discover professionals who match your needs.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0F2438]">
                  Simple booking
                </p>
                <p className="mt-2 text-sm leading-6 text-[#697586]">
                  Find a convenient appointment without the back and forth.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0F2438]">
                  One place
                </p>
                <p className="mt-2 text-sm leading-6 text-[#697586]">
                  Keep appointments, follow-ups, and records organized.
                </p>
              </div>
            </div>

            <a
              href="#services"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#0F2438] transition-colors hover:text-[#2C6BAF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2438] focus-visible:ring-offset-4"
            >
              Explore dental care
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}