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

    let agregar = async () => {
      const predio = document.getElementById("predio").value;
      const response = await fetch(
        `http://localhost:4000/add/agregados?predio=${predio}`
      );

      const prueba2 = document.getElementById("texto").value;
      const prueba = document.getElementById("hola");
      console.log(prueba2);
      //prueba.innerHTML = `<option value="${predio}">${predio}<option/>`;
    };

    return (
      <>
        <select id="hola"></select>
        <div>hola</div>

        <input type="text" id="predio"></input>

        <button onClick={agregar}>Agregar...</button>
        <div id="cuadro-inve"></div>
      </>
    );
  }
}

export default Inve;
