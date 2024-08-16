import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

// Import images
import homeIcon from '../../Assets/Icons/home.svg';
import askIcon from '../../Assets/Icons/ask.svg';
import caseIcon from '../../Assets/Icons/case.svg';
import universeIcon from '../../Assets/Icons/universe.svg';
import mailIcon from '../../Assets/Icons/mail.svg';
import ArtisanLogo from '../../Assets/photos/ArtisanLogo.png';
import fioritureImage from '../../Assets/Icons/fioriture.png'; // Importation directe de l'image fioriture

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fioriture">
        <img src={fioritureImage} alt="Fioriture" className="fioriture" />
      </div>
      <div className="footer">
        <div className="footer-section atelier-info">
          <div className="atelier-name">L’ATELIER PERRIER</div>
          <div className="atelier-address">ADRESSE: BLABLABLA</div>
        </div>
        <div className="footer-section">
          <div className="section-title">accès rapide</div>
          <div className="quick-links">
            <div className="nav-item" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <img src={homeIcon} alt="Home" className="nav-icon" />
              <span>Accueil</span>
            </div>
            <div className="nav-item" onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>
              <img src={askIcon} alt="Qui suis-je" className="nav-icon" />
              <span>Qui suis-je</span>
            </div>
            <div className="nav-item" onClick={() => navigate('/job')} style={{ cursor: 'pointer' }}>
              <img src={caseIcon} alt="Mon métier" className="nav-icon" />
              <span>Mon métier</span>
            </div>
            <div className="nav-item" onClick={() => navigate('/universe')} style={{ cursor: 'pointer' }}>
              <img src={universeIcon} alt="Mon Univers" className="nav-icon" />
              <span>Mon Univers</span>
            </div>
            <div className="nav-item" onClick={() => navigate('/contacts')} style={{ cursor: 'pointer' }}>
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
