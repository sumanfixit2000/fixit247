export const metadata = {
  title: "Disclaimer | Fixit24/7",
  description:
    "Read the Disclaimer for Fixit24/7 services and website usage.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

        <p className="mb-6 text-gray-700">
          The information provided on this website is for general informational
          purposes only.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Service Disclaimer
        </h2>
        <p className="text-gray-700">
          Fixit24/7 provides repair and home services through trained
          technicians. However, results may vary depending on the condition of
          appliances or property.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. No Manufacturer Affiliation
        </h2>
        <p className="text-gray-700">
          Fixit24/7 is an independent service provider and is not affiliated
          with any appliance or product brand unless explicitly stated.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. External Links
        </h2>
        <p className="text-gray-700">
          Our website may contain links to third-party platforms such as
          WhatsApp or social media. We are not responsible for their content or
          privacy practices.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Limitation of Responsibility
        </h2>
        <p className="text-gray-700">
          Fixit24/7 shall not be held liable for indirect, incidental, or
          consequential damages arising from the use of our services or
          website.
        </p>

        {/* <p className="mt-10 text-sm text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </p> */}
      </div>
    </div>
  );
}