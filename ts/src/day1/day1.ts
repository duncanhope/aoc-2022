import { readInput, splitNewLine } from "../utils/input.js";

export async function getInput() {
  const inputTxt = await readInput("./src/day1/input.txt");
  const input = splitNewLine(inputTxt).map((i) => parseInt(i));
  return input;
}

async function day1a() {
  const input = await getInput();
  let max = 0;
  let current = 0;

  input.forEach((i) => {
    current = !!i ? current + i : 0;
    if (current > max) {
      max = current;
    }
  });

  console.log(max);
}

async function day1b() {
  const input = await getInput();
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  let wip = 0;

  input.forEach((i) => {
    if (!!i) {
      wip += i;
    } else {
      if (wip > max1) {
        max3 = max2;
        max2 = max1;
        max1 = wip;
      } else if (wip > max2) {
        max3 = max2;
        max2 = wip;
      } else if (wip > max3) {
        max3 = wip;
      }
      wip = 0;
    }
  });

  console.log(max1, max2, max3, ":", max1 + max2 + max3);
}

day1a();
day1b();
