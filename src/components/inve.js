import React, { Component } from "react";
import "../inve.css";

class Inve extends Component {
  render() {
    let agregarPredio = async () => {
      const predio = document.getElementById("predio").value;
      /*const response = await fetch(
        `http://localhost:4000/add/agregados?predio=${predio}`
      );*/
      console.log(predio);
    };

    return (
      <>
        <input type="text" id="predio" className="texto-prueba"></input>

        <button onClick={agregarPredio}>Agregar predio...</button>
        <br />
      </>
    );
  }
}

export default Inve;
