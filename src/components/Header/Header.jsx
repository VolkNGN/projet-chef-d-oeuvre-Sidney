import { useCallback } from 'react';
import './Header.css';

// Import images
import logoIcon from '../../Assets/Icons/logo.svg'; // Path from Header.jsx to src/logo.svg
import heroImage from '../../Assets/photos/Hero.png'; // Path from Header.jsx to src/Assets/photos/Hero.png
import homeIcon from '../../Assets/Icons/home.svg'; // Path from Header.jsx to src/Assets/Icons/home.svg
import askIcon from '../../Assets/Icons/ask.svg'; // Path from Header.jsx to src/Assets/Icons/ask.svg
import caseIcon from '../../Assets/Icons/case.svg'; // Path from Header.jsx to src/Assets/Icons/case.svg
import universeIcon from '../../Assets/Icons/universe.svg'; // Path from Header.jsx to src/Assets/Icons/universe.svg
import phoneIcon from '../../Assets/Icons/phone.svg'; // Path from Header.jsx to src/Assets/Icons/phone.svg

const Header = () => {
  const onNavigationClick = useCallback((section) => {
    console.log(`Navigating to ${section}`);
    // Implement your navigation logic here
  }, []);

  // Navigation items with icon paths
  const navigationItems = [
    { label: 'Accueil', icon: homeIcon, section: 'home' },
    { label: 'Qui suis-je', icon: askIcon, section: 'about' },
    { label: 'Mon métier', icon: caseIcon, section: 'services' },
    { label: 'Mon Univers', icon: universeIcon, section: 'universe' },
    { label: 'Me contacter', icon: phoneIcon, section: 'contact' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img className="logo-icon" alt="Logo" src={logoIcon} />
          <div className="logo-text">L’ATELIER PERRIER</div>

          <img className="hero-image" alt="Hero" src={heroImage} />

          <nav className="navigation">
            {navigationItems.map((item, index) => (
              <div key={item.label} className="nav-container">
                <div
                  className="nav-item"
                  onClick={() => onNavigationClick(item.section)}
                >
                  <img className="nav-icon" alt={item.label} src={item.icon} />
                  <div className="nav-label">{item.label}</div>
                </div>
                {index < navigationItems.length - 1 && <div className="separator" />}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
