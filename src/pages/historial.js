import React, { Component } from "react";
import "../inve.css";

class historial extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/historial");
    const data = await response.json();
    //console.log(data);
    const { filtertext } = this.props;
    const inventario = document.getElementById("cuadro-inventario");
    let flag = 0;
    data.forEach(element => {
      inventario.innerHTML += `
      
      <div class="cuadro-animal">
      <div class="texto-inve1">
      <strong>Arete</strong><br/>
      ${element.arete}<br/><br/>
      <strong>Numero de guia</strong><br/>
      ${element.num_guia}<br/><br/>
      <strong>Fecha del movimiento</strong><br/>
      ${element.fecha}<br/><br/>
      
      </div>
      <div class="texto-inve2">
      <strong>Movimiento</strong><br/>
      ${element.movimiento}<br/><br/>
      <strong>Tipo de ganado </strong><br/>
      ${element.tipo}<br/><br/>
      <strong>Raza </strong><br/>
      ${element.raza}<br/><br/>
      </div>
      </div>
      <br/><br/><br/>
      `;
      flag++;
    });
  }

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
          <a className="textobarra" href="/reportes">
            reportes
          </a>
        </div>
        <br />
        <br />

        <div id="cuadro-inventario"></div>
      </>
    );
  }
}

export default historial;
