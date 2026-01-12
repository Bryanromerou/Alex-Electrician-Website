import { OptionsBand } from "@/components/options-band";
import { SplitFeature } from "@/components/split-feature";
import { Section } from "@/components/ui/section";
import ElectricalWorking from "@/images/stock-images/ElecticalWorking.webp";
import { ELECTRICAL_OPTIONS } from "@/constants/services";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function ElectricalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section variant="default">
        <FadeInWhenVisible>
          <SplitFeature
            title={
              <>
                <span className="text-brand-primary">Professional Electrical Services</span>
                <br />
                <span className="text-brand-secondary">
                  Safe, Reliable, and Up to Code
                </span>
              </>
            }
            description={
              <p>
                Whether you need electrical repairs, panel upgrades, or new installations, our
                licensed electricians at A-Z Heating & Air Conditioning Inc have the expertise to
                handle all your electrical needs. Based out of Azusa, CA, we bring over 30 years of
                experience to every job. From troubleshooting faulty outlets to installing EV
                chargers, we ensure your electrical systems are safe, efficient, and code-compliant.
                Contact us today to schedule a free consultation.
              </p>
            }
            imageSrc={ElectricalWorking.src}
            imageAlt="Electrician working on electrical panel"
            ratio="75:25"
          />
        </FadeInWhenVisible>
      </Section>
      <Section variant="secondary">
        <FadeInWhenVisible>
          <OptionsBand
            title="Our Electrical Services"
            images={ELECTRICAL_OPTIONS.map((option) => ({
              ...option,
            }))}
          />
        </FadeInWhenVisible>
      </Section>
      <Section variant="accent" className="md:py-4 py-4">
        <FadeInWhenVisible>
          <p className="text-center text-sm font-medium">
            Call us at <span className="font-extrabold underline">626-505-0596</span> for more
            information about our electrical services or to schedule a free consultation.
          </p>
        </FadeInWhenVisible>
      </Section>
    </main>
  );
}
