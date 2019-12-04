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

app.listen("1450", () => {
  console.log("inicializa servidor en puerto 1450");
});

// command

/*const outputDatos = execSync("start firefox localhost:1450/datos", {
    encoding: "utf-8"
  });*/
//console.log("Output datos was:\n", outputDatos);
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
/*
else if (process.platform === "darwin") {
  const outputDatos = execSync("open chrome localhost:1450/datos", {
    encoding: "utf-8"
  });
  console.log("Output datos was:\n", outputDatos);
  app.get("/datos", (req, resp) => {
    connection.query("SELECT * FROM datos", (err, rows, fields) => {
      if (err) {
        throw err;
      } else {
        console.log("succes datos");
        //console.log(`El tipo es:${rows[0].tipo}`);
      }
      resp.send("Conectado a la table datos");
      //datos = rows;
      //console.log(datos);
    });
  });
}
*/
