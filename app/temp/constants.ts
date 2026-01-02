import HCAVRepair from "@/images/stock-images/HCAVRepair.jpg";

interface ImageOption {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export const HEATING_PUMP_IMAGE_OPTION: ImageOption = {
  title: "Heat Pumps",
  imageSrc: HCAVRepair.src,
  imageAlt: "Heat Pump Repair",
  description:
    "Heat pumps use electricity to transfer heat from a cool space to a warm place making the cool space colder and the warm place warmer. They are energy-efficient units.",
};

export const FURNACE_IMAGE_OPTION: ImageOption = {
  title: "Furnaces",
  imageSrc: HCAVRepair.src,
  imageAlt: "Furnace Repair",
  description:
    "Furnaces produce warm air and distribute it throughout a building using ducts. They are fueled by either gas or electricity.",
};

export const GAS_FURNACE_IMAGE_OPTION: ImageOption = {
  title: "Gas Furnaces",
  imageSrc: HCAVRepair.src,
  imageAlt: "Gas Furnace Repair",
  description:
    "Gas furnaces are more energy-efficient and cost-effective than electric furnaces. They operate by burning natural gas or propane to heat the air.",
};

export const MINI_SPLIT_IMAGE_OPTION: ImageOption = {
  title: "Mini-Splits",
  imageSrc: HCAVRepair.src,
  imageAlt: "Mini-Split Repair",
  description:
    "Mini-splits are heating and cooling systems that allow you to control the temperatures in individual rooms or spaces. They are easy to install.",
};

export const HEATING_OPTIONS: ImageOption[] = [
  FURNACE_IMAGE_OPTION,
  GAS_FURNACE_IMAGE_OPTION,
  HEATING_PUMP_IMAGE_OPTION,
  MINI_SPLIT_IMAGE_OPTION,
];

export const AIR_CONDITIONING_OPTIONS: ImageOption[] = [
  MINI_SPLIT_IMAGE_OPTION,
  HEATING_PUMP_IMAGE_OPTION,
];
