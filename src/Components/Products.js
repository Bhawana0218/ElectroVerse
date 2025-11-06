import Product1 from '/src/assets/Product1.png';
import Product2 from '/src/assets/Product2.png';
import Product3 from '/src/assets/Product3.png';
import Product4 from '/src/assets/Product4.png';
import Product5 from '/src/assets/Product5.png';
import Product6 from '/src/assets/Product6.png';
import Product7 from '/src/assets/Product7.png';
import Product8 from '/src/assets/Product8.png';
 const Products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 2999.99,
      originalPrice: 3999.99,
      rating: 4.8,
      reviews: 124,
      image: Product1,
      category: "Audio",
      description: "Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
      features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Premium leather padding"],
      inStock: true,
      discount: 25,
      specs: {
        "Battery Life": "30 hours",
        "Connectivity": "Bluetooth 5.0",
        "Driver Size": "40mm",
        "Weight": "250g",
        "Color": "Midnight Black"
      }
    },
    {
      id: 2,
      name: "Smart 4K Ultra HD TV",
      price: 7999.99,
      originalPrice: 9999.99,
      rating: 4.6,
      reviews: 89,
      image: Product2,
      category: "TV & Home Theater",
      description: "Immerse yourself in stunning 4K resolution with HDR technology and smart features for the ultimate entertainment experience.",
      features: ["4K Ultra HD", "HDR10+", "Smart TV OS", "Voice Control"],
      inStock: true,
      discount: 20,
      specs: {
        "Screen Size": "55 inches",
        "Resolution": "3840 x 2160",
        "Refresh Rate": "120Hz",
        "Smart Platform": "Android TV",
        "HDMI Ports": "4 ports"
      }
    },
    {
      id: 3,
      name: "Gaming Laptop RTX 4060",
      price: 14999.99,
      originalPrice: 17999.99,
      rating: 4.9,
      reviews: 256,
      image: Product3,
      category: "Computers",
      description: "Powerful gaming laptop with RTX 4060 graphics, perfect for gaming, content creation, and high-performance computing.",
      features: ["RTX 4060 GPU", "Intel i7 CPU", "16GB RAM", "144Hz Display"],
      inStock: false,
      discount: 17,
      specs: {
        "GPU": "RTX 4060 8GB",
        "CPU": "Intel i7-13700H",
        "RAM": "16GB DDR5",
        "Storage": "1TB SSD",
        "Display": "15.6\" 144Hz"
      }
    },
    {
      id: 4,
      name: "Smart Watch Series 8",
      price: 3999.99,
      originalPrice: 4499.99,
      rating: 4.7,
      reviews: 178,
     image: Product4,
      category: "Wearables",
      description: "Advanced health monitoring, fitness tracking, and smart notifications in a sleek, premium design.",
      features: ["Health Monitoring", "GPS Tracking", "Water Resistant", "7-day Battery"],
      inStock: true,
      discount: 11,
      specs: {
        "Display": "1.4\" AMOLED",
        "Battery": "7 days",
        "Water Rating": "5ATM",
        "Connectivity": "Bluetooth/WiFi",
        "Sensors": "Heart rate, SpO2, GPS"
      }
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      price: 499.99,
      originalPrice: 699.99,
      rating: 4.5,
      reviews: 92,
      image: Product5,
      category: "Accessories",
      description: "Fast wireless charging pad compatible with all Qi-enabled devices, featuring foreign object detection.",
      features: ["Fast Charging", "Qi Compatible", "LED Indicator", "Non-slip Base"],
      inStock: true,
      discount: 29,
      specs: {
        "Power Output": "15W",
        "Compatibility": "Qi-enabled devices",
        "Material": "Silicone base",
        "Input": "USB-C",
        "Safety": "Foreign object detection"
      }
    },
    {
      id: 6,
      name: "4K Action Camera",
      price: 2499.99,
      originalPrice: 2999.99,
      rating: 4.4,
      reviews: 67,
      image: Product6,
      category: "Cameras",
      description: "Capture your adventures in stunning 4K quality with waterproof design and stabilization technology.",
      features: ["4K Video", "Waterproof", "Image Stabilization", "Voice Control"],
      inStock: true,
      discount: 17,
      specs: {
        "Video Resolution": "4K/60fps",
        "Photo Resolution": "20MP",
        "Waterproof": "Up to 10m",
        "Battery": "1200mAh",
        "Storage": "MicroSD up to 256GB"
      }
    },
    {
      id: 7,
      name: "Smart Home Hub",
      price: 1999.99,
      originalPrice: 2499.99,
      rating: 4.6,
      reviews: 145,
      image: Product7,
      category: "Smart Home",
      description: "Control your entire smart home ecosystem with this powerful hub featuring voice control and automation.",
      features: ["Voice Control", "Automation", "Multi-device Support", "App Control"],
      inStock: true,
      discount: 20,
      specs: {
        "Connectivity": "WiFi, Zigbee, Z-Wave",
        "Range": "100ft radius",
        "Supported Devices": "Up to 200",
        "Warranty": "2 years",
        "Color": "Matte Black"
      }
    },
    {
      id: 8,
      name: "Portable SSD 2TB",
      price: 1799.99,
      originalPrice: 2299.99,
      rating: 4.7,
      reviews: 203,
      image: Product8,
      category: "Storage",
      description: "Ultra-fast portable SSD with 2TB capacity and USB 3.2 Gen 2 interface for lightning-fast data transfer.",
      features: ["2TB Capacity", "USB 3.2 Gen 2", "Shock Resistant", "Lightning Fast"],
      inStock: true,
      discount: 22,
      specs: {
        "Capacity": "2TB",
        "Interface": "USB 3.2 Gen 2",
        "Read Speed": "1050MB/s",
        "Write Speed": "1000MB/s",
        "Dimensions": "80 x 50 x 8mm"
      }
    }
  ];

export default Products;