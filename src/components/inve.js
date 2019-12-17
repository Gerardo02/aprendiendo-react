import React, { Component } from "react";
import "../inve.css";

class Inve extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
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
      <a href="/actualizar">
      <button>Actualizar ${element.arete}</button>
      </a>
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
        const fechaBaja = `${dia}/${mes}/${ano}`;
        const motivoBaja = document.getElementById("motivo-baja").value;
        console.log(motivoBaja, fechaBaja);
        const sendToBajas = await fetch(
          `http://localhost:4000/send?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}&motivoBaja=${motivoBaja}&fechaBaja=${fechaBaja}`
        );
      };
      let eliminarBien = async () => {
        const deleteRow = await fetch(
          `http://localhost:4000/delete?arete=${areteId}&numGuia=${data[numId].num_guia}`
        );
      };
      button.forEach(button => {
        button.addEventListener("click", eliminar);
        button.addEventListener("click", eliminarBien);
      });
    };

    buttons.forEach(button => {
      button.addEventListener("click", deleteData);
    });
  }
  render() {
    return (
      <>
        <a name="top"></a>
        <div id="cuadro-inventario">
          <div className="baja-container" id="baja-container">
            <form>
              Motivo de baja <br />
              <input type="text" id="motivo-baja"></input>
              <br />
              <br />
              Fecha de baja
              <br />
              <input className="fecha-baja" id="dia-baja" type="text"></input>/
              <input className="fecha-baja" type="text" id="mes-baja"></input>/
              <input
                className="fecha-baja-ano"
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
