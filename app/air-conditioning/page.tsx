import { Container } from "@/components/layout/Container";
import { TwoColorHeading } from "@/components/ui/two-color-heading";

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container className="py-16 md:py-2 text-gray-900">
        <div>
          <div>
            <TwoColorHeading
              part1="We Provide Quality Air Conditioning"
              part2="Installation and Repair at Affordable Prices"
            />
            <p className="text-gray-900">
              Is your air conditioner not working at full capacity? Do you detect a leak in your
              unit? Does the air quality from your air conditioner seem a bit stale? If the answer
              is yes to any of these questions, then call our team of professionals at A-Z Heating &
              Air Conditioning Inc, an HVAC company based out of Azusa, CA. We have over 30 years of
              experience working with air conditioners. We have the knowledge and expertise to get
              the job done promptly, efficiently, and at affordable rates.
            </p>
          </div>
          <div>IMAGE HERE</div>
        </div>
        <div>
          <div>
            <h2>Our Air Conditioners are Energy Efficient and Emit Maximum Indoor Air Quality</h2>
            <p>
              If you live in an older house, we can replace your existing air conditioner with one
              of our newer, energy-efficient units. We care about our environment and customers’
              well-being, so our energy-efficient AC units include IAQ (Indoor Air Quality) features
              to ensure the highest air quality. Our energy-efficient AC units can help our
              customers save money on electric and gas bills. Ask about our rebates and financing
              options!
            </p>
          </div>
          <div>IMAGE HERE</div>
        </div>
        <div>
          <h2>We Offer Various Air Conditioning System Options</h2>
        </div>
        <div>
          <p>
            Don’t get stuck in the heat! Call us today at{" "}
            <span className="underline">626-505-0596</span> to schedule an air conditioning service.
          </p>
        </div>
      </Container>
    </main>
  );
}
