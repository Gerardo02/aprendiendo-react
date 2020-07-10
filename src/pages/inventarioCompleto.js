import React, { Component } from "react";
import "../inve.css";
import Inve2 from "../components/inve2";
import superlogo from "../images/super-logo.png";
import { Link } from "react-router-dom";
class inventarioCompleto extends Component {
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

        <br />
        <br />

        <Inve2 />
      </>
    );
  }
}

export default inventarioCompleto;
