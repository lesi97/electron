const { contextBridge, ipcRenderer } = require("electron");

/**
 * Expose the functions declared in ./ipc.js to the renderer
 *
 */
contextBridge.exposeInMainWorld("electron", {
  test: () => ipcRenderer.send("test"),
});
