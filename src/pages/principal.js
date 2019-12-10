import React, { Component } from "react";
import "../App.css";

class principal extends Component {
  render() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
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
