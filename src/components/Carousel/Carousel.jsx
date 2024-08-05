// src/components/Carousel/Carousel.jsx
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    'https://picsum.photos/400/200?random=1',
    'https://picsum.photos/400/200?random=2',
    'https://picsum.photos/400/200?random=3',
    'https://picsum.photos/400/200?random=4',
    'https://picsum.photos/400/200?random=5',
    'https://picsum.photos/400/200?random=6',
    'https://picsum.photos/400/200?random=7',
    'https://picsum.photos/400/200?random=8',
  ];

  const handleSelect = (index) => {
    setCurrent(index);
  };

  return (
    <div className="caroussel_diapo">
      {images.map((_, index) => (
        <React.Fragment key={index}>
          <input
            id={`carou_${index + 1}`}
            name="rotation"
            type="radio"
            checked={current === index}
            onChange={() => handleSelect(index)}
          />
          <label htmlFor={`carou_${index + 1}`}></label>
        </React.Fragment>
      ))}

      <div className="contenu_carou">
        <div className="caroussel">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`photo${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
