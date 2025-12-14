import { Container } from "@/components/layout/Container";
import { TwoColorHeading } from "@/components/ui/two-color-heading";

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container className="py-16 md:py-2 text-gray-900">
        <div>
          <div>
            <TwoColorHeading
              part1="We Have the Knowledge and Expertise"
              part2="to Provide Quality Heating System Services"
            />
            <p className="text-gray-900">
              If you want reliable and efficient heating unit installation or repair, call our team
              of professionals at A-Z Heating & Air Conditioning Inc, an HVAC company based out of
              Azusa, CA. With over 30 years of experience working with heating units, we have the
              knowledge and expertise to get the job done and done correctly. Our heating services
              include installations, replacements, repairs, and preventive maintenance. If you have
              an old heating system, we can replace it with an energy-efficient unit. Ask about our
              rebates and financing options! Contact us today to schedule a free consultation.
            </p>
          </div>
          <div>IMAGE HERE</div>
        </div>
        <div>
          <h2>We Offer Various Heating System Options</h2>
        </div>
        <div>
          <p>
            Call us at <span className="underline">626-505-0596</span> for more information about
            our heating services or to schedule a free consultation.
          </p>
        </div>
      </Container>
    </main>
  );
}
