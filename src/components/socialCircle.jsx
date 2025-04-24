import React from 'react';
import '../styles/socialCircle.css';

/* Funcion para tener el link dependiendo del nombre */
const getIconUrl = (socialName) => {
  return `https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${socialName}.svg`;
};

const SocialCircle = ({ name, url }) => {
  
  /* Obtener el link de cada icono */
  const iconUrl = getIconUrl(name);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-circle">
      <img 
        src={iconUrl} 
        alt={`${name} icon`} 
        className="social-icon" 
        onError={(e) => {
          // Si el ícono no se carga, mostrar un ícono de error o una imagen por defecto
          e.target.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/error.svg';
        }}
      />
    </a>
  );
};

export default SocialCircle;