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

          <div className="fecha-hoy">
            <p className="fech dia-hoy"> {dd}</p>
            <p className="fech slash">/</p>
            <p className="fech mes-hoy"> {mm}</p>
          </div>
          <img className="vacalogo" src={superlogo} href="/captura"></img>
            <a href="/captura">
          <img className="vacavaca" src={supervaca} ></img>
          </a>
          
          <footer>
            <div className="footer">
              <a className="ayuda iconos-footer">
                {" "}
                ¿necesitas ayuda o alguna sugerencia?{" "}
              </a>
              <img className="iconos-footer" src={mail} />
              <img className="iconos-footer" src={cellphone} />
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default principal;
