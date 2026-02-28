import Container from "@/components/ui/container";
import { 
  FiPhoneCall, 
  FiUserCheck, 
  FiSearch, 
  FiCheckCircle 
} from "react-icons/fi";


export default function Process() {
  const steps = [
    {
      title: "Book Service",
      description: "Call or WhatsApp to request a service at your convenience.",
      icon: FiPhoneCall,
    },
    {
      title: "Technician Assigned",
      description: "A verified professional is scheduled for your location.",
      icon: FiUserCheck,
    },
    {
      title: "Inspection & Quote",
      description: "Issue diagnosis with clear and transparent pricing.",
      icon: FiSearch,
    },
    {
      title: "Service Completed",
      description: "Quality work delivered with service warranty.",
      icon: FiCheckCircle,
    },
  ];

  return (
    <section className="section py-8">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How It <span className="text-primary">Works</span>
          </h2>
          <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
        </div>
          <p className="mt-3 text-center text-muted">
            Simple and hassle-free process to get your home services done.
          </p>

          {/* Timeline */}
          <div className="relative mt-12 md:mt-20">
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Connector line (hide for last step) */}
                    {index !== steps.length - 1 && (
                      <span className="absolute left-[19px] top-10 h-full w-px bg-border" />
                    )}

                    {/* Dot / Icon */}
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-light">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-medium text-lg">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {step.description}
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
