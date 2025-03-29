const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [serialNum, name] = input.split(" ");

  const removedDuplNameSet = new Set(name);
  const removedDuplName = Array.from(removedDuplNameSet).join("");
  const removedStrCnt = name.length - removedDuplName.length;

  const step2Name = removedDuplName + removedStrCnt;
  const step3Name = serialNum + step2Name;
  const step4Name = step3Name.split("").reverse().join("");
  const step5Name = "ilovenam_" + step4Name;
  console.log(step5Name);
  rl.close();
});
rl.on("close", () => {
  process.exit();
});
