import React,{useState, useEffect} from 'react';
import {ShoppingCart, Sparkles, Zap, Truck, Shield, Headphones, ArrowRight, Star, Gift, Mail , Globe, ChevronRight } from "lucide-react";
import image1 from '/src/assets/image1.png';
import image2 from '/src/assets/Image2.png';
import image3 from '/src/assets/Image3.png';
import image4 from '/src/assets/Image4.png';
import image5 from '/src/assets/Image5.png';
import image6 from '/src/assets/Image6.png';
import image7 from '/src/assets/Image7.png';
import image8 from '/src/assets/Image8.png';
import Offer1 from '/src/assets/Offer1.png';
import Offer2 from '/src/assets/Offer2.png';
import Offer3 from '/src/assets/Offer3.png';
const Home = ()=>{
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
     const [backgroundIndex, setBackgroundIndex] = useState(0);

     const backgrounds =[
        'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80',
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
   'https://redbrickkitchen.com/wp-content/uploads/2020/12/best-kitchen-smart-tv.jpg',
   'https://tse2.mm.bing.net/th/id/OIP.jw-hh-7JWvedyEv-2qekaQHaE3?rs=1&pid=ImgDetMain&o=7&rm=3',
   'https://mir-s3-cdn-cf.behance.net/projects/404/579b6a163630903.Y3JvcCwyOTc1LDIzMjcsNjAzLDE4NA.jpg'
    ];

    
    const popularProducts =[
        {id: 1, name: 'Quantum Wireless Headphones', price: 1999.99, originalPrice:2499.99 , rating: 4.8, image: image1 , category: 'Audio'},
        {id: 2, name: 'Nexus Smart Watch Pro', price: 2999.99, originalPrice: 3999.99, rating: 4.7, image: image2, cateogory: 'Wearables'},
        {id: 3, name: 'Infinity 4K Ultra HD TV', price: 7999.99, originalPrice: 9999.99, rating: 4.9, image: image3, category: 'TVs'},
        {id: 4, name: 'Quantum Gaming Laptop', price: 12999.99, originalPrice: 15999.99, rating: 4.6, image: image4, category: 'Computers'},
    ];
    const newArrivals= [
        {id: 5, name: 'Hamony Bluetooth Speaker', price: 899.90,  rating: 4.5, image: image5, category: 'Audio'},
        {id: 6, name: 'Nexus Wireless Charger', price: 399.90,  rating: 4.3, image: image6, category: 'Accessories'},
        {id: 7, name: 'Smart Home HUb Pro', price: 1499.90,  rating: 4.7, image: image7, category: 'Smart Home'},
        {id: 8, name: 'Quantum VR Headset', price: 3999.90,  rating: 4.8, image: image8, category: 'VR'},
    ];

    const exclusiveOffers = [
        {
            id:1, title: 'Quantum Summer Sale', discount: '30% OFF', description: 'On all smartphones and accessories', color: 'from-red-500 to-pink-500', image: Offer1, products: ['iPhone 15 Pro', 'Samsung Galaxy S24', 'AirPods Pro']
        },
        {
            id: 2, title: 'Nexus Tech Deals', discount: '25% OFF', description: 'On laptops and tablets', color: 'from-blue-500 to-purple-500', image: Offer2, products:['MacBook Pro', 'Dell XPS', 'iPad Pro']
        },
        {
            id: 3, title: 'Harmony audio Special', siscount: '40% OFF', description: 'On headphones and speakers', color: 'from-green-500 to-teal-500', image: Offer3, products: ['Sony WH-1000XMS', 'Bose QuitComfort', 'JBL Flip 6']
        },
    ];

    useEffect(() => {
        const backgroundInterval = setInterval(() =>{
            setBackgroundIndex((prev) => (prev+1) % backgrounds.length);
        }, 10000);

        const offInverval = setInterval(() =>{
            setCurrentOfferIndex((prev) => (prev+1) % exclusiveOffers.length);
        }, 5000);

        return () =>{
            clearInterval(backgroundInterval);
            clearInterval(offInverval);
        };
    },[]);

    const handleSubscribe = (e) =>{
        e.preventDefault();
        if (email){
            setIsSubscribed(true);
            setEmail('');
            setTimeout(()=> setIsSubscribed(false), 3000);
        }
    };

    return(
        
         <div className='min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-x-hidden' style={{backgroundImage: `url(${backgrounds[backgroundIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        }}>
            <div className='absolute inset-0 bg-black/70'></div>
            <div className='absolute inset-0 overflow-hidden'>{[...Array(20)].map((_, i)=>(
                <div key={i} className='absolute w-1 h-1 bg-white/20 rounded-full animate-pulse' style={{left: `${Math.random()*100}%`, top:`${Math.random()*100}%`, animationDelay: `${Math.random()*5}s`,
            animationDuration:`${3 + Math.random()*4}s`}}></div>
            ))}</div>

            <div className='relative z-10'>

        {/* Hero Section */}
        <section className="relative py-32 px-4">
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/30 to-purple-900/30"></div>
          <div className="container mx-auto relative z-10 text-center">
            <div className="mb-6">
              <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Welcome to ElectroVerse
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Your Ultimate Destination for Cutting-Edge Electronics & Tech Gadgets. Experience the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center group">
                Shop Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all group">
                Explore Deals
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose ElectroVerse?
              </h2>
              <p className="text-xl text-gray-300">Experience excellence in every purchase</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center p-8 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6 group-hover:bg-blue-600/40 transition-colors">
                  <Truck className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Lightning Fast Delivery</h3>
                <p className="text-gray-400">Free delivery on orders over ₹100 with same-day dispatch</p>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-green-500 transition-all transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-6 group-hover:bg-green-600/40 transition-colors">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Quality Assurance</h3>
                <p className="text-gray-400">100% authentic products with extended warranty</p>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-6 group-hover:bg-purple-600/40 transition-colors">
                  <Headphones className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">24/7 Support</h3>
                <p className="text-gray-400">Round-the-clock customer assistance with expert tech support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Popular Products
                </h2>
                <p className="text-gray-400">Trending items loved by our customers</p>
              </div>
              <button className="text-blue-400 font-semibold hover:text-blue-300 flex items-center group">
                View All <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="group bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-400">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-blue-400">₹{product.price}</span>
                        <span className="ml-2 text-gray-500 line-through">₹{product.originalPrice}</span>
                      </div>
                      <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-110">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Offers Carousel */}
        <section className="py-16 bg-linear-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Exclusive Offers
            </h2>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentOfferIndex * 100}%)` }}>
                {exclusiveOffers.map((offer, index) => (
                  <div key={offer.id} className={`w-full flex shrink-0 ${offer.color} bg-linear-to-r p-12 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-4xl font-bold mb-6">{offer.title}</h3>
                        <div className="text-8xl font-bold mb-6 animate-pulse">{offer.discount}</div>
                        <p className="text-2xl mb-8">{offer.description}</p>
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold mb-4">Featured Products:</h4>
                          <ul className="space-y-2">
                            {offer.products.map((product, idx) => (
                              <li key={idx} className="flex items-center justify-center">
                              
                                {product}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="bg-white text-purple-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center mx-auto">
                          Shop Now <Gift className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex justify-center">
                        <img 
                          src={offer.image} 
                          alt={offer.title} 
                          className="rounded-xl shadow-2xl w-full max-w-md h-84 object-cover border-4 border-white/20"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8 space-x-3">
                {exclusiveOffers.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all ${index === currentOfferIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                    onClick={() => setCurrentOfferIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2 bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  New Arrivals
                </h2>
                <p className="text-gray-400">Latest products in our collection</p>
              </div>
              <button className="text-green-400 font-semibold hover:text-green-300 flex items-center group">
                View All <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newArrivals.map((product, index) => (
                <div 
                  key={product.id}
                  className="group bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      New
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-400">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-400">₹{product.price}</span>
                      <button className="bg-linear-to-r from-green-600 to-blue-600 text-white p-3 rounded-full hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-110">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-linear-to-r from-indigo-900/50 to-purple-900/50">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <Mail className="h-16 w-16 mx-auto mb-6 text-purple-400" />
              <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                Subscribe to our newsletter and get the latest updates on new products, exclusive deals, and tech news.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-l-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button 
                type="submit"
                className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-r-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <div className="mt-4 text-green-400 font-semibold animate-pulse">
                Thank you for subscribing! 🎉
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
    )
}
export default Home;