import React, { useState, useEffect, useRef } from 'react';
import './ReviewCarousel.css';

const reviews = [
  {
    author: 'Antoine Renon',
    text: "Nous avons eu 2 fauteuils à restaurer. Le délai a été respecté et le résultat est au delà de nos attentes !! Nous sommes très contents et nous recommandons fortement Ilona. Positif: Qualité, Professionnalisme, Prix.",
  },
  {
    author: 'Amélie Faye',
    text: "Superbe travail et de qualité. Je recommande vivement ! Positif: Qualité, Professionnalisme, Prix.",
  },
  {
    author: 'William Cossolias',
    text: "Ilona n'est pas seulement adorable et gentille, c'est une merveilleuse tapissière. Nous ne pourrions être plus heureux de la tête de lit qu'elle a créée pour nous, ainsi que des deux fauteuils qu'elle a récupérés.",
  },
  {
    author: 'Sophie Laurent',
    text: "Je suis absolument ravie de mon canapé restauré par Ilona. Le travail est impeccable et le tissu choisi est parfait. Je recommande vivement son service à tous ceux qui cherchent la qualité et le professionnalisme.",
  },
  {
    author: 'Marc Dubois',
    text: "Un excellent travail sur notre chaise ancienne. Le projet a pris un peu plus de temps que prévu, mais le résultat final en valait la peine. Merci Ilona !",
  },
  {
    author: 'Claire Petit',
    text: "La restauration de notre chaise longue a dépassé toutes nos attentes. Ilona a un véritable talent pour donner une nouvelle vie aux meubles anciens.",
  },
  {
    author: 'Pierre Martin',
    text: "Service rapide et efficace. Mon fauteuil est comme neuf. Je suis très satisfait du résultat final.",
  },
  {
    author: 'Julie Moreau',
    text: "Un travail d'une grande qualité. Le soin apporté à la restauration de notre banc est remarquable. Je ne peux que recommander Ilona.",
  },
  {
    author: 'Thomas Blanchard',
    text: "Ilona a restauré notre chaise ancienne avec une grande attention aux détails. Le tissu est parfaitement assorti à notre décor, et nous sommes ravis du résultat.",
  },
  {
    author: 'Alice Durand',
    text: "La tapissière Ilona a fait un travail incroyable sur nos tabourets de bar. La qualité est au rendez-vous. Merci pour votre professionnalisme.",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const itemsToShow = windowWidth < 768 ? 1 : windowWidth < 1170 ? 2 : 3;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 8500); // Autoplay every 8.5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (translateX < -50) {
      handleNextClick();
    } else if (translateX > 50) {
      handlePrevClick();
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (translateX < -50) {
      handleNextClick();
    } else if (translateX > 50) {
      handlePrevClick();
    }
    setTranslateX(0);
  };

  const visibleReviews = reviews
    .slice(currentIndex, currentIndex + itemsToShow)
    .concat(reviews.slice(0, Math.max(0, currentIndex + itemsToShow - reviews.length)));

  return (
    <div className="customers-testimonials" ref={carouselRef}>
      <div className="testimonial-controls">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div
        className="owl-carousel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {visibleReviews.map((review, index) => (
          <div
            key={index}
            className={`owl-item ${index === 0 ? 'center' : ''} ${
              index === 1 ? 'next' : index === itemsToShow - 1 ? 'prev' : ''
            }`}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
            }}
          >
            <div className="shadow-effect">
              <p>{review.text}</p>
              <div className="testimonial-name">{review.author}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="owl-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`owl-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
