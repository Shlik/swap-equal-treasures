import { Smartphone, Headphones, Shirt, Home, Book, Camera, Gamepad2, Car } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      count: "2.3k items",
      color: "from-primary to-primary-glow"
    },
    {
      name: "Audio",
      icon: Headphones,
      count: "891 items",
      color: "from-secondary to-secondary/80"
    },
    {
      name: "Fashion",
      icon: Shirt,
      count: "1.7k items",
      color: "from-accent to-accent/80"
    },
    {
      name: "Home & Garden",
      icon: Home,
      count: "1.2k items",
      color: "from-primary/80 to-secondary"
    },
    {
      name: "Books",
      icon: Book,
      count: "956 items",
      color: "from-secondary/80 to-accent/60"
    },
    {
      name: "Photography",
      icon: Camera,
      count: "634 items",
      color: "from-accent/80 to-primary/60"
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      count: "1.5k items",
      color: "from-primary/60 to-secondary/80"
    },
    {
      name: "Automotive",
      icon: Car,
      count: "423 items",
      color: "from-secondary to-accent/70"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of items across different categories, all ready to be swapped for fair value
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name}
                className="group cursor-pointer"
              >
                <div className="card-swap h-full text-center">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-accent">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;