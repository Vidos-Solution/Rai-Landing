"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background1.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        {/* Very dark overlay shadow on top of image */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-overlay/95 via-dark-overlay/90 to-dark-overlay/95"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden p-1.5">
                <img
                  src="/images/iconwhite.png"
                  alt="Vidos RAI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-semibold text-xl">
                Vidos Responsible AI
              </span>
            </div>
            <p className="text-light-gray200 mb-4 max-w-md">
              Practical Responsible AI for professional environments. Helping
              professionals and organisations use AI responsibly, confidently,
              and in line with professional expectations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://course.responsibleai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-gray200 hover:text-primary transition-colors"
                >
                  For Professionals
                </a>
              </li>
              <li>
                <a
                  href="https://vidos.responsibleai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-gray200 hover:text-accent transition-colors"
                >
                  For Businesses
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-light-gray200 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-light-gray200 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-light-gray200 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@responsibleai.com"
                  className="text-light-gray200 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-gray600 text-sm">
            © {new Date().getFullYear()} Vidos Responsible AI. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-light-gray600 text-sm">
              Built with the RAIGF framework
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

