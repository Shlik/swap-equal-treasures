import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/20 to-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-primary">SwapSpace</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The most trusted platform for swapping items of equal value. Join our community of conscious consumers making sustainable choices.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Browse Items', 'How It Works', 'Success Stories', 'Safety Guidelines', 'Mobile App'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              {['Electronics', 'Fashion', 'Home & Garden', 'Books & Media', 'Sports & Outdoors'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground">123 Swap Street</p>
                  <p className="text-muted-foreground">Trade City, TC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">+1 (555) 123-SWAP</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">hello@swapspace.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SwapSpace. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;