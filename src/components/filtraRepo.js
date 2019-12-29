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
      const inventario = document.getElementById("cuadro-reporte");
      data.forEach(element => {
        inventario.innerHTML += `
      
      <div class="cuadro-animal">
      <div class="texto-inve1">
      <strong>Empresa </strong><br/>
      ${element.empresas}<br/><br/>
      <strong>Predio </strong><br/>
      ${element.predio}<br/><br/>
      <strong>Precio </strong><br/>
      ${element.precio}<br/><br/>
      <strong>Numero de guia </strong><br/>
      ${element.num_guia}<br/><br/>
      <strong>Tipo de ganado </strong><br/>
      ${element.tipo}<br/><br/>
      <strong>Raza </strong><br/>
      ${element.raza}<br/><br/>
      <strong>Origen </strong><br/>
      ${element.origen}<br/><br/>
      <strong>Arete </strong><br/>
      ${element.arete}<br/><br/>
      <strong>Fecha de registro </strong><br/>
      ${element.fecha_alta}<br/>
      </div>
      <div class="texto-inve2">
      <strong>Fecha de nacimiento</strong><br/>
      ${element.fecha_nacimiento}<br/><br/>
      <strong>Peso de compra </strong><br/>
      ${element.peso_compra}<br/><br/>
      <strong>Peso actual </strong><br/>
      ${element.peso_actual}<br/><br/>
      <strong>Incremento de peso </strong><br/>
      ${element.incremento_peso}<br/><br/>
      <strong>Estatus </strong><br/>
      ${element.estatus}<br/><br/>
      <strong>Edad (en meses)</strong><br/>
      ${element.edad}<br/><br/>
      <strong>Ultimo parto </strong><br/>
      ${element.ultimo_parto}<br/><br/>
      <strong>Meses vacia </strong><br/>
      ${element.meses_vacia}<br/><br/>
      <strong>Particularidades </strong><br/>
      ${element.particularidades}<br/>
      </div>
      </div>
      <br/><br/><br/>
      `;
      });
    };
    let callDecre = async () => {
      const response = await fetch("http://localhost:4000/filtrar/decre");
      const data = await response.json();
      const inventario = document.getElementById("cuadro-reporte");
      data.forEach(element => {
        inventario.innerHTML += `
        
        <div class="cuadro-animal">
        <div class="texto-inve1">
        <strong>Empresa </strong><br/>
        ${element.empresas}<br/><br/>
        <strong>Predio </strong><br/>
        ${element.predio}<br/><br/>
        <strong>Precio </strong><br/>
        ${element.precio}<br/><br/>
        <strong>Numero de guia </strong><br/>
        ${element.num_guia}<br/><br/>
        <strong>Tipo de ganado </strong><br/>
        ${element.tipo}<br/><br/>
        <strong>Raza </strong><br/>
        ${element.raza}<br/><br/>
        <strong>Origen </strong><br/>
        ${element.origen}<br/><br/>
        <strong>Arete </strong><br/>
        ${element.arete}<br/><br/>
        <strong>Fecha de registro </strong><br/>
        ${element.fecha_alta}<br/>
        </div>
        <div class="texto-inve2">
        <strong>Fecha de nacimiento</strong><br/>
        ${element.fecha_nacimiento}<br/><br/>
        <strong>Peso de compra </strong><br/>
        ${element.peso_compra}<br/><br/>
        <strong>Peso actual </strong><br/>
        ${element.peso_actual}<br/><br/>
        <strong>Incremento de peso </strong><br/>
        ${element.incremento_peso}<br/><br/>
        <strong>Estatus </strong><br/>
        ${element.estatus}<br/><br/>
        <strong>Edad (en meses)</strong><br/>
        ${element.edad}<br/><br/>
        <strong>Ultimo parto </strong><br/>
        ${element.ultimo_parto}<br/><br/>
        <strong>Meses vacia </strong><br/>
        ${element.meses_vacia}<br/><br/>
        <strong>Particularidades </strong><br/>
        ${element.particularidades}<br/>
        </div>
        </div>
        <br/><br/><br/>
        `;
      });
    };
    let callVacia = async () => {
      const response = await fetch("http://localhost:4000/filtrar/vacia");
      const data = await response.json();
      const inventario = document.getElementById("cuadro-reporte");
      data.forEach(element => {
        inventario.innerHTML += `
          
          <div class="cuadro-animal">
          <div class="texto-inve1">
          <strong>Empresa </strong><br/>
          ${element.empresas}<br/><br/>
          <strong>Predio </strong><br/>
          ${element.predio}<br/><br/>
          <strong>Precio </strong><br/>
          ${element.precio}<br/><br/>
          <strong>Numero de guia </strong><br/>
          ${element.num_guia}<br/><br/>
          <strong>Tipo de ganado </strong><br/>
          ${element.tipo}<br/><br/>
          <strong>Raza </strong><br/>
          ${element.raza}<br/><br/>
          <strong>Origen </strong><br/>
          ${element.origen}<br/><br/>
          <strong>Arete </strong><br/>
          ${element.arete}<br/><br/>
          <strong>Fecha de registro </strong><br/>
          ${element.fecha_alta}<br/>
          </div>
          <div class="texto-inve2">
          <strong>Fecha de nacimiento</strong><br/>
          ${element.fecha_nacimiento}<br/><br/>
          <strong>Peso de compra </strong><br/>
          ${element.peso_compra}<br/><br/>
          <strong>Peso actual </strong><br/>
          ${element.peso_actual}<br/><br/>
          <strong>Incremento de peso </strong><br/>
          ${element.incremento_peso}<br/><br/>
          <strong>Estatus </strong><br/>
          ${element.estatus}<br/><br/>
          <strong>Edad (en meses)</strong><br/>
          ${element.edad}<br/><br/>
          <strong>Ultimo parto </strong><br/>
          ${element.ultimo_parto}<br/><br/>
          <strong>Meses vacia </strong><br/>
          ${element.meses_vacia}<br/><br/>
          <strong>Particularidades </strong><br/>
          ${element.particularidades}<br/>
          </div>
          </div>
          <br/><br/><br/>
          `;
      });
    };
    let callCargada = async () => {
      const response = await fetch("http://localhost:4000/filtrar/cargada");
      const data = await response.json();
      const inventario = document.getElementById("cuadro-reporte");
      data.forEach(element => {
        inventario.innerHTML += `
            
            <div class="cuadro-animal">
            <div class="texto-inve1">
            <strong>Empresa </strong><br/>
            ${element.empresas}<br/><br/>
            <strong>Predio </strong><br/>
            ${element.predio}<br/><br/>
            <strong>Precio </strong><br/>
            ${element.precio}<br/><br/>
            <strong>Numero de guia </strong><br/>
            ${element.num_guia}<br/><br/>
            <strong>Tipo de ganado </strong><br/>
            ${element.tipo}<br/><br/>
            <strong>Raza </strong><br/>
            ${element.raza}<br/><br/>
            <strong>Origen </strong><br/>
            ${element.origen}<br/><br/>
            <strong>Arete </strong><br/>
            ${element.arete}<br/><br/>
            <strong>Fecha de registro </strong><br/>
            ${element.fecha_alta}<br/>
            </div>
            <div class="texto-inve2">
            <strong>Fecha de nacimiento</strong><br/>
            ${element.fecha_nacimiento}<br/><br/>
            <strong>Peso de compra </strong><br/>
            ${element.peso_compra}<br/><br/>
            <strong>Peso actual </strong><br/>
            ${element.peso_actual}<br/><br/>
            <strong>Incremento de peso </strong><br/>
            ${element.incremento_peso}<br/><br/>
            <strong>Estatus </strong><br/>
            ${element.estatus}<br/><br/>
            <strong>Edad (en meses)</strong><br/>
            ${element.edad}<br/><br/>
            <strong>Ultimo parto </strong><br/>
            ${element.ultimo_parto}<br/><br/>
            <strong>Meses vacia </strong><br/>
            ${element.meses_vacia}<br/><br/>
            <strong>Particularidades </strong><br/>
            ${element.particularidades}<br/>
            </div>
            </div>
            <br/><br/><br/>
            `;
      });
    };

    let callPredio = async () => {
      const predioCall = document.getElementById("callPredio").value;

      const response = await fetch(
        `http://localhost:4000/filtrar/predio?predio=${predioCall}`
      );

      const data = await response.json();
      const inventario = document.getElementById("cuadro-reporte");

      data.forEach(element => {
        inventario.innerHTML += `
                  
                  <div class="cuadro-animal">
                  <div class="texto-inve1">
                  <strong>Empresa </strong><br/>
                  ${element.empresas}<br/><br/>
                  <strong>Predio </strong><br/>
                  ${element.predio}<br/><br/>
                  <strong>Precio </strong><br/>
                  ${element.precio}<br/><br/>
                  <strong>Numero de guia </strong><br/>
                  ${element.num_guia}<br/><br/>
                  <strong>Tipo de ganado </strong><br/>
                  ${element.tipo}<br/><br/>
                  <strong>Raza </strong><br/>
                  ${element.raza}<br/><br/>
                  <strong>Origen </strong><br/>
                  ${element.origen}<br/><br/>
                  <strong>Arete </strong><br/>
                  ${element.arete}<br/><br/>
                  <strong>Fecha de registro </strong><br/>
                  ${element.fecha_alta}<br/>
                  </div>
                  <div class="texto-inve2">
                  <strong>Fecha de nacimiento</strong><br/>
                  ${element.fecha_nacimiento}<br/><br/>
                  <strong>Peso de compra </strong><br/>
                  ${element.peso_compra}<br/><br/>
                  <strong>Peso actual </strong><br/>
                  ${element.peso_actual}<br/><br/>
                  <strong>Incremento de peso </strong><br/>
                  ${element.incremento_peso}<br/><br/>
                  <strong>Estatus </strong><br/>
                  ${element.estatus}<br/><br/>
                  <strong>Edad (en meses)</strong><br/>
                  ${element.edad}<br/><br/>
                  <strong>Ultimo parto </strong><br/>
                  ${element.ultimo_parto}<br/><br/>
                  <strong>Meses vacia </strong><br/>
                  ${element.meses_vacia}<br/><br/>
                  <strong>Particularidades </strong><br/>
                  ${element.particularidades}<br/>
                  </div>
                  </div>
                  <br/><br/><br/>
                  `;
      });
    };
    let callOrigen = async () => {
      const origenCall = document.getElementById("callOrigen").value;

      const response = await fetch(
        `http://localhost:4000/filtrar/origen?origen=${origenCall}`
      );

      const data = await response.json();
      const inventario = document.getElementById("cuadro-reporte");

      data.forEach(element => {
        inventario.innerHTML += `
                    
                    <div class="cuadro-animal">
                    <div class="texto-inve1">
                    <strong>Empresa </strong><br/>
                    ${element.empresas}<br/><br/>
                    <strong>Predio </strong><br/>
                    ${element.predio}<br/><br/>
                    <strong>Precio </strong><br/>
                    ${element.precio}<br/><br/>
                    <strong>Numero de guia </strong><br/>
                    ${element.num_guia}<br/><br/>
                    <strong>Tipo de ganado </strong><br/>
                    ${element.tipo}<br/><br/>
                    <strong>Raza </strong><br/>
                    ${element.raza}<br/><br/>
                    <strong>Origen </strong><br/>
                    ${element.origen}<br/><br/>
                    <strong>Arete </strong><br/>
                    ${element.arete}<br/><br/>
                    <strong>Fecha de registro </strong><br/>
                    ${element.fecha_alta}<br/>
                    </div>
                    <div class="texto-inve2">
                    <strong>Fecha de nacimiento</strong><br/>
                    ${element.fecha_nacimiento}<br/><br/>
                    <strong>Peso de compra </strong><br/>
                    ${element.peso_compra}<br/><br/>
                    <strong>Peso actual </strong><br/>
                    ${element.peso_actual}<br/><br/>
                    <strong>Incremento de peso </strong><br/>
                    ${element.incremento_peso}<br/><br/>
                    <strong>Estatus </strong><br/>
                    ${element.estatus}<br/><br/>
                    <strong>Edad (en meses)</strong><br/>
                    ${element.edad}<br/><br/>
                    <strong>Ultimo parto </strong><br/>
                    ${element.ultimo_parto}<br/><br/>
                    <strong>Meses vacia </strong><br/>
                    ${element.meses_vacia}<br/><br/>
                    <strong>Particularidades </strong><br/>
                    ${element.particularidades}<br/>
                    </div>
                    </div>
                    <br/><br/><br/>
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
            <button>Refrescar</button>
          </form>
        </div>
      </>
    );
  }
}

export default Filtra;
