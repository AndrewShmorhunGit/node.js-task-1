import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export function sendResult() {
  parentPort.postMessage(nthFibonacci(workerData));
}

sendResult();
