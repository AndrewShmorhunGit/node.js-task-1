import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function write() {
  const writeStream = createWriteStream(__dirname + "/files/fileToWrite.txt");
  process.stdin.pipe(writeStream);
  console.log("Write something.. please)");
}

write();
