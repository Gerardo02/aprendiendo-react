import React, { Component } from "react";
import "../inve.css";
import superlogo from "../images/super-logo.png";


class historial extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/historial");
    const data = await response.json();
    //console.log(data);
    const { filtertext } = this.props;
    const listavariables = document.getElementById("listavariables"); 
   
    let flag = 0;
    data.forEach(element => {
      listavariables.innerHTML += `
      <tr>
      <br/>
      <td>${element.arete}</td>
        <td>${element.num_guia}</td>
        <td>${element.tipo}</td>
        <td>${element.raza}</td>
        <td>${element.fecha}</td>
        <td>${element.movimiento}</td>

      </tr>
      `
    }); 
  }

  render() {
    return (
      <>
        <div className="barra-nav">
        <a className="textobarra" href="/">
              <img className="superlogo" src={superlogo}/>
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
        <div className="tablainventariohistorial">
        <div className="titulosnombres">
          <table id="listavariables">
            <div className="titulos1">
           <tr className="titulos">
            <th className="tituloshistorial">Arete</th>
            <th className="tituloshistorial">Numero de Guia</th>
            <th className="tituloshistorial">Tipo de Ganado</th>
            <th className="tituloshistorial">Raza</th>
            <th className="tituloshistorial">Fecha</th>
            <th className="tituloshistorial">Movimiento</th>
           </tr>
           </div>
            <tr className="listavariables" >
            </tr>
            
    
          </table>
          </div>
          </div>
      </>
    );
  }
}

export default historial;
