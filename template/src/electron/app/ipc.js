const { ipcMain } = require("electron");

/**
 * Function to declare electron functions to pass through into the renderer
 *
 */
function setupIpc() {
  ipcMain.on("test", () => {
    console.log("IPC Working");
  });
}

module.exports = { setupIpc };
