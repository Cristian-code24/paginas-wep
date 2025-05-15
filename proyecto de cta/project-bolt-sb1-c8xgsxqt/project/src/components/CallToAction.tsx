import React from 'react';
import { Mail, Share2, BookMarked } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="accion" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Toma Acción Ahora!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hay muchas formas de contribuir a proteger nuestro medio ambiente. 
            ¡Comienza hoy mismo y sé parte del cambio!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookMarked className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Aprende más</h3>
            <p className="text-gray-600 mb-6">
              Edúcate sobre los problemas ambientales y las soluciones. 
              El conocimiento es el primer paso para la acción.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300">
              Recursos educativos
            </button>
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Únete a nuestra campaña</h3>
            <p className="text-gray-600 mb-6">
              Suscríbete a nuestro boletín para recibir consejos, noticias y 
              oportunidades para participar en iniciativas ambientales.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300">
              Suscríbete
            </button>
          </div>

          <div className="bg-orange-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Share2 className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Comparte el mensaje</h3>
            <p className="text-gray-600 mb-6">
              Ayuda a difundir la conciencia ambiental compartiendo esta 
              información con amigos, familiares y en redes sociales.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300">
              Compartir
            </button>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">¿Tienes una idea para ayudar al medio ambiente?</h3>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="idea" className="block text-gray-700 text-sm font-medium mb-2">Tu idea</label>
              <textarea
                id="idea"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Describe tu idea para ayudar al medio ambiente..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium py-2 px-6 rounded-md hover:from-green-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
              >
                Enviar mi idea
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;