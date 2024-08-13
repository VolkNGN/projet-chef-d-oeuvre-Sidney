import React from 'react';
import './Footer.css';
import homeIcon from '../../Assets/Icons/home.svg';
import askIcon from '../../Assets/Icons/ask.svg';
import caseIcon from '../../Assets/Icons/case.svg';
import phoneIcon from '../../Assets/Icons/phone.svg';
import universeIcon from '../../Assets/Icons/universe.svg';
import ArtisanLogo from '../../Assets/photos/ArtisanLogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="atelier-info">
          <h4 className="atelier-name">L’ATELIER PERRIER</h4>
          <p className="atelier-address">Adresse: BLABLABLA</p>
        </div>
      </div>

      <div className="footer-section">
        <h2 className="section-title">Accès rapide</h2>
        <div className="quick-links">
          <div className="nav-item">
            <img className="nav-icon" src={homeIcon} alt="Accueil" />
            <span>Accueil</span>
          </div>
          <div className="nav-item">
            <img className="nav-icon" src={askIcon} alt="Qui suis-je" />
            <span>Qui suis-je</span>
          </div>
          <div className="nav-item">
            <img className="nav-icon" src={caseIcon} alt="Mon métier" />
            <span>Mon métier</span>
          </div>
          <div className="nav-item">
            <img className="nav-icon" src={universeIcon} alt="Mon Univers" />
            <span>Mon Univers</span>
          </div>
          <div className="nav-item">
            <img className="nav-icon" src={phoneIcon} alt="Me contacter" />
            <span>Me contacter</span>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <h2 className="section-title">Horaires de travail</h2>
        <p>Lundi: 09h-18h</p>
        <p>Mardi: 09h-18h</p>
        <p>Mercredi: 09h-18h</p>
        <p>Jeudi: 09h-18h</p>
        <p>Vendredi: 09h-18h</p>
      </div>

      <div className="footer-section">
        <img className="artisan-logo" src={ArtisanLogo} alt="Artisan Logo" />
      </div>
    </footer>
  );
};

export default Footer;
