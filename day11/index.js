let monkeys = [
  [50, 70, 54, 83, 52, 78],
  [71, 52, 58, 60, 71],
  [66, 56, 56, 94, 60, 86, 73],
  [83, 99],
  [98, 98, 79],
  [76],
  [52, 51, 84, 54],
  [82, 86, 91, 79, 94, 92, 59, 94],
];
let ins = [0, 0, 0, 0, 0, 0, 0, 0];

const operation = (origin, dest1, dest2, op, test, part1) => {
  let aux = 0;
  for (let i = monkeys[origin].length - 1; i >= 0; i -= 1) {
    let element = monkeys[origin][i];
    aux += 1;
    element = eval(op);
    if (part1) {
      element = Math.floor(element / 3);
    } else {
      element = element % 9699690;
    }

    if (element % test == 0) {
      monkeys[dest1].push(element);
    } else {
      monkeys[dest2].push(element);
    }

    monkeys[origin].splice(i, 1);
  }
  ins[origin] += aux;
};

const mainFunc = (part1 = true) => {
  let round = 0;
  const maxRounds = part1 ? 20 : 10000;
  while (round < maxRounds) {
    operation(0, 2, 7, "element * 3", 11, part1);
    operation(1, 0, 2, "element * element", 7, part1);
    operation(2, 7, 5, "element + 1", 3, part1);
    operation(3, 6, 4, "element + 8", 5, part1);
    operation(4, 1, 0, "element + 3", 17, part1);
    operation(5, 6, 3, "element + 4", 13, part1);
    operation(6, 4, 1, "element * 17", 19, part1);
    operation(7, 5, 3, "element + 7", 2, part1);
    round++;
  }
};

// PART 1
mainFunc();
ins.sort((a, b) => b - a);
console.log(ins[0] * ins[1]);

monkeys = [
  [50, 70, 54, 83, 52, 78],
  [71, 52, 58, 60, 71],
  [66, 56, 56, 94, 60, 86, 73],
  [83, 99],
  [98, 98, 79],
  [76],
  [52, 51, 84, 54],
  [82, 86, 91, 79, 94, 92, 59, 94],
];
ins = [0, 0, 0, 0, 0, 0, 0, 0];

// PART 2
mainFunc(false);
ins.sort((a, b) => b - a);
console.log(ins[0] * ins[1]);
