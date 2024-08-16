import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import BoutonRDV from '../components/BoutonRDV/BoutonRDV';
import HeroSection from '../components/HeroSection/HeroSection';
import SliderComparison from '../components/ComparisonSlider/ComparisonSlider';
import ReviewCarousel from '../components/ReviewCarousel/ReviewCarousel';
import AnimatedH3 from '../components/AnimatedH3/AnimatedH3text';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BoutonRDV />
      <HeroSection />
      <SliderComparison />
      <ReviewCarousel />
      <AnimatedH3 />
      <Footer />
    </div>
  );
};

export default Home;
