"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/container";
import ButtonLink from "@/components/ui/button-link";
import { heroSlides } from "@/data/hero";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  if (!heroSlides || heroSlides.length === 0) return null;

  return (
    <section
      className="relative pt-4 md:pt-12 pb-16 
  bg-gradient-to-br from-primary/3 via-transparent to-transparent"
    >
      <Container>
        {/* Carousel */}
        <div className="relative overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {heroSlides.map((slide, index) => (
              <div className="relative min-w-full" key={index}>
                <div
                  className="h-[240px] w-full bg-cover bg-center sm:h-[360px] md:h-[440px]"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white md:bottom-10 md:left-10 md:max-w-xl">
                  <h2 className="text-xl font-semibold md:text-3xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 hidden sm:flex text-sm text-white/90 md:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          {heroSlides.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60 lg:block"
                aria-label="Previous slide"
              >
                <FiChevronLeft size={20} />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60 lg:block"
                aria-label="Next slide"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Bottom Hero Content */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          {/* Small Badge */}
          <div
            className="inline-flex items-center gap-2 
  rounded-full px-4 py-1.5 
  text-xs font-medium text-primary
  bg-gradient-to-br from-primary/10 to-primary/5
  border border-primary/20
  shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]
  backdrop-blur-sm"
          >
            <span className="text-sm">✨</span>
            Trusted Local Technicians
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Professional <span className="text-primary">Home & Appliance</span>{" "}
            Services
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            Quick, reliable and verified technicians for AC, TV, plumbing,
            electrical and interior services. Same-day service available.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row gap-4 justify-center">
            <ButtonLink
              href={CALL_LINK}
              size="lg"
              className="flex-1 sm:flex-none px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              <FaPhoneAlt size={14} />
              Call Now
            </ButtonLink>

            <ButtonLink
              href={WHATSAPP_LINK}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
