import basmatiRice from "@/assets/basmati-rice.jpg";
import vegetablesCombo from "@/assets/vegetables-combo.jpg";
import cookingOil from "@/assets/cooking-oil.jpg";
import cleaningKit from "@/assets/cleaning-kit.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  discount?: number;
  description: string;
  features: string[];
  inStock: boolean;
}

export interface Review {
  id: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Basmati Rice 5kg",
    price: 899,
    originalPrice: 1200,
    image: basmatiRice,
    rating: 4.5,
    reviews: 324,
    category: "Rice & Grains",
    discount: 25,
    description: "Premium quality organic basmati rice with long grains and aromatic flavor. Perfect for biryanis, pulao, and daily meals.",
    features: ["100% Organic", "Extra Long Grain", "Aromatic", "Non-GMO", "Aged Rice"],
    inStock: true
  },
  {
    id: 2,
    name: "Fresh Vegetables Combo Pack",
    price: 249,
    image: vegetablesCombo,
    rating: 4.3,
    reviews: 156,
    category: "Vegetables",
    description: "Fresh assorted vegetables combo pack containing onions, tomatoes, potatoes, carrots, and green beans.",
    features: ["Farm Fresh", "Chemical Free", "Daily Harvest", "Mixed Variety"],
    inStock: true
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
    discount: 14,
    description: "Heart-healthy refined cooking oil perfect for all your cooking needs. Rich in vitamins and essential nutrients.",
    features: ["Heart Healthy", "Vitamin Enriched", "Zero Trans Fat", "Multi-purpose"],
    inStock: true
  },
  {
    id: 4,
    name: "Household Cleaning Kit",
    price: 299,
    image: cleaningKit,
    rating: 4.2,
    reviews: 78,
    category: "Home Care",
    description: "Complete cleaning solution for your home including floor cleaner, bathroom cleaner, and kitchen cleaner.",
    features: ["Multi-surface", "Antibacterial", "Fresh Fragrance", "Value Pack"],
    inStock: true
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
    discount: 11,
    description: "Extra premium basmati rice in family pack size. Ideal for large families and special occasions.",
    features: ["Family Pack", "Extra Premium", "Long Grain", "Aromatic", "Aged 2 Years"],
    inStock: true
  },
  {
    id: 6,
    name: "Organic Vegetables Bundle",
    price: 399,
    image: vegetablesCombo,
    rating: 4.4,
    reviews: 267,
    category: "Vegetables",
    description: "Premium organic vegetables bundle with seasonal fresh produce. Perfect for healthy cooking.",
    features: ["100% Organic", "Seasonal Fresh", "Pesticide Free", "Premium Quality"],
    inStock: true
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
    discount: 12,
    description: "Traditional cold pressed oil retaining all natural nutrients and flavor. Ideal for healthy cooking.",
    features: ["Cold Pressed", "Traditional Method", "Nutrient Rich", "Natural Flavor"],
    inStock: true
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
    discount: 20,
    description: "Comprehensive home care set with all essential cleaning products for complete home hygiene.",
    features: ["Complete Set", "All-in-One", "Long Lasting", "Value for Money"],
    inStock: true
  },
  {
    id: 9,
    name: "Whole Wheat Flour 5kg",
    price: 299,
    originalPrice: 350,
    image: basmatiRice,
    rating: 4.4,
    reviews: 567,
    category: "Rice & Grains",
    discount: 15,
    description: "Fresh ground whole wheat flour perfect for making chapatis, bread, and other baked goods.",
    features: ["Freshly Ground", "100% Whole Wheat", "High Fiber", "Natural"],
    inStock: true
  },
  {
    id: 10,
    name: "Mixed Dal Combo 2kg",
    price: 449,
    image: basmatiRice,
    rating: 4.6,
    reviews: 234,
    category: "Rice & Grains",
    description: "Assorted dal combo including toor dal, moong dal, chana dal, and masoor dal.",
    features: ["Protein Rich", "Assorted Variety", "Premium Quality", "Fresh"],
    inStock: true
  },
  {
    id: 11,
    name: "Seasonal Fruit Basket",
    price: 599,
    originalPrice: 699,
    image: vegetablesCombo,
    rating: 4.5,
    reviews: 189,
    category: "Fruits",
    discount: 14,
    description: "Fresh seasonal fruits basket with apples, bananas, oranges, and seasonal specialties.",
    features: ["Seasonal Fresh", "Vitamin Rich", "Mixed Variety", "Premium Quality"],
    inStock: true
  },
  {
    id: 12,
    name: "Green Leafy Vegetables Pack",
    price: 149,
    image: vegetablesCombo,
    rating: 4.3,
    reviews: 123,
    category: "Vegetables",
    description: "Fresh green leafy vegetables pack including spinach, coriander, mint, and fenugreek leaves.",
    features: ["Iron Rich", "Fresh Daily", "Organic", "Nutrient Dense"],
    inStock: true
  },
  {
    id: 13,
    name: "Mustard Oil 1L",
    price: 199,
    originalPrice: 230,
    image: cookingOil,
    rating: 4.4,
    reviews: 345,
    category: "Cooking Oil",
    discount: 13,
    description: "Pure mustard oil with natural pungency and flavor. Ideal for cooking and traditional preparations.",
    features: ["Pure Mustard", "Natural Pungency", "Traditional", "Authentic Taste"],
    inStock: true
  },
  {
    id: 14,
    name: "Coconut Oil 500ml",
    price: 279,
    originalPrice: 320,
    image: cookingOil,
    rating: 4.7,
    reviews: 456,
    category: "Cooking Oil",
    discount: 13,
    description: "Virgin coconut oil extracted from fresh coconuts. Perfect for cooking and health benefits.",
    features: ["Virgin Quality", "Fresh Coconut", "Multi-purpose", "Health Benefits"],
    inStock: true
  },
  {
    id: 15,
    name: "Dishwash Liquid 1L",
    price: 89,
    originalPrice: 110,
    image: cleaningKit,
    rating: 4.2,
    reviews: 234,
    category: "Home Care",
    discount: 19,
    description: "Powerful dishwash liquid that removes grease and food stains effectively while being gentle on hands.",
    features: ["Grease Cutting", "Gentle on Hands", "Fresh Fragrance", "Concentrated"],
    inStock: true
  },
  {
    id: 16,
    name: "Laundry Detergent 2kg",
    price: 249,
    originalPrice: 299,
    image: cleaningKit,
    rating: 4.3,
    reviews: 567,
    category: "Home Care",
    discount: 17,
    description: "High-quality laundry detergent powder for all types of fabrics. Removes tough stains effectively.",
    features: ["Tough Stain Removal", "All Fabric", "Fresh Scent", "Long Lasting"],
    inStock: true
  },
  {
    id: 17,
    name: "Brown Rice 2kg",
    price: 359,
    originalPrice: 400,
    image: basmatiRice,
    rating: 4.5,
    reviews: 234,
    category: "Rice & Grains",
    discount: 10,
    description: "Healthy brown rice packed with fiber and nutrients. Perfect for health-conscious individuals.",
    features: ["High Fiber", "Nutrient Rich", "Healthy Choice", "Unpolished"],
    inStock: true
  },
  {
    id: 18,
    name: "Quinoa 500g",
    price: 449,
    originalPrice: 520,
    image: basmatiRice,
    rating: 4.6,
    reviews: 145,
    category: "Rice & Grains",
    discount: 14,
    description: "Premium quality quinoa - a superfood rich in protein and essential amino acids.",
    features: ["Superfood", "High Protein", "Gluten Free", "Complete Amino Acids"],
    inStock: true
  },
  {
    id: 19,
    name: "Exotic Vegetables Mix",
    price: 349,
    image: vegetablesCombo,
    rating: 4.4,
    reviews: 89,
    category: "Vegetables",
    description: "Premium exotic vegetables including bell peppers, broccoli, baby corn, and mushrooms.",
    features: ["Exotic Variety", "Premium Quality", "Fresh Import", "Nutrient Rich"],
    inStock: true
  },
  {
    id: 20,
    name: "Sunflower Oil 2L",
    price: 299,
    originalPrice: 340,
    image: cookingOil,
    rating: 4.3,
    reviews: 678,
    category: "Cooking Oil",
    discount: 12,
    description: "Pure sunflower oil rich in vitamin E and perfect for all cooking methods including deep frying.",
    features: ["Vitamin E Rich", "Light Taste", "High Smoke Point", "Versatile"],
    inStock: true
  },
  {
    id: 21,
    name: "Floor Cleaner 1L",
    price: 129,
    originalPrice: 150,
    image: cleaningKit,
    rating: 4.1,
    reviews: 345,
    category: "Home Care",
    discount: 14,
    description: "Multi-surface floor cleaner that leaves floors sparkling clean with a fresh fragrance.",
    features: ["Multi-surface", "Sparkling Clean", "Fresh Fragrance", "No Residue"],
    inStock: true
  },
  {
    id: 22,
    name: "Toilet Cleaner 500ml",
    price: 99,
    originalPrice: 120,
    image: cleaningKit,
    rating: 4.2,
    reviews: 234,
    category: "Home Care",
    discount: 18,
    description: "Powerful toilet cleaner that removes stains and kills 99.9% germs for complete hygiene.",
    features: ["99.9% Germ Kill", "Stain Removal", "Fresh Scent", "Deep Clean"],
    inStock: true
  },
  {
    id: 23,
    name: "Red Kidney Beans 1kg",
    price: 189,
    originalPrice: 220,
    image: basmatiRice,
    rating: 4.4,
    reviews: 156,
    category: "Rice & Grains",
    discount: 14,
    description: "Premium quality red kidney beans (rajma) perfect for making delicious curries and salads.",
    features: ["Premium Quality", "High Protein", "Rich in Fiber", "Versatile"],
    inStock: true
  },
  {
    id: 24,
    name: "Chickpeas 1kg",
    price: 149,
    originalPrice: 170,
    image: basmatiRice,
    rating: 4.5,
    reviews: 267,
    category: "Rice & Grains",
    discount: 12,
    description: "Fresh chickpeas (chana) ideal for making curries, snacks, and healthy preparations.",
    features: ["Fresh Quality", "Protein Rich", "Versatile Use", "Healthy"],
    inStock: true
  },
  {
    id: 25,
    name: "Frozen Mixed Vegetables 1kg",
    price: 179,
    image: vegetablesCombo,
    rating: 4.2,
    reviews: 234,
    category: "Vegetables",
    description: "Convenient frozen mixed vegetables pack with peas, carrots, beans, and corn.",
    features: ["Convenient", "Ready to Use", "No Wastage", "Mixed Variety"],
    inStock: true
  },
  {
    id: 26,
    name: "Groundnut Oil 1L",
    price: 169,
    originalPrice: 190,
    image: cookingOil,
    rating: 4.3,
    reviews: 345,
    category: "Cooking Oil",
    discount: 11,
    description: "Pure groundnut oil with natural flavor and high nutritional value. Perfect for Indian cooking.",
    features: ["Natural Flavor", "High Nutrition", "Traditional", "Pure"],
    inStock: true
  },
  {
    id: 27,
    name: "Glass Cleaner 500ml",
    price: 79,
    originalPrice: 95,
    image: cleaningKit,
    rating: 4.0,
    reviews: 123,
    category: "Home Care",
    discount: 17,
    description: "Streak-free glass cleaner for windows, mirrors, and glass surfaces.",
    features: ["Streak Free", "Crystal Clear", "Multi-surface", "Easy Application"],
    inStock: true
  },
  {
    id: 28,
    name: "Organic Honey 500g",
    price: 399,
    originalPrice: 450,
    image: basmatiRice,
    rating: 4.6,
    reviews: 456,
    category: "Natural Products",
    discount: 11,
    description: "Pure organic honey with natural sweetness and health benefits. Perfect for daily consumption.",
    features: ["100% Pure", "Organic", "Natural Sweetness", "Health Benefits"],
    inStock: true
  },
  {
    id: 29,
    name: "Fresh Herb Bundle",
    price: 99,
    image: vegetablesCombo,
    rating: 4.3,
    reviews: 89,
    category: "Vegetables",
    description: "Fresh herb bundle including basil, oregano, thyme, and rosemary for cooking.",
    features: ["Fresh Herbs", "Aromatic", "Cooking Essential", "Natural"],
    inStock: true
  },
  {
    id: 30,
    name: "Sesame Oil 500ml",
    price: 229,
    originalPrice: 260,
    image: cookingOil,
    rating: 4.4,
    reviews: 234,
    category: "Cooking Oil",
    discount: 12,
    description: "Traditional sesame oil with rich flavor and numerous health benefits. Ideal for tempering and cooking.",
    features: ["Traditional", "Rich Flavor", "Health Benefits", "Authentic"],
    inStock: true
  }
];

export const categories = [
  "all",
  "Rice & Grains", 
  "Vegetables", 
  "Fruits",
  "Cooking Oil", 
  "Home Care",
  "Natural Products"
];

export const productReviews: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      userId: "user1",
      userName: "Priya Sharma",
      rating: 5,
      comment: "Excellent quality rice! Very aromatic and cooks perfectly every time.",
      date: "2024-01-15"
    },
    {
      id: 2,
      userId: "user2", 
      userName: "Rajesh Kumar",
      rating: 4,
      comment: "Good quality but slightly expensive. Worth it for special occasions.",
      date: "2024-01-10"
    }
  ],
  2: [
    {
      id: 3,
      userId: "user3",
      userName: "Meera Patel",
      rating: 4,
      comment: "Fresh vegetables, good variety. Quick delivery too!",
      date: "2024-01-12"
    }
  ],
  3: [
    {
      id: 4,
      userId: "user4",
      userName: "Amit Singh",
      rating: 5,
      comment: "Best cooking oil I've used. Healthy and tastes great.",
      date: "2024-01-08"
    }
  ]
};