import { dirname, path } from "path";
import { fileURLToPath } from "url";

export const __fileName = fileURLToPath(import.meta.url);
export const __dirname = dirname(__fileName);

export const config = {
  path: { a: "./files/a.json", b: "./files/a.json" },
  port: 3000,
  random: () => Math.random(),
  sep: path.sep,
};
