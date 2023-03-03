const num: number = 8;

for (let i = 0; i < 4; i++) {
  let line: string = "";
  for (let j = 0; j < 8; j++) {
    line += num.toString() + " ";
  }
  console.log(line.trim());
}