//import App, { respuesta, input } from "./App";
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app = express();

// Create connection
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "633d5ca8e4",
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
    precio,
    numGuia,
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
    particularidades
  } = req.query;
  connection.query(
    `INSERT INTO datos (
      empresas,
      predio,
      precio,
      num_guia,
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
      particularidades
    ) VALUES (
      '${empresas}',
      '${predio}', 
      ${precio},
      '${numGuia}',
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
      '${particularidades}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se anadio");
        resp.send("added");
      }
    }
  );
});

app.get("/agregados", (req, resp) => {
  connection.query("SELECT * FROM agregados", (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log("succes agregados");
      resp.json(rows);
    }
  });
});

app.get("/add/predio", (req, resp) => {
  const { predio } = req.query;
  connection.query(
    `INSERT INTO agregados (predio) VALUES ('${predio}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se agregaron predio");
      }
    }
  );
});
app.get("/add/empresas", (req, resp) => {
  const { empresas } = req.query;
  connection.query(
    `INSERT INTO agregados (empresas) VALUES ('${empresas}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se agregaron empresas");
      }
    }
  );
});
app.get("/add/origen", (req, resp) => {
  const { origen } = req.query;
  connection.query(
    `INSERT INTO agregados (origen) VALUES ('${origen}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se agregaron origen");
      }
    }
  );
});
app.get("/add/tipo", (req, resp) => {
  const { tipo } = req.query;
  connection.query(
    `INSERT INTO agregados (tipo) VALUES ('${tipo}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se agregaron tipo");
      }
    }
  );
});
app.get("/add/raza", (req, resp) => {
  const { raza } = req.query;
  connection.query(
    `INSERT INTO agregados (raza) VALUES ('${raza}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se agregaron raza");
      }
    }
  );
});
app.get("/add/estatus", (req, resp) => {
  const { estatus } = req.query;
  connection.query(
    `INSERT INTO agregados (estatus) VALUES ('${estatus}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se agregaron estatus");
      }
    }
  );
});
app.get("/add/particularidades", (req, resp) => {
  const { particularidades } = req.query;
  connection.query(
    `INSERT INTO agregados (particularidades) VALUES ('${particularidades}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se agregaron particularidades");
      }
    }
  );
});
