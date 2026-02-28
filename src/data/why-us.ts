import { FiShield, FiClock, FiTool, FiCheckCircle } from "react-icons/fi";

import type { IconType } from "react-icons";

export type WhyUsItem = {
  title: string;
  description: string;
  icon: IconType;
};

export const whyUsItems: WhyUsItem[] = [
  {
    title: "Verified Technicians",
    description:
      "Background-checked and trained professionals for reliable service.",
    icon: FiShield,
  },
  {
    title: "Same-Day Service",
    description: "Fast response and quick resolution for urgent home needs.",
    icon: FiClock,
  },
  {
    title: "Genuine Spare Parts",
    description: "High-quality parts to ensure long-lasting performance.",
    icon: FiTool,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges — clear estimates before starting any work.",
    icon: FiCheckCircle,
  },
];
