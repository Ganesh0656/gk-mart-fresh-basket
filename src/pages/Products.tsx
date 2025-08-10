import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import basmatiRice from "@/assets/basmati-rice.jpg";
import vegetablesCombo from "@/assets/vegetables-combo.jpg";
import cookingOil from "@/assets/cooking-oil.jpg";
import cleaningKit from "@/assets/cleaning-kit.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const products = [
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
    },
    {
      id: 5,
      name: "Premium Basmati Rice 10kg",
      price: 1599,
      originalPrice: 1800,
      image: basmatiRice,
      rating: 4.7,
      reviews: 445,
      category: "Rice & Grains",
      discount: 11
    },
    {
      id: 6,
      name: "Organic Vegetables Bundle",
      price: 399,
      image: vegetablesCombo,
      rating: 4.4,
      reviews: 267,
      category: "Vegetables"
    },
    {
      id: 7,
      name: "Cold Pressed Oil 500ml",
      price: 145,
      originalPrice: 165,
      image: cookingOil,
      rating: 4.5,
      reviews: 156,
      category: "Cooking Oil",
      discount: 12
    },
    {
      id: 8,
      name: "Complete Home Care Set",
      price: 599,
      originalPrice: 750,
      image: cleaningKit,
      rating: 4.3,
      reviews: 234,
      category: "Home Care",
      discount: 20
    }
  ];

  const categories = ["all", "Rice & Grains", "Vegetables", "Cooking Oil", "Home Care"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="section-padding">
        <div className="container-width">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Products
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of fresh groceries, household essentials, and quality products
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {sortedProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;