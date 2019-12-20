import React, { Component } from "react";
class Delete extends Component {
  async componentDidMount() {
    const empresas = document.getElementById("empresa");
    const predio = document.getElementById("predio");
    const tipo = document.getElementById("tipo");
    const raza = document.getElementById("raza");
    const origen = document.getElementById("origen");
    const particularidades = document.getElementById("particularidades");
    const response = await fetch(`http://localhost:4000/agregados`);
    const data = await response.json();
    data.forEach(element => {
      if (element.predio === null) {
      } else {
        predio.innerHTML += `<option value="${element.predio}">${element.predio}</option>`;
      }
      if (element.empresas === null) {
      } else {
        empresas.innerHTML += `<option value="${element.empresas}">${element.empresas}</option>`;
      }
      if (element.tipo === null) {
      } else {
        tipo.innerHTML += `<option value="${element.tipo}">${element.tipo}</option>`;
      }
      if (element.raza === null) {
      } else {
        raza.innerHTML += `<option value="${element.raza}">${element.raza}</option>`;
      }
      if (element.origen === null) {
      } else {
        origen.innerHTML += `<option value="${element.origen}">${element.origen}</option>`;
      }
      if (element.particularidades === null) {
      } else {
        particularidades.innerHTML += `<option value="${element.particularidades}">${element.particularidades}</option>`;
      }
    });
  }

  render() {
    let deleteAgregados = async () => {
      window.location.reload();
      const empresas = document.getElementById("empresa").value;
      const predio = document.getElementById("predio").value;
      const tipo = document.getElementById("tipo").value;
      const raza = document.getElementById("raza").value;
      const origen = document.getElementById("origen").value;
      const particularidades = document.getElementById("particularidades")
        .value;
      const response = await fetch(
        `http://localhost:4000/agregados/delete?empresas=${empresas}&predio=${predio}&tipo=${tipo}&raza=${raza}&origen=${origen}&particularidades=${particularidades}`
      );
      window.location.reload();
    };
    return (
      <>
        <select id="empresa">
          <option value="">Selecciona una empresa...</option>
        </select>
        <br />
        <br />
        <select id="predio">
          <option value="">Selecciona un predio...</option>
        </select>
        <br />
        <br />
        <select id="tipo">
          <option value="">Selecciona un tipo...</option>
        </select>
        <br />
        <br />
        <select id="raza">
          <option value="">Selecciona una raza...</option>
        </select>
        <br />
        <br />
        <select id="origen">
          <option value="">Selecciona un origen...</option>
        </select>
        <br />
        <br />
        <select id="particularidades">
          <option value="">Selecciona una particularidad...</option>
        </select>
        <br />
        <br />
        <button onClick={deleteAgregados}>Aceptar</button>
        <a href="/captura">
          <button>Regresar</button>
        </a>
      </>
    );
  }
}

export default Delete;
