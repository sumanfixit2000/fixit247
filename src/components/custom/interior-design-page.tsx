import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import ButtonLink from "@/components/ui/button-link";
import { CALL_LINK } from "@/lib/constants";
import { FaPhoneAlt } from "react-icons/fa";
import { Service } from "@/data/services/service-types";
import { FiChevronRight } from "react-icons/fi";
import {
  FaComments,
  FaDraftingCompass,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";
import CTA from "../sections/cta";
import { Metadata } from "next";

type Props = {
  service: Service;
};

export const metadata: Metadata = {
  title: "Interior Design Services | Minimal Luxury Interiors",
  description:
    "Minimal and elegant interior design solutions for homes and workspaces. From planning to execution, we create refined, functional spaces.",
  openGraph: {
    title: "Minimal Interior Design Studio",
    description:
      "Modern, minimal interior design for residential and commercial spaces.",
    images: [
      {
        url: "/images/services/interior/full-hero.webp",
        width: 1200,
        height: 630,
        alt: "Minimal luxury interior design",
      },
    ],
  },
  alternates: {
    canonical: "/services/interior-design",
  },
};

export default function InteriorDesignPage({ service }: Props) {
  return (
    <main>
      {/* ================= BREADCRUMB ================= */}
      <Container>
        <div className="my-3 sm:my-6 flex items-center gap-1 text-xs sm:text-sm text-muted overflow-hidden whitespace-nowrap">
          <Link href="/" className="hover:text-foreground shrink-0">
            Home
          </Link>

          <FiChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />

          <Link href="/services" className="hover:text-foreground shrink-0">
            Services
          </Link>

          <FiChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />

          <span className="text-foreground truncate">{service.name}</span>
        </div>
      </Container>

      {/* ================= HERO SECTION (Split Layout) ================= */}
      <section className="section">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT TEXT */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-blue-600">
                ✨ Where Design Meets Elegance
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Premium Interior
                <span className="block text-blue-600">Design Solutions</span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-base text-muted leading-relaxed">
                We design elegant, functional and inspiring spaces tailored to
                your lifestyle. From concept development to final execution, our
                team ensures creativity, precision and flawless detailing.
              </p>

              <p className="mt-4 text-sm text-muted">
                Whether it’s a modern apartment, luxury villa or professional
                workspace, we craft interiors that reflect personality and
                purpose.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <ButtonLink
                  href={CALL_LINK}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 transition-all duration-300 hover:text-white"
                >
                  <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

                  <span className="relative flex items-center gap-2">
                    <FaPhoneAlt size={16} />
                    Book Free Consultation
                  </span>
                </ButtonLink>
              </div>
            </div>

            {/* RIGHT BENTO GRID */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[500px]">
              <div className="relative row-span-2 overflow-hidden">
                <Image
                  src="/images/services/interior/custom-1.webp"
                  alt="Interior design"
                  fill
                  className="object-cover pb-16"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/services/interior/custom-2.webp"
                  alt="Living room design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/services/interior/custom-3.webp"
                  alt="Kitchen design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= SHOWCASE WORKS ================= */}
      <section className="section py-8 md:py-16 mt-8 md:mt-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Complete{" "}
                <span className="text-primary">Interior Soultions</span>
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
            </div>
            <p className="mt-4 text-muted">
              From planning to execution, we deliver end-to-end interior design
              services tailored to modern living.
            </p>
          </div>

          <div className="mt-14 grid gap-8 grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "2D & 3D Planning",
                desc: "Smart space planning with realistic 3D visualization.",
                image: "/images/services/interior/planning.webp",
              },
              {
                title: "Modular Kitchen",
                desc: "Functional and elegant kitchen layouts with optimized storage.",
                image: "/images/services/interior/kitchen.webp",
              },
              {
                title: "Bedroom Interior",
                desc: "Comfort-focused bedroom designs with custom wardrobes.",
                image: "/images/services/interior/bedroom.webp",
              },
              {
                title: "Bathroom Design",
                desc: "Contemporary bathrooms with premium fittings.",
                image: "/images/services/interior/bathroom.webp",
              },
              {
                title: "False Ceiling",
                desc: "Modern layered ceiling designs with ambient lighting.",
                image: "/images/services/interior/ceiling.webp",
              },
              {
                title: "Flooring Solutions",
                desc: "Premium wooden, marble and tile flooring options.",
                image: "/images/services/interior/flooring.webp",
              },
              {
                title: "Interior Painting",
                desc: "Premium wall painting solutions with smooth finishes and elegant color combinations.",
                image: "/images/services/interior/paint.webp",
              },
              {
                title: "Smart Home Tech",
                desc: "Integrated lighting and automation systems.",
                image: "/images/services/interior/smart-home.webp",
              },
              {
                title: "Custom Decor & Artistic Detailing",
                desc: "Personalized decor elements including wall art, murals, chandeliers and statement pieces.",
                image: "/images/services/interior/custom-decor.webp",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded bg-white mb-8"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 border border-gray-100 transition duration-500" />
                </div>

                <div className="pt-4">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* ================= FULL IMAGE HERO ================= */}

      <section className="relative h-[70vh]">
        <Image
          src="/images/services/interior/full-hero.webp"
          alt="Luxury interior design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="relative py-8 md:py-16 section overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
        {/* Subtle Grid Background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <Container>
          {/* Heading */}
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our Design Process
            </h2>
            <p className="mt-4 text-muted">
              A streamlined workflow to transform your ideas into beautifully
              crafted spaces.
            </p>
          </div>

          {/* Steps */}
          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            {[
              {
                title: "Consultation & Requirement",
                desc: "Understanding your vision, lifestyle and space needs.",
                icon: <FaComments size={22} />,
              },
              {
                title: "Concept & 3D Visualization",
                desc: "Creating layout plans and realistic previews before execution.",
                icon: <FaDraftingCompass size={22} />,
              },
              {
                title: "Material Selection",
                desc: "Choosing finishes, textures and premium materials.",
                icon: <FaPalette size={22} />,
              },
              {
                title: "Execution & Handover",
                desc: "Flawless implementation with timely delivery.",
                icon: <FaCheckCircle size={22} />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/60"
              >
                {/* Step Number */}
                <span className="absolute right-6 top-6 text-xs font-medium text-blue-500">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= RESIDENTIAL & COMMERCIAL ================= */}
      <section className="section py-8 md:py-16">
        <Container>
          <div className="space-y-20">
            {/* ================= RESIDENTIAL ================= */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* LEFT TEXT */}
              <div>
                <h3 className="text-3xl font-semibold text-primary">
                  Residential Interiors
                </h3>
                <p className="mt-4 text-muted">
                  Complete home interior solutions including living rooms,
                  modular kitchens, bedrooms and wardrobes designed for comfort,
                  elegance and everyday functionality.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/interior/residential.webp"
                  alt="Residential interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* ================= COMMERCIAL ================= */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* LEFT IMAGE */}
              <div className="relative order-2 h-[450px] w-full overflow-hidden rounded-2xl md:order-1">
                <Image
                  src="/images/services/interior/commercial.webp"
                  alt="Commercial interior"
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-semibold text-primary">
                  Commercial Interiors
                </h3>
                <p className="mt-4 text-muted">
                  We design professional workspaces including offices, cafes,
                  retail stores and showrooms that enhance brand identity,
                  improve workflow and create lasting impressions.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <CTA />
      </section>

      {/* ================= FINAL CTA ================= */}
    </main>
  );
}
