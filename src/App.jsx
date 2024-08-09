import React from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import BoutonRDV from './components/BoutonRDV/BoutonRDV';
import HeroSection from './components/HeroSection/HeroSection';
import SliderComparison from './components/ComparisonSlider/ComparisonSlider';
import ReviewCarousel from './components/ReviewCarousel/ReviewCarousel';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BoutonRDV />
      <HeroSection />
      <SliderComparison />
      <ReviewCarousel />
    </div>
  );
};

export default App;
