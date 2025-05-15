import React, { useState } from 'react';
import { galleryImages } from '../data/environmentalData';
import { X } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="galeria" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Galería</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Imágenes que nos inspiran a cuidar nuestro hogar, el planeta Tierra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                index === 0 ? 'sm:col-span-2' : index === 3 ? 'lg:col-span-2' : ''
              }`}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative h-64 sm:h-72">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300 w-full">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImageData.url} 
                alt={selectedImageData.alt}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-white">
                <p className="text-lg font-medium text-gray-800">{selectedImageData.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;