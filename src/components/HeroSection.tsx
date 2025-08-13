import { Button } from "./ui/button";
import { ArrowRight, Code, Smartphone, Cog, Cloud } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{lineHeight: '1.2'}}>
              Powering Innovation, Driving Digital Transformation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We design, develop, and deliver cutting-edge technology solutions that help businesses thrive in a fast-changing world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="group bg-primary hover:bg-primary/90 cursor-pointer">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc1NDk2OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern technology team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-default">
            <div className="p-3 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
              <Code className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-primary">Custom Software Development</h3>
            <p className="text-muted-foreground text-center text-sm">
              Tailored solutions for your unique business needs
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-default">
            <div className="p-3 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
              <Smartphone className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-primary">Web & Mobile Applications</h3>
            <p className="text-muted-foreground text-center text-sm">
              Responsive and user-friendly digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-default">
            <div className="p-3 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
              <Cog className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-primary">Business Process Automation</h3>
            <p className="text-muted-foreground text-center text-sm">
              Streamline operations with smart automation
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-default">
            <div className="p-3 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
              <Cloud className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-primary">Cloud & IT Infrastructure</h3>
            <p className="text-muted-foreground text-center text-sm">
              Scalable and secure cloud solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}