import React, { Component } from "react";
import historial from "./historial";
import "../inve.css";

class bajas2 extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/bajas");
    const data = await response.json();
    //console.log(data);
    const inventario = document.getElementById("table-inve");
    let flag = 0;
    data.forEach(element => {
      inventario.innerHTML += `
      <tr>
          <td>${element.empresas}</td>
          <td>${element.predio}</td>     
          <td>${element.precio}</td>     
          <td>${element.num_guia}</td>     
          <td>${element.tipo}</td>     
          <td>${element.raza}</td>   
          <td>${element.origen}</td>
          <td>${element.arete}</td>
          <td>${element.fecha_alta}</td>
          <td>${element.fecha_nacimiento}</td>
          <td>${element.peso_compra}</td>
          <td>${element.peso_actual}</td>
          <td>${element.incremento_peso}</td>
          <td>${element.estatus}</td>
          <td>${element.edad}</td>
          <td>${element.ultimo_parto}</td>
          <td>${element.meses_vacia}</td>
          <td>${element.particularidades}</td>
          <td><button class="btn-baja" data-arete=${element.arete} data-numero=${flag}>Recuperar ${element.arete}</button></td>
        </tr>
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
          <a className="textobarra" href="/inventario1">
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
        <table id="table-inve" className="table-inve">
          <tr>
            <th>Empresa</th>
            <th>Predio</th>
            <th>Precio</th>
            <th>Numero de Guia</th>
            <th>Tipo de Ganado</th>
            <th>Raza</th>
            <th>Origen</th>
            <th>Arete</th>
            <th>Fecha de Registro</th>
            <th>Fecha de Nacimiento</th>
            <th>Peso de Compra</th>
            <th>Peso Actual</th>
            <th>Incremento de peso</th>
            <th>Estatus</th>
            <th>Edad (en meses)</th>
            <th>Ultimo Parto</th>
            <th>Meses Vacia</th>
            <th>Particularidades</th>
            <th>Dar de Baja</th>
          </tr>
        </table>
      </>
    );
  }
}

export default bajas2;
