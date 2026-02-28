import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import JoinTechnicianCTA from "@/components/sections/joinas";
import Process from "@/components/sections/process";
import Reviews from "@/components/sections/reviews";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Reviews />
        <FAQ />
        <JoinTechnicianCTA />
        <CTA />
      </main>
    </>
  );
}
