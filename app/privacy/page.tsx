import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Vidos Responsible AI",
  description: "Privacy Policy for Vidos Responsible AI platform",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen privacy-page mt-16" style={{ background: 'linear-gradient(to bottom, #05070b 0%, #0b1620 50%, #1a2835 100%)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-light-gray200 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="glass rounded-2xl p-8 md:p-10 border border-white/10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Vidos Responsible AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including our learning platform (course.responsibleai.com) and governance framework platform (vidos.responsibleai.com).
              </p>
              <p className="text-light-gray200 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Information You Provide</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>Name, email address, and contact information</li>
                <li>Account registration information</li>
                <li>Payment and billing information</li>
                <li>Professional information and credentials</li>
                <li>Content you submit, including course progress and assessments</li>
                <li>Communications with us, including support requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                When you access our services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and analytics data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and manage your account</li>
                <li>To deliver course content and track your learning progress</li>
                <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To conduct analytics and research to improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 Service Providers</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We may share information with third-party service providers who perform services on our behalf, such as payment processing, hosting, analytics, and customer support. These providers are contractually obligated to protect your information.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Legal Requirements</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We may disclose information if required by law, court order, or governmental authority, or to protect our rights, property, or safety, or that of our users or others.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Business Transfers</h3>
              <p className="text-light-gray200 leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure payment processing</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage, and assist with marketing efforts. You can control cookies through your browser settings, though this may affect functionality.
              </p>
              <p className="text-light-gray200 leading-relaxed">
                Types of cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-light-gray200 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-light-gray200 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Data Retention</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-light-gray200 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-dark-medium/50 rounded-lg p-6 border border-white/10">
                <p className="text-light-gray200 mb-2">
                  <strong className="text-white">Vidos Responsible AI</strong>
                </p>
                <p className="text-light-gray200 mb-2">
                  Email: privacy@responsibleai.com
                </p>
                <p className="text-light-gray200">
                  For data protection inquiries, please include "Privacy Policy" in your subject line.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Regional Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">13.1 European Economic Area (EEA)</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                If you are located in the EEA, you have rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with your local data protection authority.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">13.2 California Privacy Rights</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information (we do not sell personal information).
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">13.3 United Kingdom</h3>
              <p className="text-light-gray200 leading-relaxed">
                If you are located in the UK, you have rights under the UK GDPR and Data Protection Act 2018, similar to those under the EU GDPR.
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
            >
              ← Back to Home
            </a>
            <a
              href="/terms"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 ml-4"
            >
              View Terms of Service →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

