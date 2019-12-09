import React, { Component } from "react";
import toro from "../images/captura.png";
import "../App.css";
import App2 from "../components/App2";

class principal extends Component {
  render() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return (
      <>
        <a href="/">inicio</a>
        <br />
        <a href="captura">captura</a>
        <br />
        <a href="inventario">inventario</a>
        <br />
        <a href="/bajas">bajas</a>
        <h1>{today}</h1>
      </>
    );
  }
}

export default principal;
