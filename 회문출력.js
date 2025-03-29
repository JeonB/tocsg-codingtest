const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const num = Number(input);

  function isPalindrome(num) {
    const numToStr = num.toString();
    const reverseStr = numToStr.split("").reverse().join("");

    return numToStr === reverseStr;
  }

  const answer = [];
  for (let i = 1; i <= num; i++) {
    if (isPalindrome(i)) answer.push(i);
  }

  console.log(answer.join(","));
  rl.close();
});
rl.on("close", () => {
  process.exit();
});
