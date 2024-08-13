import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewCarousel.css";

const reviews = [
  {
    author: 'Antoine Renon',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Antoine%20Renon',
    text: "Nous avons eu 2 fauteuils à restaurer. Le délai a été respecté et le résultat est au delà de nos attentes !! Nous sommes très contents et nous recommandons fortement Ilona.",
  },
  {
    author: 'Amélie Faye',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Amélie%20Faye',
    text: "Superbe travail et de qualité. Je recommande vivement !",
  },
  {
    author: 'William Cossolias',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=William%20Cossolias',
    text: "Ilona n'est pas seulement adorable et gentille, c'est une merveilleuse tapissière. Nous ne pourrions être plus heureux de la tête de lit qu'elle a créée pour nous, ainsi que des deux fauteuils qu'elle a récupérés.",
  },
  {
    author: 'Sophie Laurent',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Sophie%20Laurent',
    text: "Je suis absolument ravie de mon canapé restauré par Ilona. Le travail est impeccable et le tissu choisi est parfait. Je recommande vivement son service à tous ceux qui cherchent la qualité et le professionnalisme.",
  },
  {
    author: 'Marc Dubois',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Marc%20Dubois',
    text: "Un excellent travail sur notre chaise ancienne. Le projet a pris un peu plus de temps que prévu, mais le résultat final en valait la peine. Merci Ilona !",
  },
  {
    author: 'Claire Petit',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Claire%20Petit',
    text: "La restauration de notre chaise longue a dépassé toutes nos attentes. Ilona a un véritable talent pour donner une nouvelle vie aux meubles anciens.",
  },
  {
    author: 'Pierre Martin',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Pierre%20Martin',
    text: "Service rapide et efficace. Mon fauteuil est comme neuf. Je suis très satisfait du résultat final.",
  },
  {
    author: 'Julie Moreau',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Julie%20Moreau',
    text: "Un travail d'une grande qualité. Le soin apporté à la restauration de notre banc est remarquable. Je ne peux que recommander Ilona.",
  },
  {
    author: 'Thomas Blanchard',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Thomas%20Blanchard',
    text: "Ilona a restauré notre chaise ancienne avec une grande attention aux détails. Le tissu est parfaitement assorti à notre décor, et nous sommes ravis du résultat.",
  },
  {
    author: 'Alice Durand',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Alice%20Durand',
    text: "Ilona a fait un travail incroyable sur nos tabourets de bar. La qualité est au rendez-vous. Merci pour votre professionnalisme.",
  },
];

const TestimonialsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="customers-testimonials-container">
      <h3 className="trust-title">Ils m'ont fait confiance !</h3>
      <div className="customers-testimonials">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`testimonial-item ${
                index === activeSlide ? "active-slide" : ""
              } ${index !== activeSlide ? "inactive-slide" : ""}`}
            >
              <div className="shadow-effect">
                <img src={review.avatar} alt={`${review.author} avatar`} className="testimonial-avatar"/>
                <p>{review.text}</p>
                <div className="testimonial-name">{review.author}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;