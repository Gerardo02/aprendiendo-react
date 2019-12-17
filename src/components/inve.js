import React, { Component } from "react";
import "../inve.css";

class Inve extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();
    //console.log(data);
    const { filtertext } = this.props;
    const inventario = document.getElementById("cuadro-inventario");

    const namelist = data.filter(function(item) {
      const itemm = `${data.arete}`;
      console.log(itemm);
      return itemm === "asd4665";
    });
    console.log(namelist);

    data.forEach(element => {
      inventario.innerHTML += `
  
  <div>
  <div class="cuadro-animal">
  <div class="texto-inve1">
  <p key= ${element.id}>
  <strong>Empresa </strong><br/>
  ${element.empresas}
  <p/>
  <p key= ${element.id}>
  <strong>Predio </strong><br/>
  ${element.predio}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Precio </strong><br/>
  ${element.precio}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Numero de guia </strong><br/>
  ${element.num_guia}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Tipo de ganado </strong><br/>
  ${element.tipo}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Raza </strong><br/>
  ${element.raza}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Origen </strong><br/>
  ${element.origen}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Arete </strong><br/>
  ${element.arete}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Fecha de registro </strong><br/>
  ${element.fecha_alta}<br/>
  <p/>
  </div>
  <div class="texto-inve2">
  <p key= ${element.id}>
  <strong>Fecha de nacimiento</strong><br/>
  ${element.fecha_nacimiento}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Peso de compra </strong><br/>
  ${element.peso_compra}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Peso actual </strong><br/>
  ${element.peso_actual}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Incremento de peso </strong><br/>
  ${element.incremento_peso}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Estatus </strong><br/>
  ${element.estatus}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Edad (en meses)</strong><br/>
  ${element.edad}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Ultimo parto </strong><br/>
  ${element.ultimo_parto}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Meses vacia </strong><br/>
  ${element.meses_vacia}<br/><br/>
  <p/>
  <p key= ${element.id}>
  <strong>Particularidades </strong><br/>
  ${element.particularidades}<br/>
  <p/>
  </div>
  </div>
  <br/><br/><br/>
  </div>
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
