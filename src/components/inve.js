import React, { Component } from "react";
import "../inve.css";

class Inve extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();
    const inventario = document.getElementById("cuadro-inventario");
    data.forEach(element => {
      inventario.innerHTML += `
      ${element.empresas}<br/>
      ${element.predio}<br/>
      ${element.precio}<br/>
      ${element.num_guia}<br/>
      ${element.tipo}<br/>
      ${element.raza}<br/>
      ${element.origen}<br/>
      ${element.arete}<br/>
      ${element.fecha_alta}<br/>
      ${element.fecha_nacimiento}<br/>
      ${element.peso_compra}<br/>
      ${element.peso_actual}<br/>
      ${element.incremento_peso}<br/>
      ${element.estatus}<br/>
      ${element.edad}<br/>
      ${element.ultimo_parto}<br/>
      ${element.meses_vacia}<br/>
      ${element.particularidades}<br/>
      <br/><br/>
      `;
    });
  }
  render() {
    return (
      <>
        <div id="cuadro-inventario"></div>
      </>
    );
  }
}

export default Inve;
