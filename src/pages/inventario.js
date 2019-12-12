import React, { Component } from "react";
import "../inve.css";
import App2 from "../components/App2";

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
        <body className="cuerpo">
          <div className="form">
            <input
              classname="inputs"
              name="name"
              type="text"
              id="predio"
              required
            />
            <label for="name" classname="label-name">
              <span className="content-name">name</span>
            </label>
          </div>
        </body>
      </>
    );
  }
}

export default inventario;
