import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CakeGallery from './components/CakeGallery';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './animations.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CakeGallery />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;