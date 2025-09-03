import { Search, Plus, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-primary">SwapSpace</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-foreground hover:text-primary transition-colors font-medium">
              Browse Items
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors font-medium">
              Community
            </Link>
          </nav>
          
          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search for items to swap..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/90 transition-colors font-medium">
              <Plus className="w-5 h-5" />
              <span>List Item</span>
            </button>
            
            <button className="flex items-center space-x-2 btn-accent">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search items..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <Link to="/browse" className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                  Browse Items
                </Link>
                <Link to="/about" className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                  About
                </Link>
                <Link to="/how-it-works" className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                  How It Works
                </Link>
                <Link to="/community" className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
                  Community
                </Link>
              </nav>
              
              <button className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium">
                <Plus className="w-5 h-5" />
                <span>List Item</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;