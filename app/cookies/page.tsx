import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Vidos Responsible AI",
  description: "Cookie Policy for Vidos Responsible AI platform",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen cookies-page mt-16" style={{ background: 'linear-gradient(to bottom, #05070b 0%, #0b1620 50%, #1a2835 100%)' }}>
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
              Cookie Policy
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
                This Cookie Policy explains how Vidos Responsible AI ("we," "our," or "us") uses cookies and similar tracking technologies on our website and platforms. This policy should be read alongside our Privacy Policy.
              </p>
              <p className="text-light-gray200 leading-relaxed">
                By using our services, you consent to the use of cookies in accordance with this policy. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. What Are Cookies?</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-light-gray200 leading-relaxed">
                Cookies allow a website to recognize your device and store some information about your preferences or past actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.1 Essential Cookies</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>Session management and authentication</li>
                <li>Security and fraud prevention</li>
                <li>Load balancing and performance</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed">
                These cookies cannot be disabled as they are essential for the website to operate.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 Analytics Cookies</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages</li>
                <li>Error messages and performance issues</li>
                <li>Traffic sources and referrals</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed">
                We use analytics cookies to improve our website's functionality and user experience.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.3 Preference Cookies</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                These cookies remember your choices and preferences to provide a more personalized experience.
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Language preferences</li>
                <li>Theme preferences (light/dark mode)</li>
                <li>Region settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.4 Marketing Cookies</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Ad targeting and personalization</li>
                <li>Campaign performance measurement</li>
                <li>Cross-site tracking (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                We may use third-party services that set cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li><strong>Analytics Providers:</strong> Google Analytics, etc.</li>
                <li><strong>Payment Processors:</strong> Cookies for secure payment processing</li>
                <li><strong>Content Delivery Networks:</strong> For improved website performance</li>
                <li><strong>Social Media Platforms:</strong> For social sharing features (if applicable)</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie practices. We encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookie Duration</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.1 Session Cookies</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while navigating the website.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.2 Persistent Cookies</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                These cookies remain on your device for a set period or until you delete them. They remember your preferences and actions across multiple visits.
              </p>
              <p className="text-light-gray200 leading-relaxed">
                Our persistent cookies typically expire after:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4">
                <li>Preference cookies: Up to 1 year</li>
                <li>Analytics cookies: Up to 2 years</li>
                <li>Marketing cookies: Up to 90 days (or as specified by third parties)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                You have control over cookies. You can manage them through:
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.1 Browser Settings</h3>
              <p className="text-light-gray200 leading-relaxed mb-4">
                Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-light-gray200 ml-4 mb-4">
                <li>View and delete cookies</li>
                <li>Block all cookies or third-party cookies</li>
                <li>Set preferences for specific websites</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
              <p className="text-light-gray200 leading-relaxed">
                Please note that blocking cookies may affect website functionality and your user experience.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.2 Cookie Consent Banner</h3>
              <p className="text-light-gray200 leading-relaxed">
                When you first visit our website, you may see a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customize your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Specific Cookie Information</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/10 rounded-lg">
                  <thead>
                    <tr className="bg-dark-medium/50">
                      <th className="border border-white/10 px-4 py-3 text-left text-white font-semibold">Cookie Name</th>
                      <th className="border border-white/10 px-4 py-3 text-left text-white font-semibold">Purpose</th>
                      <th className="border border-white/10 px-4 py-3 text-left text-white font-semibold">Duration</th>
                      <th className="border border-white/10 px-4 py-3 text-left text-white font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-light-gray200">
                    <tr>
                      <td className="border border-white/10 px-4 py-3">theme</td>
                      <td className="border border-white/10 px-4 py-3">Stores your theme preference (light/dark)</td>
                      <td className="border border-white/10 px-4 py-3">1 year</td>
                      <td className="border border-white/10 px-4 py-3">Essential</td>
                    </tr>
                    <tr className="bg-dark-medium/30">
                      <td className="border border-white/10 px-4 py-3">session_id</td>
                      <td className="border border-white/10 px-4 py-3">Maintains your session</td>
                      <td className="border border-white/10 px-4 py-3">Session</td>
                      <td className="border border-white/10 px-4 py-3">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-white/10 px-4 py-3">_ga</td>
                      <td className="border border-white/10 px-4 py-3">Google Analytics - distinguishes users</td>
                      <td className="border border-white/10 px-4 py-3">2 years</td>
                      <td className="border border-white/10 px-4 py-3">Analytics</td>
                    </tr>
                    <tr className="bg-dark-medium/30">
                      <td className="border border-white/10 px-4 py-3">_gid</td>
                      <td className="border border-white/10 px-4 py-3">Google Analytics - distinguishes users</td>
                      <td className="border border-white/10 px-4 py-3">24 hours</td>
                      <td className="border border-white/10 px-4 py-3">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Do Not Track Signals</h2>
              <p className="text-light-gray200 leading-relaxed">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not currently respond to DNT browser signals or mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Updates to This Cookie Policy</h2>
              <p className="text-light-gray200 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="text-light-gray200 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-dark-medium/50 rounded-lg p-6 border border-white/10">
                <p className="text-light-gray200 mb-2">
                  <strong className="text-white">Vidos Responsible AI</strong>
                </p>
                <p className="text-light-gray200 mb-2">
                  Email: privacy@responsibleai.com
                </p>
                <p className="text-light-gray200">
                  For cookie-related inquiries, please include "Cookie Policy" in your subject line.
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

