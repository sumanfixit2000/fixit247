export const metadata = {
  title: "Privacy Policy | Fixit24/7",
  description:
    "Read the Privacy Policy of Fixit24/7 to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-6 text-gray-700">
          At <strong>Fixit24/7</strong>, we value your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you use our website
          or book our services.
        </p>

        {/* Information Collection */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect the following information:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Name and contact details (phone number, WhatsApp number)</li>
          <li>Service address and booking details</li>
          <li>Communication records (calls, messages, emails)</li>
          <li>Basic website usage data (via analytics tools)</li>
        </ul>

        {/* Use of Information */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>To schedule and provide home services</li>
          <li>To communicate regarding bookings and support</li>
          <li>To improve service quality and customer experience</li>
          <li>To send service-related updates</li>
        </ul>

        {/* Data Protection */}
        <h2 className="text-xl font-semibold mt-8 mb-3">3. Data Protection</h2>
        <p className="text-gray-700">
          We implement reasonable security measures to protect your personal
          data. Your information is not sold or shared with unauthorized third
          parties.
        </p>

        {/* Third Party Services */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Third-Party Services
        </h2>
        <p className="text-gray-700">
          We may use trusted third-party services such as analytics tools,
          payment processors, or communication platforms (like WhatsApp) to
          operate our business efficiently.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies</h2>
        <p className="text-gray-700">
          Our website may use cookies to enhance user experience and analyze
          website traffic.
        </p>

        {/* Your Rights */}
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights</h2>
        <p className="text-gray-700">
          You may request access, correction, or deletion of your personal
          information by contacting us directly.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-8 mb-3">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact
          Fixit24/7 via phone or WhatsApp.
        </p>

        {/* <p className="mt-10 text-sm text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </p> */}
      </div>
    </div>
  );
}
