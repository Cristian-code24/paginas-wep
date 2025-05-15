import React from 'react';
import { Trash2, Droplets, Lightbulb, TreePine } from 'lucide-react';

const EnvProtectionSection: React.FC = () => {
  const protectionStrategies = [
    {
      title: 'Gestión de Residuos',
      description: 'Aprende a separar correctamente los residuos y reduce la cantidad de basura que generas diariamente.',
      icon: <Trash2 className="w-10 h-10 text-green-600" />,
      actions: [
        'Separa los residuos orgánicos de los inorgánicos.',
        'Utiliza contenedores específicos para papel, vidrio y plástico.',
        'Compra productos con menos embalaje.',
        'Lleva tus propias bolsas al supermercado.'
      ]
    },
    {
      title: 'Ahorro de Agua',
      description: 'El agua es un recurso limitado. Pequeños cambios en nuestros hábitos pueden marcar una gran diferencia.',
      icon: <Droplets className="w-10 h-10 text-blue-600" />,
      actions: [
        'Cierra el grifo mientras te cepillas los dientes.',
        'Toma duchas cortas en lugar de baños.',
        'Repara las fugas de agua lo antes posible.',
        'Recoge agua de lluvia para regar las plantas.'
      ]
    },
    {
      title: 'Ahorro de Energía',
      description: 'Reducir el consumo de energía disminuye las emisiones de CO2 y ayuda a combatir el cambio climático.',
      icon: <Lightbulb className="w-10 h-10 text-yellow-600" />,
      actions: [
        'Apaga las luces cuando no las necesites.',
        'Desconecta los aparatos electrónicos que no estés usando.',
        'Utiliza bombillas LED de bajo consumo.',
        'Aprovecha la luz natural durante el día.'
      ]
    },
    {
      title: 'Protección de la Biodiversidad',
      description: 'La biodiversidad es esencial para el equilibrio de los ecosistemas y la supervivencia de las especies.',
      icon: <TreePine className="w-10 h-10 text-green-700" />,
      actions: [
        'Planta árboles y plantas nativas en tu jardín o comunidad.',
        'No adquieras mascotas exóticas o productos derivados de especies en peligro.',
        'Participa en programas de reforestación.',
        'Respeta los espacios naturales cuando los visites.'
      ]
    }
  ];

  return (
    <section id="proteccion" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cómo Proteger Nuestro Planeta</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Existen muchas formas de contribuir a la protección del medio ambiente. Cada pequeña acción cuenta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {protectionStrategies.map((strategy, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {strategy.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{strategy.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{strategy.description}</p>
              <ul className="space-y-2">
                {strategy.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-sm text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Cada acción cuenta</h3>
          <p className="text-lg mb-6">
            Recuerda que la suma de pequeñas acciones individuales puede generar un gran impacto positivo en nuestro planeta.
            ¡Comienza hoy mismo a marcar la diferencia!
          </p>
          <button className="bg-white text-green-700 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Comprométete
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnvProtectionSection;