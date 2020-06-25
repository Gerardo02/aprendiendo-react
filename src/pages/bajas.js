import React, { Component } from "react";
import historial from "./historial";
import "../inve.css";
import trash from "../images/delete.png";
import superlogo from "../images/super-logo.png";
import { Link } from "react-router-dom";

class bajas2 extends Component {
  async componentDidMount() {
    const response = await fetch("https://server-inve.herokuapp.com/bajas");
    const data = await response.json();
    let flag = 0;
    document.getElementById("tbl-arete").style.display = "none";
    document.getElementById("anti-hacker").style.display = "none";
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
       <td> ${element.ultimo_parto} </td>
       <td> ${element.particularidades} </td>
       <td> ${element.fecha_baja} </td>
       <td> ${element.motivo_baja} </td>
      
      
       <td>
      <button class="btn-recuperar" data-arete=${element.arete} data-numero=${flag} >Recuperar</button>
      </td>
      <td>
      <button class="btn-baja" data-arete=${element.arete} data-numero=${flag}  >Eliminar</button>
      </td>
     </tr>
     
      `;

      flag++;
    });


    let buttonseliminar = document.querySelectorAll("button.btn-baja");
    let buttoneliminar = document.querySelectorAll("button.recuperar-segunda");


    let deleteData2 = async event => {
      const areteId = event.target.dataset.arete;


      const { dialog } = global.require("electron").remote;

      const dialogOptions = {
        type: "info",
        buttons: ["OK", "Cancel"],
        message: `¿seguro que deseas eliminar ${areteId}? (esto es irreversible)`
      };

      let alertaSeguro = dialog.showMessageBoxSync(dialogOptions, i =>
        console.log(i)
      );
      if (alertaSeguro !== 1) {
        window.location.reload();
        const deleteRow = await fetch(
          `https://server-inve.herokuapp.com/delete/bajas?arete=${areteId}`


        );

      }

    };

    buttonseliminar.forEach(button => {
      button.addEventListener("click", deleteData2);
    });



    document.getElementById("btn-rec").style.display = "none";
    let buttons = document.querySelectorAll("button.btn-recuperar");
    let button = document.querySelectorAll("button.recuperar-segunda");
    let deleteData = async event => {
      const areteId = event.target.dataset.arete;
      const numId = event.target.dataset.numero;

      const { dialog } = global.require("electron").remote;

      const dialogOptions = {
        type: "info",
        buttons: ["OK", "Cancel"],
        message: `¿seguro que deseas recuperar ${areteId}?`
      };

      let alertaSeguro = dialog.showMessageBoxSync(dialogOptions, i =>
        console.log(i)
      );
      if (alertaSeguro !== 1) {
        document.getElementById("btn-rec").style.display = "block";
      }
      let fetch1 = async () => {
        window.location.reload();
        const sendToBajas = await fetch(
          `https://server-inve.herokuapp.com/send/bajas?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}`
        );
      };
      let fetch2 = async () => {
        const deleteRow = await fetch(
          `https://server-inve.herokuapp.com/delete/bajas?arete=${areteId}&numGuia=${data[numId].num_guia}`
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
          `https://server-inve.herokuapp.com/send/historial?tipo=${data[numId].tipo}&numGuia=${data[numId].num_guia}&raza=${data[numId].raza}&arete=${areteId}&fecha=${fechaMovimiento}&movimiento=${movimiento}`
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
    let buscarArete = async () => {

      const cuadro = document.getElementById("tbl-arete");
      const arete = document.getElementById("buscar-arete").value;
      const response = await fetch(
        `https://server-inve.herokuapp.com/buscarbajas/arete?arete=${arete}`
      );
      const data = await response.json();
      document.getElementById("tbl-arete").style.display = "block";
      document.getElementById("anti-hacker").style.display = "block";

      let flag = 0;

      data.forEach(element => {
        cuadro.innerHTML += `
      
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
       <td> ${element.ultimo_parto} </td>
       <td> ${element.particularidades} </td>
       <td> ${element.fecha_baja} </td>
       <td> ${element.motivo_baja} </td>
      
      
       <td>
      <button class="btn-recuperar" data-arete=${element.arete} data-numero=${flag} >Recuperar</button>
      </td>
      <td>
      <button class="btn-baja" data-arete=${element.arete} data-numero=${flag}  >Eliminar</button>
      </td>
     </tr>
      `;

        flag++;
      });


      let buttonseliminar = document.querySelectorAll("button.btn-baja");
      let buttoneliminar = document.querySelectorAll("button.recuperar-segunda");


      let deleteData2 = async event => {
        const areteId = event.target.dataset.arete;


        const { dialog } = global.require("electron").remote;

        const dialogOptions = {
          type: "info",
          buttons: ["OK", "Cancel"],
          message: `¿seguro que deseas eliminar ${areteId}? (esto es irreversible)`
        };

        let alertaSeguro = dialog.showMessageBoxSync(dialogOptions, i =>
          console.log(i)
        );
        if (alertaSeguro !== 1) {
          window.location.reload();
          const deleteRow = await fetch(
            `https://server-inve.herokuapp.com/delete/bajas?arete=${areteId}`


          );

        }

      };

      buttonseliminar.forEach(button => {
        button.addEventListener("click", deleteData2);
      });



      document.getElementById("btn-rec").style.display = "none";
      let buttons = document.querySelectorAll("button.btn-recuperar");
      let button = document.querySelectorAll("button.recuperar-segunda");
      let deleteData = async event => {
        const areteId = event.target.dataset.arete;
        const numId = event.target.dataset.numero;

        const { dialog } = global.require("electron").remote;

        const dialogOptions = {
          type: "info",
          buttons: ["OK", "Cancel"],
          message: `¿seguro que deseas recuperar ${areteId}?`
        };

        let alertaSeguro = dialog.showMessageBoxSync(dialogOptions, i =>
          console.log(i)
        );
        if (alertaSeguro !== 1) {
          document.getElementById("btn-rec").style.display = "block";
        }
        let fetch1 = async () => {
          window.location.reload();
          const sendToBajas = await fetch(
            `https://server-inve.herokuapp.com/send/bajas?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}`
          );
        };
        let fetch2 = async () => {
          const deleteRow = await fetch(
            `https://server-inve.herokuapp.com/delete/bajas?arete=${areteId}&numGuia=${data[numId].num_guia}`
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
            `https://server-inve.herokuapp.com/send/historial?tipo=${data[numId].tipo}&numGuia=${data[numId].num_guia}&raza=${data[numId].raza}&arete=${areteId}&fecha=${fechaMovimiento}&movimiento=${movimiento}`
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


    let borrar = async () => {

      const { dialog } = global.require("electron").remote;

      const dialogOptions = {
        type: "info",
        buttons: ["OK", "Cancel"],
        message: `¿seguro que deseas eliminar las bajas? (este proceso es irreversible)`
      };

      let alertaSeguro = dialog.showMessageBoxSync(dialogOptions, i =>
        console.log(i)
      );
      if (alertaSeguro !== 1) {

        const deleteRow = await fetch(
          `https://server-inve.herokuapp.com/borrar/todaslasbajas`
        );
        window.location.reload();
      }


    };
    return (
      <div className="fullpage">
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

        <div className="opcioneshistorial1">
          <p className="buscararete"> Buscar arete: </p>
          <input type="text" id="buscar-arete"></input>
          <button className="inputbuscar" onClick={buscarArete} >
            Aceptar
          </button>
          <div id="cuadro-arete" />

        </div>

        <br />
        <br />
        <br />
        <div className="recuperarsegunda1" id="btn-rec">
          <div className="recuperarsegunda2" id="btn-rec">
            <button className="recuperar-segunda" id="btn-rec">
              Confirmar
            </button>
          </div>
        </div>
        <div id="cuadro-inventario">

          <div className="tablainventariobajas" id="anti-hacker">
            <div className="titulosnombres" id="anti-hacker">
              <table id="tbl-arete">
                <tbody>

                  <tr className="titulos">
                    <th>Empresas</th>
                    <th>Predio</th>
                    <th>Precio</th>
                    <th>N° Guia </th>
                    <th>Tipo de ganado</th>
                    <th>Raza</th>
                    <th>Origen</th>
                    <th>Arete</th>
                    <th>Fecha de registro</th>
                    <th>Ultima fecha de parto</th>
                    <th>Particularidad</th>
                    <th>Fecha de baja</th>
                    <th>Motivo de baja</th>
                    <th>Recuperar</th>
                    <th>Eliminar</th>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>




          <div className="tablainventariobajas">
            <div className="titulosnombres">
              <table id="listavariables">
                <tbody>

                  <tr className="titulos">
                    <th>Empresas</th>
                    <th>Predio</th>
                    <th>Precio</th>
                    <th>N° Guia </th>
                    <th>Tipo de ganado</th>
                    <th>Raza</th>
                    <th>Origen</th>
                    <th>Arete</th>
                    <th>Fecha de registro</th>
                    <th>Ultima fecha de parto</th>
                    <th>Particularidad</th>
                    <th>Fecha de baja</th>
                    <th>Motivo de baja</th>
                    <th>Recuperar</th>
                    <th>Eliminar</th>
                  </tr>


                  <tr className="listavariables"></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bajas2;
