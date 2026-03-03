import type { MetadataRoute } from "next";
import { services } from "@/data/services/services-data";

const BASE_URL = "https://fixit247.in";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // filter invalid slug (your "/" coming soon entry)
  const validServices = services.filter(
    (service) => service.slug && service.slug !== "/",
  );

  const serviceUrls = validServices.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceUrls,
  ];
}
