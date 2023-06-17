import { mkdir, readdir, copyFile } from "node:fs/promises";
import { __dirname, message } from "./files/path-fs.js";

const src = __dirname.slice(0, -1);

export async function copy(folder) {
  const folderCopy = folder + "_copy";
  try {
    await mkdir(folderCopy);
    const directory = await readdir(folder);
    await Promise.all(
      directory.map((file) =>
        copyFile(folder + "/" + file, folderCopy + "/" + file)
      )
    );
  } catch (error) {
    throw new Error(message.error);
  }
}

copy(src);
