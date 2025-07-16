const fs = require("fs");
const os = require("os");
const path = require("path");

/**
 * Utility function to create a file in the users downloads folder
 * Used primarily for debugging packaged versions of the application
 *
 * @param {*} fileName
 * @param {*} fileContent
 * @example
 * writeToDownloads('proclamation.txt', "I'm Luffy!\nThe man who will become King of the Pirates!")
 */
function writeToDownloads(fileName, fileContent) {
  const downloadsDir = path.join(os.homedir(), "Downloads");
  const filePath = path.join(downloadsDir, fileName);

  fs.writeFile(filePath, fileContent, "utf8", (error) => {
    if (error) {
      console.error("Failed to write file:", error);
    } else {
      console.log(`Debug info written to ${filePath}`);
    }
  });
}

module.exports = { writeToDownloads };
