import React, { Component } from "react";
import "../inve.css";
class Filtra extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/agregados");
    const data = await response.json();
    const inventario = document.getElementById("callPredio");
    const origen = document.getElementById("callOrigen");
    data.forEach(element => {
      if (element.predio === null) {
      } else {
        inventario.innerHTML += `
        <option value="${element.predio}">${element.predio}</option>
        `;
      }
      if (element.origen === null) {
      } else {
        origen.innerHTML += `
        <option value="${element.origen}">${element.origen}</option>
        `;
      }
    });
  }
  render() {
    let callFiltros = async () => {
      const response = await fetch("http://localhost:4000/filtrar");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      data.forEach(element => {
        inventario.innerHTML += `
      
        <tr>
        <td>${element.empresas}</td>
        <td>${element.predio}</td>     
        <td>${element.precio}</td>     
        <td>${element.num_guia}</td>     
        <td>${element.tipo}</td>     
        <td>${element.raza}</td>   
        <td>${element.origen}</td>
        <td>${element.arete}</td>
        <td>${element.fecha_alta}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.peso_compra}</td>
        <td>${element.peso_actual}</td>
        <td>${element.incremento_peso}</td>
        <td>${element.estatus}</td>
        <td>${element.edad}</td>
        <td>${element.ultimo_parto}</td>
        <td>${element.meses_vacia}</td>
        <td>${element.particularidades}</td>
      </tr>
      `;
      });
    };
    let callDecre = async () => {
      const response = await fetch("http://localhost:4000/filtrar/decre");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      data.forEach(element => {
        inventario.innerHTML += `
        
        <tr>
        <td>${element.empresas}</td>
        <td>${element.predio}</td>     
        <td>${element.precio}</td>     
        <td>${element.num_guia}</td>     
        <td>${element.tipo}</td>     
        <td>${element.raza}</td>   
        <td>${element.origen}</td>
        <td>${element.arete}</td>
        <td>${element.fecha_alta}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.peso_compra}</td>
        <td>${element.peso_actual}</td>
        <td>${element.incremento_peso}</td>
        <td>${element.estatus}</td>
        <td>${element.edad}</td>
        <td>${element.ultimo_parto}</td>
        <td>${element.meses_vacia}</td>
        <td>${element.particularidades}</td>
      </tr>
        `;
      });
    };
    let callVacia = async () => {
      const response = await fetch("http://localhost:4000/filtrar/vacia");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      data.forEach(element => {
        inventario.innerHTML += `
          
        <tr>
        <td>${element.empresas}</td>
        <td>${element.predio}</td>     
        <td>${element.precio}</td>     
        <td>${element.num_guia}</td>     
        <td>${element.tipo}</td>     
        <td>${element.raza}</td>   
        <td>${element.origen}</td>
        <td>${element.arete}</td>
        <td>${element.fecha_alta}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.peso_compra}</td>
        <td>${element.peso_actual}</td>
        <td>${element.incremento_peso}</td>
        <td>${element.estatus}</td>
        <td>${element.edad}</td>
        <td>${element.ultimo_parto}</td>
        <td>${element.meses_vacia}</td>
        <td>${element.particularidades}</td>
      </tr>
          `;
      });
    };
    let callCargada = async () => {
      const response = await fetch("http://localhost:4000/filtrar/cargada");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      data.forEach(element => {
        inventario.innerHTML += `
            
        <tr>
        <td>${element.empresas}</td>
        <td>${element.predio}</td>     
        <td>${element.precio}</td>     
        <td>${element.num_guia}</td>     
        <td>${element.tipo}</td>     
        <td>${element.raza}</td>   
        <td>${element.origen}</td>
        <td>${element.arete}</td>
        <td>${element.fecha_alta}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.peso_compra}</td>
        <td>${element.peso_actual}</td>
        <td>${element.incremento_peso}</td>
        <td>${element.estatus}</td>
        <td>${element.edad}</td>
        <td>${element.ultimo_parto}</td>
        <td>${element.meses_vacia}</td>
        <td>${element.particularidades}</td>
      </tr>
      `;
      });
    };

    let callPredio = async () => {
      const predioCall = document.getElementById("callPredio").value;

      const response = await fetch(
        `http://localhost:4000/filtrar/predio?predio=${predioCall}`
      );

      const data = await response.json();
      const inventario = document.getElementById("table-inve");

      data.forEach(element => {
        inventario.innerHTML += `
                  
        <tr>
        <td>${element.empresas}</td>
        <td>${element.predio}</td>     
        <td>${element.precio}</td>     
        <td>${element.num_guia}</td>     
        <td>${element.tipo}</td>     
        <td>${element.raza}</td>   
        <td>${element.origen}</td>
        <td>${element.arete}</td>
        <td>${element.fecha_alta}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.peso_compra}</td>
        <td>${element.peso_actual}</td>
        <td>${element.incremento_peso}</td>
        <td>${element.estatus}</td>
        <td>${element.edad}</td>
        <td>${element.ultimo_parto}</td>
        <td>${element.meses_vacia}</td>
        <td>${element.particularidades}</td>
      </tr>
      `;
      });
    };
    let callOrigen = async () => {
      const origenCall = document.getElementById("callOrigen").value;

      const response = await fetch(
        `http://localhost:4000/filtrar/origen?origen=${origenCall}`
      );

      const data = await response.json();
      const inventario = document.getElementById("table-inve");

      data.forEach(element => {
        inventario.innerHTML += `
                    
        <tr>
        <td>${element.empresas}</td>
        <td>${element.predio}</td>     
        <td>${element.precio}</td>     
        <td>${element.num_guia}</td>     
        <td>${element.tipo}</td>     
        <td>${element.raza}</td>   
        <td>${element.origen}</td>
        <td>${element.arete}</td>
        <td>${element.fecha_alta}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.peso_compra}</td>
        <td>${element.peso_actual}</td>
        <td>${element.incremento_peso}</td>
        <td>${element.estatus}</td>
        <td>${element.edad}</td>
        <td>${element.ultimo_parto}</td>
        <td>${element.meses_vacia}</td>
        <td>${element.particularidades}</td>
      </tr>
      `;
      });
    };
    return (
      <>
        <div id="cuadro-reporte">
          <button onClick={callFiltros}>Los que incrementaron de peso</button>
          <button onClick={callDecre}>Los que decrementaron de peso</button>
          <button onClick={callVacia}>Las que estan vacias</button>
          <button onClick={callCargada}>Las que estan cargadas</button>
          <select id="callPredio">
            <option value="">Selecciona el predio...</option>
          </select>
          <button onClick={callPredio}>Aceptar predio</button>
          <select id="callOrigen">
            <option value="">Selecciona el origen...</option>
          </select>
          <button onClick={callOrigen}>Aceptar origen</button>

          <form>
            <button className="refrescar">Refrescar</button>
          </form>
        </div>

        <br />
        <br />
        <div className="tablainventario">
          <div className="titulosnombres"></div>
        </div>
        <table id="table-inve" className="table-inve">
          <tr>
            <th>Empresa</th>
            <th>Predio</th>
            <th>Precio</th>
            <th>Numero de Guia</th>
            <th>Tipo de Ganado</th>
            <th>Raza</th>
            <th>Origen</th>
            <th>Arete</th>
            <th>Fecha de Registro</th>
            <th>Fecha de Nacimiento</th>
            <th>Peso de Compra</th>
            <th>Peso Actual</th>
            <th>Incremento de peso</th>
            <th>Estatus</th>
            <th>Edad (en meses)</th>
            <th>Ultimo Parto</th>
            <th>Meses Vacia</th>
            <th>Particularidades</th>
          </tr>
        </table>
      </>
    );
  }
}

export default Filtra;
