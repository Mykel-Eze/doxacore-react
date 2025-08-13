import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import doxacoreLogo from '../assets/images/doxacore.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={doxacoreLogo} 
                alt="Doxacore Technologies" 
                className="h-14 w-auto"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary px-3 py-2 text-sm transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')}>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('contact')} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}