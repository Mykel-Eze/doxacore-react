import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: "Doxacore Technologies transformed our business with their innovative software solution. Their team's expertise and dedication to our success exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateNow",
      company: "InnovateNow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: "The mobile app they developed for us has increased our customer engagement by 300%. Professional, reliable, and truly understands modern technology trends.",
      rating: 5
    },
    {
      name: "Amara Okafor",
      position: "Founder, EduTech Africa",
      company: "EduTech Africa",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      content: "Working with Doxacore was a game-changer. Their business process automation solution saved us 40% of our operational time and significantly reduced costs.",
      rating: 5
    }
  ];

  const clients = [
    { name: "TechStart Solutions", logo: "TS" },
    { name: "InnovateNow", logo: "IN" },
    { name: "EduTech Africa", logo: "EA" },
    { name: "Digital Dynamics", logo: "DD" },
    { name: "CloudFirst", logo: "CF" },
    { name: "SmartBiz", logo: "SB" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6" style={{color: '#1A1B3A', fontSize: '32px', fontWeight: 'bold'}}>What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group cursor-default hover:scale-105 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <div className="flex ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                    <p className="text-accent text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl mb-8 text-primary">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center group cursor-default">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-lg">{client.logo}</span>
                </div>
                <p className="text-muted-foreground text-sm text-center">{client.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary to-accent text-primary-foreground inline-block hover:shadow-2xl transition-shadow cursor-default">
            <CardContent className="p-0">
              <h3 className="text-2xl mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-primary-foreground/90 mb-6">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Start Your Project Today
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}