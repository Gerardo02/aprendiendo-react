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
    width: 1300,
    height: 600,
    title: "hola",
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
