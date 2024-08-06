import React from 'react';
import './HeroSection.css';

// Chemins d'importation d'images corrects
import Hero from '../../Assets/photos/MainHero.png';
import Laurier from '../../Assets/photos/Laurier.png'; // Utilisez une seule image

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img className="laurier-icon left" alt="Laurier gauche" src={Laurier} />
      <img className="hero-icon" alt="Héro principal" src={Hero} />
      <img className="laurier-icon right" alt="Laurier droit" src={Laurier} />
    </div>
  );
};

export default HeroSection;
