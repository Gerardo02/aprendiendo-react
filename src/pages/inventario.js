import React, { Component } from "react";
import "../inve.css";
import Inve from "../components/inve";
import Filtros from "../components/filtros";
class inventario extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();

    /*   const edad11 = data.map(equis => {
      console.log(equis.empresas);
    });
*/

    this.setState({
      items: data,
      loading: false
    });
  }

  render() {
    //console.log(
    //"filtertext state from parent component",
    //this.state.filtertext
    //);
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
          <a className="textobarra" href="/reportes">
            reportes
          </a>
        </div>

        <br />
        <br />

        <Inve />
      </>
    );
  }
}

export default inventario;
