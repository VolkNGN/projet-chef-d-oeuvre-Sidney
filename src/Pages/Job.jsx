import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import JobDescriptions from '../components/JobDescriptions/JobDescriptions';
import BoutonCreations from '../components/BoutonCreations/BoutonCreations';
import './pages.css';

const Job = () => {
  return (
    <div>
      <Header />
      <h1>l'art de la tapisserie d'ameublement</h1>
      <HeroSection />
      <JobDescriptions />
      <BoutonCreations />
      <Footer />
    </div>
  );
};

export default Job;
