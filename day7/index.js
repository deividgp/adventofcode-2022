import fs from "node:fs";

const recursive = (data) => {
  let size = 0;
  let stopIndex = 0;
  for (let index = 1; index < data.length; index++) {
    const element = array[index];
    if (element === "$ cd ..") continue;

    const split = element.split(" ");

    if (isNaN(split[0])) {
      size += parseInt(split[0]);
      continue;
    }

    if (split[1] == "cd") {
      stopIndex = index;
      break;
    }
  }
  size += recursive();
};

recursive(fs.readFileSync("./day7/input.txt", "utf-8"));
