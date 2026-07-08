import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-brand-900 text-slate-300 py-12 border-t border-brand-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="inline-block bg-white rounded-full border-2 border-gold shadow-lg p-2">
                <img 
                  src="/logo.png" 
                  alt="Frimz Cleaning Logo" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <p className="text-slate-400 max-w-md mb-6">
              Professional cleaning services you can trust. We create fresh,
              welcoming spaces where you can feel comfortable, confident, and at
              home.
            </p>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/profile.php?id=61577504291194"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-gold hover:text-brand-900 transition-colors">
                
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd" />
                  
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold transition-colors">
                  
                  Services
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gold transition-colors">
                  
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer">
                  Domestic Cleaning
                </span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer">
                  Deep Cleaning
                </span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer">
                  Commercial Cleaning
                </span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer">
                  End of Tenancy
                </span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors cursor-pointer">
                  Carpet & Upholstery
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Frimz Cleaning. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span className="hover:text-gold cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-gold cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};