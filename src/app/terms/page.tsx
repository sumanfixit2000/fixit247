export const metadata = {
  title: "Terms & Conditions | Fixit24/7",
  description:
    "Read the Terms & Conditions for using Fixit24/7 home and appliance services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="mb-6 text-gray-700">
          By booking or using services from <strong>Fixit24/7</strong>, you
          agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Service Agreement
        </h2>
        <p className="text-gray-700">
          All services are subject to inspection, availability, and technical
          feasibility. Final pricing may vary based on actual work required.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. Pricing & Payments
        </h2>
        <p className="text-gray-700">
          Service charges will be communicated before work begins. Payment
          must be completed immediately after service completion unless
          otherwise agreed.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Cancellation Policy
        </h2>
        <p className="text-gray-700">
          Customers may cancel or reschedule appointments in advance. Same-day
          cancellations may attract a minimal visit charge.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Warranty Policy
        </h2>
        <p className="text-gray-700">
          Service warranty, if applicable, covers only the specific repair
          performed. Warranty does not apply to physical damage, misuse, or
          unrelated faults.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-700">
          Fixit24/7 is not responsible for pre-existing damage, manufacturer
          defects, or misuse of appliances. Liability is limited to the value
          of the service provided.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          6. Service Area
        </h2>
        <p className="text-gray-700">
          Services are provided only within our listed operational areas.
          Availability may vary based on location.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Changes to Terms
        </h2>
        <p className="text-gray-700">
          We reserve the right to update these Terms & Conditions at any time
          without prior notice.
        </p>

        {/* <p className="mt-10 text-sm text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </p> */}
      </div>
    </div>
  );
}