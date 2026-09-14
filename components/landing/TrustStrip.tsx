const partners = [
  "Trusted by thousands of patients",
  "COLGATE",
  "PHILIPS",
  "invisalign",
  "Straumann",
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trusted dental care partners"
      className="overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="flex w-max animate-[marquee_28s_linear_infinite] py-5 hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex items-center whitespace-nowrap"
            >
              <span
                className={
                  partner === "Trusted by thousands of patients"
                    ? "mx-8 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:mx-12"
                    : "mx-8 text-sm font-semibold tracking-[-0.02em] text-slate-500 sm:mx-12 sm:text-base"
                }
              >
                {partner}
              </span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-slate-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}