import React, { Component } from "react";
import Add from "../components/agregar";
import Filtra from "../components/filtraRepo";
class reporte extends Component {
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
          <a className="textobarra" href="/inventario1">
            inventario
          </a>
          <a className="textobarra" href="/historial">
            historial
          </a>
          <a className="textobarra" href="/bajas">
            bajas
          </a>
          <a className="textobarra" href="/reportes">
            reportes
          </a>
        </div>
        <Filtra />
      </>
    );
  }
}

export default reporte;
