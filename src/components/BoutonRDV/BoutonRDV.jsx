import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import './BoutonRDV.css';
import mailIcon from '../../Assets/Icons/mail.svg';

const BoutonRDV = () => {
  const navigate = useNavigate(); // Initialisation de useNavigate

  const onBoutonRDVContainerClick = useCallback(() => {
    navigate('/contacts'); // Redirection vers la page de contact
  }, [navigate]);

  return (
    <div className="button-container">
      <button className="bouton-rdv" onClick={onBoutonRDVContainerClick}>
        <span className="prendre-rendez-vous">Prendre rendez-vous</span>
        <img className="group-icon" alt="icône d'enveloppe" src={mailIcon} />
      </button>
    </div>
  );
};

export default BoutonRDV;
