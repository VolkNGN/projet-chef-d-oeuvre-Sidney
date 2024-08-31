import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Formulaire from '../components/formulaire/formulaire';
import './pages.css';

const Contacts = () => {
  return (
    <div>
      <Header />
      <h1>Envie de travailler avec moi ? </h1>
      < Formulaire />
      <Footer />
    </div>
  );
};

export default Contacts;
