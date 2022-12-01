import { readFile } from "fs";

export async function readInput(path: string): Promise<string> {
  let content = "";
  readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      content = data.toString();
    }
  });
  return content;
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
