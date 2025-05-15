import React, { useState } from 'react';
import { environmentalTips } from '../data/environmentalData';
import { Filter } from 'lucide-react';

const TipsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'water', label: 'Agua' },
    { id: 'energy', label: 'Energía' },
    { id: 'waste', label: 'Residuos' },
    { id: 'biodiversity', label: 'Biodiversidad' }
  ];

  const filteredTips = activeCategory === 'all'
    ? environmentalTips
    : environmentalTips.filter(tip => tip.category === activeCategory);

  return (
    <section id="consejos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Consejos para Cuidar el Medio Ambiente</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pequeñas acciones diarias pueden tener un gran impacto en la protección de nuestro planeta.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-10">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Filter className="w-5 h-5 mr-2 text-green-600" />
            <span className="text-gray-700 mr-2">Filtrar por:</span>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTips.map((tip) => (
            <div 
              key={tip.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={tip.imageUrl} 
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{tip.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    tip.category === 'water' ? 'bg-blue-100 text-blue-700' :
                    tip.category === 'energy' ? 'bg-yellow-100 text-yellow-700' :
                    tip.category === 'waste' ? 'bg-red-100 text-red-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {categories.find(c => c.id === tip.category)?.label}
                  </span>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No hay consejos disponibles para esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TipsSection;