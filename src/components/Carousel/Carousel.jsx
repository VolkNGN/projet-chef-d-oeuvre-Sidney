import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

// Import des images
import Carousel1 from '../../Assets/photos/Carousel1.jpg';
import Carousel2 from '../../Assets/photos/Carousel2.jpg';
import Carousel3 from '../../Assets/photos/Carousel3.jpg';
import Carousel4 from '../../Assets/photos/Carousel4.jpg';
import Carousel5 from '../../Assets/photos/Carousel5.jpg';
import Carousel6 from '../../Assets/photos/Carousel6.jpg';
import Carousel7 from '../../Assets/photos/Carousel7.jpg';
import Carousel8 from '../../Assets/photos/Carousel8.jpg';
import Carousel9 from '../../Assets/photos/Carousel9.jpg';

// Import des icônes
import ArrowNext from '../../Assets/Icons/arrownext.svg';
import ArrowPrev from '../../Assets/Icons/arrowprev.svg';

const images = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
  Carousel7,
  Carousel8,
  Carousel9,
];

const Carousel = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(0.05); // Vitesse réduite pour la rotation automatique
  const carouselRef = useRef(null);
  const requestRef = useRef(null);
  const totalImages = images.length;
  const angleIncrement = 360 / totalImages;
  const defaultRotationSpeed = 0.05; // Vitesse de rotation automatique réduite

  // Fonction d'animation
  const animate = () => {
    setRotationAngle((prevAngle) => prevAngle + rotationSpeed);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [rotationSpeed]);

  // Effet de suivi de la souris
  const handleMouseMove = (e) => {
    if (carouselRef.current) {
      const rect = carouselRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const width = rect.width;
      const position = mouseX / width;

      // Ajustement de la vitesse en fonction de la position de la souris
      const newSpeed = (position - 0.5) * 0.2; // Ajustement pour correspondre à la nouvelle vitesse automatique réduite
      setRotationSpeed(newSpeed);
    }
  };

  const handleMouseEnter = () => {
    // Arrêter la rotation automatique lors du survol
    setRotationSpeed(0);
  };

  const handleMouseLeave = () => {
    // Reprendre la rotation automatique
    setRotationSpeed(defaultRotationSpeed);
  };

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="carousel-button prev" onClick={(e) => e.preventDefault()}>
        <img src={ArrowPrev} alt="Previous" />
      </button>
      <div
        className="carousel"
        style={{
          transform: `rotateY(${rotationAngle}deg)`,
          transition: 'transform 0.1s linear', // Transition lisse et rapide
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              transform: `rotateY(${index * angleIncrement}deg) translateZ(625px)`,
            }}
          >
            <img src={image} alt={`carousel-${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={(e) => e.preventDefault()}>
        <img src={ArrowNext} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
