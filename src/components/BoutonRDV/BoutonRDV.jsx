import React, { useCallback } from 'react';
import './BoutonRDV.css';
import mailIcon from '../../Assets/Icons/mail.svg';

const BoutonRDV = () => {
  const onBoutonRDVContainerClick = useCallback(() => {
    // Logique pour le clic du bouton
    console.log("Rendez-vous pris !");
  }, []);

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
