import React, { Component } from "react";
import Add from "../components/agregar";
import Filtra from "../components/filtraRepo";
import superlogo from "../images/super-logo.png";

class reporte extends Component {
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
        <Filtra />
      </>
    );
  }
}

export default reporte;
