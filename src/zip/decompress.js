import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { getPath } from "../utils.js";

const fileNameToDecompressIn = "/fileToCompress.txt";
const fileNameToDecompress = "/archive.gz";

const pathToDecompressIn = getPath(
  import.meta.url,
  "/files",
  fileNameToDecompressIn
);

const pathToDecompress = getPath(
  import.meta.url,
  "/files",
  fileNameToDecompress
);

export async function decompress(pathToDecompressIn, pathToDecompress) {
  const writeStream = createWriteStream(
    // __dirname + "/files/fileToCompress.txt"
    pathToDecompressIn
  );
  const readStream = createReadStream(
    // __dirname + "/files/archive.gz"
    pathToDecompress
  );
  const toGz = createUnzip();

  readStream.pipe(toGz).pipe(writeStream);

  console.log("file archive.gz was extracted to files directory!");
}
decompress(pathToDecompressIn, pathToDecompress);
