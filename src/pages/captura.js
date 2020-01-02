import React, { Component } from "react";
import "../style-captura1.css";
import App2 from "../components/App2";
import superlogo from "../images/super-logo.png";
import { Link } from "react-router-dom";

class captura extends Component {
  render() {
    return (
      <>
        <div className="barra-nav">
          <Link className="textobarra" to="/">
            <img className="superlogo" src={superlogo} />
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
        <App2 />
      </>
    );
  }
}

export default captura;
