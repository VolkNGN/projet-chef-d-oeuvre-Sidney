import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

// Import images
import logoIcon from '../../Assets/Icons/logo.svg';
import heroImage from '../../Assets/photos/Hero.png';
import homeIcon from '../../Assets/Icons/home.svg';
import askIcon from '../../Assets/Icons/ask.svg';
import caseIcon from '../../Assets/Icons/case.svg';
import universeIcon from '../../Assets/Icons/universe.svg';
import phoneIcon from '../../Assets/Icons/phone.svg';

const Header = () => {
  const navigate = useNavigate();

  // Navigation items with icon paths and target routes
  const navigationItems = [
    { label: 'Accueil', icon: homeIcon, path: '/' },
    { label: 'Qui suis-je', icon: askIcon, path: '/about' },
    { label: 'Mon métier', icon: caseIcon, path: '/job' },
    { label: 'Mon Univers', icon: universeIcon, path: '/universe' },
    { label: 'Me contacter', icon: phoneIcon, path: '/contacts' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img className="logo-icon" alt="Logo" src={logoIcon} />
          <div className="logo-text">L’ATELIER PERRIER</div>
          <img className="hero-image" alt="Hero" src={heroImage} />
          <nav className="navigation">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="nav-item"
                onClick={() => navigate(item.path)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.icon} alt={item.label} className="nav-icon" />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
