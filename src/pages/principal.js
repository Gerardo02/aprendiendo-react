import React, { Component } from "react";

import fondo from "../images/fondo.mp4";

import "../style-principal.css";

import App2 from "../components/App2";

import icono from "../images/captura.png";

import bajasimg from "../images/bajas.png";

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
          </div>
          <div className="fecha-hoy">
            <p className="fech dia-hoy"> {dd}</p>
            <p className="fech slash">/</p>
            <p className="fech mes-hoy"> {mm}</p>
          </div>
          <div className="banner-iconos">
            <a className="imagenbarra" href="/captura">
              <img className="icono captura" src={icono} alt="" />
            </a>
            <a className="imagenbarra" href="/inventario">
              <img className="icono inventario" src={icono} alt="" />
            </a>
            <a className="imagenbarra" href="/historial">
              <img className="icono historial" src={icono} alt="" />
            </a>
          </div>
          <div className="div-bajas">
            <a className="imagenbajas" href="/bajas">
              <img className="bajas" src={bajasimg} alt="" />
            </a>
          </div>

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
