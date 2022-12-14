import fs from "node:fs";

const data = fs.readFileSync("./day10/input.txt", "utf-8").split("\n");
const signalStrength = [];
const checkedCycles = [20, 60, 100, 140, 180, 220];
let cycle = 1,
  x = 1;
const checkCycles = () => {
  if (!checkedCycles.includes(cycle)) return;
  console.log(cycle);
  signalStrength.push(cycle * x);
};

data.forEach((element) => {
  const split = element.split(" ");
  cycle++;
  checkCycles();

  if (split[0] == "addx") {
    cycle++;
    x += parseInt(split[1]);
    checkCycles();
  }
});

console.log(signalStrength);

console.log(
  signalStrength.reduce((total, num) => {
    return (total += num);
  }, 0)
);
