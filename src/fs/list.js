// import { dirname } from "node:path";
import { __dirname, message } from "./files/path-fs.js";
import { readdir } from "node:fs/promises";

const src = __dirname;

const list = async (source) => {
  try {
    (await readdir(source)).map((file) => console.log(file));
  } catch (error) {
    throw new Error(message.error);
  }
};

await list(src);
