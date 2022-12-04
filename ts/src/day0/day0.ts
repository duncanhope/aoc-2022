import { readInput, splitNewLine } from "../utils/input.js";

export async function getInput() {
  const inputTxt = await readInput("./src/day1/input.txt");
  const input = splitNewLine(inputTxt);
  return input;
}

async function day0a() {
  const input = await getInput();
  console.log("todo", input.length);
}

async function day0b() {
  const input = await getInput();
  console.log("todo", input.length);
}

day0a();
day0b();
