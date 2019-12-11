import React, { Component } from "react";
import "../App.css";
import Inve from "../components/inve";
class inventario extends Component {
  render() {
    return (
      <>
        <a href="/">inicio</a>
        <br />
        <a href="/bajas">bajas</a>
        <br />
        <a href="captura">captura</a>
        <br />
        <a href="inventario">inventario</a>
        <br />
        <Inve />
      </>
    );
  }
}

export default inventario;
