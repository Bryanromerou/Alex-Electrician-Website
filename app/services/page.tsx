import { ServicesSection } from "@/components/sections/ServicesSection";
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
      <ServicesSection />
    </main>
  );
}
