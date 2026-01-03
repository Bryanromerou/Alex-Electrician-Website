import { ImageOption, ServiceItem } from "@/types/content";
import HCAVRepair from "@/images/stock-images/HCAVRepair.jpg";

export const services: ServiceItem[] = [
  {
    id: "service-1",
    title: "Electrical Repair",
    shortDescription:
      "Fast and reliable repair services for all your electrical issues, from faulty outlets to circuit problems.",
  },
  {
    id: "service-2",
    title: "Wiring & Rewiring",
    shortDescription:
      "Professional wiring installation and complete home rewiring services to ensure safety and code compliance.",
  },
  {
    id: "service-3",
    title: "Breaker Panel Upgrades",
    shortDescription:
      "Modernize your electrical system with upgraded breaker panels for improved safety and capacity.",
  },
  {
    id: "service-4",
    title: "Lighting Installation",
    shortDescription:
      "Expert installation of indoor and outdoor lighting solutions to enhance your home's ambiance and security.",
  },
  {
    id: "service-5",
    title: "EV Charger Installation",
    shortDescription:
      "Professional installation of electric vehicle charging stations for your home or business.",
  },
  {
    id: "service-6",
    title: "Electrical Inspections",
    shortDescription:
      "Comprehensive electrical safety inspections to identify potential hazards and ensure code compliance.",
  },
  {
    id: "service-7",
    title: "Surge Protection",
    shortDescription: "Protect your valuable electronics with whole-home surge protection systems.",
  },
  {
    id: "service-8",
    title: "Ceiling Fan Installation",
    shortDescription:
      "Safe and efficient ceiling fan installation and repair services for improved comfort and energy savings.",
  },
];

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
