import { __dirname, __fileName, config } from "./path-modules";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";

const assert = { assert: { type: "json" } };

const object =
  data.random() > 0.5
    ? await import(data.path.a, assert)
    : await import(data.path.b, assert);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${data.sep}"`);

console.log(`Path to current file is ${__fileName}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

console.log(object);

myServer.listen(data.port, () => {
  console.log(`Server is listening on port ${data.port}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { object, myServer };
