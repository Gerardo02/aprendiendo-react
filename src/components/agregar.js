import React, { Component } from "react";
import "../style-agregar.css";
import { Link } from "react-router-dom";
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
        <div className= "pantalla-completa">
        <div className="primercuadro">

            <div className="losbotones">
              <div className ="divtextoactualizar"> 
              <p className="textoactualiza"> Actualiza las opciones de captura: </p>   
              </div>
            <div className="losbotones2xd"> 
             
                <Link to="/captura">
                  <button className="botonsecitos">Regresar</button>
                </Link>
            </div>
            </div>
            <div className="selectsxd">
            <div className="selects1xd">
            <div className="selects11xd">

              <div className ="divpersonal">
                <input
                  type="text"
                  id="empresas"
                  className="texto-prueba"
                ></input>
                <button onClick={agregarEmpresas}>Agregar empresas...</button>
                </div>

                <div className ="divpersonal">
                <input type="text" id="tipo" className="texto-prueba"></input>
                <button onClick={agregarTipo}>Agregar tipo...</button>
                </div>

                <div className ="divpersonal">
                <input type="text" id="raza" className="texto-prueba"></input>
                <button onClick={agregarRaza}>Agregar raza...</button>
                </div>

              </div>
              </div>

              <div className="selects2xd">
              <div className="selects11xd">
                
              <div className ="divpersonal">
                <input type="text" id="origen" className="texto-prueba"></input>
                <button onClick={agregarOrigen}>Agregar origen...</button>
                </div>

                <div className ="divpersonal">
                <input
                  type="text"
                  id="particularidades"
                  className="texto-prueba"
                ></input>
                <button onClick={agregarParticularidades}>
                  Agregar particularidades...
                </button>
                </div>

                <div className ="divpersonal">
                <input
                  type="text"
                  id="estatus"
                  className="texto-prueba"
                ></input>
                <button onClick={agregarEstatus}>Agregar estatus...</button>
                </div>

                <div className ="divpersonal">
                <input type="text" id="predio" className="texto-prueba"></input>

                <button onClick={agregarPredio}>Agregar predio...</button>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
      </>
    );
  }
}

export default Add;
