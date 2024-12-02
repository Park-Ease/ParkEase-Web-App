import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 py-10 bg-[#fcd904] text-gray-800">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#fcd904] mb-6">Privacy Policy for ParkEase</h1>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Effective Date:</strong> 16th November 2024
        </p>

        <p className="mb-6 text-[whitesmoke]/90">
          At <strong>ParkEase</strong>, we prioritize your privacy and are committed to protecting the personal information you
          share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our
          Parking Slot Detection and Management platform ("Service"). By using our Service, you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">1. Information We Collect</h2>
        <h3 className="text-lg text-[#fcd904] mb-2">a. Personal Information</h3>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment information (e.g., credit card details)</li>
          <li>Vehicle information (e.g., license plate number)</li>
        </ul>

        <h3 className="text-lg text-[#fcd904] mb-2">b. Non-Personal Information</h3>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information (e.g., operating system)</li>
          <li>Geolocation data (with your consent)</li>
          <li>Usage data (e.g., time spent on the app, pages viewed)</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>Provide, operate, and maintain the Service</li>
          <li>Process payments and manage billing</li>
          <li>Improve user experience by analyzing app usage</li>
          <li>Communicate with you regarding updates, promotions, and technical support</li>
          <li>Detect and prevent fraud, unauthorized access, or illegal activities</li>
          <li>Fulfill legal or regulatory requirements</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">3. Sharing Your Information</h2>
        <p className="mb-4 text-[whitesmoke]">
          We do not sell your personal information. However, we may share your data with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>
            <strong>Service providers:</strong> Third-party vendors for payment processing, analytics, and customer support
          </li>
          <li>
            <strong>Law enforcement:</strong> If required by law or in response to legal requests
          </li>
          <li>
            <strong>Business transfers:</strong> In case of a merger, acquisition, or asset sale, your data may be transferred
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">4. Your Data Choices</h2>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>
            <strong>Access:</strong> Request access to the data we hold about you
          </li>
          <li>
            <strong>Correction:</strong> Update or correct inaccurate information
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal data
          </li>
          <li>
            <strong>Data portability:</strong> Receive your data in a structured, commonly used format
          </li>
          <li>
            <strong>Opt-out:</strong> Unsubscribe from promotional communications
          </li>
        </ul>
        <p className="mb-6 text-[whitesmoke]/90">
          To exercise these rights, contact us at{" "}
          <a href="mailto:support@parkease.com" className="text-[#fcd904] underline">
            support@parkease.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">5. Data Security</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or loss.
          However, no method of transmission over the internet is 100% secure. Use the Service at your own risk.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">6. Cookies and Tracking Technologies</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          We use cookies to enhance your experience. You can manage or disable cookies through your browser settings.
          Disabling cookies may affect some features of the Service.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">7. Third-Party Links</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          Our Service may include links to third-party websites. We are not responsible for the privacy practices or content of
          these sites. Please review their privacy policies.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">8. Children's Privacy</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          Our Service is not intended for children under 13 years old. We do not knowingly collect personal information from
          children. If you believe we have collected such information, please contact us.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">9. Updates to this Policy</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          We may update this Privacy Policy periodically. Changes will be posted on this page with a revised "Effective Date."
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">10. Contact Us</h2>
        <p className="text-[whitesmoke]/90">
          For any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="mt-4 text-[whitesmoke]/90">
          <strong>ParkEase Support</strong> <br />
          Email:{" "}
          <a href="mailto:sslayer441@gmail.com" className="text-[#fcd904] underline">
            sslayer441@gmail.com
          </a>{" "}
          <br />
          Phone: +91 9613711667
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
