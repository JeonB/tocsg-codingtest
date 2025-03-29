const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  const [_, M] = input[0].split(" ").map(Number);

  if (input.length === M + 1) {
    rl.close();
  }
}).on("close", () => {
  const [N, M, K] = input[0].split(" ").map(Number);
  const scores = Array(N + 1).fill(0);
  const pending = [];

  for (let i = 1; i <= M; i++) {
    const [team1, team2, result] = input[i].split(" ").map(Number);

    if (result === 0) {
      pending.push({ team1, team2 });
    } else {
      scores[result]++;
    }
  }

  let cnt = 0;

  const recul = (idx, currWinScores) => {
    if (idx === pending.length) {
      const maxWinScore = Math.max(...currWinScores.slice(1));
      const winner = [];

      for (let i = 1; i <= N; i++) {
        if (currWinScores[i] === maxWinScore) winner.push(i);
      }

      if (winner.length === 1 && winner[0] === K) {
        cnt++;
      }
      return;
    }

    const { team1, team2 } = pending[idx];

    currWinScores[team1]++;
    recul(idx + 1, currWinScores);
    currWinScores[team1]--;

    currWinScores[team2]++;
    recul(idx + 1, currWinScores);
    currWinScores[team2]--;
  };

  recul(0, [...scores]);
  console.log(cnt);
});
