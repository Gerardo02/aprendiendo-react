import React, { Component } from "react";
import "../inve.css";
import toro from "../images/captura.png";
import Inve from "../components/inve";
import Filtros from "../components/filtros";
class inventario extends Component {
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
        <Filtros />
        <br />
        <br />

        <Inve />
      </>
    );
  }
}

export default inventario;
