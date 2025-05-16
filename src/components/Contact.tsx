import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Teléfonos</h3>
                <p className="text-gray-600">+51 987 654 321</p>
                <p className="text-gray-600">+51 1 234 5678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Correo</h3>
                <p className="text-gray-600">pedidos@dulcesdelicias.pe</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Ubicación</h3>
                <p className="text-gray-600">Av. Arequipa 1234, Lince</p>
                <p className="text-gray-600">Lima, Perú</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Horario</h3>
                <p className="text-gray-600">Lunes a Sábado: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Domingo: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;