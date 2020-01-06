const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const isDev = require("electron-is-dev");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let otherWindow;

let createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1250,
    height: 768,
    title: "hola",
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Create menu template
const mainMenuTemplate = [
  {
    label: `File`,
    submenu: [
      {
        label: "hola"
      },
      {
        label: "Salir",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];
mainMenuTemplate.push({
  label: "Dev tools",
  submenu: [
    {
      label: "Sacar dev tools",
      accelerator: "Ctrl+I",
      click(item, focusedWindow) {
        focusedWindow.toggleDevTools();
      }
    },
    {
      role: "reload"
    }
  ]
});
// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app1 = express();

// Create connection
/*connection = mysql.createConnection({
  host: "50.62.209.153",
  port: 3306,
  user: "ganado",
  password: "767482",
  database: "inventario_ganadero1"
});*/
// connect
const db_config = {
  host: "50.62.209.153",
  port: 3306,
  user: "ganado",
  password: "767482",
  database: "inventario_ganadero1"
};

let connection;

let handleDisconnect = () => {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(err => {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on("error", err => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
};

handleDisconnect();
/*connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected");
});*/

app1.use(cors());

app1.listen("4000", () => {
  console.log("inicializa servidor en puerto 4000");
});

app1.get("/datos", (req, resp) => {
  connection.query("SELECT * FROM datos", (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log("succes datos");
      resp.json(rows);
    }
  });
});

app1.get("/historial", (req, resp) => {
  connection.query("SELECT * FROM historial", (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log("succes datos");
      resp.json(rows);
    }
  });
});

app1.get("/send/historial", (req, resp) => {
  const { numGuia, tipo, raza, arete, fecha, movimiento } = req.query;
  connection.query(
    `INSERT INTO historial (
    num_guia,
    tipo,
    raza,
    arete,
    fecha,
    movimiento
  ) VALUES (
    '${numGuia}',
    '${tipo}', 
    '${raza}', 
    '${arete}', 
    '${fecha}', 
    '${movimiento}')`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes send historial");
      }
    }
  );
});

app1.get("/filtrar", (req, resp) => {
  connection.query(
    "SELECT * FROM datos WHERE incremento_peso > 0",
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes filtrados incremento");
        resp.json(rows);
      }
    }
  );
});

app1.get("/filtrar/decre", (req, resp) => {
  connection.query(
    "SELECT * FROM datos WHERE incremento_peso <= 0",
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes filtrados decremento");
        resp.json(rows);
      }
    }
  );
});

app1.get("/filtrar/vacia", (req, resp) => {
  connection.query(
    "SELECT * FROM datos WHERE estatus = 'Vacia'",
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes filtrados vacia");
        resp.json(rows);
      }
    }
  );
});

app1.get("/filtrar/cargada", (req, resp) => {
  connection.query(
    "SELECT * FROM datos WHERE estatus = 'Cargada'",
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes filtrados cargada");
        resp.json(rows);
      }
    }
  );
});

app1.get("/filtrar/predio", (req, resp) => {
  const { predio } = req.query;
  connection.query(
    `SELECT * FROM datos WHERE predio = '${predio}'`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes filtrados predio");
        resp.json(rows);
      }
    }
  );
});

app1.get("/filtrar/origen", (req, resp) => {
  const { origen } = req.query;
  connection.query(
    `SELECT * FROM datos WHERE origen = '${origen}'`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes filtrados origen");
        resp.json(rows);
      }
    }
  );
});

app1.get("/buscar/arete", (req, resp) => {
  const { arete } = req.query;
  connection.query(
    `SELECT * FROM datos WHERE arete = '${arete}'`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes busqueda arete");
        resp.json(rows);
      }
    }
  );
});

app1.get("/add", (req, resp) => {
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
      '${particularidades}'
      )`,
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

app1.get("/actualizar", (req, resp) => {
  const {
    arete,
    pesoActual,
    estatus,
    ultimoParto,
    mesesVacia,
    particularidades,
    incremento
  } = req.query;
  connection.query(
    `UPDATE DATOS SET 
    peso_actual=${pesoActual},
    estatus='${estatus}',
    ultimo_parto='${ultimoParto}',
    meses_vacia=${mesesVacia},
    particularidades='${particularidades}',
    incremento_peso='${incremento}'  WHERE arete = '${arete}'`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("se ACTUALIZO");
        resp.send("added");
      }
    }
  );
});

app1.get("/delete", (req, resp) => {
  const { arete } = req.query;
  connection.query(
    `DELETE FROM datos WHERE arete = '${arete}'`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes delete");
      }
    }
  );
});

app1.get("/delete/bajas", (req, resp) => {
  const { arete } = req.query;
  connection.query(
    `DELETE FROM bajas WHERE arete = '${arete}'`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes delete from bajas");
      }
    }
  );
});

app1.get("/bajas", (req, resp) => {
  connection.query(`SELECT * FROM bajas`, (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log("succes bajas");
      resp.json(rows);
    }
  });
});

app1.get("/send", (req, resp) => {
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
    particularidades,
    fechaBaja,
    motivoBaja
  } = req.query;
  connection.query(
    `INSERT INTO bajas (
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
      particularidades,
      fecha_baja,
      motivo_baja
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
      '${particularidades}',
      '${fechaBaja}',
      '${motivoBaja}'
      )`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes add baja");
      }
    }
  );
});

app1.get("/send/bajas", (req, resp) => {
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
      '${particularidades}'
      )`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes send to datos");
      }
    }
  );
});

app1.get("/agregados", (req, resp) => {
  connection.query("SELECT * FROM agregados", (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log("succes agregados");
      resp.json(rows);
    }
  });
});

app1.get("/agregados/delete", (req, resp) => {
  const { empresas, tipo, predio, raza, origen, particularidades } = req.query;
  connection.query(
    `DELETE FROM agregados WHERE tipo = '${tipo}' OR empresas = '${empresas}' OR predio = '${predio}' OR raza = '${raza}' OR origen = '${origen}' OR particularidades = '${particularidades}'`,
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("succes delete agregados");
      }
    }
  );
});

app1.get("/add/predio", (req, resp) => {
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
app1.get("/add/empresas", (req, resp) => {
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
app1.get("/add/origen", (req, resp) => {
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
app1.get("/add/tipo", (req, resp) => {
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
app1.get("/add/raza", (req, resp) => {
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
app1.get("/add/estatus", (req, resp) => {
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
app1.get("/add/particularidades", (req, resp) => {
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
