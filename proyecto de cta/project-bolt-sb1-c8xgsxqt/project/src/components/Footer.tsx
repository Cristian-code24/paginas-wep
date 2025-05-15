import React from 'react';
import { Leaf, Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl font-bold">Por un mundo limpio</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Una iniciativa del Colegio Juan Velasco Alvarado para promover la conciencia ambiental 
              y la protección de nuestro planeta.
            </p>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-gray-400">por estudiantes comprometidos</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#proteccion" className="text-gray-400 hover:text-white transition-colors duration-300">Protección</a></li>
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors duration-300">Consejos</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-white transition-colors duration-300">Galería</a></li>
              <li><a href="#accion" className="text-gray-400 hover:text-white transition-colors duration-300">Toma Acción</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                <span className="text-gray-400">Av. Principal 123, Lima, Perú</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-2 shrink-0" />
                <span className="text-gray-400">+51 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-2 shrink-0" />
                <span className="text-gray-400">contacto@juanvelascoalvarado.edu.pe</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Boletín informativo</h4>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir noticias y actualizaciones sobre nuestras iniciativas ambientales.
            </p>
            <form>
              <div className="flex mb-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  OK
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Nunca compartiremos tu correo electrónico con terceros.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Colegio Juan Velasco Alvarado - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;