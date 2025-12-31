import { Link } from "react-router-dom";
import { HymnalContainer } from "./App";

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
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">6. Your Rights</h2>
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
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">7. Children's Privacy</h2>
          <p>
            Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Curve Concepts</strong></p>
            <p>Email: privacy@anglicanhymnal.com</p>
            <p>Last updated: December 31, 2025</p>
          </div>
        </section>
      </div>
    </div>
  );
}

// Reusing footer component
function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start overflow-clip px-[16px] md:px-[100px] py-[32px] rounded-tl-[24px] rounded-tr-[24px] mx-[16px] md:mx-[32px] mt-[32px]" data-name="footer">
      <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-0 items-start md:items-center md:justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center md:justify-start relative shrink-0 w-full md:w-auto">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="bg-[#271e3e] overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Anglican">
              <div className="absolute inset-[26.37%_20.9%_26.38%_20.7%]" data-name="Group">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
                  <g id="Group">
                    <path d="M0 8C0 3.58 3.58 0 8 0C12.42 0 16 3.58 16 8C16 12.42 12.42 16 8 16C3.58 16 0 12.42 0 8Z" fill="#F7EA2F" />
                    <path d="M8 3.5L10 7H6L8 3.5Z" fill="#27B373" />
                    <path d="M8 12.5L6 9H10L8 12.5Z" fill="#27B373" />
                    <path d="M3.5 8L7 6V10L3.5 8Z" fill="#271E3E" />
                    <path d="M12.5 8L9 10V6L12.5 8Z" fill="#271E3E" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="font-playfair-semibold font-semibold leading-[normal] relative shrink-0 text-[#271e3e] text-[14px] text-nowrap tracking-[0.14px]">Anglican Hymnal</p>
          </div>
          <div className="flex flex-col font-onest-regular font-normal h-[17.5px] justify-center leading-[0] relative shrink-0 text-[#525866] text-[12.3px] w-[44.375px]">
            <p className="leading-[17.5px]">© 2025</p>
          </div>
        </div>
        <div className="content-stretch flex font-onest-medium font-medium gap-[28px] items-center justify-center md:justify-start leading-[0] relative shrink-0 text-[#525866] text-[12.3px] text-nowrap w-full md:w-auto">
          <Link to="/privacy-policy" className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[17.5px] text-nowrap">Privacy Policy</p>
          </Link>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="leading-[17.5px] text-nowrap">Terms of Service</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <div className="flex flex-col font-onest-medium font-medium justify-center leading-[0] relative shrink-0 text-[#525866] text-[14px] text-center text-nowrap">
          <p className="leading-[normal]">
            <span>{`Initiative by `}</span>
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Curve Concepts</span>
          </p>
        </div>
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