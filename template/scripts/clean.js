const { execSync } = require("child_process");
const os = require("os");
const builder = require("../electron-builder.json");

try {
  if (os.platform() === "win32") {
    execSync(
      `taskkill /IM \"${builder.portable.artifactName.replace(".${ext}", ".exe")}\" /F`,
      {
        stdio: "ignore",
      },
    );
  } else {
    execSync(
      `pkill -f \"${builder.portable.artifactName.replace("${ext}", "")}\"`,
      { stdio: "ignore" },
    );
  }
} catch (error) {
  console.error(error);
}

const rimraf = require("rimraf");
rimraf.sync("./build");
