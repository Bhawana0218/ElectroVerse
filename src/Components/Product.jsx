import React, { useState } from 'react';
import { ArrowLeft, Check, Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck ,X} from 'lucide-react';
import products from './Products.js';
const Product = ()=>{
    const [currentView, setCurrentView] = useState('list');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [showMoreProducts, setShowMoreProducts] = useState(false);


   const handleProductClick = (product) => {
  setSelectedProduct(product);
  setCurrentView('detail');
};

    const handleBackToProducts = () => {
  setCurrentView('list');
  setSelectedProduct(null);
};

    const handleBackToDetail = () =>{
        setCurrentView('detail');
    };
    const addToCart = (product) =>{
        const existingItem = cartItems.find(item => item.id ===product.id);
        if(existingItem){
            setCartItems(prev=> prev.map(item =>
                item.id === product.id ? {...item, quantity: item.quantity +1} : item
            ));
        } else {
            setCartItems(prev => [...prev, { ...product, quantity:1}]);
            setQuantities(prev => ({...prev, [product.id]: 1}));
        }
    }
    const removeFromCart = (productId) =>{
        setCartItems(prev => prev.filter(item => item.id !== productId));
        setQuantities(prev => {
            const newQuantities = {...prev};
            delete newQuantities[productId];
            return newQuantities;
        });
    };
 const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const ProductList = () => (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm">
      {/* Header */}
      <header className="bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center space-x-4"> */}
              <button 
                onClick={() => setCurrentView('cart')}
                className="relative p-3 text-gray-300 hover:text-white transition-colors "
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        {/* </div> */}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-purple-900 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Electronics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest in technology with our curated collection of premium electronic devices
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-blue-600 bg-opacity-30 px-6 py-3 rounded-full text-blue-200">
              <span className="font-semibold">Free Shipping</span>
            </div>
            <div className="bg-purple-600 bg-opacity-30 px-6 py-3 rounded-full text-purple-200">
              <span className="font-semibold">2-Year Warranty</span>
            </div>
            <div className="bg-green-600 bg-opacity-30 px-6 py-3 rounded-full text-green-200">
              <span className="font-semibold">Secure Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text ">
            Featured Electronics
          </h2>
          <p className="text-gray-400 text-lg">Discover our premium selection of electronic devices</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-linear-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    -{product.discount}%
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className="absolute top-4 right-4 p-3 bg-gray-900 bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400 hover:text-red-400'
                    }`}
                  />
                </button>
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <span className="bg-red-600 bg-opacity-90 text-white px-6 py-3 rounded-lg font-bold text-lg">
                      OUT OF STOCK
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-blue-400 bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-sm text-gray-400">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-white">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  disabled={!product.inStock}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                    product.inStock
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? (
                    <div className="flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </div>
                  ) : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-16">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl">
            Explore More Products
          </button>
        </div>
      </main>
    </div>
  );

  const ProductDetail = () => {
    if (!selectedProduct) return null;
   return (
    <div className="min-h-screen bg-black/30 backdrop-blur-sm">
      <header className="bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackToProducts}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative w-full h-64 overflow-hidden rounded-xl group-hover:scale-110 transition-transform duration-700">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
               className={`w-full h-full object-contain mx-auto transition-all duration-500 ${
      !selectedProduct.inStock ? 'blur-lg brightness-50 scale-105' : ''
    }`}
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[selectedProduct.image, selectedProduct.image, selectedProduct.image, selectedProduct.image].map((img, idx) => (
                <div key={idx} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg p-3 cursor-pointer hover:shadow-xl border border-gray-700 hover:border-blue-500 transition-all">
                  <img src={img} alt={`Product ${idx + 1}`}
                  //  className="w-full h-20 object-cover rounded-lg" 
                   className={`w-full h-20 object-cover rounded-lg transition-all duration-300 ${
              !selectedProduct.inStock ? 'blur-[1.5px] brightness-50' : ''
            }`}/>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {selectedProduct.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">{selectedProduct.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(selectedProduct.rating)}
                  <span className="ml-2 text-gray-400">({selectedProduct.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-5xl font-bold text-white">₹{selectedProduct.price}</span>
                {selectedProduct.originalPrice > selectedProduct.price && (
                  <span className="text-3xl text-gray-500 line-through">₹{selectedProduct.originalPrice}</span>
                )}
                {selectedProduct.discount > 0 && (
                  <span className="bg-linear-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                    Save {selectedProduct.discount}%
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">{selectedProduct.description}</p>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-4">Key Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="font-bold text-xl text-white mb-4">Technical Specifications:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(selectedProduct.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-400">{key}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(selectedProduct)}
                disabled={!selectedProduct.inStock}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                  selectedProduct.inStock
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                <span>{selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
              
              <button
                onClick={() => toggleFavorite(selectedProduct.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  favorites.includes(selectedProduct.id)
                    ? 'border-red-500 bg-red-900 bg-opacity-20 text-red-400'
                    : 'border-gray-600 hover:border-gray-500 text-gray-400 hover:text-red-400'
                }`}
              >
                <Heart
                  className={`w-6 h-6 ${
                    favorites.includes(selectedProduct.id) ? 'fill-current' : ''
                  }`}
                />
              </button>
              
              <button className="p-4 rounded-xl border-2 border-gray-600 hover:border-gray-500 text-gray-400 hover:text-white transition-all">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };

  const CartPage = () => (
    <div className="min-h-screen bg-black/30 backdrop-blur-sm">
      <header className="bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackToProducts}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
            Shopping Cart
          </h1>
          <p className="text-gray-400 text-lg">Review and manage your selected items</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Add some products to your cart to get started</p>
            <button
              onClick={handleBackToProducts}
              className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 mb-2">₹{item.price}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-bold min-w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xl font-bold text-white">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 bg-red-900 bg-opacity-50 hover:bg-red-800 text-red-400 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 h-fit">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>₹{(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>₹{(getTotalPrice() + getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 mb-4">
                Proceed to Checkout
              </button>

              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Free shipping on orders over ₹500</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>30-day money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );

  return currentView === 'list' ? <ProductList /> : currentView === 'detail' ? <ProductDetail /> : <CartPage />;
};
export default Product;