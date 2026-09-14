const dentists = [
  {
    name: "Dr. Sarah Khan",
    specialty: "General & Cosmetic Dentistry",
    clinic: "DentiCare Studio",
    location: "New Delhi",
    rating: "4.9",
    experience: "8 years",
    availability: "Available today",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    name: "Dr. Arjun Mehta",
    specialty: "Orthodontics",
    clinic: "Smile House",
    location: "Noida",
    rating: "4.8",
    experience: "11 years",
    availability: "Next available · Tomorrow",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
    featured: false,
  },
  {
    name: "Dr. Neha Kapoor",
    specialty: "Restorative Dentistry",
    clinic: "Pearl Dental Care",
    location: "Gurugram",
    rating: "4.9",
    experience: "9 years",
    availability: "Next available · Tue",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
    featured: false,
  },
];

export default function DentistDiscovery() {
  return (
    <section
      id="dentists"
      aria-labelledby="dentists-heading"
      className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C6BAF]">
              Find your dentist
            </p>

            <h2
              id="dentists-heading"
              className="mt-5 max-w-3xl text-[2.9rem] font-medium leading-[0.96] tracking-[-0.055em] text-[#0F2438] sm:text-5xl lg:text-[5rem]"
            >
              The right care starts
              <span className="block text-[#2C6BAF]">
                with the right person.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#526173] sm:text-lg">
              Discover experienced dental professionals, compare what matters
              to you, and choose a time that fits your life.
            </p>
          </div>

          <a
            href="/find-a-dentist"
            className="group hidden items-center gap-3 text-sm font-semibold text-[#0F2438] transition-colors hover:text-[#2C6BAF] lg:inline-flex"
          >
            Explore all dentists
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* Search */}
        <div className="mt-14 rounded-[1.5rem] border border-[#0F2438]/10 bg-[#F4F8FC] p-3 sm:mt-16 sm:p-4">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_190px_190px_auto]">
            <label className="flex min-h-14 items-center gap-3 rounded-xl border border-[#0F2438]/10 bg-white px-4">
              <span
                aria-hidden="true"
                className="text-[#607086]"
              >
                ⌕
              </span>

              <input
                type="search"
                placeholder="Search by dentist, specialty or clinic"
                className="w-full bg-transparent text-sm text-[#0F2438] outline-none placeholder:text-[#8A95A3]"
              />
            </label>

            <button
              type="button"
              className="min-h-14 rounded-xl border border-[#0F2438]/10 bg-white px-4 text-left text-sm text-[#526173] transition-colors hover:border-[#0F2438]/20"
            >
              Location
              <span className="ml-2 text-[#0F2438]">New Delhi</span>
            </button>

            <button
              type="button"
              className="min-h-14 rounded-xl border border-[#0F2438]/10 bg-white px-4 text-left text-sm text-[#526173] transition-colors hover:border-[#0F2438]/20"
            >
              Care needed
              <span className="ml-2 text-[#0F2438]">Any</span>
            </button>

            <a
              href="/find-a-dentist"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#0F2438] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#16324B]"
            >
              Search
            </a>
          </div>
        </div>

        {/* Featured dentist */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group relative overflow-hidden rounded-[2rem] bg-[#0B2031]">
            <div className="relative min-h-[30rem] sm:min-h-[38rem]">
              <img
                src={dentists[0].image}
                alt={`Portrait of ${dentists[0].name}`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#07131F] via-[#07131F]/25 to-transparent"
              />

              <div className="absolute left-5 top-5">
                <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  Featured dentist
                </span>
              </div>

              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/65">
                    <span>{dentists[0].specialty}</span>
                    <span aria-hidden="true">•</span>
                    <span>{dentists[0].location}</span>
                  </div>

                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                    {dentists[0].name}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
                    {dentists[0].clinic} · {dentists[0].experience} of
                    experience · ★ {dentists[0].rating}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/dentists/sarah-khan"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#07131F] transition-all duration-300 hover:bg-[#F4F8FC]"
                    >
                      View profile
                    </a>

                    <a
                      href="/book"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/15"
                    >
                      {dentists[0].availability}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Supporting dentists */}
          <div className="grid gap-6">
            {dentists.slice(1).map((dentist) => (
              <article
                key={dentist.name}
                className="group grid overflow-hidden rounded-[2rem] border border-[#0F2438]/10 bg-[#F4F8FC] sm:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="relative min-h-64 overflow-hidden sm:min-h-full">
                  <img
                    src={dentist.image}
                    alt={`Portrait of ${dentist.name}`}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#2C6BAF]">
                      {dentist.specialty}
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-[#0F2438]">
                      {dentist.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#657386]">
                      {dentist.clinic}
                      <br />
                      {dentist.location}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#0F2438]">
                        ★ {dentist.rating}
                      </span>

                      <span className="text-[#7B8795]">
                        {dentist.availability}
                      </span>
                    </div>

                    <a
                      href="/find-a-dentist"
                      className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F2438]"
                    >
                      View profile
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 lg:hidden">
          <a
            href="/find-a-dentist"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#0F2438]"
          >
            Explore all dentists
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}