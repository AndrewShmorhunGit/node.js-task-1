import { dirname } from "path";
import { fileURLToPath } from "url";
const { createHmac } = await import("node:crypto");
const { readFile } = await import("fs/promises");

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const source = "/files/fileToCalculateHashFor.txt";
const secret = "_key-secret!";

export async function calculateHashWithSecret(secret) {
  try {
    const string = await readFile(__dirname + source);
    const hash = createHmac("sha256", secret).update(string).digest("hex");
    console.log(hash);
  } catch (error) {
    console.error(error);
  }
}

calculateHashWithSecret(secret);
