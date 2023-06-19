const parseEnv = (prefix) => {
  const search = prefix + "_";
  console.log(`prefix: ${search}`);

  const variables = Object.entries(process.env).reduce(
    (total, [key, value]) => {
      if (key.startsWith(search)) {
        total.push(`${key}=${value}`);
      }
      return total;
    },
    []
  );
  console.log(variables.join("; "));
};

parseEnv("RSS");
