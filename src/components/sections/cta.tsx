import Container from "@/components/ui/container";
import ButtonLink from "@/components/ui/button-link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section pt-6">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-blue-50/40 p-8 md:p-12">
          {/* Soft SVG Shapes */}
          <svg
            className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 opacity-20"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
          </svg>

          <svg
            className="pointer-events-none absolute -bottom-12 -left-12 -z-10 h-48 w-48 opacity-10"
            viewBox="0 0 200 200"
            fill="none"
          >
            <rect
              x="20"
              y="20"
              width="160"
              height="160"
              rx="30"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
          </svg>

          {/* Content */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Need A Service <span className="text-primary">Today?</span>
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
            </div>

            <p className="mt-3 text-muted">
              Get fast and reliable home service from verified professionals.
              Call or WhatsApp to book instantly.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <ButtonLink
                href={CALL_LINK}
                size="lg"
                className="w-full sm:w-auto"
              >
                <FaPhoneAlt size={16} />
                Call Now
              </ButtonLink>

              <ButtonLink
                href={WHATSAPP_LINK}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
