import React, { Component } from "react";
import Filtra from "../components/filtraRepo";
import superlogo from "../images/super-logo.png";
import { Link } from "react-router-dom";
class reporte extends Component {
  render() {
    return (
      <>
        <div className="barra-nav">
          <Link className="textobarra" to="/">
            <img className="superlogo" alt="logo" src={superlogo} />
          </Link>
          <Link className="textobarra" to="/captura">
            Captura
          </Link>
          <Link className="textobarra" to="/inventario1">
            Inventario
          </Link>
          <Link className="textobarra" to="/historial">
            Historial
          </Link>
          <Link className="textobarra" to="/bajas">
            Bajas
          </Link>
          <Link className="textobarra" to="/reportes">
            Reportes
          </Link>
        </div>
        <Filtra />
      </>
    );
  }
}

export default reporte;
