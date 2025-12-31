import { Link } from "react-router-dom";
import { HymnalContainer } from "./App";
import { Footer } from "./App";

// Reusing header component for consistency
function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] md:px-[40px] py-[24px] rounded-bl-[16px] rounded-br-[16px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] mx-[16px] md:mx-[32px]" data-name="header">
      <HymnalContainer />
      <Link to="/" className="cursor-pointer transition-transform hover:scale-105">
        <div className="bg-black content-stretch flex h-[48px] items-center justify-center overflow-clip px-[16px] relative rounded-[16px] shrink-0">
          <p className="font-public-sans-semibold font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white">Back to Home</p>
        </div>
      </Link>
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#271e3e] mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">1. Introduction</h2>
          <p>
            Welcome to the Anglican Hymnal app ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">2.1 Information You Provide</h3>
          <p className="mb-4">
            We may collect information you provide directly to us, such as:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Account information (if you create an account)</li>
            <li>Feedback and support requests</li>
            <li>Communications with us</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">2.2 Information Collected Automatically</h3>
          <p className="mb-4">
            When you use our app, we may automatically collect certain information, including:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Device information (device type, operating system, unique device identifiers)</li>
            <li>Usage data (app usage patterns, features accessed)</li>
            <li>Log data (IP address, access times, app version)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide and maintain our app</li>
            <li>Improve and personalize your experience</li>
            <li>Respond to your requests and support needs</li>
            <li>Send you updates and communications</li>
            <li>Ensure app security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">4. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside ml-4 mt-4">
            <li>With service providers who assist us in operating our app</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">6. Firebase Analytics</h2>
          <p>
            We use Firebase Analytics to understand how users interact with our app. Firebase Analytics helps us analyze app usage patterns and improve the app's functionality. Firebase Analytics may collect information such as:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>App usage data</li>
            <li>Device information</li>
            <li>Crash reports</li>
          </ul>
          <p className="mt-4">
            For more information on Firebase Analytics, please visit Google's privacy policy: <a href="https://policies.google.com/privacy" className="text-blue-500 underline">https://policies.google.com/privacy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">7. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">8. Children's Privacy</h2>
          <p>
            Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Curve Concepts</strong></p>
            <p>Email: kobbykolmes@gmail.com</p>
            <p>Last updated: December 31, 2025</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#fbf8f3] min-h-screen">
      <Header />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
}