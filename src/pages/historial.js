import React, { Component } from "react";
import "../inve.css";
import superlogo from "../images/super-logo.png";
import trash from "../images/delete.png";
import { Link } from "react-router-dom";
class historial extends Component {
  async componentDidMount() {
    const response = await fetch("https://server-inve.herokuapp.com/historial");
    const data = await response.json();
    const listavariables = document.getElementById("listavariables");

    let flag = 0;
    data.forEach(element => {
      listavariables.innerHTML += `
      <tr className="titulos" >
      <br/>
      <td>${element.arete}</td>
        <td>${element.num_guia}</td>
        <td>${element.tipo}</td>
        <td>${element.raza}</td>
        <td>${element.fecha}</td>
        <td>${element.movimiento}</td>

      </tr>
      `;
    });
  }

  render() {
    let borrar = async () => {

      const response = await fetch(`https://server-inve.herokuapp.com/borrar/historial/`);
      window.location.reload();
    };
    return (
      <>
        <div className="divtotal">
          <div className="barra-nav">
            <Link className="textobarra" to="/">
              <img className="superlogo" src={superlogo} />
            </Link>
            <Link className="textobarra" to="/captura">
              Captura
            </Link>
            <Link to="/inventario1" className="textobarra">
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
          <div className="tablainventariohistorial">
            <div className="titulosnombres">
              <table id="listavariables">
                <div className="titulos1">
                  <tr className="titulos">
                    <th className="tituloshistorial">Arete</th>
                    <th className="tituloshistorial">Numero de Guia</th>
                    <th className="tituloshistorial">Tipo de Ganado</th>
                    <th className="tituloshistorial">Raza</th>
                    <th className="tituloshistorial">Fecha</th>
                    <th className="tituloshistorial">Movimiento</th>
                  </tr>
                </div>
              </table>
            </div>
          </div>
          <div className="trash">
            <a onClick={borrar}>
              <img className="trash1" src={trash}></img>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default historial;
