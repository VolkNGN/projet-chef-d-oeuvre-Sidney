import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FlipCardGrid from '../components/FlipCardGrid/FlipCardGrid';
import './pages.css';

const Universe = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenue dans mon univers !</h1>
      {/* Autres composants spécifiques à Universe */}
      < FlipCardGrid />
      <Footer />
    </div>
  );
};

export default Universe;
