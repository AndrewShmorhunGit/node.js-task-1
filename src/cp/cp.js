import { spawn } from "child_process";
import { getPath } from "../utils.js";

const path = getPath(import.meta.url, "/files", "/script.js");

export async function spawnChildProcess(args) {
  let initiated = false;

  const childProcess = spawn("node", [path, ...args.split("")]);
  process.stdin.on("data", (data) => {
    console.log(data.toString());
    if (!initiated) {
      console.log("Write to the console.." + "\n");
      initiated = true;
    }
  });
}

spawnChildProcess("--silent --all");
