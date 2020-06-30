const path = require("path");
const { app, BrowserWindow, Menu, autoUpdater, dialog } = require("electron");
const isDev = require("electron-is-dev");
require('update-electron-app')();


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let otherWindow;

let createWindow = () => {
  // Create the browser window.

  mainWindow = new BrowserWindow({
    width: 1250,
    height: 768,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true
    },
  });
  module.exports = {
    webpack: {
      publicPath: "",
    },
  };

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
        label: "hola",
      },
      {
        label: "Salir",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Refresh",
    submenu: [
      {
        label: "Sacar dev tools",
        accelerator: "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: "reload",
      },
    ],
  }
];
//mainMenuTemplate.push();
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


if (!isDev) {
  const server = 'https://aprendiendo-react-er2n148ar.vercel.app/';
  const url = `${server}/update/${process.platform}/${app.getVersion()}`;

  autoUpdater.setFeedURL({ url });


  setInterval(() => {
    autoUpdater.checkForUpdates()
  }, 60000)

  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const dialogOpts = {
      type: 'info',
      buttons: ['Reiniciar', 'Mas Tarde'],
      title: 'Actualizacion de aplicacion',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: 'Una nueva version ha sido descargada. Reiniciar la aplicacion por favor.'
    }

    dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall()
    })
  })

  autoUpdater.on('error', message => {
    console.error('There was a problem updating the application')
    console.error(message)
  })
}

