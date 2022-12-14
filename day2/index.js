import fs from "node:fs";

const data = fs.readFileSync("./day2/input.txt", "utf-8").split("\n");
const letters = ["A", "B", "C"];
const win = ["C", "A", "B"];
const loss = ["B", "C", "A"];
let totalScorePart1 = 0;
let totalScorePart2 = 0;

const scorePart1 = (opponent, own) => {
  switch (own) {
    // Rock
    case "X":
      own = "A";
      break;
    // Paper
    case "Y":
      own = "B";
      break;
    // Scissors
    case "Z":
      own = "C";
      break;
  }

  const index = letters.indexOf(own);
  let score = index + 1;

  // Draw
  if (opponent == own) return (score += 3);
  // Win
  if (opponent == win[index]) return (score += 6);
  // Loss
  return score;
};

const scorePart2 = (opponent, own) => {
  switch (own) {
    // Loss
    case "X":
      return loss.indexOf(opponent) + 1;
    // Draw
    case "Y":
      return 3 + letters.indexOf(opponent) + 1;
    // Win
    case "Z":
      return 6 + win.indexOf(opponent) + 1;
  }
};

data.forEach((element) => {
  totalScorePart1 += scorePart1(element[0], element[2]);
  totalScorePart2 += scorePart2(element[0], element[2]);
});

console.log("TOTAL SCORE PART 1: " + totalScorePart1);
console.log("TOTAL SCORE PART 2: " + totalScorePart2);
