import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="px-6 py-10 bg-[#fcd904] text-gray-800">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#fcd904] mb-6">Terms and Conditions for ParkEase</h1>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Effective Date:</strong> 16th November 2024
        </p>

        <p className="mb-6 text-[whitesmoke]/90">
          Welcome to <strong>ParkEase</strong>. These Terms and Conditions ("Terms") govern your use of our Parking Slot
          Detection and Management platform ("Service"). By accessing or using the Service, you agree to be bound by these Terms.
          If you do not agree, you must discontinue use of the Service immediately.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">1. Definitions</h2>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>
            <strong>"Service"</strong> refers to the ParkEase application, website, and any related services provided.
          </li>
          <li>
            <strong>"User"</strong> refers to anyone who accesses or uses the Service.
          </li>
          <li>
            <strong>"We," "Us," or "Our"</strong> refers to ParkEase and its affiliates.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">2. User Responsibilities</h2>
        <p className="mb-4 text-[whitesmoke]">By using the Service, you agree to:</p>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>Provide accurate and up-to-date information when registering or making reservations.</li>
          <li>Use the Service solely for lawful purposes.</li>
          <li>Not engage in activities that disrupt or harm the Service, such as hacking or transmitting malware.</li>
          <li>Comply with local laws and regulations regarding parking.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">3. Service Usage</h2>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>
            <strong>Account Creation:</strong> Users must create an account to access certain features of the Service.
            You are responsible for safeguarding your login credentials.
          </li>
          <li>
            <strong>Parking Reservations:</strong> Parking slots are assigned based on availability. Reservation changes
            or cancellations must comply with our cancellation policy.
          </li>
          <li>
            <strong>Payments:</strong> All payments made through the Service must be valid and authorized. We are not
            responsible for failed transactions due to user error or insufficient funds.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">4. Prohibited Activities</h2>
        <p className="mb-4 text-[whitesmoke]">Users must not:</p>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>Use the Service for unauthorized commercial purposes.</li>
          <li>Reverse-engineer, decompile, or otherwise attempt to extract the source code of the Service.</li>
          <li>Post, share, or transmit offensive, defamatory, or illegal content via the Service.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">5. Intellectual Property</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          All content, logos, trademarks, and software associated with the Service are owned by ParkEase or its licensors.
          Unauthorized use, reproduction, or distribution is prohibited.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">6. Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>
            We strive to provide accurate and reliable information, but we do not guarantee the availability of parking
            slots at all times.
          </li>
          <li>
            ParkEase is not liable for any damages, theft, or accidents that occur at third-party parking locations.
          </li>
          <li>Our liability is limited to the maximum extent permitted by law.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">7. Termination</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          We reserve the right to suspend or terminate access to the Service for violations of these Terms or other reasons
          deemed necessary. Termination may occur without prior notice.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">8. Dispute Resolution</h2>
        <ul className="list-disc pl-6 mb-6 text-[whitesmoke]/90">
          <li>Any disputes arising from these Terms will be governed by the laws of [Insert Jurisdiction].</li>
          <li>Disputes must be resolved through arbitration or mediation before seeking legal remedies in court.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">9. Changes to the Terms</h2>
        <p className="mb-6 text-[whitesmoke]/90">
          We may update these Terms periodically. The latest version will be posted on this page, and the "Effective Date"
          will reflect the most recent changes. Continued use of the Service constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold text-[#fcd904] mb-4">10. Contact Us</h2>
        <p className="text-[whitesmoke]/90">
          If you have questions about these Terms, please contact us at:
        </p>
        <p className="mt-4 text-[whitesmoke]/90">
          <strong>ParkEase Support</strong> <br />
          Email: <a href="mailto:sslayer441@gmail.com" className="text-[#fcd904] underline">sslayer441@gmail.com</a> <br />
          Phone: +91 9613711667
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
