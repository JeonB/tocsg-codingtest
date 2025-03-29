const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
let N = 0;

rl.on("line", (input) => {
  if (N === 0) {
    N = parseInt(input);
  } else {
    const num = Number(input);
    const digits = new Set();

    inputs.push(num);
    const caseNum = inputs.length;
    if (num < 1) {
      console.log(`CASE #${caseNum}: INSOMNIA`);
      return;
    }

    let multipleNum = 1;

    while ([...digits].length < 10) {
      const computedNum = num * multipleNum;
      for (const n of computedNum.toString()) {
        digits.add(n);
      }

      multipleNum++;
    }

    console.log(`CASE #${caseNum}: ${input * (multipleNum - 1)}`);

    if (inputs.length === N) {
      rl.close();
    }
  }
});
rl.on("close", () => {
  process.exit();
});
