import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const __fileName = fileURLToPath(import.meta.url);
export const __dirname = dirname(__fileName);

export const config = {
  path: { a: "./files/a.json", b: "./files/a.json", c: "./files/a.js" },
  port: 3000,
  random: () => Math.random(),
  sep: path.sep,
  assert: { assert: { type: "json" } },
};
