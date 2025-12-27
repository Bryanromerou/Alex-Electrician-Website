import InformationalFooter from "@/components/cards/InformationalFooter";
import ListWithChecks from "@/components/lists/ListWithChecks";
import { SplitFeature } from "@/components/split-feature";
import { Section } from "@/components/ui/section";
import HCAVRepair from "@/images/stock-images/HCAVRepair.jpg";
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
  title: "Home | Climavolt",
  description:
    "Professional electrical services for residential and commercial properties in Los Angeles. Licensed and insured electricians offering panel upgrades, lighting, EV chargers, and more.",
  openGraph: {
    title: "Home | Climavolt",
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
      <Section variant="default">
        <SplitFeature
          title={
            <>
              <span className="text-blue-600">Call the Professionals for HVAC</span>
              <br />
              <span className="text-red-600">Installation and Repair Services</span>
            </>
          }
          description={
            <>
              <p>
                If you want reliable and efficient heating unit installation or repair, call our
                team of professionals at A-Z Heating & Air Conditioning Inc, an HVAC company based
                out of Azusa, CA. With over 30 years of experience working with heating units, we
                have the knowledge and expertise to get the job done and done correctly. Our heating
                services include installations, replacements, repairs, and preventive maintenance.
                If you have an old heating system, we can replace it with an energy-efficient unit.
                Ask about our rebates and financing options! Contact us today to schedule a free
                consultation.
              </p>
            </>
          }
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
        />
      </Section>
      <Section variant="muted">
        <SplitFeature
          title={
            <span className="text-blue-600">
              Your Local HVAC Contractor Serving Southern California
            </span>
          }
          description={
            <p>
              We are located in Azusa, CA, and provide services to residential and light commercial
              businesses in Los Angeles, Orange, Riverside, and San Bernardino counties. We have
              over 30 years of experience in the HVAC and electrical industries. Having lived and
              worked in this area for all those years, we are familiar with the communities, homes,
              and businesses and the required permits and regulations to accurately and efficiently
              complete HVAC projects.
            </p>
          }
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
        />
      </Section>

      <Section variant="blue">
        <SplitFeature
          title={<span>Our Complete HVAC Services</span>}
          description={
            <div className="flex flex-row gap-2 text-white">
              <ListWithChecks items={leftCheckList} />
              <ListWithChecks items={rightCheckList} />
            </div>
          }
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
          ratio="60:40"
        />
      </Section>
      <Section variant="red" className="md:py-4 py-4">
        <div className="text-center text-sm font-medium">
          Call us at <span className="font-extrabold underline">626-505-0596</span> to schedule a
          free consultation.
        </div>
      </Section>
      <InformationalFooter />
    </main>
  );
}
