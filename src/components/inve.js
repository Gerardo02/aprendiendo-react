import React, { Component } from "react";
import "../inve.css";
import { Link } from "react-router-dom";


class Inve extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
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
        <td><button class="btn-baja" data-arete=${element.arete} data-numero=${flag} id="btn-top">Dar de baja: ${element.arete}</button></td>
      </tr>
      
      
      `;
      flag++;
    });

    document.getElementById("baja-container").style.display = "none";
    let buttons = document.querySelectorAll("button.btn-baja");
    let button = document.querySelectorAll("button.eliminar");
    let deleteData = async event => {
      const areteId = event.target.dataset.arete;
      const numId = event.target.dataset.numero;

      const alertaSeguro = window.confirm(
        `Estas seguro que quieres borrar ${areteId}?`
      );
      if (alertaSeguro === true) {
        document.getElementById("baja-container").style.display = "block";
      }

      let eliminar = async () => {
        console.log(data[numId].fecha_alta);
        window.location.reload();
        const dia = document.getElementById("dia-baja").value;
        const mes = document.getElementById("mes-baja").value;
        const ano = document.getElementById("ano-baja").value;
        const motivoBaja = document.getElementById("motivo-baja").value;
        const fechaBaja = `${dia}/${mes}/${ano}`;
        const sendToBajas = await fetch(
          `http://localhost:4000/send?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}&motivoBaja=${motivoBaja}&fechaBaja=${fechaBaja}`
        );
      };
      let eliminarBien = async () => {
        const deleteRow = await fetch(
          `http://localhost:4000/delete?arete=${areteId}&numGuia=${data[numId].num_guia}`
        );
      };
      let sendHistorial = async () => {
        let today3 = new Date();
        let dd3 = today3.getDate();
        let mm3 = today3.getMonth() + 1;
        let yyyy3 = today3.getFullYear();
        let fechaMovimiento = `${dd3}/${mm3}/${yyyy3}`;
        const movimiento = "Baja";

        const deleteRow = await fetch(
          `http://localhost:4000/send/historial?tipo=${data[numId].tipo}&numGuia=${data[numId].num_guia}&raza=${data[numId].raza}&arete=${areteId}&fecha=${fechaMovimiento}&movimiento=${movimiento}`
        );
      };

      button.forEach(button => {
        button.addEventListener("click", eliminar);
        button.addEventListener("click", eliminarBien);
        button.addEventListener("click", sendHistorial);
      });
    };

    buttons.forEach(button => {
      button.addEventListener("click", deleteData);
    });
  }
  render() {
    let buscarArete = async () => {
      const cuadro = document.getElementById("table-inve");
      const arete = document.getElementById("buscar-arete").value;
      const response = await fetch(
        `http://localhost:4000/buscar/arete?arete=${arete}`
      );
      const data = await response.json();
      let flag = 0;
      //window.location.reload();
      data.forEach(element => {
        cuadro.innerHTML += `
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
          <td><button class="btn-baja" data-arete=${element.arete} data-numero=${flag} id="btn-top">Dar de baja: ${element.arete}</button></td>
        </tr>
        `;
        flag++;
      });
    };
    return (
      <>
        <div className="opcioneshistorial">
        <p className="buscararete"> Buscar arete: </p>
        <input type="text"  id="buscar-arete"></input>
        <button className="inputbuscar" onClick={buscarArete}>
          Aceptrar
        </button>
        <div id="cuadro-arete" />
        <div className="div-actualizar">
          <Link to="/actualizar">
            <button className="btn-actualizar">Actualizar</button>
          </Link>
        </div>
        </div>
        <br/>
        
        <div id="cuadro-inventario">
          <div className="baja-container" id="baja-container">
            <div className="baja-container2">
            <form>
              Motivo de baja: <br />
              <input className="inputbaja inputbajapersona" type="text" id="motivo-baja"></input>
              <br />
              <br />


              <div className="fechabajaconboton">
              Fecha de baja:
              <br />
              <input
                className="inputbaja fecha-baja"
                id="dia-baja"
                type="text"
                maxlength="2"
                ></input>
              /
              <input
                className="inputbaja fecha-baja"
                type="text"
                id="mes-baja"
                maxlength="2"
                ></input>
              /
              <input
                className="inputbaja fechabaja"
                type="text"
                id="ano-baja"
                maxlength="4"
                ></input>
              <br />
              <button className="eliminar">Dar de baja</button>
                </div>
            </form>
          </div>
          </div>
          <div className="tablainventario">
          <div className="titulosnombres">
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
        </div>
        </div>
        </div>
      </>
    );
  }
}

export default Inve;
