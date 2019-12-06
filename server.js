//import App, { respuesta, input } from "./App";
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app = express();

// Create connection
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "767482",
  database: "inventario_ganadero"
});
// connect
connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected");
});

app.use(cors());

app.listen("4000", () => {
  console.log("inicializa servidor en puerto 4000");
});

app.get("/datos", (req, resp) => {
  connection.query("SELECT * FROM datos", (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log("succes datos");
      resp.json(rows);
    }
  });
});

app.get("/add", (req, resp) => {
  const {
    empresas,
    predio,
    tipo,
    raza,
    origen,
    fechaAlta,
    fechaNac,
    pesoCompra,
    pesoActual,
    incremento,
    estatus,
    arete,
    edad,
    ultimoParto,
    mesesVacia,
    fechaBaja,
    motivoBaja,
    particularidades
  } = req.query;
  connection.query(
    `INSERT INTO datos (
      empresas,
      predio,
      tipo,
      raza,
      origen,
      arete,
      fecha_alta,
      fecha_nacimiento,
      peso_compra,
      peso_actual,
      incremento_peso,
      estatus,
      edad,
      ultimo_parto,
      meses_vacia,
      fecha_baja,
      motivo_baja,
      particularidades
    ) VALUES (
      '${empresas}',
      '${predio}', 
      '${tipo}', 
      '${raza}', 
      '${origen}', 
      '${arete}', 
      '${fechaAlta}', 
      '${fechaNac}', 
      ${pesoCompra}, 
      ${pesoActual}, 
      ${incremento}, 
      '${estatus}', 
      ${edad}, 
      '${ultimoParto}', 
      ${mesesVacia}, 
      '${fechaBaja}', 
      '${motivoBaja}', 
      '${particularidades}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se anadio");
        return resp.send("added");
      }
    }
  );
});
