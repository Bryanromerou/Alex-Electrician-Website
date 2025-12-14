import InformationalFooter from "@/components/cards/InformationalFooter";
import ListWithChecks from "@/components/lists/ListWithChecks";
import { TwoColorHeading } from "@/components/ui/two-color-heading";
import { cn } from "@/lib/utils";
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
  const leftCheckList = [
    "Heating installation and repairs",
    "Furnaces",
    "Gas furnaces",
    "Electric furnaces",
    "Heat pumps",
    "Energy-efficient heating units",
    "Heating system maintenance programs",
    "Air conditioning installation & repairs",
    "Energy-efficient air conditioning units",
  ];

  const rightCheckList = [
    "Air conditioning system maintenance programs",
    "Mini-splits",
    "Ductwork",
    "Surge protection",
    "Ask about rebates",
    "Financing is available",
    "Most parts have a 10-year warranty",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div>
        <div>
          <TwoColorHeading
            part1="Call the Professionals for HVAC"
            part2="Installation and Repair Services"
          />
          <p className="text-gray-900">
            If you want reliable and efficient heating unit installation or repair, call our team of
            professionals at A-Z Heating & Air Conditioning Inc, an HVAC company based out of Azusa,
            CA. With over 30 years of experience working with heating units, we have the knowledge
            and expertise to get the job done and done correctly. Our heating services include
            installations, replacements, repairs, and preventive maintenance. If you have an old
            heating system, we can replace it with an energy-efficient unit. Ask about our rebates
            and financing options! Contact us today to schedule a free consultation.
          </p>
        </div>
        <div>IMAGE HERE</div>
      </div>
      <div>
        <h2 className={cn("text-4xl md:text-5xl", "text-blue-600")}>
          Your Local HVAC Contractor Serving Southern California
        </h2>
        <p>
          We are located in Azusa, CA, and provide services to residential and light commercial
          businesses in Los Angeles, Orange, Riverside, and San Bernardino counties. We have over 30
          years of experience in the HVAC and electrical industries. Having lived and worked in this
          area for all those years, we are familiar with the communities, homes, and businesses and
          the required permits and regulations to accurately and efficiently complete HVAC projects.
        </p>
      </div>
      <div>
        <div>
          <ListWithChecks items={leftCheckList} />
          <ListWithChecks items={rightCheckList} />
        </div>
        <div>IMAGE HERE</div>
      </div>
      <div>
        Let the experienced team at A-Z Heating & Air Conditioning Inc handle all your heating and
        AC needs. Call us at <span className="underline">626-505-0596</span> to schedule a free
        consultation.
      </div>
      <InformationalFooter />
    </main>
  );
}
