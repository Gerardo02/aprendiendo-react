import React from "react";
import "../App.css";
import toro from "../images/captura.png";
const second = () => {
  return (
    <div className="App">
      captura datos
      <a href="/">
        <img className="img-captura" src={toro} alt="menu captura" />
      </a>
    </div>
  );
};
export default second;
