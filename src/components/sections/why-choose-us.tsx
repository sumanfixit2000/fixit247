import Container from "@/components/ui/container";
import { whyUsItems } from "@/data/why-us";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="section-muted py-16">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Left Image */}
          <div className="relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[360px] md:h-[420px]">
            <Image
              src="/images/why-us.webp"
              alt="Professional home service technicians at work"
              fill
              sizes=""
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Why Choose <span className="text-primary">Us</span>
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
            </div>

            <p className="mt-3 text-muted">
              We provide reliable, professional and hassle-free home services
              with a focus on quality, safety and customer satisfaction.
            </p>

            <div className="mt-8 space-y-6">
              {whyUsItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-light">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
