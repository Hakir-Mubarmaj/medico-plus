import './App.css'
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import SuccessStories from './components/SuccessStories';
import Features from './components/Features';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CardGrid />
      <Testimonials />
      <Features />

      
      
      <Footer />
    </div>
  );
};

export default App;
