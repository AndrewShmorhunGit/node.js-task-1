import { Worker } from "worker_threads";
import { cpus } from "os";
import { getPath } from "../utils.js";

const path = getPath(import.meta.url, "", "/worker.js");

export async function performCalculations() {
  const cp = cpus();
  console.log(cp.length);
  let num = 10;

  const workersResults = await Promise.allSettled(
    cp.map(() => {
      return new Promise((res, rej) => {
        const worker = new Worker(path, {
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
