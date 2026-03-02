import Image from "next/image";
import Link from "next/link";
import {
  FaHammer,
  FaBath,
  FaKitchenSet,
  FaBolt,
  FaPaintRoller,
  FaBuilding,
} from "react-icons/fa6";
import CTA from "../sections/cta";
import HomeRenovationHero from "../sections/home-renovation/hero";
import Container from "../ui/container";
import { FiChevronRight } from "react-icons/fi";

export default function HomeRenovationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Renovation",
    provider: {
      "@type": "LocalBusiness",
      name: "Fixit247",
    },
    description: "Professional home renovation services delivered with transparency, expertise and long-term reliability. We offer structural modifications, kitchen renovation, bathroom remodeling, electrical upgrades, and more.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Container>
        <div className="mt-4 sm:my-6 flex items-center gap-1 text-xs sm:text-sm text-muted overflow-hidden whitespace-nowrap">
          <Link href="/" className="hover:text-foreground shrink-0">
            Home
          </Link>

          <FiChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />

          <Link href="/services" className="hover:text-foreground shrink-0">
            Services
          </Link>

          <FiChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />

          <span className="text-foreground truncate">Home Renovation</span>
        </div>
      </Container>
      {/* ================= HERO ================= */}
      <HomeRenovationHero />

      {/* ================= TRANSFORMATIONS ================= */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center">
            Real <span className="text-primary">Transformations</span>
            <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {["kitchen", "bathroom", "living-room", "exterior"].map(
              (item, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
                >
                  <Image
                    src={`/images/services/home-renovation/${item}.webp`}
                    alt={item}
                    width={800}
                    height={500}
                    className="object-cover w-full h-[350px] group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4 text-sm">
                    {item.replace("-", " ")} renovation
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section py-8 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center">
            Our <span className="text-primary">Renovation Services</span>
            <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
          </h2>

          <div className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: <FaHammer />,
                title: "Structural Modifications",
                desc: "Wall removal, beam support and layout restructuring.",
              },
              {
                icon: <FaKitchenSet />,
                title: "Kitchen Renovation",
                desc: "Modern layouts, new cabinets and plumbing upgrades.",
              },
              {
                icon: <FaBath />,
                title: "Bathroom Remodeling",
                desc: "Waterproofing, tile replacement and fixture upgrades.",
              },
              {
                icon: <FaBolt />,
                title: "Electrical Upgrade",
                desc: "Rewiring, lighting redesign and power solutions.",
              },
              {
                icon: <FaPaintRoller />,
                title: "Painting & Repairs",
                desc: "Crack fixing, waterproofing and fresh finishes.",
              },
              {
                icon: <FaBuilding />,
                title: "Exterior Renovation",
                desc: "Facade redesign, balcony and terrace upgrades.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-100 bg-white hover:shadow-lg transition"
              >
                <div className="text-blue-600 text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="section bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center">
            Our <span className="text-primary"> Process</span>
            <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              {
                title: "Site Inspection",
                desc: "Detailed on-site evaluation and structural assessment.",
                image: "/images/services/home-renovation/process-1.webp",
              },
              {
                title: "Planning & Budgeting",
                desc: "Layout finalization and transparent cost planning.",
                image: "/images/services/home-renovation/process-2.webp",
              },
              {
                title: "Execution & Upgrade",
                desc: "Professional renovation with quality supervision.",
                image: "/images/services/home-renovation/process-3.webp",
              },
              {
                title: "Final Handover",
                desc: "Project completion with inspection and client approval.",
                image: "/images/services/home-renovation/process-4.webp",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                {/* Step Number Badge */}
                <span className="absolute top-4 right-4 text-xs font-semibold text-blue-600">
                  0{index + 1}
                </span>

                {/* Vector Image */}
                <div className="relative h-32 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-semibold text-lg">{step.title}</h3>

                {/* Description */}
                <p className="mt-3 text-sm text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section bg-gradient-to-b py-8 md:py-16 from-blue-50 to-white">
        <div className="container">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Why <span className="text-primary">Choose Us</span>
            </h2>
            <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>

            <p className="mt-4 text-muted max-w-xl mx-auto">
              Professional renovation services delivered with transparency,
              expertise and long-term reliability.
            </p>
          </div>

          {/* Cards */}
          <div className="my-8 md:my-16 grid gap-8 md:grid-cols-4">
            {[
              {
                title: "Licensed & Skilled Team",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M12 2l2.5 5 5 .5-3.8 3.3 1.1 5L12 14l-4.8 1.8 1.1-5L4.5 7.5l5-.5z" />
                  </svg>
                ),
              },
              {
                title: "Transparent Pricing",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    {/* Rupee Symbol */}
                    <path d="M6 6h10M6 10h8M6 6c4 0 6 2 6 4s-2 4-6 4l6 6" />
                  </svg>
                ),
              },
              {
                title: "On-Time Completion",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                ),
              },
              {
                title: "Quality Assurance",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-blue-100 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-300"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 font-medium text-base">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <CTA />
      </section>

      {/* ================= CTA ================= */}
    </>
  );
}
