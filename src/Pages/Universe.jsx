import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FlipCardGrid from '../components/FlipCardGrid/FlipCardGrid';
import './pages.css';
import BoutonCreations from '../components/BoutonCreations/BoutonCreations';
import BoutonRDV from '../components/BoutonRDV/BoutonRDV';

const Universe = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenue dans mon univers !</h1>
      {/* Autres composants spécifiques à Universe */}
      < FlipCardGrid />
      <BoutonRDV />
      <Footer />
    </div>
  );
};

export default Universe;
