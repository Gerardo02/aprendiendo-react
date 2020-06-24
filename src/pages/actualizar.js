import React, { Component } from "react";
import "../style-captura1.css";
import { Link } from "react-router-dom";

class Actualizar extends Component {
  async componentDidMount() {
    const response = await fetch("https://server-inve.herokuapp.com/agregados");
    const data = await response.json();
    const agregarEstatus = document.getElementById("estatus");
    const agregarParti = document.getElementById("particularidades");

    data.forEach(element => {
      if (element.estatus === null) {
      } else {
        agregarEstatus.innerHTML += `<option value="${element.estatus}">${element.estatus}</option>`;
      }
      if (element.particularidades === null) {
      } else {
        agregarParti.innerHTML += `<option value="${element.particularidades}">${element.particularidades}</option>`;
      }
    });
  }
  render() {
    let addData = async () => {
      const response1 = await fetch("https://server-inve.herokuapp.com/datos");
      const data = await response1.json();
      const arete = document.getElementById("arete").value;
      const pesoActual = document.getElementById("peso-actual").value;
      const dialogOptions1 = {
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
        const ultimoParto = `${diaVac}/${mesVac}/${anoVac}`;
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
        const particularidades = document.getElementById("particularidades")
          .value;
        //window.location.reload();

        const dialogOptions = {
          type: "info",
          buttons: ["OK"],
          message:
            "Favor de indicar los valores faltantes para la actualizacion"
        };

        if (
          pesoActual !== "" &&
          estatus !== "" &&
          diaVac !== " " &&
          mesVac !== " " &&
          anoVac !== " " &&
          ultimoParto !== "" &&
          particularidades !== ""
        ) {
          const response = await fetch(
            `https://server-inve.herokuapp.com/actualizar?arete=${arete}&pesoActual=${pesoActual}&estatus=${estatus}&ultimoParto=${ultimoParto}&mesesVacia=${mesesVacia}&particularidades=${particularidades}&incremento=${incremento}`
          );

          window.location.reload();
        } else {
          dialog.showMessageBoxSync(dialogOptions, i => console.log(i));
        }
      } else {
        dialog.showMessageBoxSync(dialogOptions1, i => console.log(i));
      }
    };
    return (
      <>
        <div className="index-page-actualizar">
          <div className="cuadroactualizar">
            <div className="banner-actualizar">
              <div className="input-arete ">
                <p className="areteanimal">Arete del animal: </p>
                <input className=" inputarete" type="text" id="arete"></input>
              </div>
              <div className="div-botonsitos">
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
              Lo que pesa ahora :
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
              Ultima fecha en la que pario (Si nunca lo ha hecho, escribir la
              fecha de nacimiento):
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Actualizar;
