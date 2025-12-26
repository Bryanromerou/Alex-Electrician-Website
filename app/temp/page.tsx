import { Section } from "@/components/ui/section";
import { SplitFeature } from "@/components/split-feature";
import { OptionsBand } from "@/components/options-band";
import HCAVRepair from "@/images/stock-images/HCAVRepair.jpg";
import { HEATING_OPTIONS } from "./constants";

export default function TempPage() {
  return (
    <main>
      <Section variant="default">
        <SplitFeature
          title={
            <>
              We Have the Knowledge and Expertise
              <br />
              <span className="text-red-600">to Provide Quality Heating System Services</span>
            </>
          }
          description={
            <>
              <p>
                If you want reliable and efficient heating unit installation or repair, call our
                team...
              </p>
              <p className="mt-3">Contact us today to schedule a free consultation.</p>
            </>
          }
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
        />
      </Section>

      <Section variant="blue">
        <OptionsBand
          title="We Offer Various Heating System Options"
          images={HEATING_OPTIONS.map((option) => ({
            src: option.imageSrc,
            alt: option.imageAlt,
          }))}
        />
      </Section>

      <Section variant="default">
        <SplitFeature
          title={
            <>
              We Provide Quality Air Conditioning
              <br />
              <span className="text-red-600">Installation and Repair at Affordable Prices</span>
            </>
          }
          description={
            <>
              <p>If your air conditioner is not working at full capacity...</p>
            </>
          }
          imageSrc="/images/ac-hero.jpg"
          imageAlt="Woman adjusting AC"
        />
      </Section>

      <Section variant="muted">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-blue-700">
              Our Air Conditioners are Energy Efficient and Emit Maximum Indoor Air Quality
            </h3>
            <p className="mt-3 text-muted-foreground">
              If you live in an older house, we can replace your existing air conditioner...
            </p>
          </div>

          {/* “big image” right like your screenshot */}
          <div className="overflow-hidden rounded-none md:rounded-2xl">
            <img
              src="/images/big-room-ac.jpg"
              alt="Room with AC"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </Section>

      <Section variant="blue">
        <OptionsBand
          title="We Offer Various Air Conditioning System Options"
          images={[
            { src: "/images/ac-opt-1.jpg", alt: "Option 1" },
            { src: "/images/ac-opt-2.jpg", alt: "Option 2" },
          ]}
        />
      </Section>

      <Section variant="red" className="py-4">
        <div className="text-center text-sm font-medium">
          Call us at <span className="font-extrabold underline">626-505-0596</span> to schedule a
          free consultation.
        </div>
      </Section>
    </main>
  );
}
