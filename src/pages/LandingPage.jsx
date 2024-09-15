import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CardGrid from '../components/CardGrid';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Branch from '../components/Branch';

const LandingPage = () => {
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

export default LandingPage;
