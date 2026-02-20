import React from "react";
import "./CardPalleteColor.css";

const CardPalleteColor = ({ color }) => {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default CardPalleteColor;
