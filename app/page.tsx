import type { Metadata } from "next";

// Example usage of AceternityHeroShell (commented out for now):
// import { AceternityHeroShell } from "@/components/aceternity/AceternityHeroShell";
//
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white">
//       <AceternityHeroShell
//         title="Professional Electrical Services"
//         subtitle="Trusted electricians serving your community with quality workmanship and reliable service."
//         primaryCtaLabel="Get Free Quote"
//         primaryCtaHref="/contact"
//         secondaryCtaLabel="View Services"
//         secondaryCtaHref="/services"
//       />
//       {/* Other sections... */}
//     </main>
//   );
// }

export const metadata: Metadata = {
  title: "Home | BrightSpark Electrical Services",
  description:
    "Professional electrical services for residential and commercial properties in Los Angeles. Licensed and insured electricians offering panel upgrades, lighting, EV chargers, and more.",
  openGraph: {
    title: "Home | BrightSpark Electrical Services",
    description:
      "Professional electrical services for residential and commercial properties in Los Angeles. Licensed and insured electricians offering panel upgrades, lighting, EV chargers, and more.",
    url: "https://www.brightspark-electrical.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Home Page (Development new)</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Welcome to our electrician services website. This is a placeholder for the home page
            content.
          </p>
        </div>
      </div>
    </main>
  );
}
