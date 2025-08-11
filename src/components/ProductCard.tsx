import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  discount?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  category, 
  discount 
}: ProductCardProps) => {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id,
      name,
      price,
      originalPrice,
      image,
      discount
    });
    
    toast({
      title: "Added to cart!",
      description: `${name} added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="product-card group cursor-pointer">
        <div className="relative mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              {discount}% OFF
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">₹{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            <Button 
              onClick={handleAddToCart}
              size="sm" 
              className="btn-primary text-xs px-3 py-1"
            >
              <ShoppingCart className="w-3 h-3 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;