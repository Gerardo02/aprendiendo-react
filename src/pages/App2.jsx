import React from "react";
import "../App.css";
import captura from "../images/captura.png";
const App2 = () => {
  return (
    <div className="index-page">
      <a href="captura">
        <img className="img-captura" src={captura} alt="menu captura" />
      </a>
    </div>
  );
};
export default App2;
