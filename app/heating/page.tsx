import { OptionsBand } from "@/components/options-band";
import { SplitFeature } from "@/components/split-feature";
import { Section } from "@/components/ui/section";
import HCAVRepair from "@/images/stock-images/HCAVRepair.jpg";
import { HEATING_OPTIONS } from "@/constants/services";

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section variant="default">
        <SplitFeature
          title={
            <>
              <span className="text-brand-primary">We Have the Knowledge and Expertise</span>
              <br />
              <span className="text-brand-secondary">
                to Provide Quality Heating System Services
              </span>
            </>
          }
          description={
            <p>
              If you want reliable and efficient heating unit installation or repair, call our team
              of professionals at A-Z Heating & Air Conditioning Inc, an HVAC company based out of
              Azusa, CA. With over 30 years of experience working with heating units, we have the
              knowledge and expertise to get the job done and done correctly. Our heating services
              include installations, replacements, repairs, and preventive maintenance. If you have
              an old heating system, we can replace it with an energy-efficient unit. Ask about our
              rebates and financing options! Contact us today to schedule a free consultation.
            </p>
          }
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
          ratio="75:25"
        />
      </Section>
      <Section variant="secondary">
        <OptionsBand
          title="We Offer Various Heating System Options"
          images={HEATING_OPTIONS.map((option) => ({
            ...option,
          }))}
        />
      </Section>

      <Section variant="accent" className="md:py-4 py-4">
        <p className="text-center text-sm font-medium">
          Call us at <span className="font-extrabold underline">626-505-0596</span> for more
          information about our heating services or to schedule a free consultation.
        </p>
      </Section>
    </main>
  );
}
