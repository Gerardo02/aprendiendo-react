import React, { Component } from "react";

import fondo from "../images/fondo.mp4";

import "../style-principal.css";

import App2 from "../components/App2";

class principal extends Component {
  render() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return (
      <>
        <div>
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
            <div className="fecha-hoy">
              <p className="dia-hoy"> {dd}</p>
              <p className="slash">/</p>
              <p className="mes-hoy"> {mm}</p>
            </div>
          </div>
          <div className="banner-iconos">Aqui van los iconos</div>

          <video
            className="video-fondo"
            autoPlay
            muted
            loop
            src={fondo}
          ></video>
        </div>
      </>
    );
  }
}

export default principal;
