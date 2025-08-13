import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Award, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We think beyond limits."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver quality without compromise."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We build trust with transparency."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority."
    }
  ];

  return (
    <section id="about" className="py-16 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6" style={{color: '#1A1B3A', fontSize: '32px', fontWeight: 'bold'}}>About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              At Doxacore Technologies, we believe that technology is more than tools and code — it's the foundation for innovation, growth, and problem-solving. Founded with a passion for creating impactful digital solutions, we help businesses leverage technology to achieve their goals.
            </p>
          </div>

          {/* About Content with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow cursor-default">
                <CardHeader>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower businesses with smart, scalable, and efficient technology solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow cursor-default">
                <CardHeader>
                  <CardTitle className="text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be Africa's leading technology solutions provider, known for innovation, quality, and customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726138400966-63461367804d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTQ5Njk2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital transformation and innovation"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl mb-8">Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 group cursor-default hover:scale-105">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}