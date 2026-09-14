 import Link from "next/link";

const navItems = [
  { label: "Find a Dentist", href: "#dentists" },
  { label: "Treatments", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1600px] px-5 pt-5 sm:px-8 lg:px-12 lg:pt-7">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3.2c-2.1 0-3.15.95-4.3.95-1.33 0-2.42-.68-3.39.13-.97.8-.77 2.38-.53 3.77.35 2.04.69 4.48 1.52 7.04.67 2.08 1.51 4.22 2.92 4.22 1.32 0 1.48-2.43 1.83-4.09.28-1.32.62-2.43 1.4-2.43s1.12 1.11 1.4 2.43c.35 1.66.51 4.09 1.83 4.09 1.41 0 2.25-2.14 2.92-4.22.83-2.56 1.17-5 1.52-7.04.24-1.39.44-2.97-.53-3.77-.97-.81-2.06-.13-3.39-.13-1.15 0-2.2-.95-4.3-.95Z"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="text-[17px] font-semibold tracking-[-0.03em]">
              DentiCare
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/login"
              className="text-[13px] font-medium text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
            >
              Log in
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-[13px] font-semibold text-[#07131F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F8FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131F]"
            >
              Book appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131F] lg:hidden"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}