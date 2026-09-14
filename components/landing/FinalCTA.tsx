import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#0A1E2E]">
          {/* Dental image */}
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=90"
            alt="Modern dental clinic"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Image overlays */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#07131F]/45"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,31,0.92)_0%,rgba(7,19,31,0.68)_34%,rgba(7,19,31,0.25)_68%,rgba(7,19,31,0.18)_100%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#07131F]/35 via-transparent to-transparent"
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-[32rem] items-end px-6 py-8 sm:min-h-[38rem] sm:px-10 sm:py-10 lg:min-h-[43rem] lg:px-14 lg:py-14">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
                Your next visit
              </p>

              <h2
                id="final-cta-heading"
                className="mt-5 max-w-2xl text-[3rem] font-medium leading-[0.94] tracking-[-0.055em] text-white sm:text-5xl lg:text-[5.5rem]"
              >
                Better dental care
                <span className="block text-white/80">
                  starts here.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
                Find a dentist you trust, choose a convenient appointment,
                and make your next visit feel simple.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#07131F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F8FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131F]"
                >
                  Book an appointment
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="/find-a-dentist"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131F]"
                >
                  Find a dentist
                </Link>
              </div>
            </div>
          </div>

          {/* Small visual label */}
          <div className="absolute right-6 top-6 hidden sm:block lg:right-8 lg:top-8">
            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
              DentiCare
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}