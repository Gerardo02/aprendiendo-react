import React, { Component } from "react";
import "../style-captura1.css";
import App2 from "../components/App2";
import superlogo from "../images/super-logo.png";

class captura extends Component {
  render() {
    return (
      <>
        <div className="barra-nav">
          <a className="textobarra" href="/">
            <img className="superlogo" src={superlogo} />
          </a>
          <a className="textobarra" href="/captura">
            Captura
          </a>
          <a className="textobarra" href="/inventario1">
            Inventario
          </a>
          <a className="textobarra" href="/historial">
            Historial
          </a>
          <a className="textobarra" href="/bajas">
            Bajas
          </a>
          <a className="textobarra" href="/reportes">
            Reportes
          </a>
        </div>
        <App2 />
      </>
    );
  }
}

export default captura;
