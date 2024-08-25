import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Universe = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenue dans mon univers !</h1>
      {/* Autres composants spécifiques à Universe */}
      <Footer />
    </div>
  );
};

export default Universe;
