import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <a
              href="#home"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/sandhyaIT_logo.jpeg"
                alt="Sandhya IT Consulting"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses through innovative software solutions, smart
              warehouse management, and industry-ready IT training.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Software Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Warehouse Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  IT Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p className="text-sm">
                101 Whitechapel High Street
                <br />
                London, E1 7RA
              </p>
              <p className="text-sm">
                <a
                  href="tel:+447448332830"
                  className="hover:text-white transition-colors"
                >
                  +44 7448 332830
                </a>
              </p>
              <p className="text-sm">
                <a
                  href="mailto:info@sandhyaitconsulting.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@sandhyaitconsulting.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-gray-400 text-sm">
              © 2025 Sandhya IT Consulting. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Building smarter systems and stronger teams through technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
