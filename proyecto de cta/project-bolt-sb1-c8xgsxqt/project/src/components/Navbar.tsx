import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { Leaf, Menu, X, LogOut } from 'lucide-react';

interface NavbarProps {
  user: User;
  onLogout: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proteccion', label: 'Protección' },
    { id: 'consejos', label: 'Consejos' },
    { id: 'galeria', label: 'Galería' },
    { id: 'accion', label: 'Toma Acción' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className={`w-6 h-6 mr-2 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
            <span className={`font-bold text-lg ${isScrolled ? 'text-green-600' : 'text-white'}`}>
              Por un mundo limpio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? isScrolled ? 'text-green-600 border-b-2 border-green-600' : 'text-white border-b-2 border-white'
                    : isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-gray-100 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pl-4 border-l border-gray-300">
              <div className="flex items-center">
                <span className={`text-sm font-medium mr-3 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  Hola, {user.username}
                </span>
                <button
                  onClick={onLogout}
                  className="flex items-center text-sm font-medium text-red-500 hover:text-red-700 transition-colors duration-300"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Salir
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-2 py-2 px-4 shadow-lg animate-fadeDown">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium py-2 ${
                  activeSection === item.id
                    ? 'text-green-600 border-l-4 border-green-600 pl-2'
                    : 'text-gray-700 hover:text-green-600 pl-3'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Hola, {user.username}
                </span>
                <button
                  onClick={onLogout}
                  className="flex items-center text-sm font-medium text-red-500 hover:text-red-700"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Salir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;