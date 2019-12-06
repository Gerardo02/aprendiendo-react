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
  connection.query("SELECT * FROM datos", (err, rows, fields) => {
    if (err) {
      throw err;
    } else {
      console.log("succes datos");
      resp.json(rows);
    }
  });
});

app.get("/add", (req, resp) => {
  connection.query(
    `INSERT INTO datos (empresas) VALUES ()`,
    (err, rows, fields) => {
      if (err) {
        throw err;
      } else {
        console.log("se anadio");
      }
    }
  );
});
