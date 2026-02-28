"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

export default function HomeRenovationHero() {
  const images = [
    "/images/services/home-renovation/hero-1.webp",
    "/images/services/home-renovation/hero-2.webp",
    "/images/services/home-renovation/hero-3.webp",
    "/images/services/home-renovation/hero-4.webp",
    "/images/services/home-renovation/hero-5.webp",
    "/images/services/home-renovation/hero-6.webp",
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index:any) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
  <section className="py-4 md:py-16">
    <div className="container grid gap-10 md:gap-12 md:grid-cols-2 items-center">

      {/* RIGHT CAROUSEL - TOP ON MOBILE */}
      <div className="relative order-1 md:order-2">
        <div
          className="overflow-hidden rounded-xl shadow-lg h-[260px] sm:h-[320px] md:h-[450px]"
          ref={emblaRef}
        >
          <div className="flex h-full">
            {images.map((src, index) => (
              <div key={index} className="relative min-w-full h-full">
                <Image
                  src={src}
                  alt={`Renovation Hero ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-white w-5"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* LEFT CONTENT - BOTTOM ON MOBILE */}
      <div className="order-2 md:order-1 text-center md:text-left">

        {/* Badge */}
        <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
          Transforming Old Spaces Into Modern Living
        </span>

        {/* Heading */}
        <h1 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Home <span className="text-primary">Renovation</span>
        </h1>

        {/* Description */}
        <p className="mt-4 md:mt-6 text-sm sm:text-base text-muted max-w-md mx-auto md:mx-0">
          From structural upgrades to complete home makeovers, we renovate
          with precision, durability and premium finishes.
        </p>

        {/* CTA */}
        <div className="mt-6 md:mt-8">
          <Link
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-blue-600 text-white text-sm md:text-base font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            <FaPhoneAlt size={14} />
            Get Free Inspection
          </Link>
        </div>
      </div>

    </div>
  </section>
);
}