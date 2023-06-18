import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function decompress() {
  const writeStream = createWriteStream(
    __dirname + "/files/fileToCompress.txt"
  );
  const readStream = createReadStream(__dirname + "/files/archive.gz");
  const toGz = createUnzip();

  readStream.pipe(toGz).pipe(writeStream);

  console.log("file archive.gz was extracted to files directory!");
}
decompress();
