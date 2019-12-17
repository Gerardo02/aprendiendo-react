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

  constructor(props) {
    super(props);
    this.state = {
      filtertext: "hello"
    };
  }

  filterupdate(value) {
    this.setState({
      filtertext: value
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
        </div>

        <Filtros
          filtertext={this.state.filtertext}
          filterupdate={this.filterupdate.bind(this)}
        />
        <br />
        <br />

        <Inve filtertext={this.state.filtertext} />
      </>
    );
  }
}

export default inventario;
