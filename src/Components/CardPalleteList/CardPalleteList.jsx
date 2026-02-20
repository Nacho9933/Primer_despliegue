import React from 'react';
import CardPallete from '../CardPallete/CardPallete';
import './CardPalleteList.css';

const CardPalleteList = ({ colors_card }) => {
  return (
    <div className="cards-grid">
      {colors_card.map((card) => (
        <CardPallete 
          key={card.id}      // React necesita esto para ordenar la lista
          id={card.id}       // Pasamos el ID como prop (lo pide la consigna)
          likes={card.likes}
          date={card.date}
          colors={card.colors}
        />
      ))}
    </div>
  );
};

export default CardPalleteList;