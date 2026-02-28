import Container from "@/components/ui/container";
import { services } from "@/data/services/services-data";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const repairServices = services.filter(
    (service) => service.category === "repair-service",
  );

  const homeServices = services.filter(
    (service) => service.category === "home-service",
  );

  return (
    <section className="section">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
        </div>

        {/* 🔧 Repair Services */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">
            Repair <span className="text-primary">Services</span>
          </h3>

          <div className="grid gap-8 grid-cols-3 md:grid-cols-5 mt-12">
            {repairServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group text-center"
              >
                <div className="mx-auto relative h-16 w-16 md:h-32 md:w-32 bg-blue-100/30 rounded-full overflow-hidden border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:bg-blue-100/80">
                  <Image
                    src={service.mainImage}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform p-2 md:p-4 duration-300 group-hover:scale-90"
                  />
                </div>

                <h4 className="mt-4 text-sm md:text-base font-medium transition-colors group-hover:text-primary">
                  {service.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* 🏠 Home Services */}
        {/* 🏠 Home Services */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-8">
            Home <span className="text-primary">Services</span>
          </h3>

          {/* Outer Container */}
          <div className="rounded-xl border border-gray-50 bg-gradient-to-br from-primary/4 via-background to-background">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {homeServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group border border-border/50 p-6 transition-all duration-300 hover:border-border hover:shadow-sm"
                >
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden rounded bg-muted">
                    <Image
                      src={service.mainImage}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 font-medium text-sm tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {service.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
