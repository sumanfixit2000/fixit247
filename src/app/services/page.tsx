import Container from "@/components/ui/container";

import { services } from "@/data/services/services-data";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import CTA from "@/components/sections/cta";

export const metadata = {
  title: "Our Services | Fixit247",
  description:
    "Explore our professional home and appliance services including AC repair, TV repair, plumbing and interior design.",
};


export default function ServicesPage() {
  return (
    <section className="section overflow-x-hidden py-4 md:py-10">
      {/* BREADCRUMB */}
      <Container>
        <div className=" mb-4 sm:mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <FiChevronRight className="h-4 w-4" />
          <Link href="/services" className="text-black">
            Services
          </Link>
        </div>{" "}
        {/* ================= HERO ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
            <span>✨</span> Professional Home Services
          </div>

          <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
            Reliable & Verified{" "}
            <span className="text-primary">Service Experts</span>
          </h1>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            From appliance repair to interior solutions — we deliver fast,
            trusted and professional services at your doorstep.
          </p>
        </div>
        {/* ================= SERVICES SHOWCASE ================= */}
        <div className="mt-20">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            All <span className="text-primary">Services</span>
          </h2>

          <div className="mt-10 grid grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-border/60 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-48 w-full overflow-hidden">
                  <Image
                    src={service.mainImage}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <div className="p-3 sm:p-5">
                  <h3 className="font-medium text-xs sm:text-sm group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* ================= PROCESS SECTION ================= */}
        <div className="mt-24 rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-background p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-center">
            How It <span className="text-primary">Works</span>
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative w-full h-40 mx-auto">
                <Image
                  src="/images/1.webp"
                  alt="Book a Service"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-lg font-semibold text-primary">01</div>
              <h3 className="mt-2 font-medium">Book a Service</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose your required service and schedule instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative w-full h-40 mx-auto">
                <Image
                  src="/images/2.webp"
                  alt="Technician Assigned"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-lg font-semibold text-primary">02</div>
              <h3 className="mt-2 font-medium">Technician Assigned</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Verified professional reaches your location on time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative w-full h-40 mx-auto">
                <Image
                  src="/images/3.webp"
                  alt="Service Completed"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-lg font-semibold text-primary">03</div>
              <h3 className="mt-2 font-medium">Service Completed</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Quality work delivered with satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
        {/* ================= CTA SECTION ================= */}
      </Container>
        <CTA />
    </section>
  );
}
