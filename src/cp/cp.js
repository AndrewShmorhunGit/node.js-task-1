import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function spawnChildProcess(args) {
  let initiated = false;

  const childProcess = spawn("node", [
    `${dirname}/files/script.js`,
    ...args.split(""),
  ]);
  process.stdin.on("data", (data) => {
    console.log(data.toString());
    if (!initiated) {
      console.log("Write to the console.." + "\n");
      initiated = true;
    }
  });
}

// Put your arguments in function call to test this functionality
spawnChildProcess("--silent --all");
