import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter, MapPin, Star, Heart, Grid, List } from "lucide-react";
import { useState } from "react";

const BrowseItems = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "electronics", name: "Electronics" },
    { id: "books", name: "Books" },
    { id: "clothing", name: "Clothing" },
    { id: "sports", name: "Sports & Outdoors" },
    { id: "home", name: "Home & Garden" },
    { id: "toys", name: "Toys & Games" }
  ];

  const items = [
    {
      id: 1,
      title: "iPhone 13 Pro Max",
      description: "Excellent condition, 256GB storage, includes original box and charger",
      value: "₦350,000",
      location: "Lagos, Nigeria",
      rating: 4.9,
      image: "/placeholder.svg",
      category: "electronics",
      owner: "John Doe",
      timePosted: "2 hours ago"
    },
    {
      id: 2,
      title: "MacBook Air M2",
      description: "Like new condition, 8GB RAM, 512GB SSD, perfect for students or professionals",
      value: "₦650,000",
      location: "Abuja, Nigeria",
      rating: 4.8,
      image: "/placeholder.svg",
      category: "electronics",
      owner: "Sarah Johnson",
      timePosted: "1 day ago"
    },
    {
      id: 3,
      title: "Designer Leather Jacket",
      description: "Genuine leather, size M, worn only a few times, from premium brand",
      value: "₦45,000",
      location: "Port Harcourt, Nigeria",
      rating: 4.7,
      image: "/placeholder.svg",
      category: "clothing",
      owner: "Mike Wilson",
      timePosted: "3 hours ago"
    },
    {
      id: 4,
      title: "PlayStation 5",
      description: "Mint condition, includes 2 controllers and 3 games, barely used",
      value: "₦280,000",
      location: "Kano, Nigeria",
      rating: 5.0,
      image: "/placeholder.svg",
      category: "electronics",
      owner: "David Chen",
      timePosted: "5 hours ago"
    },
    {
      id: 5,
      title: "Professional Camera",
      description: "Canon EOS R5, excellent for photography enthusiasts, includes lens kit",
      value: "₦520,000",
      location: "Ibadan, Nigeria",
      rating: 4.9,
      image: "/placeholder.svg",
      category: "electronics",
      owner: "Lisa Park",
      timePosted: "1 day ago"
    },
    {
      id: 6,
      title: "Vintage Watch Collection",
      description: "Set of 3 vintage watches, perfect for collectors, authentic pieces",
      value: "₦120,000",
      location: "Lagos, Nigeria",
      rating: 4.6,
      image: "/placeholder.svg",
      category: "accessories",
      owner: "Robert Brown",
      timePosted: "2 days ago"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse <span className="text-primary">Items</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover amazing items available for swap in your area
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for items, brands, or keywords..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>
            
            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-6 py-3 border border-border rounded-xl hover:bg-muted/50 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 p-1 bg-muted/50 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-background shadow-sm" : "hover:bg-background/50"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-background shadow-sm" : "hover:bg-background/50"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} items
            </p>
            <select className="px-4 py-2 border border-border rounded-lg bg-background">
              <option>Sort by: Most Recent</option>
              <option>Sort by: Price: Low to High</option>
              <option>Sort by: Price: High to Low</option>
              <option>Sort by: Distance</option>
              <option>Sort by: Rating</option>
            </select>
          </div>
          
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredItems.map((item) => (
              <div key={item.id} className={`bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow ${
                viewMode === "list" ? "flex flex-row" : ""
              }`}>
                <div className={`${viewMode === "list" ? "w-48 h-48" : "aspect-video"} bg-muted/50 relative`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <span className="text-lg font-bold text-primary">{item.value}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      by {item.owner} • {item.timePosted}
                    </div>
                    <button className="btn-accent">
                      Make Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Items
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BrowseItems;