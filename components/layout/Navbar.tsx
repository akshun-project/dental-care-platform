export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-gray-900">
          DentalCare
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Find a Dentist
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            How It Works
          </a>

          <a
            href="#"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
}