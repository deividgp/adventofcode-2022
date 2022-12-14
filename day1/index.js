import fs from "node:fs";

const data = fs.readFileSync("./day1/input.txt", "utf-8").split("\n");
let calories = 0;
const totalCalories = [];

data.forEach((element) => {
  if (element != "") {
    calories += parseInt(element);
    return;
  }
  totalCalories.push(calories);
  calories = 0;
});

const sorted = totalCalories.sort((a, b) => {
  return b - a;
});

console.log("MAX CALORIES: " + sorted[0]);

const threeMax = sorted.slice(0, 3);

console.log(
  threeMax.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0)
);
