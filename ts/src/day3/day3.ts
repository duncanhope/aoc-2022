import { readInput, splitNewLine, splitChar } from "../utils/input.js";

export async function getInput() {
  const inputTxt = await readInput("./src/day3/input.txt");
  const input = splitNewLine(inputTxt);
  return input;
}

function charVal(char: string) {
  return char.charCodeAt(0) > 96
    ? char.charCodeAt(0) - 96
    : char.charCodeAt(0) - 38;
}

function splitRucksack(rucksack: string) {
  return [
    splitChar(rucksack.slice(0, rucksack.length / 2)),
    splitChar(rucksack.slice(rucksack.length / 2)),
  ];
}

function intersection(sack1: string[], sack2: string[]) {
  const sack1Set = new Set(sack1);
  const sack2Set = new Set(sack2);

  return [...sack1Set].filter((item) => sack2Set.has(item));
}

async function day3a() {
  const input = await getInput();
  const input1 = input.map((sack) => splitRucksack(sack));
  const input2 = input1.map((sacks) =>
    intersection(sacks[0] || [], sacks[1] || [])
  );

  // const input2 = input1.map((i) => splitChar(i).map((char) => charVal(char)));

  console.log(input2);
}

async function day3b() {
  const input = await getInput();
  console.log("todo", input.length);
}

day3a();
day3b();
