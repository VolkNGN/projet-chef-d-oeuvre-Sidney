import React, { useState } from 'react';
import './FlipCardGrid.css';

// Import des images
import Carousel1 from '../../Assets/photos/Carousel1.jpg';
import Carousel2 from '../../Assets/photos/Carousel2.jpg';
import Carousel3 from '../../Assets/photos/Carousel3.jpg';
import Carousel4 from '../../Assets/photos/Carousel4.jpg';
import Carousel5 from '../../Assets/photos/Carousel5.jpg';
import Carousel6 from '../../Assets/photos/Carousel6.jpg';
import Carousel7 from '../../Assets/photos/Carousel7.jpg';
import Carousel9 from '../../Assets/photos/Carousel9.jpg'; // Carousel8 remplacé

import After1 from '../../Assets/photos/after1.jpg';
import After2 from '../../Assets/photos/after2.jpg';
import After3 from '../../Assets/photos/after3.jpg';
import After4 from '../../Assets/photos/after4.jpg';

import BanquetteGrise from '../../Assets/photos/banquette_grise.jpeg';
import ChaiseFleurieBasse from '../../Assets/photos/chaise_fleurie_basse.jpeg';
import MotifFloral from '../../Assets/photos/motif floral.jpg';
import MotifFloral2 from '../../Assets/photos/motif floral 2.jpg';
import ChaiseBleuCarreau from '../../Assets/photos/chaise bleu motif carreau.jpg';
import ChaisePeruvienne from '../../Assets/photos/chaise peruvienne.jpg';
import GrisNuit from '../../Assets/photos/gris nuit.jpg';
import DessusDeLitOrange from '../../Assets/photos/dessus de lit orange.jpg';
import DessusDeLitBleu from '../../Assets/photos/dessus de lit bleu.jpg';
import BoiteBijoux from '../../Assets/photos/boite à bijoux.jpg';

const images = [
  { src: Carousel1, alt: 'chaise avec des motifs géométriques marron et blanc' },
  { src: Carousel2, alt: 'fauteuil bleu vintage sur une terrasse en pierre' },
  { src: Carousel3, alt: 'chaise avec un design moderne et des motifs géométriques jaunes' },
  { src: Carousel4, alt: 'fauteuil à carreaux noirs et blancs avec un dossier courbé' },
  { src: Carousel5, alt: 'coin salon gris et moderne' },
  { src: Carousel6, alt: 'tabouret en bois avec un design classique et élégant' },
  { src: Carousel7, alt: 'chaise avec des motifs colorés dans une pièce décorée' },
  { src: GrisNuit, alt: 'Deux chaises en tissu gris et bois, disposées sur un sol en gravier' }, // Remplacement de Carousel8
  { src: Carousel9, alt: 'canapé gris moderne dans un salon' },

  { src: After1, alt: 'Chaise vintage rénovée avec un nouveau tissu marron et beige' },
  { src: After2, alt: 'Fauteuil ancien avec un tissu bleu et des accoudoirs en bois' },
  { src: After3, alt: 'Chaise rétro avec un motif moderne jaune et blanc' },
  { src: After4, alt: 'Fauteuil classique avec un motif à carreaux noir et blanc' },

  { src: BanquetteGrise, alt: 'Banquette grise moderne avec des coussins dans un salon' },
  { src: ChaiseFleurieBasse, alt: 'Petite chaise basse avec un motif floral, sur une terrasse en pierre' },
  { src: MotifFloral, alt: 'Deux tabourets avec des motifs floraux colorés et des pieds en bois' },
  { src: DessusDeLitOrange, alt: 'Dessus de lit avec motifs floraux orange et noir, au-dessus d\'un lit' },
  { src: MotifFloral2, alt: 'Fauteuil avec des motifs floraux noirs et blancs et accoudoirs en bois' },
  { src: DessusDeLitBleu, alt: 'Dessus de lit bleu hexagonal avec des motifs floraux' }, // Nouvelle image ajoutée
  { src: BoiteBijoux, alt: 'Boîte à bijoux en bois bleu avec des détails dorés et des citations' }, // Nouvelle image ajoutée
];

const FlipCard = ({ image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div 
      className={`flip-card ${flipped ? 'flipped' : ''}`} 
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card-back-content">
            {/* Contenu du dos de la carte */}
          </div>
        </div>
        <div className="flip-card-back">
          <img src={image.src} alt={image.alt} draggable="false" />
        </div>
      </div>
    </div>
  );
};

const FlipCardGrid = () => {
  return (
    <div className="flip-card-grid">
      {images.map((image, index) => (
        <FlipCard
          key={index}
          image={image}
        />
      ))}
    </div>
  );
};

export default FlipCardGrid;
