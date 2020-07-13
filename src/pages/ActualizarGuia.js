import React, { Component } from "react";
import "../style-captura1.css";
import { Link } from "react-router-dom";

class ActualizarGuia extends Component {
  async componentDidMount() {
    const response = await fetch("https://server-inve.herokuapp.com/agregados");
    const data = await response.json();
    const agregarEstatus = document.getElementById("estatus");
    const agregarParti = document.getElementById("particularidades");
    const agregarOrigen = document.getElementById("origen");

    data.forEach((element) => {
      if (element.estatus === null) {
      } else {
        agregarEstatus.innerHTML += `<option value="${element.estatus}">${element.estatus}</option>`;
      }
      if (element.particularidades === null) {
      } else {
        agregarParti.innerHTML += `<option value="${element.particularidades}">${element.particularidades}</option>`;
      }
      if (element.origen === null) {
      } else {
        agregarOrigen.innerHTML += `<option value="${element.origen}">${element.origen}</option>`;
      }
    });
  }
  render() {
    let addData = async () => {
      const response1 = await fetch("https://server-inve.herokuapp.com/datos");
      const data = await response1.json();
      const guia = document.getElementById("guia").value;
      const dialogOptions = {
        type: "info",
        buttons: ["OK"],
        message: "Falta el arete!!",
      };
      const { dialog } = global.require("electron").remote;
      if (guia !== "") {


        const estatus = document.getElementById("estatus").value;

        //fecha de ultimo parto
        let diaVac = document.getElementById("diaVac").value;
        let mesVac = document.getElementById("mesVac").value;
        let anoVac = document.getElementById("anoVac").value;
        let diaVac2 = document.getElementById("diaVac").value;
        let mesVac2 = document.getElementById("mesVac").value;
        let anoVac2 = document.getElementById("anoVac").value;
        let ultimoParto = "";
        let edad;

        let today2 = new Date();
        let mm2 = today2.getMonth() + 1;
        let yyyy2 = today2.getFullYear();
        console.log(yyyy2);
        if (yyyy2 <= anoVac) {
          edad = mm2 - mesVac;
        } else if (yyyy2 > anoVac) {
          mesVac = 12 - mesVac;
          yyyy2 = yyyy2 - anoVac;
          yyyy2 = yyyy2 * 12;
          mm2 = 12 - mm2;
          mm2 = yyyy2 - mm2;
          edad = mm2 + mesVac;
        }
        console.log(edad);
        const particularidades = document.getElementById("particularidades")
          .value;
        //window.location.reload();
        const origen = document.getElementById("origen").value;
        const precio = document.getElementById("precio").value;



        await fetch(
          `https://server-inve.herokuapp.com/actualizarguia/estatus?guia=${guia}&estatus=${estatus}`
        );
        await fetch(
          `https://server-inve.herokuapp.com/actualizarguia/particularidades?guia=${guia}&particularidades=${particularidades}`
        );
        if (diaVac2 === "" || mesVac2 === "" || anoVac2 === "") {
          await fetch(
            `https://server-inve.herokuapp.com/actualizarguia/edad?guia=${guia}&fecha=${ultimoParto}&edad=${edad}`
          );
        } else {
          ultimoParto = `${diaVac2}/${mesVac2}/${anoVac2}`;
          await fetch(
            `https://server-inve.herokuapp.com/actualizarguia/edad?guia=${guia}&fecha=${ultimoParto}&edad=${edad}`
          );
        }
        await fetch(
          `https://server-inve.herokuapp.com/actualizarguia/origen?guia=${guia}&origen=${origen}`
        );
        await fetch(
          `https://server-inve.herokuapp.com/actualizarguia/precio?guia=${guia}&precio=${precio}`
        );

        window.location.reload();
      } else {
        dialog.showMessageBoxSync(dialogOptions);
      }
    };
    return (
      <>
        <p className="disclaimer">
          Solo llenar las opciones que se quieran cambiar. <br></br>Las que no
          se llenen, se tomaran como nulas y no habra cambio alguno.
        </p>
        <div className="index-page-actualizar">
          <div className="cuadroactualizar">
            <div className="banner-actualizar">
              <div className="input-arete ">
                <p className="areteanimal">Numero de guia: </p>
                <input className=" inputarete" type="text" id="guia"></input>
              </div>
              <div className="div-botonsitos">
                <Link to="/actualizar">
                  <button className="botonsito-actualizar regresar">
                    Actualizar con Arete
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
              <select id="particularidades">
                <option value="">Particularidad del animal</option>
              </select>
              <br />
              <br />
              Origen
              <br />
              <select id="origen">
                <option value="">Selecciona el origen...</option>
              </select>
              <br />
              <br />
              Precio
              <br />
              <input
                className="inputarete precio"
                type="text"
                id="precio"
              ></input>
              $
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default ActualizarGuia;
