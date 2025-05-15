import React, { useState, useEffect } from 'react';
import { environmentalFacts } from '../data/environmentalData';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const FactsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % environmentalFacts.length);
    }
  };

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + environmentalFacts.length) % environmentalFacts.length);
    }
  };

  useEffect(() => {
    // Auto-advance carousel
    const intervalId = setInterval(goToNext, 8000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Reset animation state
    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <div className="bg-green-700 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-center mb-8">
            <Quote className="w-16 h-16 text-white opacity-20" />
          </div>
          
          <div className="overflow-hidden">
            <div className="flex justify-center">
              {environmentalFacts.map((fact, index) => (
                <div
                  key={fact.id}
                  className={`w-full shrink-0 transition-all duration-500 ${
                    index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
                  }`}
                  style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                  <p className="text-xl md:text-2xl text-white text-center mb-6 italic">
                    "{fact.text}"
                  </p>
                  <p className="text-sm text-green-200 text-center">
                    — {fact.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {environmentalFacts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300"
            aria-label="Previous fact"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300"
            aria-label="Next fact"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FactsCarousel;