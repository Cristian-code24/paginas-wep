import React from 'react';
import { Star, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Dulces Delicias, creamos pasteles artesanales con los mejores ingredientes y mucho amor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad Premium</h3>
            <p className="text-gray-600">
              Utilizamos los mejores ingredientes para crear pasteles excepcionales.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">15 Años de Experiencia</h3>
            <p className="text-gray-600">
              Más de una década creando momentos dulces y especiales.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hechos con Amor</h3>
            <p className="text-gray-600">
              Cada pastel es elaborado con dedicación y pasión por la repostería.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-pink-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Tienes una ocasión especial?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Podemos crear el pastel perfecto para tu celebración. ¡Contáctanos y hagamos algo increíble juntos!
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Hacer Pedido Especial
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;