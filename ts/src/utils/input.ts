import { readFile } from "fs/promises";

export async function readInput(path: string) {
  let content = await readFile(path);
  return content.toString();
}

export function splitChar(input: string) {
  return [...input];
}

export function splitNewLine(input: string) {
  return [...input.split(/\r?\n/)];
}

export function* inputGen(inputArr: string[]) {
  for (let i = 0; i < inputArr.length; i++) {
    yield inputArr[i];
  }
}
