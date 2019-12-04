import React, { Component } from "react";
import "../App.css";
import captura from "../images/captura.png";
class App2 extends Component {
  state = {
    loading: true,
    items: null
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:1450/datos");
    const data = await response.json();
    this.setState({
      items: data[0],
      loading: false
    });
    console.log(data[0]);
  }
  render() {
    if (this.state.loading) {
      return <div>cargando...</div>;
    } else {
      return (
        <div className="index-page">
          <div>{this.state.items.motivo_baja}</div>
          <a href="captura">
            <img className="img-captura" src={captura} alt="menu captura" />
          </a>
        </div>
      );
    }
  }
}

export default App2;
