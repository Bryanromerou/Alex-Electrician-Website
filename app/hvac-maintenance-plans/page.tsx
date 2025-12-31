import { SplitFeature } from "@/components/split-feature";
import HCAVRepair from "@/images/stock-images/HCAVRepair.jpg";
import { Section } from "@/components/ui/section";
import { ReactNode } from "react";
import ListWithChecks from "@/components/lists/ListWithChecks";

const heatingList: ReactNode[] = [
  <span>
    <span className="font-bold">Inspect the heating system:</span> We will inspect the heating
    system thoroughly to identify any issues or potential problems that need to be addressed.
  </span>,
  <span>
    <span className="font-bold">Clean the heating system:</span> We will clean the heating system to
    remove any dirt, debris, or other contaminants that can affect its performance.
  </span>,
  <span>
    <span className="font-bold">Replace air filters:</span> We will replace the air filters in the
    heating system to ensure the system is operating efficiently and effectively.
  </span>,
  <span>
    <span className="font-bold">Lubricate moving parts:</span> We will lubricate the moving parts of
    the heating system to prevent wear and tear and extend the system’s life.
  </span>,
  <span>
    <span className="font-bold">Test safety controls:</span> We will test the safety controls in the
    heating system to ensure they are functioning correctly and that the system is safe to use.
  </span>,
  <span>
    <span className="font-bold">Calibrate the thermostats:</span> We will calibrate the thermostats
    in the heating system to ensure they accurately control the building’s temperature.
  </span>,
  <span>
    <span className="font-bold">Recommendation for repairs:</span> If any repairs are needed, we
    will provide recommendations for repairs and the estimated cost of the repairs.
  </span>,
];

const airConditioningList: ReactNode[] = [
  <span>
    <span className="font-bold">Replace the air filter:</span> We will replace the air filter to
    ensure the system is running efficiently and the air quality is not compromised.
  </span>,
  <span>
    <span className="font-bold">Clean the condenser coil:</span> We will clean the condenser coils
    to ensure proper airflow and heat transfer, improving the system’s efficiency.
  </span>,
  <span>
    <span className="font-bold">Check the refrigerant level:</span> We will check the refrigerant
    level and top it off if necessary to ensure the system is cooling properly.
  </span>,
  <span>
    <span className="font-bold">Check the electrical connection:</span> We will inspect all
    electrical connections and components to ensure safe and proper operation.
  </span>,
  <span>
    <span className="font-bold">Check the thermostat:</span> We will ensure the thermostat functions
    correctly and the temperature is accurately read.
  </span>,
  <span>
    <span className="font-bold">Clean the drain line:</span> We will clean the drain line to prevent
    clogs and water damage.
  </span>,
  <span>
    <span className="font-bold">Inspect the fan blades:</span> We will inspect the fan blades for
    wear and damage, which can cause the system to work harder than necessary.
  </span>,
  <span>
    <span className="font-bold">Inspect the ductwork:</span> We will inspect the ductwork for leaks
    and damage, which can cause energy waste and decreased air quality.
  </span>,
];

const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <Section variant="default">
        <SplitFeature
          title={
            <>
              <span className="text-blue-600">We Conduct Thorough HVAC</span>
              <br />
              <span className="text-red-600">Preventive Maintenance Inspections and Cleanings</span>
            </>
          }
          description={
            <p>
              Make sure your HVAC systems are running correctly and efficiently throughout the year.
              A-Z Heating & Air Conditioning Inc, an HVAC company based out of Azusa, CA, provides
              preventive maintenance programs for heating and air conditioning systems. We conduct a
              thorough inspection and cleaning of all components. We can also recommend any repairs
              that may be needed. Call us today at{" "}
              <a href="tel:6265050596" className="font-extrabold underline">
                626-505-0596
              </a>{" "}
              for more information about our HVAC maintenance programs.
            </p>
          }
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
          ratio="60:40"
        />
      </Section>
      <Section variant="muted">
        <SplitFeature
          title={<span className="text-blue-600">Our Heating System Maintenance Program</span>}
          description={<ListWithChecks items={heatingList} />}
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
          ratio="60:40"
        />
      </Section>
      <Section variant="blue">
        <SplitFeature
          title={<span>Our Air Conditioning System Maintenance Program</span>}
          description={<ListWithChecks items={airConditioningList} className="text-white" />}
          imageSrc={HCAVRepair.src}
          imageAlt="Technician working on HVAC"
          ratio="60:40"
        />
      </Section>
      <Section variant="red" className="md:py-4 py-4">
        <p className="text-center text-sm font-medium">
          Call us at{" "}
          <a href="tel:6265050596" className="font-extrabold underline">
            626-505-0596
          </a>{" "}
          for more information about our heating or air conditioning maintenance programs or to
          schedule a free consultation.
        </p>
      </Section>
    </main>
  );
};

export default Page;
