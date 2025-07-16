const os = require("os");
const { execSync } = require("child_process");

const platform = os.platform();

if (platform === "win32") {
  execSync("npm run build:win", { stdio: "inherit" });
} else if (platform === "darwin") {
  execSync("npm run build:mac", { stdio: "inherit" });
} else {
  execSync("npm run build:linux", { stdio: "inherit" });
}
