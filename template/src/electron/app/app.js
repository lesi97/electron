const { BrowserWindow } = require("electron");
const path = require("path");
const waitOn = require("wait-on");

let appWindow;

async function createAppWindow() {
  appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 0,
    minWidth: 175,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    contextIsolation: true,
    nodeIntegration: false,
  });

  if (process.env.NODE_ENV === "development") {
    const viteDevServerURL = "http://localhost:5173";
    try {
      await waitOn({
        resources: [`${viteDevServerURL}/index.html`],
        timeout: 5000,
      });
      appWindow.loadURL(viteDevServerURL);
    } catch (error) {
      console.error("Failed to wait for Vite dev server:", error);
    }
  } else {
    appWindow.loadFile(path.join(__dirname, "../../../dist/index.html"));
  }

  appWindow.on("closed", () => {
    appWindow = null;
  });
}

module.exports = { createAppWindow, appWindow };
