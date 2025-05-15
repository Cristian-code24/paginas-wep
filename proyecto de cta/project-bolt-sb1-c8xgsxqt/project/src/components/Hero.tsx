import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg"
          alt="Bosque verde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Por un mundo limpio
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-8 animate-fadeIn animation-delay-300">
            Colegio Juan Velasco Alvarado
          </h2>
          <p className="text-lg text-gray-200 mb-10 animate-fadeIn animation-delay-600">
            Juntos podemos proteger nuestro planeta y crear un futuro sostenible para las próximas generaciones.
            Descubre cómo puedes marcar la diferencia hoy mismo.
          </p>
          <button
            onClick={onExploreClick}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-900"
          >
            Explorar
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default Hero;