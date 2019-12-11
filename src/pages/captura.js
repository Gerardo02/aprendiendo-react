import React, { Component } from "react";
import toro from "../images/captura.png";
import "../style-captura1.css";

import App2 from "../components/App2";

class captura extends Component {
  render() {
    return (
      <>
        <div className="barra-nav">
          <a className="textobarra" href="/">
            inicio
          </a>
          <a className="textobarra" href="/captura">
            captura
          </a>
          <a className="textobarra" href="/inventario">
            inventario
          </a>
          <a className="textobarra" href="/historial">
            historial
          </a>
          <a className="textobarra" href="/bajas">
            bajas
          </a>
        </div>
        <App2 />
      </>
    );
  }
}

export default captura;
