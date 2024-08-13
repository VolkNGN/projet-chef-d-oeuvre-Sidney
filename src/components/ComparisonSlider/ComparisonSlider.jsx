import React, { useRef, useState, useEffect } from 'react';
import './ComparisonSlider.css';

import Before1 from '../../Assets/photos/before1.jpg';
import After1 from '../../Assets/photos/after1.jpg';
import Before2 from '../../Assets/photos/before2.jpg';
import After2 from '../../Assets/photos/after2.jpg';
import Before3 from '../../Assets/photos/before3.jpg';
import After3 from '../../Assets/photos/after3.jpg';
import Before4 from '../../Assets/photos/before4.jpg';
import After4 from '../../Assets/photos/after4.jpg';

const ImageComparison = ({ beforeImage, afterImage, alt }) => {
  const containerRef = useRef(null);
  const [dividerPosition, setDividerPosition] = useState(50);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((event.clientX - left) / width) * 100;
    setDividerPosition(position);
  };

  const handleTouchMove = (event) => {
    if (!containerRef.current) return;

    const touch = event.touches[0];
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((touch.clientX - left) / width) * 100;
    setDividerPosition(position);
  };

  return (
    <div
      className="image-comparison-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div
        className="image-comparison-before"
        style={{
          clipPath: `inset(0% ${100 - dividerPosition}% 0% 0%)`,
          backgroundImage: `url(${beforeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
      ></div>
      <div
        className="image-comparison-after"
        style={{
          backgroundImage: `url(${afterImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
      ></div>
      <div className="divider" style={{ left: `${dividerPosition}%` }}></div>
    </div>
  );
};

const ComparisonSlider = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="slider-comparison">
      <h2 className="title">Héritage et modernité, réunis dans chaque création.</h2>
      <div
        ref={containerRef}
        className={`sliders-container ${isAnimated ? 'animate' : ''}`}
      >
        <ImageComparison beforeImage={Before1} afterImage={After1} alt="Image 1 Avant Après" />
        <ImageComparison beforeImage={Before2} afterImage={After2} alt="Image 2 Avant Après" />
        <ImageComparison beforeImage={Before3} afterImage={After3} alt="Image 3 Avant Après" />
        <ImageComparison beforeImage={Before4} afterImage={After4} alt="Image 4 Avant Après" />
      </div>
    </div>
  );
};

export default ComparisonSlider;
