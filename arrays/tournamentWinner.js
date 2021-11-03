function tournamentWinner(competitions, results) {
  // Write your code here.
	let playerPoints = {};
	for(let i=0; i<results.length; i++) {
		let winnerIndex = results[i] === 0 ? 1 : 0;
		let currentWinner = competitions[i][winnerIndex];
		if (playerPoints[currentWinner]) {
			playerPoints[currentWinner] = playerPoints[currentWinner] + 3;
		} else {
			playerPoints[currentWinner] = 3
		}
	}
	const keys = Object.keys(playerPoints);
	const values = Object.values(playerPoints);
  return keys[values.indexOf(Math.max(...values))];
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
