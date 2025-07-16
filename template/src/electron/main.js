const { app, BrowserWindow } = require("electron");
const { createAppWindow } = require("./app/app");
const { setupIpc } = require("./app/ipc");
const { checkUpdates } = require("./app/updateChecker");
const os = require("os");

setupIpc();

app.on("activate", () => {
  BrowserWindow.getAllWindows().length === 0 && startApp();
});

app.on("ready", () => {
  startApp();
  checkUpdates();
});

app.on("window-all-closed", () => {
  if (os.platform !== "darwin") {
    app.quit();
  }
});

function startApp() {
  createAppWindow();
}
