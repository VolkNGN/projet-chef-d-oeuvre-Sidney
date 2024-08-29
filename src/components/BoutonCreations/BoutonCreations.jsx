import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './BoutonCreations.css'; // Import du fichier CSS pour ce bouton
import creationIcon from '../../Assets/Icons/universe.svg';

const BoutonCreations = () => {
  const navigate = useNavigate();

  const onBoutonCreationsClick = useCallback(() => {
    navigate('/universe'); // Redirection vers la section "Univers"
  }, [navigate]);

  return (
    <div className="button-container">
      <button className="bouton-creations" onClick={onBoutonCreationsClick}>
        <span className="mes-creations">Mes Créations</span>
        <img className="creation-icon" alt="icône de création" src={creationIcon} />
      </button>
    </div>
  );
};

export default BoutonCreations;
