import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              SwapSpace is revolutionizing how people exchange value by creating a trusted 
              marketplace where unused items find new homes. We believe in the power of 
              community-driven sharing, reducing waste while helping people access what 
              they need through fair, value-matched swapping. Our platform connects over 
              50,000 active members who have collectively swapped more than 1 million items, 
              creating a sustainable ecosystem where everyone wins.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;