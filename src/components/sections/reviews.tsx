import Container from "@/components/ui/container";
import { FiStar } from "react-icons/fi";

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      service: "AC Repair",
      rating: 5,
      comment:
        "Quick response and very professional technician. My AC is working perfectly now.",
    },
    {
      name: "Priya Das",
      service: "Plumbing",
      rating: 5,
      comment:
        "Excellent service and reasonable pricing. The issue was fixed the same day.",
    },
    {
      name: "Amit Verma",
      service: "TV Repair",
      rating: 4,
      comment:
        "Technician was knowledgeable and explained the problem clearly. Good experience overall.",
    },
  ];

  return (
    <section className="section-muted section">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
         <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
        </div>
          <p className="mt-3 text-muted">
            Trusted by hundreds of homeowners for reliable and professional
            service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="card p-6">
              {/* Stars */}
              <div className="mb-3 flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FiStar
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm text-foreground">“{review.comment}”</p>

              {/* User */}
              <div className="mt-4">
                <p className="font-medium">{review.name}</p>
                <p className="text-xs text-muted">{review.service}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
