import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#07131F] text-white"
    >
      {/* =========================================================
          FUTURE VIDEO LAYER
          =========================================================
          When the final hero video is ready, replace the temporary
          background below with:

          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          The rest of the hero does not need to change.
      */}

      {/* Temporary visual background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(117,181,239,0.28),transparent_28%),linear-gradient(110deg,#06131F_0%,#0A2031_42%,#15354B_100%)]"
      />

      {/* Subtle temporary light source */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-[-8%] h-[42rem] w-[42rem] rounded-full bg-[#6CA9D8]/10 blur-3xl"
      />

      {/* Primary cinematic overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,27,0.92)_0%,rgba(4,16,27,0.72)_32%,rgba(4,16,27,0.36)_62%,rgba(4,16,27,0.18)_100%)]"
      />

      {/* Bottom readability gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#06131F] via-[#06131F]/35 to-transparent"
      />

      {/* Very subtle grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.6px,transparent_0.6px)] [background-size:8px_8px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 sm:px-8 lg:px-12">
        {/* Content */}
        <div className="flex flex-1 items-center pt-28 pb-28 sm:pt-32 sm:pb-32 lg:items-end lg:pb-24">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#8FC8F3] shadow-[0_0_16px_rgba(143,200,243,0.75)]"
              />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs">
                Trusted dental care
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="max-w-5xl text-[3.35rem] font-medium leading-[0.94] tracking-[-0.055em] text-white sm:text-[4.75rem] md:text-[5.75rem] lg:text-[7.25rem]"
            >
              Exceptional dental care
              <span className="block text-white/88">
                without the friction.
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/68 sm:mt-8 sm:text-lg sm:leading-8">
              Find trusted dental professionals, choose a convenient time,
              and manage your care in one place.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/book"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#07131F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F8FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131F]"
              >
                Book an appointment

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>

              <Link
                href="#dentists"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-6 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131F]"
              >
                Find a dentist
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom information row */}
        <div className="absolute inset-x-5 bottom-6 flex items-end justify-between sm:inset-x-8 lg:inset-x-12 lg:bottom-8">
          {/* Scroll cue */}
          <a
            href="#trust"
            className="group inline-flex items-center gap-3 text-xs text-white/50 transition-colors duration-300 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#07131F]"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="absolute h-1.5 w-1.5 rounded-full bg-white transition-transform duration-300 group-hover:translate-y-1"
              />
            </span>

            <span className="hidden sm:inline">Scroll to explore</span>
          </a>

          {/* Media control */}
          <div className="hidden items-center gap-3 text-xs text-white/55 md:flex">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-sm"
            >
              <span className="ml-0.5 h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-white/80" />
            </span>

            <span>Experience DentiCare</span>
          </div>
        </div>
      </div>
    </section>
  );
}