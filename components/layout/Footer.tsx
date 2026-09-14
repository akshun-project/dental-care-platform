 import Link from "next/link";

const footerGroups = [
  {
    title: "Patients",
    links: [
      { label: "Find a Dentist", href: "/find-a-dentist" },
      { label: "Appointments", href: "/book" },
      { label: "Treatments", href: "/treatments" },
      { label: "Care & Records", href: "/records" },
    ],
  },
  {
    title: "Clinics",
    links: [
      { label: "For Dentists", href: "/for-dentists" },
      { label: "Clinic Management", href: "/for-clinics" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#07131F] text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-16 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-12 lg:py-24">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-semibold tracking-[-0.02em]"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20"
              >
                <span className="h-2 w-2 rounded-full bg-[#8FC8F3]" />
              </span>

              DentiCare
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              Better dental care, made simpler. Find trusted professionals,
              book with confidence, and keep your care connected.
            </p>

            <Link
              href="/book"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#8FC8F3]"
            >
              Book an appointment
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">
                {group.title}
              </h2>

              <nav
                aria-label={`${group.title} footer links`}
                className="mt-6"
              >
                <ul className="space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FC8F3] focus-visible:ring-offset-4 focus-visible:ring-offset-[#07131F]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} DentiCare. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/35">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white/70"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white/70"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white/70"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}