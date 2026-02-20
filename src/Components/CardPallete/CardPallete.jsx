import React from 'react';
import CardPalleteColorsList from '../CardPalleteColorsList/CardPalleteColorsList';
import './CardPallete.css';

const CardPallete = ({ id, likes, date, colors }) => {
  return (
    // Usamos el 'id' en el HTML para identificar la tarjeta en el DOM
    <div className="card" id={`card-${id}`}>
      
      {/* Parte Superior: Los colores */}
      <CardPalleteColorsList colors={colors} />
      
      {/* Parte Inferior: Info (Likes y Fecha) */}
      <div className="card-footer">
        <button className="like-btn">
          ❤️ <span>{likes}</span>
        </button>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};

export default CardPallete;