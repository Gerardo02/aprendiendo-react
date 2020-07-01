import React, { Component } from "react";
import "../inve.css";
class Filtra extends Component {
  async componentDidMount() {
    const response = await fetch("https://server-inve.herokuapp.com/agregados");
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

    let flag = 0;
    let callFiltros = async () => {
      const response = await fetch("https://server-inve.herokuapp.com/filtrar");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      const printBut = document.querySelector('.botonPrint')
      data.forEach(element => {
        const total = document.getElementById("total");
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
        flag++;
        total.innerText = flag;
      });
      const printData = () => {
        const divToPrint = document.getElementById("table-inve");
        let newWin = null;
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      }
      printBut.addEventListener('click', printData);
      const buttonPrint = document.getElementById('botonadios');
      buttonPrint.style.display = "block";
    };

    let callDecre = async () => {
      const response = await fetch("https://server-inve.herokuapp.com/filtrar/decre");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      const printBut = document.querySelector('.botonPrint')
      data.forEach(element => {
        const total = document.getElementById("total");
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
        flag++;
        total.innerText = flag;
      });
      const printData = () => {
        const divToPrint = document.getElementById("table-inve");
        let newWin = null;
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      }
      printBut.addEventListener('click', printData);
      const buttonPrint = document.getElementById('botonadios');
      buttonPrint.style.display = "block";
    };
    let callVacia = async () => {
      const response = await fetch("https://server-inve.herokuapp.com/filtrar/vacia");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      const printBut = document.querySelector('.botonPrint')
      data.forEach(element => {
        const total = document.getElementById("total");
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
        flag++;
        total.innerText = flag;
      });
      const printData = () => {
        const divToPrint = document.getElementById("table-inve");
        let newWin = null;
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      }
      printBut.addEventListener('click', printData);
      const buttonPrint = document.getElementById('botonadios');
      buttonPrint.style.display = "block";
    };
    let callCargada = async () => {
      const response = await fetch("https://server-inve.herokuapp.com/filtrar/cargada");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      const printBut = document.querySelector('.botonPrint')
      data.forEach(element => {
        const total = document.getElementById("total");
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
        flag++;
        total.innerText = flag;
      });
      const printData = () => {
        const divToPrint = document.getElementById("table-inve");
        let newWin = null;
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      }
      printBut.addEventListener('click', printData);
      const buttonPrint = document.getElementById('botonadios');
      buttonPrint.style.display = "block";
    };

    let callPredio = async () => {
      const predioCall = document.getElementById("callPredio").value;

      const response = await fetch(
        `https://server-inve.herokuapp.com/filtrar/predio?predio=${predioCall}`
      );
      const printBut = document.querySelector('.botonPrint')
      const data = await response.json();
      const inventario = document.getElementById("table-inve");

      data.forEach(element => {
        const total = document.getElementById("total");
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
        flag++;
        total.innerText = flag;
      });
      const printData = () => {
        const divToPrint = document.getElementById("table-inve");
        let newWin = null;
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      }
      printBut.addEventListener('click', printData);
      const buttonPrint = document.getElementById('botonadios');
      buttonPrint.style.display = "block";
    };

    let callOrigen = async () => {
      const origenCall = document.getElementById("callOrigen").value;
      const printBut = document.querySelector('.botonPrint')
      const response = await fetch(
        `https://server-inve.herokuapp.com/filtrar/origen?origen=${origenCall}`
      );

      const data = await response.json();
      const inventario = document.getElementById("table-inve");

      data.forEach(element => {
        const total = document.getElementById("total");
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
        flag++;
        total.innerText = flag;
      });
      const printData = () => {
        const divToPrint = document.getElementById("table-inve");
        let newWin = null;
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      }
      printBut.addEventListener('click', printData);
      const buttonPrint = document.getElementById('botonadios');
      buttonPrint.style.display = "block";
    };
    let callVenta = async () => {
      const response = await fetch("https://server-inve.herokuapp.com/bajas");
      const data = await response.json();
      const inventario = document.getElementById("table-inve");
      const printBut = document.querySelector('.botonPrint')
      data.forEach(element => {
        const total = document.getElementById("total");
        if (element.motivo_baja === "Vendido" || element.motivo_baja === "vendido") {
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
          flag++;
          total.innerText = flag;
        }

      });
      const printData = () => {
        const divToPrint = document.getElementById("table-inve");
        let newWin = null;
        newWin = window.open("");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      }
      printBut.addEventListener('click', printData);
      const buttonPrint = document.getElementById('botonadios');
      buttonPrint.style.display = "block";

    };
    let refresh = () => {
      window.location.reload();
    };
    return (
      <>

        <div id="cuadro-reporte">
          <div className="cuadroreportes">
            <div className="acomodacion">
              <div className="seleccionboton">
                <button className="marginbutons1 buton" onClick={callFiltros}>
                  Los que incrementaron de peso
                </button>
                <button className="marginbutons1 buton" onClick={callDecre}>
                  Los que decrementaron de peso
                </button>
                <button className="marginbutons1 buton" onClick={callVacia}>
                  Las que estan vacias
                </button>
                <button className="marginbutons1 buton" onClick={callCargada}>
                  Las que estan cargadas
                </button>
                <button className="marginbutons1 buton" onClick={callVenta}>
                  Vendido
                </button>
              </div>
              <div className="seleccionboton2">
                <select className="marginbutons1 " id="callPredio">
                  <option value="">Selecciona el predio...</option>
                </select>
                <button className=" buton" onClick={callPredio}>
                  Aceptar predio
                </button>
                <select className="marginbutons1" id="callOrigen">
                  <option value="">Selecciona el origen...</option>
                </select>
                <button className="buton" onClick={callOrigen}>
                  Aceptar origen
                </button>

              </div>
            </div>
            <span className="total">Total: <span id="total"></span></span>
            <div className="select">
              <button className="refrescar" onClick={refresh}>
                Holis 5
              </button>
              <button className="botonPrint buton" id="botonadios">Imprimir</button>
            </div>
          </div>
        </div>
        <br />
        <br />



        <div className="tablainventario">
          <div className="titulosnombres">
            <table id="table-inve" className="table-inve">
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>

      </>
    );
  }
}

export default Filtra;
