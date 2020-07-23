import React, { Component } from "react";
import "../style-captura1.css";
import { Link } from "react-router-dom";

class Actualizar extends Component {
  async componentDidMount() {
    const response = await fetch("https://server-inve.herokuapp.com/agregados");
    const data = await response.json();
    const agregarEstatus = document.getElementById("estatus");
    const agregarParti = document.getElementById("particularidades");
    const agregarOrigen = document.getElementById("origen");

    data.forEach(element => {
      if (element.estatus === null) {
      } else {
        agregarEstatus.innerHTML += `<option value="${element.estatus}">${element.estatus}</option>`;
      }
      if (element.particularidades === null || element.particularidades === "") {
      } else {
        agregarParti.innerHTML += `<option value="${element.particularidades}">${element.particularidades}</option>`;
      }
      if (element.origen === null || element.origen === "") {
      } else {
        agregarOrigen.innerHTML += `<option value="${element.origen}">${element.origen}</option>`;
      }
    });
  }
  render() {
    let addData = async () => {
      const response1 = await fetch("https://server-inve.herokuapp.com/datos");
      const data = await response1.json();
      const arete = document.getElementById("arete").value;
      const pesoActual = document.getElementById("peso-actual").value;
      const dialogOptions = {
        type: "info",
        buttons: ["OK"],
        message: "Falta el arete!!"
      };
      const { dialog } = global.require("electron").remote;
      if (arete !== "") {
        const found = data.find(element => element.arete === `${arete}`);
        console.log(arete);
        console.log(found);
        const pesoinicial = found.peso_compra;
        console.log(pesoinicial);

        let incremento = pesoActual - pesoinicial;

        console.log(incremento);

        const estatus = document.getElementById("estatus").value;

        //fecha de ultimo parto
        let diaVac = document.getElementById("diaVac").value;
        let mesVac = document.getElementById("mesVac").value;
        let anoVac = document.getElementById("anoVac").value;
        let diaVac2 = document.getElementById("diaVac").value;
        let mesVac2 = document.getElementById("mesVac").value;
        let anoVac2 = document.getElementById("anoVac").value;
        let ultimoParto = "";
        let mesesVacia;


        let today2 = new Date();
        let mm2 = today2.getMonth() + 1;
        let yyyy2 = today2.getFullYear();
        console.log(yyyy2);
        if (yyyy2 <= anoVac) {
          mesesVacia = mm2 - mesVac;
        } else if (yyyy2 > anoVac) {
          mesVac = 12 - mesVac;
          yyyy2 = yyyy2 - anoVac;
          yyyy2 = yyyy2 * 12;
          mm2 = 12 - mm2;
          mm2 = yyyy2 - mm2;
          mesesVacia = mm2 + mesVac;
        }
        console.log(mesesVacia);
        let diaCom = document.getElementById("diaCom").value;
        let mesCom = document.getElementById("mesCom").value;
        let anoCom = document.getElementById("anoCom").value;
        let diaCom2 = document.getElementById("diaCom").value;
        let mesCom2 = document.getElementById("mesCom").value;
        let anoCom2 = document.getElementById("anoCom").value;
        let fechaCompra = "";
        let today3 = new Date();
        let mm3 = today2.getMonth() + 1;
        let yyyy3 = today2.getFullYear();
        let edad;
        if (yyyy3 <= anoCom) {
          edad = mm3 - mesCom;
        } else if (yyyy3 > anoCom) {
          mesCom = 12 - mesCom;
          yyyy3 = yyyy3 - anoCom;
          yyyy3 = yyyy3 * 12;
          mm3 = 12 - mm3;
          mm3 = yyyy3 - mm3;
          edad = mm3 + mesCom;
        }

        const particularidades = document.getElementById("particularidades")
          .value;
        //window.location.reload();
        const origen = document.getElementById("origen")
          .value;
        const precio = document.getElementById("precio").value;
        const guia = document.getElementById('guia').value;

        await fetch(
          `https://server-inve.herokuapp.com/actualizar/pesoactual?arete=${arete}&pesoActual=${pesoActual}&incremento=${incremento}`
        );
        await fetch(
          `https://server-inve.herokuapp.com/actualizar/estatus?arete=${arete}&estatus=${estatus}`
        );
        await fetch(
          `https://server-inve.herokuapp.com/actualizar/particularidades?arete=${arete}&particularidades=${particularidades}`
        );
        if (diaVac2 === "" || mesVac2 === "" || anoVac2 === "") {
          await fetch(
            `https://server-inve.herokuapp.com/actualizar/ultimoparto?arete=${arete}&ultimoParto=${ultimoParto}&mesesVacia=${mesesVacia}`
          );
        } else {
          ultimoParto = `${diaVac2}/${mesVac2}/${anoVac2}`;
          await fetch(
            `https://server-inve.herokuapp.com/actualizar/ultimoparto?arete=${arete}&ultimoParto=${ultimoParto}&mesesVacia=${mesesVacia}`
          );
        }
        if (diaCom2 === "" || mesCom2 === "" || anoCom2 === "") {
          await fetch(
            `https://server-inve.herokuapp.com/actualizar/compra?arete=${arete}&compra=${fechaCompra}&edad=${edad}`
          );
        } else {
          fechaCompra = `${diaCom2}/${mesCom2}/${anoCom2}`;
          await fetch(
            `https://server-inve.herokuapp.com/actualizar/compra?arete=${arete}&compra=${fechaCompra}&edad=${edad}`
          );
        }
        await fetch(
          `https://server-inve.herokuapp.com/actualizar/guia?arete=${arete}&guia=${guia}`
        );
        await fetch(
          `https://server-inve.herokuapp.com/actualizar/origen?arete=${arete}&origen=${origen}`
        );
        await fetch(
          `https://server-inve.herokuapp.com/actualizar/precio?arete=${arete}&precio=${precio}`
        );

        window.location.reload();

      } else {
        dialog.showMessageBoxSync(dialogOptions);
      }
    };
    return (
      <>
        <p className="disclaimer">Solo llenar las opciones que se quieran cambiar. <br></br>Las que no se llenen, se tomaran como nulas y no habra cambio alguno.</p>
        <div className="index-page-actualizar">
          <div className="cuadroactualizar">
            <div className="banner-actualizar">
              <div className="input-arete ">

                <p className="areteanimal">Arete del animal: </p>
                <input className=" inputarete" type="text" id="arete"></input>
              </div>
              <div className="div-botonsitos">
                <Link to="/actualizarguia">
                  <button className="botonsito-actualizar regresar">
                    Actualizar con Guia
                  </button>
                </Link>
                <button className="botonsito-actualizar" onClick={addData}>
                  Aceptar
                </button>
                <Link to="/inventario1">
                  <button className="botonsito-actualizar regresar">
                    Regresar
                  </button>
                </Link>
              </div>
            </div>
            <div className="textito-cuadrito">

              Lo que pesa ahora:
              <input
                className="input2 pesoahora"
                maxLength="4"
                type="text"
                id="peso-actual"
              ></input>
              kg
              <br />
              <br />
              Estado del animal
              <br />
              <select id="estatus">
                <option value="">Selecciona el estatus del animal...</option>
              </select>
              <br />
              <br />
              Fecha de nacimiento o de compra:
              <br />
              <input
                className="input2 fechainput"
                type="text"
                maxLength="2"
                id="diaCom"
              />
              /
              <input
                className="input2 fechainput"
                type="text"
                maxLength="2"
                id="mesCom"
              />
              /
              <input
                className="input2 fechainput fechaaño"
                type="text"
                maxLength="4"
                id="anoCom"
              />
              <br />
              <br />
              Ultima fecha en la que pario (Si no lo ha hecho, no escribir nada):
              <br />
              <input
                className="input2 fechainput"
                type="text"
                maxLength="2"
                id="diaVac"
              />
              /
              <input
                className="input2 fechainput"
                type="text"
                maxLength="2"
                id="mesVac"
              />
              /
              <input
                className="input2 fechainput fechaaño"
                type="text"
                maxLength="4"
                id="anoVac"
              />
              <br />
              <br />
              Alguna particularidad que pueda tener el animal
              <br />
              <input text="text" id="particularidades" className="inputarete guia"></input>

              <br />
              <br />
              Num. Guia
              <br />
              <input className="inputarete guia" type="text" id="guia"></input>
              <br />
              <br />
              Origen
              <br />
              <input type="text" className="inputarete guia" id="origen"></input>

              <br />
              <br />
              Precio
              <br />
              <input className="inputarete precio" type="text" id="precio"></input>$
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br />

      </>
    );
  }
}

export default Actualizar;
