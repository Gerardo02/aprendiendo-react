import React, { Component } from "react";
import "../inve.css";

class Add extends Component {
  render() {
    let id;
    let agregarEmpresas = async () => {
      const empresas = document.getElementById("empresas").value;
      const response = await fetch(
        `http://localhost:4000/add/empresas?empresas=${empresas}`
      );
    };
    let agregarPredio = async () => {
      id++;
      const predio = document.getElementById("predio").value;
      const response = await fetch(
        `http://localhost:4000/add/predio?predio=${predio}&id=${id}`
      );
    };
    let agregarTipo = async () => {
      const tipo = document.getElementById("tipo").value;
      const response = await fetch(
        `http://localhost:4000/add/tipo?tipo=${tipo}`
      );
    };
    let agregarRaza = async () => {
      const raza = document.getElementById("raza").value;
      const response = await fetch(
        `http://localhost:4000/add/raza?raza=${raza}`
      );
    };
    let agregarOrigen = async () => {
      const origen = document.getElementById("origen").value;
      const response = await fetch(
        `http://localhost:4000/add/origen?origen=${origen}`
      );
    };
    let agregarParticularidades = async () => {
      const particularidades = document.getElementById("particularidades")
        .value;
      const response = await fetch(
        `http://localhost:4000/add/particularidades?particularidades=${particularidades}`
      );
    };
    let agregarEstatus = async () => {
      const estatus = document.getElementById("estatus").value;
      const response = await fetch(
        `http://localhost:4000/add/estatus?estatus=${estatus}`
      );
    };
    return (
      <>
        <form>
          <input type="text" id="empresas" className="texto-prueba"></input>
          <button onClick={agregarEmpresas}>Agregar empresas...</button>
          <br />
          <br />
          <br />
          <input type="text" id="tipo" className="texto-prueba"></input>
          <button onClick={agregarTipo}>Agregar tipo...</button>
          <br />
          <br />
          <br />
          <input type="text" id="raza" className="texto-prueba"></input>
          <button onClick={agregarRaza}>Agregar raza...</button>
          <br />
          <br />
          <br />
          <input type="text" id="origen" className="texto-prueba"></input>
          <button onClick={agregarOrigen}>Agregar origen...</button>
          <br />
          <br />
          <br />
          <input
            type="text"
            id="particularidades"
            className="texto-prueba"
          ></input>
          <button onClick={agregarParticularidades}>
            Agregar particularidades...
          </button>
          <br />
          <br />
          <br />
          <input type="text" id="estatus" className="texto-prueba"></input>
          <button onClick={agregarEstatus}>Agregar estatus...</button>
          <br />
          <br />
          <br />
          <input type="text" id="predio" className="texto-prueba"></input>

          <button onClick={agregarPredio}>Agregar predio...</button>
        </form>
        <br />
        <br />
        <br />
        <br />
        <a href="/captura">
          <button>Regresar</button>
        </a>
      </>
    );
  }
}

export default Add;
