import React, { Component } from "react";
import "../inve.css";
import { Link } from "react-router-dom";

class Inve extends Component {
  async componentDidMount() {
    const response = await fetch("https://server-inve.herokuapp.com/datos");
    const data = await response.json();
    //console.log(data);
    const inventario = document.getElementById("table-inve");
    let flag = 0;
    let flag2 = 0;
    let cont = 0;
    //const contAnimales = document.getElementById('numero-animales');
    document.getElementById("tbl-arete").style.display = "none";
    document.getElementById("anti-hacker").style.display = "none";
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
        <td>${element.peso_compra}</td>
        <td>${element.peso_actual}</td>
        <td>${element.incremento_peso}</td>
        <td>${element.estatus}</td>
        <td>${element.edad}</td>
        <td>${element.ultimo_parto}</td>
        <td>${element.meses_vacia}</td>
        <td>${element.particularidades}</td>
        <td><button class="btn-baja" data-arete=${element.arete} data-numero=${flag} id="btn-top">Baja</button></td>
      </tr>
      
      
      `;
      flag++;
    });



    document.getElementById("baja-container").style.display = "none";
    let buttons = document.querySelectorAll("button.btn-baja");
    let button = document.querySelectorAll("button.eliminar");
    let button2 = document.querySelectorAll("button.eliminarVenta");
    let deleteData = async (event) => {
      const areteId = event.target.dataset.arete;
      const numId = event.target.dataset.numero;

      const { dialog } = global.require("electron").remote;

      const dialogOptions = {
        type: "info",
        buttons: ["OK", "Cancel"],
        message: `¿seguro que desea dar de baja ${areteId}?`,
      };

      let alertaSeguro = dialog.showMessageBoxSync(dialogOptions, (i) =>
        console.log(i)
      );

      if (alertaSeguro !== 1) {
        document.getElementById("baja-container").style.display = "block";
      }

      let eliminar = async () => {
        console.log(data[numId].fecha_alta);
        window.location.reload();
        let today3 = new Date();
        let dd3 = today3.getDate();
        let mm3 = today3.getMonth() + 1;
        let yyyy3 = today3.getFullYear();
        const motivoBaja = document.getElementById("motivo-baja").value;
        const fechaBaja = `${dd3}/${mm3}/${yyyy3}`;
        const sendToBajas = await fetch(
          `https://server-inve.herokuapp.com/send?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}&motivoBaja=${motivoBaja}&fechaBaja=${fechaBaja}`
        );
      };
      let eliminar2 = async () => {
        console.log(data[numId].fecha_alta);
        window.location.reload();
        let today3 = new Date();
        let dd3 = today3.getDate();
        let mm3 = today3.getMonth() + 1;
        let yyyy3 = today3.getFullYear();
        let motivoBaja = document.getElementById("motivo-baja").value;
        motivoBaja = "Vendido";
        const fechaBaja = `${dd3}/${mm3}/${yyyy3}`;
        const sendToBajas = await fetch(
          `https://server-inve.herokuapp.com/send?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}&motivoBaja=${motivoBaja}&fechaBaja=${fechaBaja}`
        );
      };
      let eliminarBien = async () => {
        const deleteRow = await fetch(
          `https://server-inve.herokuapp.com/delete?arete=${areteId}&numGuia=${data[numId].num_guia}`
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
          `https://server-inve.herokuapp.com/send/historial?tipo=${data[numId].tipo}&numGuia=${data[numId].num_guia}&raza=${data[numId].raza}&arete=${areteId}&fecha=${fechaMovimiento}&movimiento=${movimiento}`
        );
      };

      button.forEach((button) => {
        button.addEventListener("click", eliminar);
        button.addEventListener("click", eliminarBien);
        button.addEventListener("click", sendHistorial);
      });
      button2.forEach((button) => {
        button.addEventListener("click", eliminar2);
        button.addEventListener("click", eliminarBien);
        button.addEventListener("click", sendHistorial);
      });
    };
    buttons.forEach((button) => {
      button.addEventListener("click", deleteData);
    });
  }
  render() {
    let buscarArete = async () => {
      const cuadro = document.getElementById("tbl-arete");
      const arete = document.getElementById("buscar-arete").value;
      const response = await fetch(
        `https://server-inve.herokuapp.com/buscar/arete?arete=${arete}`
      );
      const data = await response.json();
      let flag = 0;
      document.getElementById("tbl-arete").style.display = "block";
      document.getElementById("anti-hacker").style.display = "block";
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
          <td>${element.peso_compra}</td>
          <td>${element.peso_actual}</td>
          <td>${element.incremento_peso}</td>
          <td>${element.estatus}</td>
          <td>${element.edad}</td>
          <td>${element.ultimo_parto}</td>
          <td>${element.meses_vacia}</td>
          <td>${element.particularidades}</td>
          <td><button class="btn-baja" data-arete=${element.arete} data-numero=${flag} id="btn-top">Baja</button></td>
        </tr>
        
        `;
        flag++;
      });
      document.getElementById("baja-container").style.display = "none";
      let buttons = document.querySelectorAll("button.btn-baja");
      let button = document.querySelectorAll("button.eliminar");
      let button2 = document.querySelectorAll("button.eliminarVenta");
      let deleteData = async (event) => {
        const areteId = event.target.dataset.arete;
        const numId = event.target.dataset.numero;

        const { dialog } = global.require("electron").remote;

        const dialogOptions = {
          type: "info",
          buttons: ["OK", "Cancel"],
          message: `¿seguro que desea dar de baja ${areteId}?`,
        };

        let alertaSeguro = dialog.showMessageBoxSync(dialogOptions, (i) =>
          console.log(i)
        );

        if (alertaSeguro !== 1) {
          document.getElementById("baja-container").style.display = "block";
        }

        let eliminar = async () => {
          console.log(data[numId].fecha_alta);
          window.location.reload();
          let today3 = new Date();
          let dd3 = today3.getDate();
          let mm3 = today3.getMonth() + 1;
          let yyyy3 = today3.getFullYear();
          const motivoBaja = document.getElementById("motivo-baja").value;
          const fechaBaja = `${dd3}/${mm3}/${yyyy3}`;
          const sendToBajas = await fetch(
            `https://server-inve.herokuapp.com/send?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}&motivoBaja=${motivoBaja}&fechaBaja=${fechaBaja}`
          );
        };
        let eliminar2 = async () => {
          console.log(data[numId].fecha_alta);
          window.location.reload();
          let today3 = new Date();
          let dd3 = today3.getDate();
          let mm3 = today3.getMonth() + 1;
          let yyyy3 = today3.getFullYear();
          let motivoBaja = document.getElementById("motivo-baja").value;
          motivoBaja = "Vendido";
          const fechaBaja = `${dd3}/${mm3}/${yyyy3}`;
          const sendToBajas = await fetch(
            `https://server-inve.herokuapp.com/send?empresas=${data[numId].empresas}&predio=${data[numId].predio}&precio=${data[numId].precio}&numGuia=${data[numId].num_guia}&tipo=${data[numId].tipo}&raza=${data[numId].raza}&origen=${data[numId].origen}&arete=${data[numId].arete}&fechaAlta=${data[numId].fecha_alta}&fechaNac=${data[numId].fecha_nacimiento}&pesoCompra=${data[numId].peso_compra}&pesoActual=${data[numId].peso_actual}&incremento=${data[numId].incremento_peso}&estatus=${data[numId].estatus}&edad=${data[numId].edad}&ultimoParto=${data[numId].ultimo_parto}&mesesVacia=${data[numId].meses_vacia}&particularidades=${data[numId].particularidades}&motivoBaja=${motivoBaja}&fechaBaja=${fechaBaja}`
          );
        };
        let eliminarBien = async () => {
          const deleteRow = await fetch(
            `https://server-inve.herokuapp.com/delete?arete=${areteId}&numGuia=${data[numId].num_guia}`
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
            `https://server-inve.herokuapp.com/send/historial?tipo=${data[numId].tipo}&numGuia=${data[numId].num_guia}&raza=${data[numId].raza}&arete=${areteId}&fecha=${fechaMovimiento}&movimiento=${movimiento}`
          );
        };

        button.forEach((button) => {
          button.addEventListener("click", eliminar);
          button.addEventListener("click", eliminarBien);
          button.addEventListener("click", sendHistorial);
        });
        button2.forEach((button) => {
          button.addEventListener("click", eliminar2);
          button.addEventListener("click", eliminarBien);
          button.addEventListener("click", sendHistorial);
        });
      };
      buttons.forEach((button) => {
        button.addEventListener("click", deleteData);
      });
    };
    return (
      <>
        <div className="opcioneshistorial">
          <p className="buscararete"> Buscar arete: </p>
          <input type="text" id="buscar-arete"></input>
          <button className="inputbuscar" onClick={buscarArete}>
            Aceptrar
          </button>

          <div className="div-actualizar">
            <Link to="/inventario1">
              <button className="btn-InveRegresar">Regresar</button>
            </Link>
            <Link to="/actualizar">
              <button className="btn-actualizar">Actualizar</button>
            </Link>

          </div>
        </div>
        <br />

        <div id="cuadro-inventario">
          <div className="baja-container" id="baja-container">
            <div className="baja-container2">
              <form>
                Motivo de baja: <br />
                <input
                  className="inputbaja inputbajapersona"
                  type="text"
                  id="motivo-baja"
                ></input>
                <br />
                <br />

                <br />
                <button className="eliminarVenta">Venta</button>
                <button className="eliminar">Dar de baja</button>

              </form>
            </div>
          </div>
          <div className="tablainventario1" id="anti-hacker">
            <div className="titulosnombres1" id="anti-hacker">
              <table id="tbl-arete">
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
          <div className="tablainventario">
            <div className="titulosnombres">
              <table id="table-inve" className="table-inve">
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Inve;
