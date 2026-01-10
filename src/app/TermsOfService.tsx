import { Link } from "react-router-dom";
import { HymnalContainer } from "./App";
import { Footer } from "./App";

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

function TermsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#271e3e] mb-8">Terms of Service</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Anglican Hymnal app ("the App"), you agree to be bound by these Terms of Service. If you do not agree, do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">2. Use of the App</h2>
          <p>
            You may use the App for personal, non-commercial purposes in accordance with these terms. You agree not to misuse the App or help anyone else to do so.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">3. Intellectual Property</h2>
          <p>
            All content, design, and assets provided in the App are owned by or licensed to Curve Concepts unless otherwise noted. You may not reproduce or redistribute content without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">4. User Content</h2>
          <p>
            If you submit feedback or content through the App, you grant us a non-exclusive, worldwide, royalty-free license to use and improve the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">5. Disclaimers and Limitation of Liability</h2>
          <p>
            The App is provided "as is" without warranties. To the maximum extent permitted by law, Curve Concepts is not liable for any indirect, incidental, or consequential damages arising from your use of the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">6. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of the App after changes constitute acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#271e3e] mb-4">7. Contact</h2>
          <p>
            For questions about these terms, contact us at kobbykolmes@gmail.com.
          </p>
          <p className="mt-4">Last updated: January 10, 2026</p>
        </section>
      </div>
    </div>
  );
}

export default function TermsOfService() {
  return (
    <div className="bg-[#fbf8f3] min-h-screen">
      <Header />
      <TermsContent />
      <Footer />
    </div>
  );
}
