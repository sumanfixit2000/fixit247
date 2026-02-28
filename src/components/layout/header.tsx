import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Logo from "./logo";
import ButtonLink from "@/components/ui/button-link";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-lg">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"}>
            <Logo />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <ButtonLink
              href={CALL_LINK}
              variant="outline"
              size="sm"
              aria-label="Call us"
            >
              <FaPhoneAlt className="h-4 w-4" />
              <span className="hidden sm:inline">Call</span>
            </ButtonLink>

            <ButtonLink
              href={WHATSAPP_LINK}
              variant="whatsapp"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
