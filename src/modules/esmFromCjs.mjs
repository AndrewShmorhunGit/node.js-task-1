import { __dirname, __fileName, config } from "./path-modules.js";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/a.js";

let object =
  config.random() > 0.5
    ? await import(config.path.a, config.assert)
    : await import(config.path.b, config.assert);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${config.sep}"`);

console.log(`Path to current file is ${__fileName}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

console.log(object);

myServer.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { object, myServer };
