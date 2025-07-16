const fs = require("fs");
const path = require("path");

/**
 * Writes content to a file in the project root directory
 *
 * @param {string} filename - Name of the file including extension (e.g output.txt).
 * @param {string} content
 * @param {Object} [append] - Defaults to false
 */
function writeToRootDir(filename, content, append = false) {
  const filePath = path.resolve(__dirname, "../../../", filename);
  const dir = path.dirname(filePath);

  fs.mkdir(dir, { recursive: true }, (mkdirError) => {
    if (mkdirError) {
      console.error(`Failed to create directory ${dir}:`, mkdirError);
      return;
    }

    const method = append ? fs.appendFile : fs.writeFile;

    method(filePath, content, "utf-8", (error) => {
      if (error) {
        console.error(
          `Failed to ${append ? "append to" : "write to"} ${filename}:`,
          error,
        );
      } else {
        console.log(`${append ? "Appended to" : "Wrote to"} ${filePath}`);
      }
    });
  });
}

module.exports = { writeToRootDir };
