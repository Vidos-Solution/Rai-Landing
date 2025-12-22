import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Vidos Responsible AI",
  description: "Terms of Service for Vidos Responsible AI platform",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen terms-page mt-16" style={{ background: 'linear-gradient(to bottom, #05070b 0%, #0b1620 50%, #1a2835 100%)' }}>
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
              Terms of Service
            </h1>
            <p className="text-light-gray200 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="glass rounded-2xl p-8 md:p-10 border border-white/10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                By accessing or using the services provided by Vidos Responsible AI ("we," "our," or "us"), including our website, learning platform (course.responsibleai.com), and governance framework platform (vidos.responsibleai.com), you agree to be bound by these Terms of Service ("Terms").
              </p>
              <p className="text-light-gray200 leading-relaxed">
                If you do not agree to these Terms, you must not access or use our services. These Terms constitute a legally binding agreement between you and Vidos Responsible AI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Vidos Responsible AI provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li><strong>Learning Platform:</strong> Structured educational content, microlearning courses, and certification programs for Responsible AI</li>
                <li><strong>Governance Framework Platform:</strong> Tools, templates, and resources for implementing Responsible AI governance in organizations</li>
                <li><strong>Support Services:</strong> Customer support, training, and consultation services</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Registration</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.1 Account Creation</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                To access certain features, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 Account Eligibility</h3>
              <p className="text-light-gray200 leading-relaxed">
                You must be at least 18 years old and have the legal capacity to enter into contracts. By creating an account, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 Fees</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Certain services require payment of fees:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li><strong>Learning Platform:</strong> Course fees as displayed at the time of purchase</li>
                <li><strong>Governance Framework:</strong> One-time toolkit purchase ($500) and optional annual maintenance ($200/year)</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed">
                All fees are in USD unless otherwise stated. Prices are subject to change, but changes will not affect purchases already completed.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Payment Processing</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Payments are processed through secure third-party payment processors. You agree to provide valid payment information and authorize us to charge your payment method for all fees.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Refunds</h3>
              <p className="text-light-gray200 leading-relaxed">
                Refund policies vary by service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li><strong>Digital Products:</strong> Refunds may be available within 14 days of purchase, subject to our refund policy</li>
                <li><strong>Annual Subscriptions:</strong> Pro-rated refunds may be available for unused portions, subject to terms</li>
                <li>Contact us for specific refund requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.1 Our Content</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                All content on our platforms, including text, graphics, logos, images, software, and course materials, is the property of Vidos Responsible AI or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.2 License to Use</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>Access and use our services for your personal or organizational use</li>
                <li>Download and use purchased materials in accordance with their intended purpose</li>
                <li>Customize framework templates for your organization's use</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.3 Restrictions</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Copy, reproduce, or distribute our content without authorization</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Remove copyright or proprietary notices</li>
                <li>Use our content for commercial purposes beyond your organization</li>
                <li>Share account credentials or allow unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.4 DRM Protection</h3>
              <p className="text-light-gray200 leading-relaxed">
                Certain content is protected by Digital Rights Management (DRM) technology. You agree not to circumvent or attempt to circumvent DRM protections.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. User Conduct and Responsibilities</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Impersonate others or provide false information</li>
                <li>Harass, abuse, or harm other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. User-Generated Content</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                If you submit content to our platforms (such as forum posts, comments, or customizations), you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content in connection with our services.
              </p>
              <p className="text-light-gray200 leading-relaxed">
                You represent that you have the right to grant this license and that your content does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.1 Service Availability</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We strive to provide reliable services but do not guarantee uninterrupted or error-free operation. Our services are provided "as is" and "as available" without warranties of any kind.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.2 Content Accuracy</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                While we make efforts to ensure accuracy, we do not warrant that all content is complete, accurate, or current. Content is provided for informational and educational purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.3 Limitation of Liability</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                To the maximum extent permitted by law, Vidos Responsible AI shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>Indirect, incidental, consequential, or punitive damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or technical failures</li>
                <li>Errors or omissions in content</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed">
                Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.4 Professional Advice</h3>
              <p className="text-light-gray200 leading-relaxed">
                Our content is for educational and informational purposes only and does not constitute legal, financial, or professional advice. You should consult with qualified professionals for advice specific to your situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p className="text-light-gray200 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Vidos Responsible AI, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">10.1 Termination by You</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                You may terminate your account at any time by contacting us or using account deletion features in your account settings.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">10.2 Termination by Us</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We may suspend or terminate your access to our services immediately, without prior notice, if you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>Violate these Terms or our policies</li>
                <li>Engage in fraudulent or illegal activity</li>
                <li>Fail to pay required fees</li>
                <li>Misuse our services or content</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">10.3 Effect of Termination</h3>
              <p className="text-light-gray200 leading-relaxed">
                Upon termination, your right to access and use our services will cease immediately. Provisions that by their nature should survive termination (including intellectual property rights, disclaimers, and limitations of liability) will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">11.1 Governing Law</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">11.2 Dispute Resolution</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Any disputes arising from these Terms or our services shall be resolved through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Good faith negotiation between the parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Binding arbitration or litigation as applicable under local law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to Terms</h2>
              <p className="text-light-gray200 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be notified by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Severability</h2>
              <p className="text-light-gray200 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Entire Agreement</h2>
              <p className="text-light-gray200 leading-relaxed">
                These Terms, together with our Privacy Policy and any additional agreements you enter into with us, constitute the entire agreement between you and Vidos Responsible AI regarding your use of our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-dark-medium/50 rounded-lg p-6 border border-white/10">
                <p className="text-light-gray200 mb-2">
                  <strong className="text-white">Vidos Responsible AI</strong>
                </p>
                <p className="text-light-gray200 mb-2">
                  Email: legal@responsibleai.com
                </p>
                <p className="text-light-gray200">
                  For legal inquiries, please include "Terms of Service" in your subject line.
                </p>
              </div>
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
              href="/privacy"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 ml-4"
            >
              View Privacy Policy →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

