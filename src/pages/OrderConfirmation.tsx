import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle, Package, Truck, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  const { orderId, customerDetails, total, paymentMethod, items } = orderData;

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="section-padding">
        <div className="container-width max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              🎉 Thank you for your purchase! 🎉
            </h1>
            <p className="text-muted-foreground text-lg">
              Your order has been placed successfully and is being processed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Order Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Order ID:</span>
                    <span className="text-primary font-mono">{orderId}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Order Date:</span>
                    <span>{new Date().toLocaleDateString('en-IN')}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Payment Method:</span>
                    <span className="capitalize">{paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Amount:</span>
                    <span className="text-lg font-bold text-primary">₹{total.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-medium">Items Ordered:</h4>
                    {items.map((item: any) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Delivery Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <div>
                        <p className="font-medium">Order Confirmed</p>
                        <p className="text-sm text-muted-foreground">Your order has been received and is being processed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-muted rounded-full" />
                      <div>
                        <p className="font-medium">Order Packed</p>
                        <p className="text-sm text-muted-foreground">Your items are being carefully packed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-muted rounded-full" />
                      <div>
                        <p className="font-medium">Out for Delivery</p>
                        <p className="text-sm text-muted-foreground">Your order is on the way to you</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-muted rounded-full" />
                      <div>
                        <p className="font-medium">Delivered</p>
                        <p className="text-sm text-muted-foreground">Expected delivery: Tomorrow, 10 AM - 6 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customer & Delivery Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium">{customerDetails.fullName}</p>
                  <p className="text-muted-foreground">{customerDetails.address}</p>
                  {customerDetails.landmark && (
                    <p className="text-muted-foreground">Near: {customerDetails.landmark}</p>
                  )}
                  <p className="text-muted-foreground">
                    {customerDetails.city}, {customerDetails.state} - {customerDetails.pincode}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{customerDetails.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{customerDetails.email}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Track Your Order</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive SMS and email updates about your order status
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Delivery Window</p>
                      <p className="text-sm text-muted-foreground">
                        Our delivery partner will contact you 30 minutes before delivery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link to="/products">
              <Button variant="outline" className="w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/profile">
              <Button className="w-full sm:w-auto">
                View Order History
              </Button>
            </Link>
          </div>

          {/* Thank You Message */}
          <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Thank You for Choosing Gk-Mart! 🛒</h3>
            <p className="text-muted-foreground">
              We appreciate your trust in us. Your satisfaction is our priority, and we're committed to delivering fresh, quality products right to your doorstep.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;