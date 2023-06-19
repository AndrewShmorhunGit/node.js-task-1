// import { unlink } from "node:fs/promises";
import { __dirname, message } from "./files/path-fs.js";
import { rm } from "node:fs/promises";

const src = __dirname;

const remove = async (fileToRemove) => {
  try {
    await rm(src + fileToRemove);
    // await unlink(src + fileToRemove);
    console.log(`file:${fileToRemove} in folder ${src} has been deleted!`);
  } catch (error) {
    throw new Error(message.error);
  }
};

remove("fileToRemove.txt");
