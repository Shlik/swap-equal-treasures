import { Clock, MapPin, ArrowLeftRight } from "lucide-react";

const FeaturedSwaps = () => {
  const swaps = [
    {
      id: 1,
      itemA: {
        name: "iPhone 13 Pro",
        image: "https://images.unsplash.com/photo-1632633173522-65c5d6c4892f?w=400&h=400&fit=crop",
        owner: "Sarah M.",
        location: "Downtown"
      },
      itemB: {
        name: "MacBook Air M1",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
        owner: "Mike R.",
        location: "Midtown"
      },
      value: "₦899,000",
      status: "Active",
      timeLeft: "2d 14h"
    },
    {
      id: 2,
      itemA: {
        name: "Sony WH-1000XM4",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
        owner: "Alex K.",
        location: "Uptown"
      },
      itemB: {
        name: "iPad Pro 11\"",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        owner: "Emma L.",
        location: "Downtown"
      },
      value: "₦349,000",
      status: "Pending",
      timeLeft: "5d 8h"
    },
    {
      id: 3,
      itemA: {
        name: "Designer Watch",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
        owner: "Chris P.",
        location: "Central"
      },
      itemB: {
        name: "Vintage Camera",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
        owner: "Luna S.",
        location: "Arts District"
      },
      value: "₦275,000",
      status: "Negotiating",
      timeLeft: "1d 3h"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Swaps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out these exciting swaps happening right now in your area
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {swaps.map((swap) => (
            <div key={swap.id} className="card-swap group cursor-pointer">
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  swap.status === 'Active' ? 'bg-secondary/20 text-secondary' :
                  swap.status === 'Pending' ? 'bg-accent/20 text-accent' :
                  'bg-primary/20 text-primary'
                }`}>
                  {swap.status}
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {swap.timeLeft}
                </div>
              </div>
              
              {/* Swap Items */}
              <div className="flex items-center gap-4 mb-6">
                {/* Item A */}
                <div className="flex-1">
                  <img 
                    src={swap.itemA.image} 
                    alt={swap.itemA.name}
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-semibold text-sm">{swap.itemA.name}</h3>
                  <p className="text-xs text-muted-foreground">{swap.itemA.owner}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    {swap.itemA.location}
                  </div>
                </div>
                
                {/* Swap Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ArrowLeftRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                {/* Item B */}
                <div className="flex-1">
                  <img 
                    src={swap.itemB.image} 
                    alt={swap.itemB.name}
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-semibold text-sm">{swap.itemB.name}</h3>
                  <p className="text-xs text-muted-foreground">{swap.itemB.owner}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    {swap.itemB.location}
                  </div>
                </div>
              </div>
              
              {/* Value & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <span className="text-lg font-bold text-primary">{swap.value}</span>
                  <span className="text-sm text-muted-foreground ml-1">each</span>
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-accent">
            View All Swaps
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSwaps;