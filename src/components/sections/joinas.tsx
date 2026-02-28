import Image from "next/image";
import Container from "@/components/ui/container";
import ButtonLink from "@/components/ui/button-link";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaClock, 
  FaCheckCircle, 
  FaMoneyBillWave, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function JoinTechnicianCTA() {
  return (
    <section className="section my-6">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border p-6 md:p-10">

          {/* Dotted Gradient Background */}
          <div className="absolute inset-0 -z-10 rounded-2xl 
            bg-gradient-to-br from-primary/10 via-background to-primary/5" />

          <div className="absolute inset-0 -z-10 rounded-2xl opacity-40 
            [background-image:radial-gradient(circle,_currentColor_1px,_transparent_1px)]
            [background-size:18px_18px] text-primary/20" />

          <div className="grid items-center gap-10 md:grid-cols-2">
            
            {/* Left Image */}
            <div className="relative mx-auto w-full max-w-md">
              <Image
                src="/images/technician.webp"
                alt="Professional Technician"
                width={500}
                height={500}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="text-center md:text-left">

              {/* Badge */}
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                For Professionals
              </span>

              {/* Heading */}
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                Join Our{" "}
                <span className="text-primary">Technician Network</span>
              </h2>

              <p className="mt-4 text-muted max-w-lg md:max-w-none">
                Are you a skilled technician? Join our growing network of 
                verified professionals, get steady work orders, and grow your 
                income — on your own schedule.
              </p>

              {/* Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                
                <div className="flex items-center gap-2">
                  <FaClock className="text-primary" size={14} />
                  <span>Flexible Hours</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary" size={14} />
                  <span>Verified Badge</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-primary" size={14} />
                  <span>Daily Payments</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" size={14} />
                  <span>Local Jobs</span>
                </div>

              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-start justify-center">
                <ButtonLink
                  href={CALL_LINK}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <FaPhoneAlt size={16} />
                  Call to Join
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
                  WhatsApp Us
                </ButtonLink>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}