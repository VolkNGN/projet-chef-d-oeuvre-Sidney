import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutSection from '../components/AboutSection/AboutSection';
import BoutonRDV from '../components/BoutonRDV/BoutonRDV';

const About = () => {
  return (
    <div>
      <Header />
      <h1 className="about-title">Bienvenue dans mon atelier !</h1>  
      <AboutSection />
      <BoutonRDV /> 
      <Footer />
    </div>
  );
};

export default About;
