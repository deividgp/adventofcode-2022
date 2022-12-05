import fs from "node:fs";

const data = fs.readFileSync("./day5/input.txt", "utf-8");
const splitData = data.split("\n");
const stackPart1 = [
  ["G", "T", "R", "W"],
  ["G", "C", "H", "P", "M", "S", "V", "W"],
  ["C", "L", "T", "S", "G", "M"],
  ["J", "H", "D", "M", "W", "R", "F"],
  ["P", "Q", "L", "H", "S", "W", "F", "J"],
  ["P", "J", "D", "N", "F", "M", "S"],
  ["Z", "B", "D", "F", "G", "C", "S", "J"],
  ["R", "T", "B"],
  ["H", "N", "W", "L", "C"],
];
const stackPart2 = [
  ["G", "T", "R", "W"],
  ["G", "C", "H", "P", "M", "S", "V", "W"],
  ["C", "L", "T", "S", "G", "M"],
  ["J", "H", "D", "M", "W", "R", "F"],
  ["P", "Q", "L", "H", "S", "W", "F", "J"],
  ["P", "J", "D", "N", "F", "M", "S"],
  ["Z", "B", "D", "F", "G", "C", "S", "J"],
  ["R", "T", "B"],
  ["H", "N", "W", "L", "C"],
];

splitData.forEach((element) => {
  if (element == "") return;
  const splitStack = element.split(" ");
  const amount = parseInt(splitStack[1]);
  const from = parseInt(splitStack[3]);
  const to = parseInt(splitStack[5].charAt(0));
  let popCrates = [];

  for (let index = 0; index < amount; index++) {
    stackPart1[to - 1].push(stackPart1[from - 1].pop());
    popCrates.push(stackPart2[from - 1].pop());
  }
  popCrates = popCrates.reverse();

  popCrates.forEach((crate) => {
    stackPart2[to - 1].push(crate);
  });
});

console.log("PART 1");
console.log(stackPart1);
console.log("------------------------------------------");
console.log("PART 2");
console.log(stackPart2);
