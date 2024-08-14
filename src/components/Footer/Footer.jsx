import React from 'react';
import './Footer.css';
import fioriture from '../../Assets/Icons/fioriture.png';
import homeIcon from '../../Assets/Icons/home.svg';
import askIcon from '../../Assets/Icons/ask.svg';
import caseIcon from '../../Assets/Icons/case.svg';
import universeIcon from '../../Assets/Icons/universe.svg';
import mailIcon from '../../Assets/Icons/mail.svg';
import ArtisanLogo from '../../Assets/photos/ArtisanLogo.png';

const Footer = () => {
  return (
    <>
      <div className="fioriture-container">
        <img src={fioriture} alt="Fioriture" className="fioriture" />
      </div>
      <div className="footer">
        <div className="footer-section atelier-info">
          <div className="atelier-name">L’ATELIER PERRIER</div>
          <div className="atelier-address">ADRESSE: BLABLABLA</div>
        </div>
        <div className="footer-section">
          <div className="section-title">accès rapide</div>
          <div className="quick-links">
            <div className="nav-item">
              <img src={homeIcon} alt="Home" className="nav-icon" />
              <span>Accueil</span>
            </div>
            <div className="nav-item">
              <img src={askIcon} alt="Qui suis-je" className="nav-icon" />
              <span>Qui suis-je</span>
            </div>
            <div className="nav-item">
              <img src={caseIcon} alt="Mon métier" className="nav-icon" />
              <span>Mon métier</span>
            </div>
            <div className="nav-item">
              <img src={universeIcon} alt="Mon Univers" className="nav-icon" />
              <span>Mon Univers</span>
            </div>
            <div className="nav-item">
              <img src={mailIcon} alt="Me contacter" className="nav-icon" />
              <span>Me contacter</span>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="section-title">horaires de travail</div>
          <div className="quick-links">
            <div className="nav-item">Lundi: 09h-18h</div>
            <div className="nav-item">Mardi: 09h-18h</div>
            <div className="nav-item">Mercredi: 09h-18h</div>
            <div className="nav-item">Jeudi: 09h-18h</div>
            <div className="nav-item">Vendredi: 09h-18h</div>
          </div>
        </div>
        <div className="footer-section">
          <img src={ArtisanLogo} alt="Artisan Logo" className="artisan-logo" />
        </div>
      </div>
    </>
  );
};

export default Footer;
