export interface Shoe {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  category: string;
  sizes: number[];
  colors: {
    name: string;
    hex: string;
    images: string[];
  }[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  tags: string[];
  specifications: {
    material: string;
    sole: string;
    weight: string;
    origin: string;
  };
}

// Constants used in product generation
const brands = ['Nike', 'Adidas', 'Puma', 'New Balance', 'Reebok', 'Converse', 'Vans', 'Jordan', 'Under Armour', 'Skechers', 'Asics', 'Salomon'];
const categories = ['Running', 'Basketball', 'Casual', 'Training', 'Walking', 'Lifestyle', 'Soccer', 'Tennis', 'Hiking'];

function generateMockShoes(count: number = 200): Shoe[] {
  const shoeNames = [
    'Air Max', 'React Element', 'Ultraboost', 'Classic', 'Runner', 'Trainer', 'Court', 'Hiking Boot',
    'Basketball', 'Casual', 'Walking', 'Lifestyle', 'Soccer', 'Tennis', 'Cross Training', 'Trail Runner'
  ];

  const materials = ['Synthetic', 'Leather', 'Mesh', 'Canvas', 'Suede', 'Nylon', 'Polyester'];
  const soles = ['Rubber', 'EVA', 'Gel', 'Air Cushion', 'Memory Foam', 'Composite'];
  const origins = ['Vietnam', 'China', 'Indonesia', 'Portugal', 'Italy', 'USA', 'Germany'];

  const shoes: Shoe[] = [];

  for (let i = 1; i <= count; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const baseName = shoeNames[Math.floor(Math.random() * shoeNames.length)];
    const name = `${brand} ${baseName} ${Math.floor(Math.random() * 100) + 1}`;

    const basePrice = Math.floor(Math.random() * 200) + 50; // $50-$250
    const price = Math.floor(basePrice / 10) * 10; // Round to nearest 10

    const shoeColors = colors.slice(0, Math.floor(Math.random() * 3) + 1); // 1-3 colors

    const shoe: Shoe = {
      id: i.toString(),
      name,
      brand,
      price,
      images: shoeColors[0].images,
      description: `Premium ${brand} ${baseName} designed for ${category.toLowerCase()}. Features advanced comfort technology and modern styling.`,
      category,
      sizes: Array.from({ length: 8 }, (_, idx) => 7 + idx), // Sizes 7-14
      colors: shoeColors,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0-5.0
      reviews: Math.floor(Math.random() * 500) + 10,
      inStock: Math.random() > 0.1, // 90% in stock
      isNew: Math.random() > 0.8, // 20% new
      isSale: Math.random() > 0.85, // 15% on sale
      tags: [category.toLowerCase(), brand.toLowerCase()],
      specifications: {
        material: materials[Math.floor(Math.random() * materials.length)],
        sole: soles[Math.floor(Math.random() * soles.length)],
        weight: `${Math.floor(Math.random() * 500) + 200}g`,
        origin: origins[Math.floor(Math.random() * origins.length)]
      }
    };

    // Add original price for sale items
    if (shoe.isSale) {
      shoe.originalPrice = Math.floor(price * 1.3);
    }

    shoes.push(shoe);
  }

  return shoes;
}

export { brands, categories };

export const mockShoes: Shoe[] = [
  {
    id: "1",
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 150,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium Nike Air Max 270 designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["running", "nike"],
    specifications: {
      material: "Synthetic",
      sole: "Air Cushion",
      weight: "280g",
      origin: "Vietnam"
    }
  },
  {
    id: "2",
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 190,
    images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"],
    description: "Premium Adidas Ultraboost 22 designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'] }],
    rating: 4.7,
    reviews: 245,
    inStock: true,
    isNew: true,
    tags: ["running", "adidas"],
    specifications: {
      material: "Primeknit",
      sole: "Boost",
      weight: "310g",
      origin: "Germany"
    }
  },
  {
    id: "3",
    name: "Puma React Element 55",
    brand: "Puma",
    price: 130,
    images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"],
    description: "Premium Puma React Element 55 designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Blue', hex: '#0000FF', images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800'] }],
    rating: 4.4,
    reviews: 156,
    inStock: true,
    isSale: true,
    tags: ["casual", "puma"],
    specifications: {
      material: "Synthetic",
      sole: "React",
      weight: "290g",
      origin: "Vietnam"
    }
  },
  {
    id: "4",
    name: "New Balance 574 Core",
    brand: "New Balance",
    price: 80,
    images: ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"],
    description: "Premium New Balance 574 Core designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Navy', hex: '#000080', images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800'] }],
    rating: 4.3,
    reviews: 423,
    inStock: true,
    tags: ["casual", "new balance"],
    specifications: {
      material: "Suede",
      sole: "ENCAP",
      weight: "270g",
      origin: "USA"
    }
  },
  {
    id: "5",
    name: "Vans Classic Slip-On",
    brand: "Vans",
    price: 65,
    images: ["https://images.unsplash.com/photo-1520256862855-398228c41684?w=800"],
    description: "Premium Vans Classic Slip-On designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1520256862855-398228c41684?w=800'] }],
    rating: 4.2,
    reviews: 678,
    inStock: true,
    tags: ["casual", "vans"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "240g",
      origin: "USA"
    }
  },
  {
    id: "6",
    name: "Jordan Air Force 1",
    brand: "Jordan",
    price: 110,
    images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"],
    description: "Premium Jordan Air Force 1 designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    tags: ["lifestyle", "jordan"],
    specifications: {
      material: "Leather",
      sole: "Rubber",
      weight: "320g",
      origin: "Vietnam"
    }
  },
  {
    id: "7",
    name: "Under Armour Curry Flow 9",
    brand: "Under Armour",
    price: 160,
    images: ["https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800"],
    description: "Premium Under Armour Curry Flow 9 designed for Basketball. Features advanced comfort technology and modern styling.",
    category: "Basketball",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'] }],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    isNew: true,
    tags: ["basketball", "under armour"],
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      weight: "330g",
      origin: "Vietnam"
    }
  },
  {
    id: "8",
    name: "Converse Chuck Taylor",
    brand: "Converse",
    price: 55,
    images: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800"],
    description: "Premium Converse Chuck Taylor designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'] }],
    rating: 4.1,
    reviews: 1247,
    inStock: true,
    tags: ["lifestyle", "converse"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "220g",
      origin: "USA"
    }
  },
  {
    id: "9",
    name: "Asics Gel-Kayano 28",
    brand: "Asics",
    price: 160,
    images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"],
    description: "Premium Asics Gel-Kayano 28 designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Blue', hex: '#0000FF', images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800'] }],
    rating: 4.6,
    reviews: 287,
    inStock: true,
    tags: ["running", "asics"],
    specifications: {
      material: "Mesh",
      sole: "GEL",
      weight: "340g",
      origin: "Vietnam"
    }
  },
  {
    id: "10",
    name: "Salomon Quest 4D 3 GTX",
    brand: "Salomon",
    price: 220,
    images: ["https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800"],
    description: "Premium Salomon Quest 4D 3 GTX designed for Hiking. Features advanced comfort technology and modern styling.",
    category: "Hiking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800'] }],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isNew: true,
    tags: ["hiking", "salomon"],
    specifications: {
      material: "Synthetic",
      sole: "Contagrip",
      weight: "380g",
      origin: "Romania"
    }
  },
  {
    id: "11",
    name: "Skechers Go Walk",
    brand: "Skechers",
    price: 75,
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"],
    description: "Premium Skechers Go Walk designed for Walking. Features advanced comfort technology and modern styling.",
    category: "Walking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'] }],
    rating: 4.3,
    reviews: 445,
    inStock: true,
    tags: ["walking", "skechers"],
    specifications: {
      material: "Mesh",
      sole: "Air Cooled",
      weight: "260g",
      origin: "Vietnam"
    }
  },
  {
    id: "12",
    name: "Reebok Nano X1",
    brand: "Reebok",
    price: 140,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium Reebok Nano X1 designed for Training. Features advanced comfort technology and modern styling.",
    category: "Training",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.5,
    reviews: 267,
    inStock: true,
    isNew: true,
    tags: ["training", "reebok"],
    specifications: {
      material: "Synthetic",
      sole: "Floatride",
      weight: "295g",
      origin: "Vietnam"
    }
  },
  {
    id: "13",
    name: "Timberland Earthkeepers",
    brand: "Timberland",
    price: 180,
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"],
    description: "Premium Timberland Earthkeepers designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Brown', hex: '#8B4513', images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'] }],
    rating: 4.4,
    reviews: 189,
    inStock: true,
    isSale: true,
    tags: ["casual", "timberland"],
    specifications: {
      material: "Leather",
      sole: "Rubber",
      weight: "340g",
      origin: "USA"
    }
  },
  {
    id: "14",
    name: "Fila Disruptor II",
    brand: "Fila",
    price: 90,
    images: ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"],
    description: "Premium Fila Disruptor II designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Navy', hex: '#000080', images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800'] }],
    rating: 4.2,
    reviews: 534,
    inStock: true,
    tags: ["lifestyle", "fila"],
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      weight: "280g",
      origin: "Vietnam"
    }
  },
  {
    id: "15",
    name: "Merrell Moab 2",
    brand: "Merrell",
    price: 95,
    images: ["https://images.unsplash.com/photo-1520256862855-398228c41684?w=800"],
    description: "Premium Merrell Moab 2 designed for Hiking. Features advanced comfort technology and modern styling.",
    category: "Hiking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1520256862855-398228c41684?w=800'] }],
    rating: 4.6,
    reviews: 312,
    inStock: true,
    tags: ["hiking", "merrell"],
    specifications: {
      material: "Leather",
      sole: "Vibram",
      weight: "380g",
      origin: "Vietnam"
    }
  },
  {
    id: "16",
    name: "Crocs Classic Clog",
    brand: "Crocs",
    price: 45,
    images: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800"],
    description: "Premium Crocs Classic Clog designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Blue', hex: '#0000FF', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'] }],
    rating: 4.0,
    reviews: 892,
    inStock: true,
    tags: ["casual", "crocs"],
    specifications: {
      material: "Croslite",
      sole: "Croslite",
      weight: "180g",
      origin: "Mexico"
    }
  },
  {
    id: "17",
    name: "Hoka Cielo Road",
    brand: "Hoka",
    price: 175,
    images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"],
    description: "Premium Hoka Cielo Road designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800'] }],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isNew: true,
    tags: ["running", "hoka"],
    specifications: {
      material: "Mesh",
      sole: "Energy Return",
      weight: "250g",
      origin: "Vietnam"
    }
  },
  {
    id: "18",
    name: "Dr. Martens 1460",
    brand: "Dr. Martens",
    price: 160,
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"],
    description: "Premium Dr. Martens 1460 designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'] }],
    rating: 4.5,
    reviews: 423,
    inStock: true,
    tags: ["lifestyle", "dr martens"],
    specifications: {
      material: "Leather",
      sole: "AirWair",
      weight: "420g",
      origin: "UK"
    }
  },
  {
    id: "19",
    name: "On Running Cloudswift",
    brand: "On",
    price: 150,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium On Running Cloudswift designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.6,
    reviews: 289,
    inStock: true,
    tags: ["running", "on"],
    specifications: {
      material: "Mesh",
      sole: "CloudTec",
      weight: "275g",
      origin: "Switzerland"
    }
  },
  {
    id: "20",
    name: "Keds Champion",
    brand: "Keds",
    price: 50,
    images: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800"],
    description: "Premium Keds Champion designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'] }],
    rating: 4.1,
    reviews: 678,
    inStock: true,
    tags: ["casual", "keds"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "200g",
      origin: "USA"
    }
  },
  {
    id: "21",
    name: "Saucony Ride 15",
    brand: "Saucony",
    price: 130,
    images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"],
    description: "Premium Saucony Ride 15 designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800'] }],
    rating: 4.4,
    reviews: 345,
    inStock: true,
    tags: ["running", "saucony"],
    specifications: {
      material: "Mesh",
      sole: "PWRRUN",
      weight: "290g",
      origin: "Vietnam"
    }
  },
  {
    id: "22",
    name: "ECCO Turn",
    brand: "ECCO",
    price: 160,
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"],
    description: "Premium ECCO Turn designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Brown', hex: '#8B4513', images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'] }],
    rating: 4.5,
    reviews: 234,
    inStock: true,
    isSale: true,
    tags: ["casual", "ecco"],
    specifications: {
      material: "Leather",
      sole: "Direct Comfort",
      weight: "320g",
      origin: "Portugal"
    }
  },
  {
    id: "23",
    name: "Mizuno Wave Rider",
    brand: "Mizuno",
    price: 140,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium Mizuno Wave Rider designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.6,
    reviews: 198,
    inStock: true,
    tags: ["running", "mizuno"],
    specifications: {
      material: "Mesh",
      sole: "Wave",
      weight: "285g",
      origin: "Japan"
    }
  },
  {
    id: "24",
    name: "Steve Madden Stecy",
    brand: "Steve Madden",
    price: 80,
    images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"],
    description: "Premium Steve Madden Stecy designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800'] }],
    rating: 4.2,
    reviews: 456,
    inStock: true,
    tags: ["casual", "steve madden"],
    specifications: {
      material: "Synthetic",
      sole: "Synthetic",
      weight: "240g",
      origin: "Vietnam"
    }
  },
  {
    id: "25",
    name: "Birkenstock Arizona",
    brand: "Birkenstock",
    price: 120,
    images: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800"],
    description: "Premium Birkenstock Arizona designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: [{ name: 'Tan', hex: '#D2B48C', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'] }],
    rating: 4.3,
    reviews: 789,
    inStock: true,
    tags: ["casual", "birkenstock"],
    specifications: {
      material: "Birko-Flor",
      sole: "EVA",
      weight: "280g",
      origin: "Germany"
    }
  },
  {
    id: "26",
    name: "New Balance Fresh Foam X",
    brand: "New Balance",
    price: 150,
    images: ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"],
    description: "Premium New Balance Fresh Foam X designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Navy', hex: '#000080', images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800'] }],
    rating: 4.7,
    reviews: 367,
    inStock: true,
    isNew: true,
    tags: ["running", "new balance"],
    specifications: {
      material: "Mesh",
      sole: "Fresh Foam X",
      weight: "295g",
      origin: "USA"
    }
  },
  {
    id: "27",
    name: "Clarks Desert Trek",
    brand: "Clarks",
    price: 110,
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"],
    description: "Premium Clarks Desert Trek designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Brown', hex: '#8B4513', images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'] }],
    rating: 4.4,
    reviews: 298,
    inStock: true,
    tags: ["casual", "clarks"],
    specifications: {
      material: "Suede",
      sole: "Cushion Soft",
      weight: "310g",
      origin: "UK"
    }
  },
  {
    id: "28",
    name: "Salomon XA Pro 3D",
    brand: "Salomon",
    price: 140,
    images: ["https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800"],
    description: "Premium Salomon XA Pro 3D designed for Hiking. Features advanced comfort technology and modern styling.",
    category: "Hiking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800'] }],
    rating: 4.5,
    reviews: 412,
    inStock: true,
    tags: ["hiking", "salomon"],
    specifications: {
      material: "Synthetic",
      sole: "Contagrip",
      weight: "350g",
      origin: "France"
    }
  },
  {
    id: "29",
    name: "Puma RS-X",
    brand: "Puma",
    price: 110,
    images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"],
    description: "Premium Puma RS-X designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Purple', hex: '#800080', images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800'] }],
    rating: 4.3,
    reviews: 567,
    inStock: true,
    tags: ["lifestyle", "puma"],
    specifications: {
      material: "Mesh",
      sole: "Rubber",
      weight: "320g",
      origin: "Vietnam"
    }
  },
  {
    id: "30",
    name: "Adidas Stan Smith",
    brand: "Adidas",
    price: 85,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium Adidas Stan Smith designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.4,
    reviews: 892,
    inStock: true,
    tags: ["lifestyle", "adidas"],
    specifications: {
      material: "Leather",
      sole: "Rubber",
      weight: "260g",
      origin: "Germany"
    }
  },
  {
    id: "31",
    name: "Brooks Ghost 14",
    brand: "Brooks",
    price: 140,
    images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"],
    description: "Premium Brooks Ghost 14 designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800'] }],
    rating: 4.6,
    reviews: 445,
    inStock: true,
    tags: ["running", "brooks"],
    specifications: {
      material: "Mesh",
      sole: "DNA LOFT",
      weight: "290g",
      origin: "USA"
    }
  },
  {
    id: "32",
    name: "Tommy Hilfiger Flag High",
    brand: "Tommy Hilfiger",
    price: 95,
    images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"],
    description: "Premium Tommy Hilfiger Flag High designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Navy', hex: '#000080', images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800'] }],
    rating: 4.2,
    reviews: 323,
    inStock: true,
    tags: ["lifestyle", "tommy hilfiger"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "280g",
      origin: "Vietnam"
    }
  },
  {
    id: "33",
    name: "The North Face Ultra",
    brand: "The North Face",
    price: 140,
    images: ["https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800"],
    description: "Premium The North Face Ultra designed for Hiking. Features advanced comfort technology and modern styling.",
    category: "Hiking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800'] }],
    rating: 4.5,
    reviews: 278,
    inStock: true,
    isSale: true,
    tags: ["hiking", "the north face"],
    specifications: {
      material: "GORE-TEX",
      sole: "Vibram",
      weight: "360g",
      origin: "Vietnam"
    }
  },
  {
    id: "34",
    name: "Superga 2750",
    brand: "Superga",
    price: 75,
    images: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800"],
    description: "Premium Superga 2750 designed for Casual. Features advanced comfort technology and modern styling.",
    category: "Casual",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'] }],
    rating: 4.1,
    reviews: 654,
    inStock: true,
    tags: ["casual", "superga"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "220g",
      origin: "Italy"
    }
  },
  {
    id: "35",
    name: "Wilson Rush Pro",
    brand: "Wilson",
    price: 130,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium Wilson Rush Pro designed for Tennis. Features advanced comfort technology and modern styling.",
    category: "Tennis",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.4,
    reviews: 187,
    inStock: true,
    tags: ["tennis", "wilson"],
    specifications: {
      material: "Synthetic",
      sole: "Traction",
      weight: "320g",
      origin: "Vietnam"
    }
  },
  {
    id: "36",
    name: "Columbia Newton Ridge",
    brand: "Columbia",
    price: 85,
    images: ["https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800"],
    description: "Premium Columbia Newton Ridge designed for Hiking. Features advanced comfort technology and modern styling.",
    category: "Hiking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800'] }],
    rating: 4.3,
    reviews: 356,
    inStock: true,
    tags: ["hiking", "columbia"],
    specifications: {
      material: "Synthetic",
      sole: "Omni-Grip",
      weight: "340g",
      origin: "Vietnam"
    }
  },
  {
    id: "37",
    name: "Oakley Modoc",
    brand: "Oakley",
    price: 120,
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"],
    description: "Premium Oakley Modoc designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'] }],
    rating: 4.5,
    reviews: 234,
    inStock: true,
    tags: ["lifestyle", "oakley"],
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      weight: "280g",
      origin: "USA"
    }
  },
  {
    id: "38",
    name: "Nike ZoomX Vaporfly",
    brand: "Nike",
    price: 250,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium Nike ZoomX Vaporfly designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.8,
    reviews: 167,
    inStock: true,
    isNew: true,
    tags: ["running", "nike"],
    specifications: {
      material: "Flyknit",
      sole: "ZoomX",
      weight: "235g",
      origin: "Vietnam"
    }
  },
  {
    id: "39",
    name: "Adidas Yeezy Slide",
    brand: "Adidas",
    price: 60,
    images: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800"],
    description: "Premium Adidas Yeezy Slide designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Bone', hex: '#F5F5DC', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'] }],
    rating: 4.3,
    reviews: 445,
    inStock: true,
    tags: ["lifestyle", "adidas"],
    specifications: {
      material: "Leather",
      sole: "Rubber",
      weight: "160g",
      origin: "Germany"
    }
  },
  {
    id: "40",
    name: "Puma Cali Dream",
    brand: "Puma",
    price: 100,
    images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"],
    description: "Premium Puma Cali Dream designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800'] }],
    rating: 4.4,
    reviews: 623,
    inStock: true,
    tags: ["lifestyle", "puma"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "260g",
      origin: "Vietnam"
    }
  },
  {
    id: "41",
    name: "Under Armour HOVR Sonic",
    brand: "Under Armour",
    price: 120,
    images: ["https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800"],
    description: "Premium Under Armour HOVR Sonic designed for Basketball. Features advanced comfort technology and modern styling.",
    category: "Basketball",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800'] }],
    rating: 4.5,
    reviews: 289,
    inStock: true,
    tags: ["basketball", "under armour"],
    specifications: {
      material: "Synthetic",
      sole: "HOVR",
      weight: "305g",
      origin: "Vietnam"
    }
  },
  {
    id: "42",
    name: "Vans Old Skool",
    brand: "Vans",
    price: 70,
    images: ["https://images.unsplash.com/photo-1520256862855-398228c41684?w=800"],
    description: "Premium Vans Old Skool designed for Skate. Features advanced comfort technology and modern styling.",
    category: "Skate",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1520256862855-398228c41684?w=800'] }],
    rating: 4.6,
    reviews: 756,
    inStock: true,
    tags: ["skate", "vans"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "250g",
      origin: "USA"
    }
  },
  {
    id: "43",
    name: "Reebok Classic Leather",
    brand: "Reebok",
    price: 75,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
    description: "Premium Reebok Classic Leather designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] }],
    rating: 4.2,
    reviews: 567,
    inStock: true,
    tags: ["lifestyle", "reebok"],
    specifications: {
      material: "Leather",
      sole: "Rubber",
      weight: "270g",
      origin: "Vietnam"
    }
  },
  {
    id: "44",
    name: "Jordan Retro 1 High",
    brand: "Jordan",
    price: 170,
    images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"],
    description: "Premium Jordan Retro 1 High designed for Basketball. Features advanced comfort technology and modern styling.",
    category: "Basketball",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Chicago', hex: '#CE0000', images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800'] }],
    rating: 4.7,
    reviews: 834,
    inStock: true,
    tags: ["basketball", "jordan"],
    specifications: {
      material: "Leather",
      sole: "Air",
      weight: "380g",
      origin: "Vietnam"
    }
  },
  {
    id: "45",
    name: "New Balance 990v5",
    brand: "New Balance",
    price: 175,
    images: ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"],
    description: "Premium New Balance 990v5 designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800'] }],
    rating: 4.6,
    reviews: 423,
    inStock: true,
    tags: ["running", "new balance"],
    specifications: {
      material: "Mesh",
      sole: "ENCAP",
      weight: "320g",
      origin: "USA"
    }
  },
  {
    id: "46",
    name: "Asics Gel Nimbus 23",
    brand: "Asics",
    price: 150,
    images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"],
    description: "Premium Asics Gel Nimbus 23 designed for Running. Features advanced comfort technology and modern styling.",
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Blue', hex: '#0000FF', images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800'] }],
    rating: 4.5,
    reviews: 378,
    inStock: true,
    tags: ["running", "asics"],
    specifications: {
      material: "Mesh",
      sole: "GEL",
      weight: "310g",
      origin: "Vietnam"
    }
  },
  {
    id: "47",
    name: "Converse One Star",
    brand: "Converse",
    price: 75,
    images: ["https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800"],
    description: "Premium Converse One Star designed for Lifestyle. Features advanced comfort technology and modern styling.",
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'] }],
    rating: 4.3,
    reviews: 492,
    inStock: true,
    tags: ["lifestyle", "converse"],
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      weight: "240g",
      origin: "USA"
    }
  },
  {
    id: "48",
    name: "Salomon Speedcross 5",
    brand: "Salomon",
    price: 130,
    images: ["https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800"],
    description: "Premium Salomon Speedcross 5 designed for Trail. Features advanced comfort technology and modern styling.",
    category: "Hiking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800'] }],
    rating: 4.7,
    reviews: 267,
    inStock: true,
    tags: ["trail", "salomon"],
    specifications: {
      material: "Synthetic",
      sole: "Contagrip",
      weight: "330g",
      origin: "France"
    }
  },
  {
    id: "49",
    name: "Fila Ray Tracer",
    brand: "Fila",
    price: 85,
    images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"],
    description: "Premium Fila Ray Tracer designed for Training. Features advanced comfort technology and modern styling.",
    category: "Training",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800'] }],
    rating: 4.2,
    reviews: 345,
    inStock: true,
    tags: ["training", "fila"],
    specifications: {
      material: "Mesh",
      sole: "Rubber",
      weight: "275g",
      origin: "Vietnam"
    }
  },
  {
    id: "50",
    name: "Merrell All Out Crush",
    brand: "Merrell",
    price: 100,
    images: ["https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800"],
    description: "Premium Merrell All Out Crush designed for Hiking. Features advanced comfort technology and modern styling.",
    category: "Hiking",
    sizes: [7, 8, 9, 10, 11, 12, 13, 14],
    colors: [{ name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800'] }],
    rating: 4.4,
    reviews: 198,
    inStock: true,
    tags: ["hiking", "merrell"],
    specifications: {
      material: "Synthetic",
      sole: "Vibram",
      weight: "295g",
      origin: "Vietnam"
    }
  }
];

export const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $150', min: 100, max: 150 },
  { label: '$150 - $200', min: 150, max: 200 },
  { label: 'Over $200', min: 200, max: 1000 }
];

export const sizes = [6, 7, 8, 9, 10, 11, 12, 13, 14];

export const colors = [
  { name: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'] },
  { name: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'] },
  { name: 'Red', hex: '#FF0000', images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'] },
  { name: 'Blue', hex: '#0000FF', images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800'] },
  { name: 'Green', hex: '#00FF00', images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800'] },
  { name: 'Gray', hex: '#808080', images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800'] },
  { name: 'Purple', hex: '#800080', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800'] },
  { name: 'Orange', hex: '#FFA500', images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'] }
];
