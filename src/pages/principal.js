import React, { Component } from "react";

import supervaca from "../images/super-vaca.png";

import superlogo from "../images/super-logo.png";

import mail from "../images/mail.png";

import cellphone from "../images/cellphone.png";

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
        <div className="todoelfondo">
          <div className="barra-nav">
            <a className="textobarra" href="/">
              <img className="superlogo" src={superlogo}/>
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
            <a className="textobarra" href="/reportes">
              reportes
            </a>
          </div>
         
          <div className="fecha-hoy">
            <p className="fech dia-hoy"> {dd}</p>
            <p className="fech slash">/</p>
            <p className="fech mes-hoy"> {mm}</p>
          </div>
          <div className="banner-vaca">
            <a href="/captura">
          <img className="vacavaca" src={supervaca} href="/captura"></img>
          </a>
          </div>
          <footer>
            <div className="footer">
            <a className="ayuda iconos-footer"> ¿necesitas ayuda o alguna sugerencia? </a>
            <img className="iconos-footer" src={mail}/>
            <img className="iconos-footer" src={cellphone}/>
            </div>
            </footer>
          </div>
      </>
    );
  }
}

export default principal;
