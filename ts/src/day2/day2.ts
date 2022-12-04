import { readInput, splitNewLine } from "../utils/input.js";

export async function getInput() {
  const inputTxt = await readInput("./src/day2/input.txt");
  const input = splitNewLine(inputTxt);
  return input;
}

async function day2a() {
  const input = await getInput();
  const scores: number[] = input.map((i) => {
    switch (i) {
      case "A X": // rock rock
        return 4;
      case "A Y": // rock paper
        return 8;
      case "A Z": // rock scissors
        return 3;
      case "B X": // paper rock
        return 1;
      case "B Y": // paper paper
        return 5;
      case "B Z": // paper scissors
        return 9;
      case "C X": // scissors rock
        return 7;
      case "C Y": // scissors paper
        return 2;
      case "C Z": // scissors scissors
        return 6;
      default:
        return 0;
    }
  });

  const initial = 0;
  const sum = scores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initial
  );

  console.log(sum);
}

async function day2b() {
  const input = await getInput();

  const scores: number[] = input.map((i) => {
    switch (i) {
      case "A X": // rock lose
        return 3 + 0;
      case "A Y": // rock draw
        return 1 + 3;
      case "A Z": // rock win
        return 2 + 6;

      case "B X": // paper lose
        return 1 + 0;
      case "B Y": // paper draw
        return 2 + 3;
      case "B Z": // paper win
        return 3 + 6;

      case "C X": // scissors lose
        return 2 + 0;
      case "C Y": // scissors draw
        return 3 + 3;
      case "C Z": // scissors win
        return 1 + 6;
      default:
        return 0;
    }
  });

  const initial = 0;
  const sum = scores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initial
  );

  console.log(sum);
}

day2a();
day2b();
