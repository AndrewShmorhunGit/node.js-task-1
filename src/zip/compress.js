import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function compress() {
  const readStream = createReadStream(__dirname + "/files/fileToCompress.txt");
  const writeStream = createWriteStream(__dirname + "/files/archive.gz");
  const toGz = createGzip();

  readStream.pipe(toGz).pipe(writeStream);

  console.log("fileToCompress.txt was archived!");
}

compress();
