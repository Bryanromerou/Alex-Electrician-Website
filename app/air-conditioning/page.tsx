import { OptionsBand } from "@/components/options-band";
import { SplitFeature } from "@/components/split-feature";
import { Section } from "@/components/ui/section";
import WomanAirConditioning from "@/images/stock-images/WomanAirConditioning.webp";
import AirConditioningClean from "@/images/stock-images/AirConditioningClean.webp";
import { AIR_CONDITIONING_OPTIONS } from "@/constants/services";

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section variant="default">
        <SplitFeature
          title={
            <>
              <span className="text-brand-primary">We Provide Quality Air Conditioning</span>
              <br />
              <span className="text-brand-secondary">
                Installation and Repair at Affordable Prices
              </span>
            </>
          }
          description={
            <p>
              Is your air conditioner not working at full capacity? Do you detect a leak in your
              unit? Does the air quality from your air conditioner seem a bit stale? If the answer
              is yes to any of these questions, then call our team of professionals at A-Z Heating &
              Air Conditioning Inc, an HVAC company based out of Azusa, CA. We have over 30 years of
              experience working with air conditioners. We have the knowledge and expertise to get
              the job done promptly, efficiently, and at affordable rates.
            </p>
          }
          imageSrc={WomanAirConditioning.src}
          imageAlt="Technician working on HVAC"
          ratio="60:40"
        />
      </Section>
      <Section variant="muted">
        <SplitFeature
          title={
            <span className="text-brand-primary">
              Our Air Conditioners are Energy Efficient and Emit Maximum Indoor Air Quality
            </span>
          }
          description={
            <p>
              If you live in an older house, we can replace your existing air conditioner with one
              of our newer, energy-efficient units. We care about our environment and customers’
              well-being, so our energy-efficient AC units include IAQ (Indoor Air Quality) features
              to ensure the highest air quality. Our energy-efficient AC units can help our
              customers save money on electric and gas bills. Ask about our rebates and financing
              options!
            </p>
          }
          imageSrc={AirConditioningClean.src}
          imageAlt="Technician working on HVAC"
          ratio="60:40"
        />
      </Section>
      <Section variant="secondary">
        <OptionsBand
          title="We Offer Various Air Conditioning System Options"
          images={AIR_CONDITIONING_OPTIONS.map((option) => ({
            ...option,
          }))}
        />
      </Section>
    </main>
  );
}
