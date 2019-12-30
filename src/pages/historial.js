import React, { Component } from "react";
import "../inve.css";
import superlogo from "../images/super-logo.png";

class historial extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/historial");
    const data = await response.json();
    //console.log(data);
    const { filtertext } = this.props;
    const inventario = document.getElementById("table-inve");
    let flag = 0;
    data.forEach(element => {
      inventario.innerHTML += `
      
      <tr>
        <td>${element.arete}</td>
        <td>${element.num_guia}</td>
        <td>${element.fecha}</td>
        <td>${element.movimiento}</td>
        <td>${element.tipo}</td>
        <td>${element.raza}</td>
      </tr>
      `;
      flag++;
    });
  }

  render() {
    return (
      <>
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
        <br />
        <br />

        <div id="cuadro-inventario"></div>
        <table id="table-inve" className="table-inve">
          <tr>
            <th>Arete</th>
            <th>Numero de Guia</th>
            <th>Fecha</th>
            <th>Movimiento</th>
            <th>Tipo de Ganado</th>
            <th>Raza</th>
          </tr>
        </table>
      </>
    );
  }
}

export default historial;
