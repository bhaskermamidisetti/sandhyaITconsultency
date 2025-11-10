import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/SandyaIT_Logo.jpeg"
              alt="Sandhya IT Consulting"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t animate-fade-in">
            <a
              href="#home"
              className="block text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-slate-900 font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
