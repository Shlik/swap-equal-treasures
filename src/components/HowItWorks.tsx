import { Upload, Search, Handshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "List Your Item",
      description: "Upload photos and details of items you want to swap. Our AI automatically estimates the fair market value.",
      color: "text-primary"
    },
    {
      number: 2,
      icon: Search,
      title: "Find Matches",
      description: "Browse items of similar value or let our smart algorithm suggest perfect matches based on your interests.",
      color: "text-secondary"
    },
    {
      number: 3,
      icon: Handshake,
      title: "Make the Swap",
      description: "Connect with other users, negotiate details, and complete your swap safely with our built-in messaging and rating system.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-primary">SwapSpace</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these three easy steps to start swapping items with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="text-center relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 transform translate-x-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-secondary/50 z-0"></div>
                )}
                
                {/* Step Content */}
                <div className="relative z-10">
                  {/* Step Number & Icon */}
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-background to-muted/50 border-4 border-primary/20 mb-8 relative">
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    <IconComponent className={`w-12 h-12 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <button className="btn-hero">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;