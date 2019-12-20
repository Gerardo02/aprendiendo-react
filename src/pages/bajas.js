import React, { Component } from "react";
import historial from "./historial";
import "../inve.css";

class bajas extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/bajas");
    const data = await response.json();
    //console.log(data);
    const { filtertext } = this.props;
    const inventario = document.getElementById("cuadro-inventario");
    let flag = 0;
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
      ${element.fecha_alta}<br/><br/>
      <strong>Fecha de baja</strong><br/>
      ${element.fecha_baja}<br/>
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
      ${element.particularidades}<br/><br/>
      <strong>Motivo de baja </strong><br/>
      ${element.motivo_baja}<br/>
      </div>
      
      <button class="btn-baja" data-arete=${element.arete} data-numero=${flag}>Recuperar ${element.arete}</button>
      
      </div>
      <br/><br/><br/>
      `;
      flag++;
    });
    document.getElementById("btn-rec").style.display = "none";
    let buttons = document.querySelectorAll("button.btn-baja");
    let button = document.querySelectorAll("button.recuperar-segunda");
    let deleteData = async event => {
      const areteId = event.target.dataset.arete;
      const numId = event.target.dataset.numero;

      const alertaSeguro = window.confirm(
        `Estas seguro que quieres recuperar a ${areteId}?`
      );
      if (alertaSeguro === true) {
        document.getElementById("btn-rec").style.display = "block";
      }
      let fetch1 = async () => {
        window.location.reload();
        const sendToBajas = await fetch(
          `http://localhost:4000/send/bajas?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}`
        );
      };
      let fetch2 = async () => {
        const deleteRow = await fetch(
          `http://localhost:4000/delete/bajas?arete=${areteId}&numGuia=${data[numId].num_guia}`
        );
      };
      let fetch3 = async () => {
        const movimiento = "Recuperado";
        let today3 = new Date();
        let dd3 = today3.getDate();
        let mm3 = today3.getMonth() + 1;
        let yyyy3 = today3.getFullYear();
        let fechaMovimiento = `${dd3}/${mm3}/${yyyy3}`;

        const deleteRow = await fetch(
          `http://localhost:4000/send/historial?tipo=${data[numId].tipo}&numGuia=${data[numId].num_guia}&raza=${data[numId].raza}&arete=${areteId}&fecha=${fechaMovimiento}&movimiento=${movimiento}`
        );
      };

      button.forEach(button => {
        button.addEventListener("click", fetch1);
        button.addEventListener("click", fetch2);
        button.addEventListener("click", fetch3);
      });
    };

    buttons.forEach(button => {
      button.addEventListener("click", deleteData);
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
        <button className="recuperar-segunda" id="btn-rec">
          Recuperar
        </button>
        <div id="cuadro-inventario"></div>
      </>
    );
  }
}

export default bajas;
