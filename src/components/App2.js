import React, { Component } from "react";
import { Link } from "react-router-dom";
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

    const agregarPredio = document.getElementById("predio");
    const agregarEmpresas = document.getElementById("empresas");
    const agregarTipo = document.getElementById("tipo");
    const agregarRaza = document.getElementById("raza");
    const agregarOrigen = document.getElementById("origen");
    const agregarEstatus = document.getElementById("estatus");
    const agregarParti = document.getElementById("particularidades");
    data.forEach(element => {
      const predio = element.predio;
      const empresas = element.empresas;
      if (predio === null) {
      } else {
        agregarPredio.innerHTML += `<option value="${predio}">${predio}</option>`;
      }
      if (empresas === null) {
      } else {
        agregarEmpresas.innerHTML += `<option value="${empresas}">${empresas}</option>`;
      }
      if (element.tipo === null) {
      } else {
        agregarTipo.innerHTML += `<option value="${element.tipo}">${element.tipo}</option>`;
      }
      if (element.raza === null) {
      } else {
        agregarRaza.innerHTML += `<option value="${element.raza}">${element.raza}</option>`;
      }
      if (element.origen === null) {
      } else {
        agregarOrigen.innerHTML += `<option value="${element.origen}">${element.origen}</option>`;
      }
      if (element.estatus === null) {
      } else {
        agregarEstatus.innerHTML += `<option value="${element.estatus}">${element.estatus}</option>`;
      }
      if (element.particularidades === null) {
      } else {
        agregarParti.innerHTML += `<option value="${element.particularidades}">${element.particularidades}</option>`;
      }
    });
    console.log(data);
  }

  render() {
    const buttons = document.querySelectorAll("button.botonsito");

    let addData = async () => {
      const predio = document.getElementById("predio").value;
      const precio = document.getElementById("precio").value;
      const empresas = document.getElementById("empresas").value;
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
      const fechaNac = `${dia}/${mes}/${ano}`;
      let today = new Date();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      let edad;
      if (yyyy <= ano) {
        edad = mm - mes;
      } else if (yyyy > ano) {
        mes = 12 - mes;
        yyyy = yyyy - ano;
        yyyy = yyyy * 12;
        mm = 12 - mm;
        mm = yyyy - mm;
        edad = mm + mes;
      }

      const pesoCompra = document.getElementById("peso-compra").value;
      const pesoActual = document.getElementById("peso-actual").value;
      const incremento = pesoActual - pesoCompra;
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

      let today3 = new Date();
      let dd3 = today3.getDate();
      let mm3 = today3.getMonth() + 1;
      let yyyy3 = today3.getFullYear();
      let fechaMovimiento = `${dd3}/${mm3}/${yyyy3}`;

      const particularidades = document.getElementById("particularidades")
        .value;
      const movimiento = "Captura";
      let sendHistorial = async () => {
        const response = await fetch(
          `http://localhost:4000/send/historial?tipo=${tipo}&numGuia=${numGuia}&raza=${raza}&arete=${arete}&fecha=${fechaMovimiento}&movimiento=${movimiento}`
        );
      };
      if (arete !== "") {
        console.log(empresas);
      } else {
        alert("Arete necesario!!!!!!!!!!!!!!!!!!");
      }
      if (
        precio !== "" &&
        numGuia !== "" &&
        diaAlt !== "" &&
        mesAlt !== "" &&
        anoAlt !== "" &&
        dia !== "" &&
        mes !== "" &&
        ano !== "" &&
        pesoCompra !== "" &&
        pesoActual !== "" &&
        diaVac !== "" &&
        mesVac !== "" &&
        anoVac !== ""
      ) {
        window.location.reload();
        const response = await fetch(
          `http://localhost:4000/add?empresas=${empresas}&predio=${predio}&precio=${precio}&numGuia=${numGuia}&tipo=${tipo}&raza=${raza}&origen=${origen}&arete=${arete}&fechaAlta=${fechaAlta}&fechaNac=${fechaNac}&pesoCompra=${pesoCompra}&pesoActual=${pesoActual}&incremento=${incremento}&estatus=${estatus}&edad=${edad}&ultimoParto=${ultimoParto}&mesesVacia=${mesesVacia}&particularidades=${particularidades}`
        );
        sendHistorial();
      } else {
        alert("Datos incompletos (si no se sabe algun dato, inventarlo)");
      }
    }; /* 
    buttons.forEach(button => {
      button.addEventListener("click", addData);
    });*/
    return (
      <React.Fragment>
       
        <div className="index-page">
          <div className="cua cuadro-1">
          <div className="banner1 cua-2">
            <Link to="/add">
            <button className="botonsito">Agregar opciones</button>
          </Link>
          <Link to="/eliminar">
            <button className="botonsito">Eliminar opciones</button>
          </Link> 
         
            </div>
            <div className="textito-cuadrito">
              Empresas
              <br />
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
              <select className="" id="predio">
                <option value="">Selecciona el predio...</option>
                <option value="Santa Teresa">Santa Teresa</option>
              </select>
              <br />
              <br />
              Precio
              <br />
              <input
                className="input1 inputprecio"
                type="text"
                maxlength="7"
                id="precio"
              />{" "}
              $
              <br />
              <br />
              numero de guia
              <br />
              <input className="input1" type="text" id="numGuia"></input>
              <br />
              <br />
              Tipo de ganado
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
              Raza del animal
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
              <select id="origen">
                <option value="">Selecciona el origen del animal...</option>
                <option value="Criollo">Criollo</option>
              </select>
              <br />
              <br />
              Arete del animal
              <br />
              <input className="input1" type="text" id="arete"></input>
              <br />
              <br />
              Fecha en que se registra el animal
              <br />
              <input
                className="input1 inputfecha"
                maxlength="2"
                type="text"
                id="diaAlt"
              />
              /
              <input
                className="input1 inputfecha"
                maxlength="2"
                type="text"
                id="mesAlt"
              />
              /
              <input
                className="input1 inputfecha inputaño"
                maxlength="4"
                type="text"
                id="anoAlt"
              />
              <br />
              <br />
            </div>
            
          </div>
          <div className="cua cuadro-2">
            <div className="banner cua-2">
            
              <button className="botonsito" onClick={addData}>
                Aceptar
              </button>
            </div>
            <div className="textito-cuadrito">
              Fecha de nacimiento
              <br />
              <input
                className="input1 inputfecha"
                maxlength="2"
                type="text"
                id="dia"
              />
              /
              <input
                className="input1 inputfecha"
                maxlength="2"
                type="text"
                id="mes"
              />
              /
              <input
                className="input1 inputfecha inputaño"
                maxlength="4"
                type="text"
                id="ano"
              ></input>
              <br />
              <br />
              Lo que peso cuando se compro
              <br />
              <input
                className="input1 inputkg"
                maxlength="3"
                type="text"
                id="peso-compra"
              ></input>
              kg
              <br />
              <br />
              Lo que pesa ahora (Si se acaba de comprar, registrar el mismo
              peso)
              <br />
              <input
                className="input1 inputkg"
                maxlength="3"
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
                <option value="Vacia">Vacia</option>
                <option value="Cargada">Cargada</option>
              </select>
              <br />
              <br />
              Ultima fecha en la que pario (Si nunca lo ha hecho, escribir la
              fecha de nacimiento)
              <br />
              <input
                className="input1 inputfecha"
                maxlength="2"
                type="text"
                id="diaVac"
              />
              /
              <input
                className="input1 inputfecha"
                maxlength="2"
                type="text"
                id="mesVac"
              />
              /
              <input
                className="input1 inputfecha inputaño"
                maxlength="4"
                type="text"
                id="anoVac"
              />
              <br />
              <br />
              Alguna particularidad que pueda tener el animal
              <br />
              <select id="particularidades">
                <option value="">Particularidad del animal</option>
                <option value="Enfermo">Enfermo</option>
                <option value="Extraviado">Extraviado</option>
                <option value="Bronco">Bronco</option>
              </select>
              <br />
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App2;
