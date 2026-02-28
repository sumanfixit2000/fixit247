import { notFound } from "next/navigation";
import { services } from "@/data/services/services-data";
import { getServiceBySlug } from "@/data/services/service-helper";
import CustomServicePage from "@/components/services/custom-service-page";
import StandardServicePage from "@/components/services/standard-service-page";

/* SSG */
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* SEO */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | ServicePro`,
    description: service.description,
  };
}

/* Page */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return notFound();
  }

  if (service.type === "custom") {
    return <CustomServicePage service={service} />;
  }

  return <StandardServicePage service={service} />;
}
