
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Headphones, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import basmatiRice from "@/assets/basmati-rice.jpg";
import vegetablesCombo from "@/assets/vegetables-combo.jpg";
import cookingOil from "@/assets/cooking-oil.jpg";
import cleaningKit from "@/assets/cleaning-kit.jpg";
import heroGrocery from "@/assets/hero-grocery.jpg";

const Index = () => {
  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Organic Basmati Rice 5kg",
      price: 899,
      originalPrice: 1200,
      image: basmatiRice,
      rating: 4.5,
      reviews: 324,
      category: "Rice & Grains",
      discount: 25
    },
    {
      id: 2,
      name: "Fresh Vegetables Combo Pack",
      price: 249,
      image: vegetablesCombo,
      rating: 4.3,
      reviews: 156,
      category: "Vegetables"
    },
    {
      id: 3,
      name: "Premium Cooking Oil 1L",
      price: 189,
      originalPrice: 220,
      image: cookingOil,
      rating: 4.6,
      reviews: 892,
      category: "Cooking Oil",
      discount: 14
    },
    {
      id: 4,
      name: "Household Cleaning Kit",
      price: 299,
      image: cleaningKit,
      rating: 4.2,
      reviews: 78,
      category: "Home Care"
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Free Delivery",
      description: "Free delivery on orders above ₹500"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Guaranteed",
      description: "100% fresh and quality products"
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Fresh Groceries
                  <span className="text-gradient block">Delivered Daily</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Shop from our wide selection of fresh products, cooking essentials, 
                  and household items. Quality guaranteed, delivered fresh to your doorstep.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button className="btn-primary group">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" className="btn-secondary">
                  View Categories
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-primary/30 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-primary/40 rounded-full border-2 border-white"></div>
                  </div>
                  <span>5000+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative">
                <img
                  src={heroGrocery}
                  alt="Fresh groceries"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our top-selling items carefully selected for quality and freshness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="btn-primary group">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient section-padding">
        <div className="container-width text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Start Shopping?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers and experience the convenience 
              of online grocery shopping with Gk-Mart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button className="btn-primary">Create Account</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="btn-secondary">Browse Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
