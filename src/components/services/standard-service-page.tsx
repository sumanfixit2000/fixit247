"use client";

import { useCallback, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Container from "@/components/ui/container";
import ButtonLink from "@/components/ui/button-link";
import { Service } from "@/data/services/service-types";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import CTA from "../sections/cta";

type Props = {
  service: Service;
};

export default function StandardServicePage({ service }: Props) {

  // ✅ Autoplay (3 seconds, no pause on hover)
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const heroSlides = [service.mainImage, ...(service.subImages || [])];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: "Fixit247",
    },
    description: service.description,
  };

  const faqSchema = service.faqs?.length
    ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className=" py-6">
        <Container>
          {/* ---------------- Breadcrumb ---------------- */}
          <div className="mb-4 flex items-center gap-1 text-xs sm:text-sm text-muted overflow-hidden whitespace-nowrap">
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

          {/* ---------------- Hero ---------------- */}
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left Content */}
            <div>
              <h1 className="text-2xl font-semibold md:text-4xl">
                {service.name}
              </h1>

              <p className="mt-4 text-muted max-w-xl">{service.description}</p>

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary" />
                  Verified Technicians
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary" />
                  Same-Day Service Available
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary" />
                  Service Warranty Included
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <ButtonLink href={CALL_LINK}>
                  <FaPhoneAlt size={16} />
                  Call Now
                </ButtonLink>

                <ButtonLink
                  href={WHATSAPP_LINK}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>

            {/* ---------------- Hero Carousel ---------------- */}
            <div className="relative overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {heroSlides.map((image, index) => (
                  <div key={index} className="relative min-w-full">
                    <div className="relative h-[260px] sm:h-[340px] w-full">
                      <Image
                        src={image}
                        alt={`${service.name} image ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              {heroSlides.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60 md:block"
                    aria-label="Previous slide"
                  >
                    <FiChevronLeft size={20} />
                  </button>

                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60 md:block"
                    aria-label="Next slide"
                  >
                    <FiChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ---------------- Sub Services ---------------- */}
          {service.subServices && (
            <div className="mt-20">
              <h2 className="text-2xl text-center md:text-3xl font-semibold tracking-tight">
                Our <span className="text-primary">{service.name}</span>
                <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full" />
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {service.subServices.map((sub, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border p-6 hover:shadow-sm transition"
                  >
                    <h3 className="font-medium">{sub.title}</h3>
                    <p className="mt-2 text-xs text-muted">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---------------- FAQ ---------------- */}
          {service.faqs && service.faqs.length > 0 && (
            <section className="mt-24">
              <Container>
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Frequently Asked{" "}
                    <span className="text-primary">Questions</span>
                  </h2>
                  <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full" />
                  <p className="mt-3 text-muted">
                    Find answers to common questions about our services.
                  </p>
                </div>

                <div className="mx-auto mt-10 max-w-2xl space-y-4">
                  {service.faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-border overflow-hidden transition"
                      >
                        <button
                          onClick={() => toggle(index)}
                          className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <FiChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                              }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-5 pb-4 text-sm text-muted">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </section>
          )}

          {/* ---------------- Bottom CTA ---------------- */}
          <CTA />
        </Container>
      </section>
    </>
  );
}
