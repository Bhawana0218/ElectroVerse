import React from 'react';
import { Award, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">ElectroVerse</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Pioneering electronics innovation with premium quality and cutting-edge technology.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, value: '10K+', label: 'Happy Customers' },
              { icon: Users, value: '500+', label: 'Team Members' },
              { icon: Zap, value: '15+', label: 'Years Experience' },
              { icon: Globe, value: '50+', label: 'Countries Served' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-linear-to-r from-blue-500 to-purple-600 p-2 rounded-full">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Leading the <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Future</span> of Electronics
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in 2008, ElectroVerse has been at the forefront of electronics innovation, 
                delivering premium products that enhance lives and drive productivity worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-linear-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 rounded-full border border-white/20 text-white text-sm">
                  Innovation-Driven
                </span>
                <span className="bg-linear-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 rounded-full border border-white/20 text-white text-sm">
                  Quality-Focused
                </span>
                <span className="bg-linear-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 rounded-full border border-white/20 text-white text-sm">
                  Customer-First
                </span>
              </div>
            </div>
            <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <img
                src="https://irtc-hq.com/wp-content/uploads/2022/08/Innovation-Lab.jpg"
                alt="Innovation"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="bg-linear-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              To empower people worldwide through innovative electronics that enhance daily life, 
              drive productivity, and create meaningful connections in an increasingly digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
