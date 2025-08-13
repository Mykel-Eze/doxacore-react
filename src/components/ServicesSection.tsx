import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Globe, Smartphone, MessageSquare, Cloud, Cog } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We create tailored software solutions designed to meet your unique business needs — from concept to deployment.",
      image: "https://images.unsplash.com/photo-1631624210938-539575f92e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc1NDk2OTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, user-friendly, and SEO-optimized websites that attract and convert customers.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Engaging, high-performance mobile apps for Android and iOS.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: MessageSquare,
      title: "IT Consulting",
      description: "Expert advice to guide your technology decisions and align them with your business strategy.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud services that improve efficiency and reduce costs.",
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzU0ODg2NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Cog,
      title: "Business Process Automation",
      description: "Automating repetitive tasks so you can focus on what matters most.",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{color: '#1A1B3A', fontSize: '32px', fontWeight: 'bold'}}>Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help your business succeed in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-default hover:scale-105 bg-card/80 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}