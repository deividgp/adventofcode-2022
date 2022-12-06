import fs from "node:fs";

const data = fs.readFileSync("./day6/input.txt", "utf-8");
const fourChars = [], part2Chars = [];
let processedCharsPart1, processedCharsPart2;

const duplicatesExist = (text) => {
  const duplicates = text.filter((item, index) => text.indexOf(item) !== index);

  if (duplicates.length == 0) return false;

  return true;
};

// PART 1
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  if (index < 4) {
    fourChars.push(element);
    continue;
  }

  fourChars.push(element);
  fourChars.shift();

  if (!duplicatesExist(fourChars)) {
    processedCharsPart1 = index + 1;
    break;
  }
}

// PART 2
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  if (index < 14) {
    part2Chars.push(element);
    continue;
  }

  part2Chars.push(element);
  part2Chars.shift();

  if (!duplicatesExist(part2Chars)) {
    processedCharsPart2 = index + 1;
    break;
  }
}

console.log("PROCESSED CHARACTERS PART 1: " + processedCharsPart1);
console.log("PROCESSED CHARACTERS PART 2: " + processedCharsPart2);