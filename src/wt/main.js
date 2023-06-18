import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function performCalculations() {
  const cp = cpus();
  console.log(cp.length);
  let num = 10;

  const workersResults = await Promise.allSettled(
    cp.map(() => {
      return new Promise((res, rej) => {
        const worker = new Worker(__dirname + "/worker.js", {
          workerData: num++,
        });
        worker.on("message", (msg) => res(msg));
        worker.on("error", (msg) => rej(msg));
      });
    })
  );

  const results = workersResults.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));

  console.log(results);

  return results;
}

performCalculations();
