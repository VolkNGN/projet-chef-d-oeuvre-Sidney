import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [translateZ, setTranslateZ] = useState(600); // Valeur initiale pour la profondeur Z
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);
  const requestRef = useRef(null);
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false); // État pour la visibilité du titre
  const totalImages = images.length;
  const angleIncrement = 360 / totalImages;
  const defaultRotationSpeed = 0.05; // Vitesse de rotation automatique réduite

  // Fonction d'animation
  const animate = useCallback(() => {
    if (!isDragging) {
      // Ne continue la rotation que si l'utilisateur ne fait pas de drag
      setRotationAngle((prevAngle) => prevAngle + rotationSpeed);
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [rotationSpeed, isDragging]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  // Effet de suivi de la souris (pour desktop)
  const handleMouseMove = (e) => {
    if (carouselRef.current && !isDragging) {
      // Vérifie si le drag n'est pas actif
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
    if (!isDragging) {
      setRotationSpeed(0);
    }
  };

  const handleMouseLeave = () => {
    // Reprendre la rotation automatique
    if (!isDragging) {
      setRotationSpeed(defaultRotationSpeed);
    }
  };

  // Ajustement dynamique de la profondeur Z selon la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1024) {
        setTranslateZ(600); // Valeur pour les grands écrans
      } else if (width > 768) {
        setTranslateZ(400); // Valeur pour les tablettes
      } else if (width > 480) {
        setTranslateZ(300); // Valeur pour les téléphones portables
      } else {
        setTranslateZ(250); // Valeur pour les petits téléphones
      }
    };

    handleResize(); // Appelle initialement pour définir la profondeur Z

    window.addEventListener('resize', handleResize); // Ajoute un écouteur d'événements pour gérer les redimensionnements

    return () => window.removeEventListener('resize', handleResize); // Nettoie l'écouteur lors du démontage du composant
  }, []);

  // Gestion du début du toucher
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX); // Enregistre la position initiale du toucher
    setRotationSpeed(0); // Arrête la rotation automatique lors du drag
  };

  // Gestion du mouvement de glissement
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const newRotationAngle = rotationAngle + (deltaX / window.innerWidth) * 180; // Ajustement de l'angle de rotation
    setRotationAngle(newRotationAngle);
    setStartX(currentX); // Met à jour la position de départ pour le prochain mouvement
  };

  // Fin du toucher
  const handleTouchEnd = () => {
    setIsDragging(false);
    setRotationSpeed(defaultRotationSpeed); // Reprend la rotation automatique après le drag
  };

  // Gestion du début du drag avec la souris
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // Enregistre la position initiale de la souris
    setRotationSpeed(0); // Arrête la rotation automatique lors du drag
  };

  // Gestion du mouvement de glissement avec la souris
  const handleMouseDrag = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    const newRotationAngle = rotationAngle + (deltaX / window.innerWidth) * 180; // Ajustement de l'angle de rotation
    setRotationAngle(newRotationAngle);
    setStartX(currentX); // Met à jour la position de départ pour le prochain mouvement
  };

  // Fin du drag avec la souris
  const handleMouseUp = () => {
    setIsDragging(false);
    setRotationSpeed(defaultRotationSpeed); // Reprend la rotation automatique après le drag
  };

  useEffect(() => {
    const handleMouseUpOutside = () => {
      if (isDragging) {
        setIsDragging(false);
        setRotationSpeed(defaultRotationSpeed); // Reprend la rotation automatique après le drag
      }
    };

    window.addEventListener('mouseup', handleMouseUpOutside); // S'assure que le drag s'arrête si l'utilisateur relâche la souris en dehors du conteneur

    return () => window.removeEventListener('mouseup', handleMouseUpOutside);
  }, [isDragging]);

  // Détection de l'entrée du titre dans la fenêtre de visualisation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
            observer.unobserve(entry.target); // Arrête d'observer une fois visible
          }
        });
      },
      {
        threshold: 0.1, // Triggers when 10% of the element is visible
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2
        className={`carousel-title ${titleVisible ? 'visible' : ''}`}
        ref={titleRef}
      >
        L'art de la tapisserie d'ameublement, où chaque fil raconte une histoire.
      </h2>
      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={(e) => {
          handleMouseMove(e);
          handleMouseDrag(e);
        }}
        onMouseUp={handleMouseUp}
      >
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
                transform: `rotateY(${index * angleIncrement}deg) translateZ(${translateZ}px)`,
              }}
            >
              <img src={image} alt={`carousel-${index}`} draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
