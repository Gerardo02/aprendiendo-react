import React, { Component } from "react";
import "../inve.css";
import toro from "../images/captura.png";
import Inve from "../components/inve";

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
        <div className="cuerpo">
          <div className="form">
            <input
              className="inputs"
              name="name"
              type="text"
              id="predio"
              required
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">name</span>
            </label>
          </div>
        </div>
        <Inve />
      </>
    );
  }
}

export default inventario;
