import HCAVRepair from "@/images/stock-images/HCAVRepair.jpg";

export const HEATING_OPTIONS: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}[] = [
  {
    title: "Furnaces",
    imageSrc: HCAVRepair.src,
    imageAlt: "Furnace Repair",
    description:
      "Furnaces produce warm air and distribute it throughout a building using ducts. They are fueled by either gas or electricity.",
  },
  {
    title: "Gas Furnaces",
    imageSrc: HCAVRepair.src,
    imageAlt: "Gas Furnace Repair",
    description:
      "Gas furnaces are more energy-efficient and cost-effective than electric furnaces. They operate by burning natural gas or propane to heat the air.",
  },
  {
    title: "Heat Pumps",
    imageSrc: HCAVRepair.src,
    imageAlt: "Heat Pump Repair",
    description:
      "Heat pumps use electricity to transfer heat from a cool space to a warm place making the cool space colder and the warm place warmer. They are energy-efficient units.",
  },
  {
    title: "Mini-Splits",
    imageSrc: HCAVRepair.src,
    imageAlt: "Mini-Split Repair",
    description:
      "Mini-splits are heating and cooling systems that allow you to control the temperatures in individual rooms or spaces. They are easy to install.",
  },
];
