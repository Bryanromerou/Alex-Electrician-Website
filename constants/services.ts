import { ImageOption, ServiceItem } from "@/types/content";
import Furnaces from "@/images/stock-images/furnaces.webp";
import MiniSplits from "@/images/stock-images/mini-splits.webp";
import HeatPumps from "@/images/stock-images/heat-pumps.webp";
import GasFurnaces from "@/images/stock-images/gas-furnaces.webp";

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
  imageSrc: HeatPumps.src,
  imageAlt: "Heat Pump Repair",
  description:
    "Heat pumps use electricity to transfer heat from a cool space to a warm place making the cool space colder and the warm place warmer. They are energy-efficient units.",
};

export const FURNACE_IMAGE_OPTION: ImageOption = {
  title: "Furnaces",
  imageSrc: Furnaces.src,
  imageAlt: "Furnace Repair",
  description:
    "Furnaces produce warm air and distribute it throughout a building using ducts. They are fueled by either gas or electricity.",
};

export const GAS_FURNACE_IMAGE_OPTION: ImageOption = {
  title: "Gas Furnaces",
  imageSrc: GasFurnaces.src,
  imageAlt: "Gas Furnace Repair",
  description:
    "Gas furnaces are more energy-efficient and cost-effective than electric furnaces. They operate by burning natural gas or propane to heat the air.",
};

export const MINI_SPLIT_IMAGE_OPTION: ImageOption = {
  title: "Mini-Splits",
  imageSrc: MiniSplits.src,
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

// Electrical options - using placeholder images until electrical-specific images are added
export const PANEL_UPGRADE_IMAGE_OPTION: ImageOption = {
  title: "Panel Upgrades",
  imageSrc: GasFurnaces.src, // Placeholder
  imageAlt: "Electrical Panel Upgrade",
  description:
    "Modernize your electrical system with upgraded breaker panels for improved safety, capacity, and code compliance.",
};

export const WIRING_IMAGE_OPTION: ImageOption = {
  title: "Wiring & Rewiring",
  imageSrc: Furnaces.src, // Placeholder
  imageAlt: "Electrical Wiring",
  description:
    "Professional wiring installation and complete home rewiring services to ensure safety and meet modern electrical demands.",
};

export const EV_CHARGER_IMAGE_OPTION: ImageOption = {
  title: "EV Charger Installation",
  imageSrc: HeatPumps.src, // Placeholder
  imageAlt: "EV Charger Installation",
  description:
    "Professional installation of electric vehicle charging stations for your home or business with proper electrical infrastructure.",
};

export const LIGHTING_IMAGE_OPTION: ImageOption = {
  title: "Lighting Solutions",
  imageSrc: MiniSplits.src, // Placeholder
  imageAlt: "Lighting Installation",
  description:
    "Expert installation of indoor and outdoor lighting solutions to enhance your home's ambiance, security, and energy efficiency.",
};

export const ELECTRICAL_OPTIONS: ImageOption[] = [
  PANEL_UPGRADE_IMAGE_OPTION,
  WIRING_IMAGE_OPTION,
  EV_CHARGER_IMAGE_OPTION,
  LIGHTING_IMAGE_OPTION,
];
