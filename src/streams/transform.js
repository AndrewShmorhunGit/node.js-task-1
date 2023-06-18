import { Transform, pipeline } from "stream";
import { EOL } from "os";
import { error } from "console";

export async function transform() {
  const revert = new Transform({
    transform(chunk, encoding, callback) {
      const result = chunk.toString();
      const reverse =
        result.replace(EOL, "").split("").reverse().join("") + EOL;
      callback(null, reverse);
    },
  });

  pipeline(process.stdin, revert, process.stdout, (err) =>
    console.error(error)
  );
  console.log("Write some to transform it! Please");
}

transform();
