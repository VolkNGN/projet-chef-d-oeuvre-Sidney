import React from 'react';
import { Parallax } from 'react-parallax'; // Assurez-vous que 'react-parallax' est installé et importé
import './JobDescriptions.css'; // Import du fichier CSS
import banquetteGrise from '../../Assets/photos/banquette_grise.jpeg'; // Chemin correct vers l'image
import tabouretMarron from '../../Assets/photos/tabouret_marron.jpeg'; // Chemin correct vers l'image

const JobDescriptions = () => {
    return (
      <div className="job-descriptions">
        
        <div className="text-section">
          <p className="paragraph">
            Mon métier combine tradition et innovation pour redonner vie à vos meubles. 
            Mais ce dernier a beaucoup évolué au fil des siècles.
          </p>
          <p className="paragraph">
            La tapisserie d'ameublement a commencé au Moyen Âge, principalement pour décorer et isoler les châteaux. 
            Ce n’est qu’à l’époque de la Renaissance, qu’elle atteint un sommet de sophistication.
          </p>
          <p className="paragraph">
            Aux XVIIe et XVIIIe siècles, les styles artistiques ont introduit des motifs plus détaillés et ornés.
            Aujourd'hui, cet art continue d'évoluer en intégrant modernité et designs contemporains.
          </p>
        </div>
  
        {/* Première section avec la banquette grise */}
        <Parallax 
          bgImage={banquetteGrise} 
          strength={300} 
          className="parallax-section" 
          bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
  
        <div className="text-section">
          <p className="paragraph">
            Les artisans tapissiers utilisent une variété de techniques, de la garniture traditionnelle avec du crin et des ressorts, 
            à l'utilisation de mousses et de textiles modernes.
          </p>
          <p className="paragraph">
            Chaque pièce est soigneusement découpée, cousue, et capitonnée, avec des détails tels que des galons 
            et/ou des clous décoratifs pour un rendu impeccable.
          </p>
        </div>
  
        {/* Deuxième section avec le tabouret marron */}
        <Parallax 
          bgImage={tabouretMarron} 
          strength={300} 
          className="parallax-section" 
          bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
  
        <div className="text-section">
          <p className="paragraph">
            Venir dans mon atelier, c'est opter pour la qualité et la durabilité. 
            Chaque pièce est faite sur mesure pour s'adapter à vos besoins, que ce soit pour restaurer un meuble ancien 
            ou créer une nouvelle pièce unique.
          </p>
          <p className="paragraph">
            C'est aussi un choix écoresponsable, privilégiant la restauration à l'achat de meubles neufs.
          </p>
          <p className="paragraph">
            La tapisserie d'ameublement est un art qui transforme chaque meuble en une pièce unique. 
            Je suis dédié à perpétuer cette tradition avec des créations qui allient esthétique et fonctionnalité.
          </p>
          <p className="paragraph">
            Découvrez nos réalisations et laissez vous inspirer par notre savoir-faire.
          </p>
        </div>
        
      </div>
    );
  };
  
  export default JobDescriptions;