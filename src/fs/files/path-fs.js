import { dirname } from "path";
import { fileURLToPath } from "url";
const fileName = fileURLToPath(import.meta.url);
export const __dirname = dirname(fileName) + "/";

export const message = {
  error: "FS operation failed",
};
