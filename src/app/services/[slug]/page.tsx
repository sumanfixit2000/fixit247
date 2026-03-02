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
      title: "Service Not Found | Fixit247",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.name} | Fixit247`,
    description: service.description,
    keywords: [service.name, "Fixit247", "Service", "Repair", "Home Service"],
    openGraph: {
      title: `${service.name} | Fixit247`,
      description: service.description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${service.name} | Fixit247`,
      description: service.description,
    },
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
