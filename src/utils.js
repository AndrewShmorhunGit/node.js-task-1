import { dirname, join } from "path";
import { fileURLToPath } from "url";

export function getPath(url, folder, fileName) {
  return join(dirname(fileURLToPath(url)), folder, fileName);
}
