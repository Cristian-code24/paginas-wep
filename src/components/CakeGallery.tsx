import React from 'react';
import { cakes } from '../data/cakes';

const CakeGallery = () => {
  return (
    <section id="pasteles" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nuestros Pasteles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div 
              key={cake.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-pink-600 text-white px-4 py-2 rounded-bl-lg">
                  S/. {cake.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cake.name}</h3>
                <p className="text-gray-600 mb-4">{cake.description}</p>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                  Ordenar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeGallery;