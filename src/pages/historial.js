import React, { Component } from "react";
import { emptyStatement } from "@babel/types";

class historial extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();
    //console.log(data);

    const empresa12 = data[0].predio;
    const empresa1 = data;
    /*
    const division = document.getElementById("esta");

    division.innerHTML = `
    <p> la informacion es esta : ${empresa}
    `;
*/
    console.log(empresa1);
    console.log(empresa12);
  }

  render() {
    return (
      <>
        <div className="barra-nav">
          <a className="textobarra" href="/">
            inicio
          </a>
          <a className="textobarra" href="/captura">
            captura
          </a>
          <a className="textobarra" href="/inventario">
            inventario
          </a>
          <a className="textobarra" href="/historial">
            historial
          </a>
          <a className="textobarra" href="/bajas">
            bajas
          </a>
        </div>
      </>
    );
  }
}

export default historial;
