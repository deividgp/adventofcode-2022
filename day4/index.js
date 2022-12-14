import fs from "node:fs";

const data = fs.readFileSync("./day4/input.txt", "utf-8").split("\n");
let firstAux, secondAux;
let fullyContain = 0;
let overlap = 0;

data.forEach((element) => {
  element.split(",").forEach((assignment, index) => {
    const splitAssign = assignment.split("-");
    const first = parseInt(splitAssign[0]);
    const second = parseInt(splitAssign[1]);

    if (index == 0) {
      firstAux = first;
      secondAux = second;
      return;
    }

    if (
      (firstAux >= first && secondAux <= second) ||
      (first >= firstAux && second <= secondAux)
    ) {
      fullyContain++;
      overlap++;
      return;
    }

    if (
      (firstAux >= first && secondAux <= first) ||
      (firstAux >= second && secondAux <= second) ||
      (first >= firstAux && first <= secondAux) ||
      (second >= firstAux && second <= secondAux)
    )
      overlap++;
  });
});

console.log("FULLY CONTAIN: " + fullyContain);
console.log("OVERLAP: " + overlap);
