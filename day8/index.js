import fs from "node:fs";

const data = fs
  .readFileSync("./day8/input.txt", "utf-8")
  .split("\n")
  .map((element) => {
    return element.trim("\r");
  });

const findRight = (element, position) => {
  let j = position + 1;
  const max = element.length;
  let visible = true;
  let counter = 0;

  for (j; j < max; j++) {
    counter++;
    if (element[j] >= element[position]) {
      visible = false;
      break;
    }
  }

  return [visible, counter];
};

const findLeft = (element, position) => {
  let j = position - 1;
  const max = 0;
  let visible = true;
  let counter = 0;

  for (j; j >= max; j--) {
    counter++;
    if (element[j] >= element[position]) {
      visible = false;
      break;
    }
  }

  return [visible, counter];
};

const topBottom = (positionI, positionJ) => {
  let i = positionI + 1;
  const max = data.length;
  let visible = true;
  let counter = 0;

  for (i; i < max; i++) {
    counter++;
    if (data[i][positionJ] >= data[positionI][positionJ]) {
      visible = false;
      break;
    }
  }

  return [visible, counter];
};

const findTop = (positionI, positionJ) => {
  let i = positionI - 1;
  const max = 0;
  let visible = true;
  let counter = 0;

  for (i; i >= max; i--) {
    counter++;
    if (data[i][positionJ] >= data[positionI][positionJ]) {
      visible = false;
      break;
    }
  }

  return [visible, counter];
};

let visible = 0;
let highestScore = 0;

for (let i = 0; i < data.length; i++) {
  const element = data[i];
  for (let j = 0; j < element.length; j++) {
    if (
      i === 0 ||
      i === data.length - 1 ||
      j === 0 ||
      j === element[i].length - 1
    ) {
      visible++;
      continue;
    }

    const left = findLeft(element, j);
    const right = findRight(element, j);
    const top = findTop(i, j);
    const bot = topBottom(i, j);

    const score = left[1] * right[1] * top[1] * bot[1];

    if (score > highestScore) {
      highestScore = score;
    }

    if (left[0] || right[0] || top[0] || bot[0]) {
      visible++;
      continue;
    }
  }
}

console.log("TREES: " + visible);
console.log("HIGHEST SCORE: " + highestScore);
