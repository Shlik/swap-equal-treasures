import { ArrowRight, Users, Recycle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-swap.jpg";

const Hero = () => {
  const { toast } = useToast();

  const handleStartSwapping = () => {
    toast({
      title: "Welcome to SwapSpace!",
      description: "Ready to find amazing items to swap? Let's get started!",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People swapping items in a marketplace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
            </div>
            <span className="text-white/90 font-medium">Trusted by 50k+ swappers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Swap Items,
            <span className="block text-accent">Share Value</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Trade your unused items for things you actually need. Our smart matching ensures fair swaps based on real market value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Link to="/browse" className="btn-hero group" onClick={handleStartSwapping}>
              Start Swapping
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/how-it-works" className="btn-accent">
              How It Works
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">50k+</div>
              <div className="text-white/70">Active Members</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Recycle className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="text-white/70">Items Swapped</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-white/70">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;