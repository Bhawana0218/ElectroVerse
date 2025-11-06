import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import logo from '/src/assets/logo.png';
import Home from "./Home.jsx";
import Product from "./Product.jsx";
import Review from './Review.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [backgroundIndex, setBackgroundIndex] = useState(0);
     const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}

     const backgrounds =[
        'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80',
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
   'https://redbrickkitchen.com/wp-content/uploads/2020/12/best-kitchen-smart-tv.jpg',
   'https://tse2.mm.bing.net/th/id/OIP.jw-hh-7JWvedyEv-2qekaQHaE3?rs=1&pid=ImgDetMain&o=7&rm=3',
   'https://mir-s3-cdn-cf.behance.net/projects/404/579b6a163630903.Y3JvcCwyOTc1LDIzMjcsNjAzLDE4NA.jpg'
    ];


    useEffect(() => {
        const backgroundInterval = setInterval(() =>{
            setBackgroundIndex((prev) => (prev+1) % backgrounds.length);
        }, 10000);

        return () =>{
            clearInterval(backgroundInterval);
        };
    },[]);

    return(
        
        <Router>
      <div
        className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-x-hidden"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
         <div className='absolute inset-0 overflow-hidden'>{[...Array(20)].map((_, i)=>(
                <div key={i} className='absolute w-1 h-1 bg-white/20 rounded-full animate-pulse' style={{left: `${Math.random()*100}%`, top:`${Math.random()*100}%`, animationDelay: `${Math.random()*5}s`,
            animationDuration:`${3 + Math.random()*4}s`}}></div>
            ))}</div>
        <div className="relative z-10">
          {/*  NAVBAR  */}
          <header className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b border-gray-700 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className="h-16 w-26" />
                <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ElectroVerse
                </h1>
              </div>

              <div className="hidden md:flex space-x-8">
                <NavLink
                  to="/"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `font-medium transition-all duration-300 hover:scale-105 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/products"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `font-medium transition-all duration-300 hover:scale-105 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  Products
                </NavLink>

                <NavLink
                  to="/reviews"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `font-medium transition-all duration-300 hover:scale-105 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  Review
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `font-medium transition-all duration-300 hover:scale-105 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `font-medium transition-all duration-300 hover:scale-105 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  Contact
                </NavLink>
                <div className='h-12 w-12 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white flex justify-center -mt-2'>
                <User className='h-10 w-10 rounded-full'/>
                </div>
              </div>

              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden bg-black/70 py-4 px-4 border-t border-gray-700">
                <div className="flex flex-col space-y-4">
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
                  <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Review</Link>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
              </div>
            )}
             
          </header>

          {/*  PAGE ROUTES */}
          <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product/>} />
             <Route path="/reviews" element={<Review />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
          </div>
        </div>
      </div>
    </Router>
    )
}
export default Navbar;
