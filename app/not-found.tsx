import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen not-found-page mt-16" style={{ background: 'linear-gradient(to bottom, #05070b 0%, #0b1620 50%, #1a2835 100%)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-none">
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/10 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-lg md:text-xl text-light-gray200 mb-6 leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <p className="text-base text-light-gray600 mb-8">
                Don't worry, let's get you back on track.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/#standards"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105"
                >
                  View Standards
                </Link>
              </div>
            </div>

            {/* Helpful Links */}
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <Link
                href="/privacy"
                className="glass rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="text-primary mb-2 font-semibold group-hover:text-secondary transition-colors">
                  Privacy Policy
                </div>
                <div className="text-sm text-light-gray200">
                  Learn how we protect your data
                </div>
              </Link>
              <Link
                href="/terms"
                className="glass rounded-xl p-4 border border-white/10 hover:border-accent/50 transition-all group"
              >
                <div className="text-accent mb-2 font-semibold group-hover:text-primary transition-colors">
                  Terms of Service
                </div>
                <div className="text-sm text-light-gray200">
                  Read our terms and conditions
                </div>
              </Link>
              <Link
                href="/cookies"
                className="glass rounded-xl p-4 border border-white/10 hover:border-secondary/50 transition-all group"
              >
                <div className="text-secondary mb-2 font-semibold group-hover:text-accent transition-colors">
                  Cookie Policy
                </div>
                <div className="text-sm text-light-gray200">
                  Understand our cookie usage
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

