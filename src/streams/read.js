import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function read() {
  const readStream = createReadStream(
    __dirname + "/files/fileToRead.txt",
    "utf8"
  );
  readStream.pipe(process.stdout);
}

await read();
