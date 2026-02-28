import Container from "@/components/ui/container";
import ButtonLink from "@/components/ui/button-link";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import {
  EMAIL,
  CALL_LINK,
  WHATSAPP_LINK,
  PHONE_DISPLAY,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  MAP,
} from "@/lib/constants";
import { DarkLogo } from "./logo";

export default function Footer() {
  const repairServices = [
    { name: "AC Repair & Service", slug: "ac" },
    { name: "Refrigerator Repair", slug: "refrigerator" },
    { name: "Washing Machine Repair", slug: "washing-machine" },
    { name: "Water Purifier Repair", slug: "water-purifier" },
    { name: "LED & Smart TV Repair", slug: "tv" },
  ];

  const homeServices = [
    { name: "Plumbing Services", slug: "plumber" },
    { name: "Electrical Services", slug: "electrical" },
    { name: "Painting Services", slug: "paint" },
    { name: "Carpenter Services", slug: "carpenter" },
    { name: "Home Renovation", slug: "home-renovation" },
  ];

  return (
    <footer className="bg-[#1c1c1c] border-t border-white/10">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Link href={"/"}>
              <DarkLogo />
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
              Trusted home & appliance services with verified technicians,
              transparent pricing and reliable doorstep support.
            </p>

            <div className="mt-6 flex gap-3">
              <ButtonLink href={CALL_LINK} size="sm" className="bg-primary">
                <FaPhoneAlt className="h-4 w-4" />
                Call Now
              </ButtonLink>

              <ButtonLink
                href={WHATSAPP_LINK}
                variant="whatsapp"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </ButtonLink>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-[#25D366] text-white transition hover:scale-105"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition hover:scale-105"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1877F2] text-white transition hover:scale-105"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Repair Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Repair Services
            </h4>

            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {repairServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Home Services
            </h4>

            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {homeServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p>
                Phone:{" "}
                <a
                  href={CALL_LINK}
                  className="hover:text-white transition-colors duration-200"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {EMAIL}
                </a>
              </p>

              <p>Service Area: Brahmapur</p>
            </div>

            {/* Small Google Map */}
            <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
              <iframe
                src={MAP}
                width="100%"
                height="120"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Fixit 24/7. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/disclaimer" className="hover:text-white">
              disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
