import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{color: '#1A1B3A', fontSize: '32px', fontWeight: 'bold'}}>Let's Build Something Amazing</h2>
            <p className="text-muted-foreground text-lg">
              Ready to transform your business with technology? Get in touch with us today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@doxacoretechnologies.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@doxacoretechnologies.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+234 817 512 5414</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="mr-4">
              <Mail className="mr-2 h-4 w-4" />
              Send us an Email
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}