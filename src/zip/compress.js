import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { getPath } from "../utils.js";

const fileNameToCompressFrom = "/fileToCompress.txt";
const fileNameToCompressIn = "/archive.gz";

const pathToCompressFrom = getPath(
  import.meta.url,
  "/files",
  fileNameToCompressFrom
);

const pathToToCompressIn = getPath(
  import.meta.url,
  "/files",
  fileNameToCompressIn
);

export async function compress(pathToCompressFrom, pathToToCompressIn) {
  const readStream = createReadStream(pathToCompressFrom);
  const writeStream = createWriteStream(pathToToCompressIn);
  const toGz = createGzip();

  readStream.pipe(toGz).pipe(writeStream);

  console.log("fileToCompress.txt was archived!");
}

compress(pathToCompressFrom, pathToToCompressIn);
