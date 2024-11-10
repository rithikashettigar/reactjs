import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import CakeDetails from './components/CakeDetails';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CategoriesSection />
      <CakeDetails />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
