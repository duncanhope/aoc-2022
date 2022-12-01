import { readInput, splitNewLine } from "../utils/input";

async function day1a() {
  const input = await readInput("./src/day1/input.txt");
  console.log(input);
}

const result = await day1a();
console.log(result);
