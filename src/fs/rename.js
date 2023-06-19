import { rename as renameFile } from "node:fs/promises";
import { __dirname, message } from "./files/path-fs.js";

const oldPath = __dirname + "wrongFilename.txt";
const newPath = __dirname + "properFilename.md";

export async function rename(oldPath, newPath) {
  try {
    await renameFile(oldPath, newPath);
  } catch (error) {
    throw new Error(message.error);
  }
}

rename(oldPath, newPath);
