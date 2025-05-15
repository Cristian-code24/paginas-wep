import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import EnvProtectionSection from './EnvProtectionSection';
import TipsSection from './TipsSection';
import GallerySection from './GallerySection';
import FactsCarousel from './FactsCarousel';
import CallToAction from './CallToAction';
import Footer from './Footer';
import { User } from '../types';

interface MainContentProps {
  user: User;
  onLogout: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleExploreClick = () => {
    const protectionSection = document.getElementById('proteccion');
    protectionSection?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('proteccion');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'proteccion', 'consejos', 'galeria', 'accion'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar 
        user={user} 
        onLogout={onLogout} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <section id="inicio">
        <Hero onExploreClick={handleExploreClick} />
      </section>
      
      <EnvProtectionSection />
      <TipsSection />
      <FactsCarousel />
      <GallerySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default MainContent;