import React, { Component } from "react";
import "../inve.css";

class Inve extends Component {
  render() {
    const info = document.getElementById("cuadro-inve");
    let getInventario = async () => {
      const response = await fetch("http://localhost:4000/datos");
      const data = await response.json();

      data.forEach(element => {
        info.innerHTML += ` ${element.empresas} <br/> ${element.arete} <br/> `;
      });
    };

    let agregarPredio = async () => {
      const predio = document.getElementById("predio").value;
      const response = await fetch(
        `http://localhost:4000/add/agregados?predio=${predio}`
      );
    };
    /*let agregarEmpresas = async () => {
      const empresas = document.getElementById("empresas").value;
      const response = await fetch(
        `http://localhost:4000/add/agregados?empresas=${empresas}`
      );
    };*/

    return (
      <>
        <select id="hola"></select>
        <div>hola</div>

        <input type="text" id="predio" className="texto-prueba"></input>
        <button onClick={agregarPredio}>Agregar predio...</button>
        <br />

        <div id="cuadro-inve"></div>
      </>
    );
  }
}

export default Inve;
