import { Separator } from "./ui/separator";
import doxacoreLogo from '../assets/images/doxacore.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src={doxacoreLogo} 
                alt="Doxacore Technologies" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering businesses with smart, scalable, and efficient technology solutions. 
              Your trusted partner for digital transformation.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Lagos, Nigeria</p>
              <p>doxacore@gmail.com</p>
              <p>+234 817 512 5414</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="text-center text-primary-foreground/80 text-sm">
          <p>&copy; {currentYear} Doxacore Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}