import React, { Component } from "react";
import "../inve.css";
class Filtra extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/agregados");
    const data = await response.json();
    const inventario = document.getElementById("callPredio");
    const origen = document.getElementById("callOrigen");
    data.forEach(element => {
      inventario.innerHTML += `
        <option value="${element.predio}">${element.predio}</option>
        `;
      origen.innerHTML += `
        <option value="${element.origen}">${element.origen}</option>
        `;
    });
  }
  render() {
    let callFiltros = async () => {
      const response = await fetch("http://localhost:4000/filtrar");
      const data = await response.json();
      const inventario = document.getElementById("cuadro-reporte");
      const listavariables = document.getElementById("listavariables");
      data.forEach(element => {
        listavariables.innerHTML += `
      
        <tr>
        <td> ${element.empresas} </td>
        <td> ${element.predio} </td>
         <td> ${element.precio} </td>
         <td> ${element.num_guia} </td>
         <td> ${element.tipo} </td>
         <td> ${element.raza} </td>
         <td> ${element.origen} </td>
         <td> ${element.arete} </td>
         <td> ${element.fecha_alta} </td>
         <td> ${element.fecha_nacimiento} </td>
         <td> ${element.peso_compra} </td>
         <td> ${element.peso_actual} </td>
         <td> ${element.estatus} </td>
         <td> ${element.ultimo_parto} </td>
         <td> ${element.particularidades} </td>
  
        </tr>
        <br/>
      `;
      });
    };
    let callDecre = async () => {
      const response = await fetch("http://localhost:4000/filtrar/decre");
      const data = await response.json();
      const listavariables = document.getElementById("listavariables");
      data.forEach(element => {
        listavariables.innerHTML += `
      
        <tr>
        <td> ${element.empresas} </td>
        <td> ${element.predio} </td>
         <td> ${element.precio} </td>
         <td> ${element.num_guia} </td>
         <td> ${element.tipo} </td>
         <td> ${element.raza} </td>
         <td> ${element.origen} </td>
         <td> ${element.arete} </td>
         <td> ${element.fecha_alta} </td>
         <td> ${element.fecha_nacimiento} </td>
         <td> ${element.peso_compra} </td>
         <td> ${element.peso_actual} </td>
         <td> ${element.estatus} </td>
         <td> ${element.ultimo_parto} </td>
         <td> ${element.particularidades} </td>
  
        </tr>
        <br/>
      `;
      });
    };
    let callVacia = async () => {
      const response = await fetch("http://localhost:4000/filtrar/vacia");
      const data = await response.json();
      const listavariables = document.getElementById("listavariables");
      data.forEach(element => {
        listavariables.innerHTML += `
      
        <tr>
        <td> ${element.empresas} </td>
        <td> ${element.predio} </td>
         <td> ${element.precio} </td>
         <td> ${element.num_guia} </td>
         <td> ${element.tipo} </td>
         <td> ${element.raza} </td>
         <td> ${element.origen} </td>
         <td> ${element.arete} </td>
         <td> ${element.fecha_alta} </td>
         <td> ${element.fecha_nacimiento} </td>
         <td> ${element.peso_compra} </td>
         <td> ${element.peso_actual} </td>
         <td> ${element.estatus} </td>
         <td> ${element.ultimo_parto} </td>
         <td> ${element.particularidades} </td>
  
        </tr>
        <br/>
      `;
      });
    };
    let callCargada = async () => {
      const response = await fetch("http://localhost:4000/filtrar/cargada");
      const data = await response.json();
      const listavariables = document.getElementById("listavariables");
      data.forEach(element => {
        listavariables.innerHTML += `
      
        <tr>
        <td> ${element.empresas} </td>
        <td> ${element.predio} </td>
         <td> ${element.precio} </td>
         <td> ${element.num_guia} </td>
         <td> ${element.tipo} </td>
         <td> ${element.raza} </td>
         <td> ${element.origen} </td>
         <td> ${element.arete} </td>
         <td> ${element.fecha_alta} </td>
         <td> ${element.fecha_nacimiento} </td>
         <td> ${element.peso_compra} </td>
         <td> ${element.peso_actual} </td>
         <td> ${element.estatus} </td>
         <td> ${element.ultimo_parto} </td>
         <td> ${element.particularidades} </td>
  
        </tr>
        <br/>
      `;
      });
    };

    let callPredio = async () => {
      const predioCall = document.getElementById("callPredio").value;

      const response = await fetch(
        `http://localhost:4000/filtrar/predio?predio=${predioCall}`
      );

      const data = await response.json();
      const listavariables = document.getElementById("listavariables");
      data.forEach(element => {
        listavariables.innerHTML += `
      
        <tr>
        <td> ${element.empresas} </td>
        <td> ${element.predio} </td>
         <td> ${element.precio} </td>
         <td> ${element.num_guia} </td>
         <td> ${element.tipo} </td>
         <td> ${element.raza} </td>
         <td> ${element.origen} </td>
         <td> ${element.arete} </td>
         <td> ${element.fecha_alta} </td>
         <td> ${element.fecha_nacimiento} </td>
         <td> ${element.peso_compra} </td>
         <td> ${element.peso_actual} </td>
         <td> ${element.estatus} </td>
         <td> ${element.ultimo_parto} </td>
         <td> ${element.particularidades} </td>
  
        </tr>
        <br/>
      `;
      });
    };
    let callOrigen = async () => {
      const origenCall = document.getElementById("callOrigen").value;

      const response = await fetch(
        `http://localhost:4000/filtrar/origen?origen=${origenCall}`
      );

      const data = await response.json();
      const listavariables = document.getElementById("listavariables");
      data.forEach(element => {
        listavariables.innerHTML += `
      
        <tr>
        <td> ${element.empresas} </td>
        <td> ${element.predio} </td>
         <td> ${element.precio} </td>
         <td> ${element.num_guia} </td>
         <td> ${element.tipo} </td>
         <td> ${element.raza} </td>
         <td> ${element.origen} </td>
         <td> ${element.arete} </td>
         <td> ${element.fecha_alta} </td>
         <td> ${element.fecha_nacimiento} </td>
         <td> ${element.peso_compra} </td>
         <td> ${element.peso_actual} </td>
         <td> ${element.estatus} </td>
         <td> ${element.ultimo_parto} </td>
         <td> ${element.particularidades} </td>
  
        </tr>
        <br/>
      `;
      });
    };
    return (
      <>
      <div className="cuadropapa">
        <div className="cuadroreportes" id="cuadro-reporte">
          <div className="palflex">
          <div className="botonesfiltros1">
          <button className="seleccionboton" onClick={callFiltros}>Los que incrementaron de peso</button>
          <button className="seleccionboton" onClick={callDecre}>Los que decrementaron de peso</button>
          <button className="seleccionboton" onClick={callVacia}>Las que estan vacias</button>
          <button className="seleccionboton" onClick={callCargada}>Las que estan cargadas</button>
          </div>
         
          <div className="botonesfiltro2">
          <select className="seleccionboton2 select" id="callPredio"></select>
          <button className="seleccionboton2" onClick={callPredio}>Aceptar predio</button>
          <select className="seleccionboton2 select" id="callOrigen"></select>
          <button className="seleccionboton2" onClick={callOrigen}>Aceptar origen</button>
          </div>
          </div>
          <div className="botonderefrescar">
          <form>
            <button className="refrescar">Refrescar</button>
          </form>
          </div>

         
        </div>
        <br/>
        <br/>
        <div className="tablainventario">
        <div className="titulosnombres">
          <table id="listavariables">
            <div className="titulos1">
              
           <tr className="titulos">
           <th>empresas</th><th>Predio</th><th>Precio</th><th>N° Guia </th> <th>Tipo de ganado</th><th>Raza </th><th>Origen</th><th>Arete</th><th>Fecha de registro</th><th>Fecha de nacimiento</th><th>Peso de compra</th><th>Peso actual</th><th>Estado del animal</th><th>Ultima fecha de parto</th><th>Particularidad</th>
           <br/>
           </tr>
           </div>
          
            <tr className="listavariables" >
            </tr>
            
    
          </table>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Filtra;
