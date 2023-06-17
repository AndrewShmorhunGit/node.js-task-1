import { readFile } from "node:fs/promises";
import { __dirname, message } from "./files/path-fs.js";

export async function read() {
  const path = __dirname + "fileToRead.txt";
  try {
    const data = await readFile(path, "utf8");
    console.log(data);
  } catch (error) {
    console.error(message.error);
  }
}

await read();
