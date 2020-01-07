import React, { Component } from "react";

import supervaca from "../images/super-vaca.png";

import superlogo from "../images/super-logo.png";
import { Link } from "react-router-dom";
import mail from "../images/mail.png";

import cellphone from "../images/cellphone.png";

import "../style-principal.css";

import App2 from "../components/App2";

import icono from "../images/captura.png";

import bajasimg from "../images/bajas.png";

class Principal extends Component {
  async componentDidMount() {
  document.getElementById("contactos").style.display = "none";

}

  
  render() {
    let display = async () => { 
    document.getElementById("contactos").style.display = "block";
    } 
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    return (
      <>
        <div className="todoelfondo">
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

          <div className="fecha-hoy">
            <p className="fech dia-hoy">
              {" "}
              {dd} / {mm}
            </p>
          </div>
          <div>
          <img className="vacalogo" src={superlogo}></img>
          <Link to="/captura">
            <img className="vacavaca" src={supervaca}></img>
          </Link>
          </div>


          <div className="contactos" id="contactos">
            <div className="contactos2">
              <p className="desarrolladores">Desarrolladores del proyecto:</p>
              <div className="informacion">
              <div className="divisionmois">
                <p> Moises Alberto Rodriguez Aceves </p>
                <p> Correo electronico: Mrodrigueza98@gmail.com</p>
                <p> celular: 6444625737</p>
              </div>

              <div className="divisiongera">
              <p> Gera alias el boss en progra </p>
                <p> Correo electronico: </p>
                <p> celular: </p>

              </div>
              </div>
          </div>
          </div>

          <footer>
            <div className="footer">
              <Link onClick={display} className="ayuda iconos-footer">
                {" "}
                ¿necesitas ayuda o alguna sugerencia?{" "}
              </Link>
              <img className="iconos-footer" src={mail} />
              <img className="iconos-footer" src={cellphone} />
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Principal;
