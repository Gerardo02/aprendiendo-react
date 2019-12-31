import React, { Component } from "react";
import historial from "./historial";
import "../inve.css";
import superlogo from "../images/super-logo.png";


class bajas extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/bajas");
    const data = await response.json();
    let flag = 0;
    const listavariables = document.getElementById("listavariables");
    data.forEach(element => {
      listavariables.innerHTML += `
      
      <tr>
      <td> ${element.empresas} </td>
      <td> ${element.predio} </td>
       <td> ${element.precio} </td>
       <td> ${element.num_guia} </td>
       <td> ${element.tipo} </td>
       <td> ${element.raza} </td>
       <td> ${element.origen} </td>
       <td> ${element.arete} </td>
       <td> ${element.fecha_alta} </td>
       <td> ${element.fecha_nacimiento} </td>
       <td> ${element.peso_compra} </td>
       <td> ${element.peso_actual} </td>
       <td> ${element.estatus} </td>
       <td> ${element.ultimo_parto} </td>
       <td> ${element.particularidades} </td>
       <td> ${element.fecha_baja} </td>
       <td> ${element.motivo_baja} </td>
      
      
       <td>
      <button class="btn-baja" data-arete=${element.arete} data-numero=${flag} >Recuperar ${element.arete}</button>
      </td>
     
     
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
              <img className="superlogo" src={superlogo}/>
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
          Recuperarararara
        </button>
        <div className="tablainventariobajas">
        <div className="titulosnombres">
          <table id="listavariables">
            <div className="titulos1">
           <tr className="titulos">
           <th>empresas</th><th>Predio</th><th>Precio</th><th>N° Guia </th> <th>Tipo de ganado</th><th>Raza </th><th>Origen</th><th>Arete</th><th>Fecha de registro</th><th>Fecha de nacimiento</th><th>Peso de compra</th><th>Peso actual</th><th>Estado del animal</th><th>Ultima fecha de parto</th><th>Particularidad</th><th>Fecha de baja</th><th>Motivo de baja</th><th>Recuperar</th>
           </tr>
           </div>
          
            <tr className="listavariables" >
            </tr>
            
    
          </table>
          </div>
        </div>
        
      </>
    );
  }
}

export default bajas;
