import React, { Component } from "react";
import "../inve.css";

class Inve extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();
    const inventario = document.getElementById("cuadro-inventario");
    data.forEach(element => {
      inventario.innerHTML += `
      <div class="cuadro-animal">
      <div class="texto-inve1">
      <strong>Empresa </strong><br/>
      ${element.empresas}<br/><br/>
      <strong>Predio </strong><br/>
      ${element.predio}<br/><br/>
      <strong>Precio </strong><br/>
      ${element.precio}<br/><br/>
      <strong>Numero de guia </strong><br/>
      ${element.num_guia}<br/><br/>
      <strong>Tipo de ganado </strong><br/>
      ${element.tipo}<br/><br/>
      <strong>Raza </strong><br/>
      ${element.raza}<br/><br/>
      <strong>Origen </strong><br/>
      ${element.origen}<br/><br/>
      <strong>Arete </strong><br/>
      ${element.arete}<br/><br/>
      <strong>Fecha de registro </strong><br/>
      ${element.fecha_alta}<br/>
      </div>
      <div class="texto-inve2">
      <strong>Fecha de nacimiento</strong><br/>
      ${element.fecha_nacimiento}<br/><br/>
      <strong>Peso de compra </strong><br/>
      ${element.peso_compra}<br/><br/>
      <strong>Peso actual </strong><br/>
      ${element.peso_actual}<br/><br/>
      <strong>Incremento de peso </strong><br/>
      ${element.incremento_peso}<br/><br/>
      <strong>Estatus </strong><br/>
      ${element.estatus}<br/><br/>
      <strong>Edad (en meses)</strong><br/>
      ${element.edad}<br/><br/>
      <strong>Ultimo parto </strong><br/>
      ${element.ultimo_parto}<br/><br/>
      <strong>Meses vacia </strong><br/>
      ${element.meses_vacia}<br/><br/>
      <strong>Particularidades </strong><br/>
      ${element.particularidades}<br/>
      </div>
      </div>
      <br/><br/><br/>
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
