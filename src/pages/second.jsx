import React from "react";
import "../App.css";
import captura from "../images/captura.png";
const second = () => {
  return (
    <div className="App">
      captura datos
      <a href="/">
        <img className="img-captura" src={captura} alt="menu captura" />
      </a>
    </div>
  );
};
export default second;
