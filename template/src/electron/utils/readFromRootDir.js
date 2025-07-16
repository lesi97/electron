const fs = require("fs");
const path = require("path");

/**
 * Reads the contents of a file in the project root directory
 *
 * @param {string} filename - The name of the file (e.g., user.json)
 * @returns {Promise<string|null>} - Resolves with the file contents or null if an error occurs
 */
async function readFromRootDir(filename) {
  const filePath = path.resolve(__dirname, "../../../", filename);

  return new Promise((resolve) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        console.error(`Failed to read ${filename}:`, error);
        resolve(null);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { readFromRootDir };
