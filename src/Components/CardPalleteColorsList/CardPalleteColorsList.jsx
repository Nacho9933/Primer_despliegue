import React from 'react';
import CardPalleteColor from '../CardPaletteColor/CardPalleteColor';
import './CardPalleteColorsList.css';

const CardPalleteColorsList = ({ colors }) => {
  return (
    <div className="palette-display">
      {colors.map((color, index) => (
        <CardPalleteColor 
            key={index}
            color={color} 
        />
      ))}
    </div>
  );
};

export default CardPalleteColorsList;