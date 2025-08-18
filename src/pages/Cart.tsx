import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    const originalTotal = (item.originalPrice || item.price) * item.quantity;
    const currentTotal = item.price * item.quantity;
    return sum + (originalTotal - currentTotal);
  }, 0);
  const deliveryFee = subtotal >= 500 ? 0 : 40;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pb-20">
        <Header />
        <div className="section-padding">
          <div className="container-width">
            <div className="text-center py-16 space-y-6">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto transition-all duration-500 hover:scale-110 animate-scale-in">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground transition-all duration-500 hover:scale-105">Your cart is empty</h2>
                <p className="text-muted-foreground transition-all duration-500 hover:text-foreground">
                  Looks like you haven't added any items to your cart yet.
                </p>
              </div>
              <Link to="/products">
                <Button className="btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
        <NavigationBar />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="section-padding">
        <div className="container-width">
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <Link to="/products">
              <Button variant="outline" size="icon" className="transition-all duration-300 hover:scale-105">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground transition-all duration-500 hover:scale-105">Shopping Cart</h1>
              <p className="text-muted-foreground transition-all duration-500 hover:text-foreground">{cartItems.length} items in your cart</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <Card key={item.id} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground transition-colors duration-300 hover:text-primary">{item.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-lg font-bold text-primary">₹{item.price}</span>
                              {item.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ₹{item.originalPrice}
                                </span>
                              )}
                              {item.discount && (
                                <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded animate-scale-in">
                                  {item.discount}% OFF
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 text-red-600 hover:text-red-700 transition-all duration-300 hover:scale-110"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 transition-all duration-300 hover:scale-110"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 transition-all duration-300 hover:scale-110"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-bold text-foreground">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="sticky top-24 transition-all duration-300 hover:shadow-lg animate-fade-in">
                <CardHeader>
                  <CardTitle className="transition-colors duration-300 hover:text-primary">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600 animate-scale-in">
                      <span>Savings</span>
                      <span className="font-medium">-₹{savings.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </span>
                  </div>
                  
                  {subtotal < 500 && (
                    <p className="text-xs text-muted-foreground animate-fade-in">
                      Add ₹{(500 - subtotal).toFixed(2)} more for free delivery
                    </p>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  
                  <Link to="/checkout">
                    <Button className="w-full btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Delivery Info */}
              <Card className="transition-all duration-300 hover:shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-4">
                  <div className="text-sm space-y-2">
                    <p className="font-medium text-foreground transition-colors duration-300 hover:text-primary">Delivery Information</p>
                    <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
                      Free delivery on orders above ₹500
                    </p>
                    <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
                      Expected delivery: Tomorrow, 10 AM - 6 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <NavigationBar />
    </div>
  );
};

export default Cart;