import fs from "node:fs";

const data = fs.readFileSync("./day3/input.txt", "utf-8").split("\n");
let prioritiesSumPart1 = 0;
let prioritiesSumPart2 = 0;

const getPriority = (letter) => {
  if (letter.toUpperCase() == letter) {
    return letter.charCodeAt(0) - 38;
  } else {
    return letter.charCodeAt(0) - 96;
  }
};

// PART 1
data.forEach((element) => {
  const firstComp = element.slice(0, element.length / 2);
  const secondComp = element.slice(element.length / 2, element.length);
  let sharedLetter;

  for (let index = 0; index < firstComp.length; index++) {
    if (secondComp.includes(firstComp[index])) {
      sharedLetter = firstComp[index];
      break;
    }
  }

  prioritiesSumPart1 += getPriority(sharedLetter);
});

// PART 2
for (let index = 0; index < data.length; index = index + 3) {
  if (data[index] == "") break;
  let sharedLetter;

  for (let index2 = 0; index2 < data[index].length; index2++) {
    const element = data[index][index2];

    if (
      data[index + 1].includes(element) &&
      data[index + 2].includes(element)
    ) {
      sharedLetter = element;
      break;
    }
  }
  prioritiesSumPart2 += getPriority(sharedLetter);
}

console.log("SUM PART 1: " + prioritiesSumPart1);
console.log("SUM PART 2: " + prioritiesSumPart2);
