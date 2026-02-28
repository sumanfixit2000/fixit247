export type ServiceType = "standard" | "custom";

export type ServiceCategory = "repair-service" | "home-service";

export type SubService = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  type: ServiceType;
  category: ServiceCategory;

  description: string;

  mainImage: string;
  subImages: string[];

  subServices?: SubService[];
  faqs?: FAQ[];
};
