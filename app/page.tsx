 import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Dental Care Platform
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Find the right dentist and book your appointment with ease.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Discover dentists, explore available appointment times, and manage
          your dental care in one place.
        </p>

        <div className="mt-8">
          <Button>Find a Dentist</Button>
        </div>
      </div>
    </section>
  );
}