import React, { Component } from "react";
import "../inve.css";
import Inve from "../components/inve";
import Filtros from "../components/filtros";
import superlogo from "../images/super-logo.png";

class inventario extends Component {
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

        <br />
        <br />

        <Inve />
      </>
    );
  }
}

export default inventario;
