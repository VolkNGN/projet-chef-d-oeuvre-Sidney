import React from 'react';
import './AboutSection.css';  // Assurez-vous que ce fichier CSS existe et est configuré correctement

// Importer les images
import chaiseImage from '../../Assets/photos/chaises_multicolores.jpeg';
import chaiseFleurieImage from '../../Assets/photos/chaise_fleurie_basse.jpeg';
import ressortImage from '../../Assets/photos/Ressort_1.jpeg';
import fioritureImage from '../../Assets/Icons/fioriture_composant.png';

const AboutSection = () => {
  return (
    <div className="about-section-container">
      {/* Section avec l'image du ressort et le texte associé */}
      <div className="about-section">
        <img src={ressortImage} alt="Ressort" className="about-image" />
        <p className="about-text">
          Dans mon atelier, chaque pièce que je réalise est plus qu'un simple meuble. 
          C'est une œuvre d'art unique, façonnée avec passion et précision. 
          Laissez-moi vous raconter l'histoire qui se cache derrière chaque fil et chaque couture.
          <img src={fioritureImage} alt="Fioriture" className="about-fioriture" />
        </p>
      </div>
      
      {/* Section avec l'image de la chaise fleurie basse et le texte associé */}
      <div className="about-section reverse">
        <img src={chaiseFleurieImage} alt="Chaise fleurie basse" className="about-image" />
        <p className="about-text">
          Chaque meuble a une âme et une histoire à raconter. Mon objectif est de préserver 
          cette essence tout en lui apportant une touche contemporaine et personnelle. 
          Je m'engage à utiliser des matériaux de la plus haute qualité et des techniques 
          traditionnelles pour garantir des créations durables et esthétiques.
          <img src={fioritureImage} alt="Fioriture" className="about-fioriture" />
        </p>
      </div>

      {/* Dernière section avec l'image des chaises multicolores au-dessus, texte en dessous, et fioriture */}
      <div className="about-section centered">
        <img src={chaiseImage} alt="Chaises multicolores" className="about-image large" />
        <p className="about-text centered-text">
          Ce qui m'anime chaque jour, c'est la possibilité de transformer des meubles ordinaires en véritables œuvres d'art. 
          Voir le sourire de mes clients lorsqu'ils découvrent le résultat final est la plus grande récompense de mon travail.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
