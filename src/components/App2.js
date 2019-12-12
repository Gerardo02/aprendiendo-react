import React, { Component } from "react";

import "../style-captura1.css";
//import toro from "../images/captura.png";

class App2 extends Component {
  state = {
    loading: true,
    items: null
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:4000/agregados");
    const data = await response.json();

    this.setState({
      items: data[0],
      loading: false
    });

    const agregar = document.getElementById("empresas");
    data.forEach(element => {
      const predio = element.predio;
      agregar.innerHTML += `<option value="${predio}">${predio}</option>`;
    });
    console.log(data);
  }
  render() {
    let addData = async () => {
      const empresas = document.getElementById("empresas").value;
      const predio = document.getElementById("predio").value;
      const precio = document.getElementById("precio").value;
      const numGuia = document.getElementById("numGuia").value;
      const tipo = document.getElementById("tipo").value;
      const raza = document.getElementById("raza").value;
      const origen = document.getElementById("origen").value;
      const arete = document.getElementById("arete").value;

      //fecha de alta
      let diaAlt = document.getElementById("diaAlt").value;
      let mesAlt = document.getElementById("mesAlt").value;
      let anoAlt = document.getElementById("anoAlt").value;
      const fechaAlta = `${diaAlt}/${mesAlt}/${anoAlt}`;

      //fecha de nacimiento
      let dia = document.getElementById("dia").value;
      let mes = document.getElementById("mes").value;
      let ano = document.getElementById("ano").value;
      let today = new Date();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      let edad;
      if (yyyy === ano) {
        edad = mm - mes;
      } else if (yyyy > ano) {
        mes = 12 - mes;
        yyyy = yyyy - ano;
        yyyy = yyyy * 12;
        mm = 12 - mm;
        mm = yyyy - mm;
        edad = mm + mes;
      }
      const fechaNac = `${dia}/${mes}/${ano}`;
      const pesoCompra = document.getElementById("peso-compra").value;
      const pesoActual = document.getElementById("peso-actual").value;
      const incremento = pesoActual - pesoCompra;
      const estatus = document.getElementById("estatus").value;

      //fecha de ultimo parto
      let diaVac = document.getElementById("diaVac").value;
      let mesVac = document.getElementById("mesVac").value;
      let anoVac = document.getElementById("anoVac").value;
      let mesesVacia;
      let today2 = new Date();
      let mm2 = today2.getMonth() + 1;
      let yyyy2 = today2.getFullYear();
      if (yyyy2 === anoVac) {
        mesesVacia = mm2 - mesVac;
      } else if (yyyy2 > anoVac) {
        mesVac = 12 - mesVac;
        yyyy2 = yyyy2 - anoVac;
        yyyy2 = yyyy2 * 12;
        mm2 = 12 - mm2;
        mm2 = yyyy2 - mm2;
        mesesVacia = mm2 + mesVac;
      }
      const ultimoParto = `${diaVac}/${mesVac}/${anoVac}`;
      const particularidades = document.getElementById("particularidades")
        .value;
      const response = await fetch(
        `http://localhost:4000/add?empresas=${empresas}&predio=${predio}&precio=${precio}&numGuia=${numGuia}&tipo=${tipo}&raza=${raza}&origen=${origen}&arete=${arete}&fechaAlta=${fechaAlta}&fechaNac=${fechaNac}&pesoCompra=${pesoCompra}&pesoActual=${pesoActual}&incremento=${incremento}&estatus=${estatus}&edad=${edad}&ultimoParto=${ultimoParto}&mesesVacia=${mesesVacia}&particularidades=${particularidades}`
      );
    };

    return (
      <React.Fragment>
        <div className="index-page">
          <form>
            <div className="cua cuadro-1">
              <div className="banner cua-1">
                <select className="" id="empresas">
                  <option value="">Selecciona una empresa...</option>
                  <option value="Ganadera XX SPR de RL">
                    Ganadera XX SPR de RL
                  </option>
                </select>
                <br />
                <br />
                Predio
                <br />
                <input type="text" id="predio"></input>
                <br />
                <br />
                <select id="tipo">
                  <option value="">Selecciona el tipo de ganado...</option>
                  <option value="Toro">Toro</option>
                  <option value="Becerro">Becerro</option>
                  <option value="Becerra">Becerra</option>
                  <option value="Vaquilla">Vaquilla</option>
                  <option value="Vaquilla cargada">Vaquilla cargada</option>
                  <option value="Vaca adulta">Vaca adulta</option>
                </select>
                <br />
                <br />
                <select id="raza">
                  <option value="">Selecciona la raza del animal...</option>
                  <option value="Brangus">Brangus</option>
                  <option value="Simental">Simental</option>
                  <option value="Pinta">Pinta</option>
                </select>
                <br />
                <br />
                Origen del animal
                <br />
                <input type="text" id="origen"></input>
                <br />
                <br />
                Arete del animal
                <br />
                <input type="text" id="arete"></input>
                <br />
                <br />
                Fecha en que se registra el animal
                <br />
                <input type="text" id="dia"></input>
                <input type="text" id="mes"></input>
                <input type="text" id="ano"></input>
                <br />
                <br />
                Fecha de nacimiento del animal (aproximado)
                <br />
                <input type="date" id="fecha-alt"></input>
                <br />
                <br />
                Lo que peso cuando se compro
                <br />
                <input type="text" id="peso-compra"></input>kg
                <br />
                <br />
              </div>
            </div>
            <div className="cua cuadro-2">
              <div className="banner cua-2">
                Lo que pesa ahora (Si se acaba de comprar, registrar el mismo
                peso)
                <br />
                <input type="text" id="peso-actual"></input>kg
                <br />
                <br />
                <select id="estatus">
                  <option value="">Selecciona el estatus del animal...</option>
                  <option value="Vacia">Vacia</option>
                  <option value="Cargada">Cargada</option>
                </select>
                <br />
                <br />
                Ultima fecha en la que pario (Si nunca lo ha hecho, dejar en
                blanco)
                <br />
                <input type="text" id="diaVac"></input>
                <input type="text" id="mesVac"></input>
                <input type="text" id="anoVac"></input>
                <br />
                <br />
                Algunas particularidades que pueda tener el animal
                <br />
                <select id="particularidades">
                  <option value=""></option>
                  <option value="Enfermo">Enfermo</option>
                  <option value="Extraviado">Extraviado</option>
                  <option value="Bronco">Bronco</option>
                </select>
                <br />
                <br />
                <button onClick={addData}>Aceptar</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App2;
