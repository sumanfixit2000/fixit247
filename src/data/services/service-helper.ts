import { services } from "./services-data";

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
