import React, { Component } from "react";
import "../inve.css";

class Inve extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();
    //console.log(data);
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
      
      <a href="#top" class="top-btn">
      <button class="btn-baja" data-arete=${element.arete} data-numero=${flag}>Dar de baja ${element.arete}</button>
      </a>
      </div>
      <br/><br/><br/>
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
      const cuadro = document.getElementById("cuadro-arete");
      const arete = document.getElementById("buscar-arete").value;
      const response = await fetch(
        `http://localhost:4000/buscar/arete?arete=${arete}`
      );
      const data = await response.json();
      let flag = 0;
      data.forEach(element => {
        cuadro.innerHTML += `
        
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
        
        <a href="#top" class="top-btn">
      <button class="btn-baja" data-arete=${element.arete} data-numero=${flag}>Dar de baja ${element.arete}</button>
      </a>
        </div>
        <br/><br/><br/>
        `;
        flag++;
      });
    };
    return (
      <>
        <div className="div-actualizar">
          <a href="/actualizar">
            <button className="btn-actualizar">Actualizar</button>
          </a>
        </div>
        <a name="top"></a>
        Buscar arete
        <input type="text" id="buscar-arete"></input>
        <button onClick={buscarArete}>Aceptrar</button>
        <div id="cuadro-arete"></div>
        <div id="cuadro-inventario">
          <div className="baja-container" id="baja-container">
            <form>
              Motivo de baja <br />
              <input className="inputbaja" type="text" id="motivo-baja"></input>
              <br />
              <br />
              Fecha de baja
              <br />
              <input
                className="inputbaja fechabaja"
                id="dia-baja"
                type="text"
              ></input>
              /
              <input
                className="inputbaja fechabaja"
                type="text"
                id="mes-baja"
              ></input>
              /
              <input
                className="inputbaja fechabaja"
                type="text"
                id="ano-baja"
              ></input>
              <br />
              <button className="eliminar">Dar de baja</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Inve;
