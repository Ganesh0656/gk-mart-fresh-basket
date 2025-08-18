import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NavigationBar = () => {
  const location = useLocation();
  const { cartCount } = useCart();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/products", icon: Package, label: "Products" },
    { path: "/cart", icon: ShoppingCart, label: "Cart", badge: cartCount },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container-width">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-300 group ${
                  active 
                    ? "text-primary bg-primary/10 transform scale-105" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <div className="relative">
                  <Icon 
                    className={`w-6 h-6 transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`} 
                  />
                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-scale-in">
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-scale-in"></div>
                  )}
                </div>
                <span className={`text-xs transition-all duration-300 ${
                  active ? "font-medium" : "font-normal"
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;