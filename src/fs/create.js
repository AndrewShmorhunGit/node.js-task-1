import { writeFile } from "node:fs/promises";
import { __dirname, message } from "./files/path-fs.js";

const content = "I am fresh and young!";
const path = __dirname + "fresh.txt";

export async function create(path, content) {
  try {
    await writeFile(path, content, { flag: "wx" });
  } catch (err) {
    throw new Error(message.error);
  }
}

create(path, content);
