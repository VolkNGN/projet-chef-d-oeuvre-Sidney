import React from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import BoutonRDV from './components/BoutonRDV/BoutonRDV';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BoutonRDV />
      <HeroSection />
    </div>
  );
};

export default App;
