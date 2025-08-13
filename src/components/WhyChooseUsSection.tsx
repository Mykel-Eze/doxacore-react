import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Settings, Zap, CheckCircle } from "lucide-react";

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "We bring expertise from multiple industries."
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "No one-size-fits-all approach — we build for you."
    },
    {
      icon: Zap,
      title: "Future-Ready Tech",
      description: "We use the latest tools and frameworks."
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successful projects delivered to happy clients."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{color: '#1A1B3A', fontSize: '32px', fontWeight: 'bold'}}>Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to delivering exceptional results that drive your business forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 cursor-default">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}