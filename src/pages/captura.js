import React, { Component } from "react";
import "../App.css";
import App2 from "../components/App2";

class captura extends Component {
  render() {
    return (
      <>
        <a href="/">inicio</a>
        <br />
        <a href="inventario">inventario</a>
        <br />
        <a href="/bajas">bajas</a>
        <br />
        <a href="/historial">historial</a>
        <App2 />
      </>
    );
  }
}

export default captura;
