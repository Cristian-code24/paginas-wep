import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
          alt="Deliciosos pasteles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
          Dulces Delicias
        </h1>
        <p className="text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-300">
          Los pasteles más deliciosos y hermosos de Lima
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-600">
          Ver Catálogo
        </button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default Hero;