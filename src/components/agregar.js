import React, { Component } from "react";
import "../style-agregar.css";
import { Link } from "react-router-dom";
class Add extends Component {
  render() {
    let id;
    let agregarEmpresas = async () => {
      const empresas = document.getElementById("empresas").value;
      window.location.reload();
      const response = await fetch(
        `https://server-inve.herokuapp.com/add/empresas?empresas=${empresas}`
      );
    };
    let agregarPredio = async () => {
      id++;
      const predio = document.getElementById("predio").value;
      window.location.reload();
      const response = await fetch(
        `https://server-inve.herokuapp.com/add/predio?predio=${predio}&id=${id}`
      );
    };
    let agregarTipo = async () => {
      const tipo = document.getElementById("tipo").value;
      window.location.reload();
      const response = await fetch(
        `https://server-inve.herokuapp.com/add/tipo?tipo=${tipo}`
      );
    };
    let agregarRaza = async () => {
      const raza = document.getElementById("raza").value;
      window.location.reload();
      const response = await fetch(
        `https://server-inve.herokuapp.com/add/raza?raza=${raza}`
      );
    };
    let agregarOrigen = async () => {
      const origen = document.getElementById("origen").value;
      window.location.reload();
      const response = await fetch(
        `https://server-inve.herokuapp.com/add/origen?origen=${origen}`
      );
    };
    let agregarParticularidades = async () => {
      const particularidades = document.getElementById("particularidades")
        .value;
      window.location.reload();
      const response = await fetch(
        `https://server-inve.herokuapp.com/add/particularidades?particularidades=${particularidades}`
      );
    };
    let agregarEstatus = async () => {
      const estatus = document.getElementById("estatus").value;
      window.location.reload();
      const response = await fetch(
        `https://server-inve.herokuapp.com/add/estatus?estatus=${estatus}`
      );
    };
    return (
      <>
        <div className="pantalla-completa">
          <div className="primercuadro">
            <div className="losbotones">
              <div className="divtextoactualizar">
                <p className="textoactualiza">
                  {" "}
                  Actualiza las opciones de captura:{" "}
                </p>
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
                  <div className="divpersonal">
                    <p className="Agregaopciontexto">
                      Agrega alguna opcion para capturar inventario:{" "}
                    </p>
                  </div>

                  <div className="divpersonal">
                    <input
                      type="text"
                      id="empresas"
                      className="texto-prueba"
                    ></input>
                    <button className="botonstiles" onClick={agregarEmpresas}>
                      Agregar empresas...
                    </button>
                  </div>

                  <div className="divpersonal">
                    <input
                      type="text"
                      id="tipo"
                      className="texto-prueba"
                    ></input>
                    <button className="botonstiles" onClick={agregarTipo}>
                      Agregar tipo...
                    </button>
                  </div>

                  <div className="divpersonal">
                    <input
                      type="text"
                      id="raza"
                      className="texto-prueba"
                    ></input>
                    <button className="botonstiles" onClick={agregarRaza}>
                      Agregar raza...
                    </button>
                  </div>
                </div>
              </div>

              <div className="selects2xd">
                <div className="selects11xd">
                  <div className="divpersonal">
                    <input
                      type="text"
                      id="origen"
                      className="texto-prueba"
                    ></input>
                    <button className="botonstiles" onClick={agregarOrigen}>
                      Agregar origen...
                    </button>
                  </div>

                  <div className="divpersonal">
                    <input
                      type="text"
                      id="particularidades"
                      className="texto-prueba"
                    ></input>
                    <button
                      className="botonstilesparticularidades"
                      onClick={agregarParticularidades}
                    >
                      Agregar particularidades...
                    </button>
                  </div>

                  <div className="divpersonal">
                    <input
                      type="text"
                      id="estatus"
                      className="texto-prueba"
                    ></input>
                    <button className="botonstiles" onClick={agregarEstatus}>
                      Agregar estatus...
                    </button>
                  </div>

                  <div className="divpersonal">
                    <input
                      type="text"
                      id="predio"
                      className="texto-prueba"
                    ></input>

                    <button className="botonstiles" onClick={agregarPredio}>
                      Agregar predio...
                    </button>
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
