const services = [
  {
    number: "01",
    title: "General dentistry",
    description:
      "Routine care, checkups, and everyday dental needs with a dentist you can trust.",
  },
  {
    number: "02",
    title: "Dental cleaning",
    description:
      "Professional cleaning and preventive care to help you keep your smile healthy.",
  },
  {
    number: "03",
    title: "Tooth pain",
    description:
      "Find an available dentist when something doesn't feel right and you need care.",
  },
  {
    number: "04",
    title: "Braces & aligners",
    description:
      "Explore orthodontic care for a straighter, healthier-looking smile.",
  },
  {
    number: "05",
    title: "Cosmetic dentistry",
    description:
      "Discover treatments designed to improve the appearance of your smile.",
  },
  {
    number: "06",
    title: "Root canal",
    description:
      "Find experienced dental professionals for treatment and follow-up care.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#F4F8FC] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C6BAF]">
              Find the right care
            </p>

            <h2
              id="services-heading"
              className="mt-5 max-w-xl text-[2.8rem] font-medium leading-[0.96] tracking-[-0.055em] text-[#0F2438] sm:text-5xl lg:text-[4.7rem]"
            >
              What can we help
              <span className="block text-[#2C6BAF]">you with today?</span>
            </h2>
          </div>

          <p className="max-w-xl text-[16px] leading-8 text-[#526173] lg:justify-self-end lg:pb-2 lg:text-lg">
            Start with what you need. We'll help you discover the right
            service and connect you with a dental professional.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 border-t border-[#0F2438]/10">
          {services.map((service) => (
            <a
              key={service.number}
              href="#dentists"
              className="group grid gap-6 border-b border-[#0F2438]/10 py-7 transition-colors duration-300 hover:bg-white sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1fr)_auto] sm:items-center sm:px-5 lg:py-9"
            >
              <span className="text-xs font-medium tracking-[0.15em] text-[#2C6BAF]">
                {service.number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#0F2438] sm:text-3xl">
                {service.title}
              </h3>

              <p className="max-w-xl text-sm leading-6 text-[#687789] sm:text-base">
                {service.description}
              </p>

              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2438]/15 text-[#0F2438] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#2C6BAF] group-hover:text-[#2C6BAF]"
              >
                →
              </span>
            </a>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#687789]">
            Not sure where to start?
          </p>

          <a
            href="#dentists"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0F2438] hover:text-[#2C6BAF]"
          >
            Explore all dental care
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}