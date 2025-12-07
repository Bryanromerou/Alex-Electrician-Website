import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | BrightSpark Electrical Services",
  description:
    "Comprehensive electrical services for residential and commercial properties. Panel upgrades, lighting installation, EV charger installation, electrical repairs, and more in Los Angeles.",
  openGraph: {
    title: "Our Services | BrightSpark Electrical Services",
    description:
      "Comprehensive electrical services for residential and commercial properties. Panel upgrades, lighting installation, EV charger installation, electrical repairs, and more in Los Angeles.",
    url: "https://www.brightspark-electrical.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our comprehensive electrical services for residential and commercial properties.
            This is a placeholder for the services page content.
          </p>
        </div>
      </div>
    </main>
  );
}
