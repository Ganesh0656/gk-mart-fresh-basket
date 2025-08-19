
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isSignUp) {
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match!");
          return;
        }
        if (formData.password.length < 6) {
          toast.error("Password must be at least 6 characters long!");
          return;
        }
        
        const { error } = await signUp(formData.email, formData.password, formData.name);
        if (!error) {
          setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        }
      } else {
        const { error } = await signIn(formData.email, formData.password);
        if (!error) {
          navigate('/');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Auth Card */}
        <div className="glass-effect rounded-2xl p-8 animate-scale-in">
          {/* Logo & Brand */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🕊️</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient">Gk-Mart</h1>
            <p className="text-muted-foreground mt-2">
              {isSignUp ? "Create your account" : "Welcome back!"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="input-field"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="input-field"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                  className="input-field pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                  className="input-field"
                />
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full btn-primary"
              disabled={loading}
            >
              {loading ? "Please wait..." : (isSignUp ? "Create Account" : "Sign In")}
            </Button>
          </form>

          {/* Toggle Form */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </p>
            <Button
              variant="link"
              className="text-primary hover:text-primary/80 font-medium p-0 h-auto"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Create Account"}
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:g65832527@gmail.com" className="text-primary hover:underline">
                g65832527@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
