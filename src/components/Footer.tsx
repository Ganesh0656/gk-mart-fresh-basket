
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🕊️</span>
              </div>
              <span className="text-xl font-bold text-gradient">Gk-Mart</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted online grocery store for fresh products and household essentials.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Products</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Service</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">My Account</Link>
              <Link to="/orders" className="text-muted-foreground hover:text-primary transition-colors text-sm">Order History</Link>
              <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors text-sm">Help Center</Link>
              <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors text-sm">Returns</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+91 9047804855</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">g65832527@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Puduvayal New Bus Stand<br />
                  Puduvayal, Pin code: 630108
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Gk-Mart. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
