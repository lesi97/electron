const { dialog } = require("electron");
const { autoUpdater } = require("electron-updater");

function checkUpdates() {
  const dialogOptionsUpdateAvailable = {
    type: "info",
    alwaysOnTop: true,
    buttons: ["OK"],
    defaultId: 1,
    title: "Update Available",
    message: "An update is available!",
    detail:
      "Please wait a moment as the app will automatically quit and install the new version.",
  };

  autoUpdater.checkForUpdates();
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on("update-available", () => {
    dialog.showMessageBox(null, dialogOptionsUpdateAvailable);
    autoUpdater.downloadUpdate();
  });

  autoUpdater.on("update-downloaded", () => {
    autoUpdater.quitAndInstall(false, false);
  });

  autoUpdater.on("error", (error) => {
    const autoUpdaterErrorMessage = `${new Date().toISOString()} - There was a problem updating the application:\n ${error.stack} \n\n\n`;
    console.error(autoUpdaterErrorMessage);
  });
}

module.exports = {
  checkUpdates,
};
