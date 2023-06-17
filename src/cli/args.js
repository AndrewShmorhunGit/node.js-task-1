const parseArgs = () => {
  const variableArray = process.argv.slice(2);

  const line = variableArray
    .reduce((total, el, index, array) => {
      if (el.includes("--")) {
        total.push(`${el} is ${array[index + 1]}`);
      }
      return total;
    }, [])
    .join(", ");
  console.log(line);
};

parseArgs();
