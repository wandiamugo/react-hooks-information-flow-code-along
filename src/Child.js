import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  return <div 
   onClick={handleClick}
  className="child" style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
