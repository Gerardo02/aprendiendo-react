import React, { Component } from "react";
import "../App.css";
import toro from "../images/captura.png";

class App2 extends Component {
  render() {
    let addData = async () => {
      const empresas = document.getElementById("empresas").value;
      const predio = document.getElementById("predio").value;
      const tipo = document.getElementById("tipo").value;
      const raza = document.getElementById("raza").value;
      const origen = document.getElementById("origen").value;
      const arete = document.getElementById("arete").value;
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
      const fechaAlta = document.getElementById("fecha-alt").value;

      const fechaNac = `${dia}/${mes}/${ano}`;
      const pesoCompra = document.getElementById("peso-compra").value;
      const pesoActual = document.getElementById("peso-actual").value;
      const incremento = pesoActual - pesoCompra;
      const estatus = document.getElementById("estatus").value;

      const ultimoParto = document.getElementById("ultimo-parto").value;
      const mesesVacia = document.getElementById("meses-vacia").value;
      const fechaBaja = document.getElementById("fecha-baja").value;
      const motivoBaja = document.getElementById("motivo-baja").value;
      const particularidades = document.getElementById("particularidades")
        .value;
      const response = await fetch(
        `http://localhost:4000/add?empresas=${empresas}&predio=${predio}&tipo=${tipo}&raza=${raza}&origen=${origen}&arete=${arete}&fechaAlta=${fechaAlta}&fechaNac=${fechaNac}&pesoCompra=${pesoCompra}&pesoActual=${pesoActual}&incremento=${incremento}&estatus=${estatus}&edad=${edad}&ultimoParto=${ultimoParto}&mesesVacia=${mesesVacia}&fechaBaja=${fechaBaja}&motivoBaja=${motivoBaja}&particularidades=${particularidades}`
      );

      console.log("se hizo");
    };

    return (
      <React.Fragment>
        <div className="index-page">
          <form>
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
            Lo que pesa ahora (Si se acaba de comprar, registrar el mismo peso)
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
            Ultima fecha en la que pario (Si nunca lo ha hecho, dejar en blanco)
            <br />
            <input type="date" id="ultimo-parto"></input>
            <br />
            <br />
            Meses que lleva vacia
            <br />
            <input type="text" id="meses-vacia"></input>meses
            <br />
            <br />
            Fecha de baja del animal (Si no se ha dado de baja o no se piensa
            dar de baja, dejar en blanco)
            <br />
            <input type="date" id="fecha-baja"></input>
            <br />
            <br />
            Motivo de la baja (Si no se dio de baja, dejar en blanco)
            <br />
            <select id="motivo-baja">
              <option value=""></option>
              <option value="Venta">Venta</option>
              <option value="Muerte">Muerte</option>
              <option value="Robo">Robo</option>
            </select>
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
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App2;
