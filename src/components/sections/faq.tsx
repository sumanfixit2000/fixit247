"use client";

import { useState } from "react";
import Container from "@/components/ui/container";
import { FiChevronDown } from "react-icons/fi";

export default function FAQ() {
  const faqs = [
    {
      question: "How quickly can a technician visit?",
      answer:
        "In most cases, we offer same-day or next-day service based on availability.",
    },
    {
      question: "Is there a visiting or inspection charge?",
      answer:
        "A minimal inspection fee may apply, which is adjusted in the final service cost if you proceed.",
    },
    {
      question: "Are your technicians verified?",
      answer:
        "Yes, all our technicians are background-verified and professionally trained.",
    },
    {
      question: "How can I book a service?",
      answer:
        "You can call us directly or book instantly via WhatsApp for quick assistance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="mt-3 mx-auto h-0.5 w-20 bg-primary/70 rounded-full"></div>
          </div>
          <p className="mt-3 text-muted">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-lg border border-border overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-black/5"
                >
                  <span className="font-medium">{faq.question}</span>
                  <FiChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer Wrapper */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 py-4 text-sm text-muted">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
