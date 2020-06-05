// Data from API

const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

//First Version

// const dataCreation = (function() {
// 	games = [];
// 	const ul = document.createElement('ul');
// 	document.body.appendChild(ul);
// 	for (i = 0; i < warriorsGames.length; i++) {
// 		const home = warriorsGames[i].homeTeam,
// 			away = warriorsGames[i].awayTeam,
// 			homePoints = home.points,
// 			awayPoints = away.points;
// 		let msg = `${away.team} @ ${home.team} `;
// 		games.push(document.createElement('li'));
// 		ul.appendChild(games[i]);
// 		if (homePoints > awayPoints) {
// 			msg += `<b>${homePoints}</b> - ${awayPoints}`;
// 		} else {
// 			msg += `${homePoints} - <b>${awayPoints}</b>`;
// 		}
// 		games[i].innerHTML = msg;
// 		if (home.team === 'Golden State' && home.isWinner === true) {
// 			games[i].style.color = 'green';
// 		} else if (away.team === 'Golden State' && away.isWinner === true) {
// 			games[i].style.color = 'green';
// 		} else {
// 			games[i].style.color = 'red';
// 		}
// 	}
// })();

// Second Version

// const dataCreation = (function() {
// 	const ul = document.createElement('ul');
// 	document.body.appendChild(ul);
// 	for (let game of warriorsGames) {
// 		const { homeTeam, awayTeam } = game;
// 		const { points: homePoints } = homeTeam;
// 		const { points: awayPoints } = awayTeam;
// 		const teamNames = `${awayTeam.team} @ ${homeTeam.team} `;
// 		const newLi = document.createElement('li');
// 		const awayWon = `<b>${awayPoints}</b> - ${homePoints}`;
// 		const homeWon = `${awayPoints} - <b>${homePoints}</b>`;
// 		function isBolded() {
// 			return awayPoints > homePoints ? awayWon : homeWon;
// 		}
// 		if (homeTeam.team === 'Golden State' && homeTeam.isWinner === true) {
// 			newLi.style.color = 'green';
// 		} else if (awayTeam.team === 'Golden State' && awayTeam.isWinner === true) {
// 			newLi.style.color = 'green';
// 		} else {
// 			newLi.style.color = 'red';
// 		}
// 		newLi.innerHTML = `${teamNames} ${isBolded()}`;
// 		ul.appendChild(newLi);
// 	}
// })();

// Third Version

// const dataCreation = (data) => {
// 	const ul = document.createElement('ul');
// 	document.body.appendChild(ul);
// 	for (let game of data) {
// 		const { homeTeam, awayTeam } = game;
// 		const { points: homePoints } = homeTeam;
// 		const { points: awayPoints } = awayTeam;
// 		const teamNames = `${awayTeam.team} @ ${homeTeam.team} `;
// 		const newLi = document.createElement('li');
// 		const awayWon = `<b>${awayPoints}</b> - ${homePoints}`;
// 		const homeWon = `${awayPoints} - <b>${homePoints}</b>`;
// 		const warriors = homeTeam.team === 'Golden State' ? homeTeam : awayTeam;
// 		newLi.classList.add(warriors.isWinner ? 'win' : 'loss');
// 		newLi.innerHTML = `${teamNames} ${isBolded()}`;
// 		ul.appendChild(newLi);
// 		function isBolded() {
// 			return awayPoints > homePoints ? awayWon : homeWon;
// 		}
// 	}
// 	return ul;
// };

// const chart1 = dataCreation(warriorsGames);
// document.body.appendChild(chart1);

// Cuarta version, refactorizada para que sea madular, es muy importante el concepto de modularizacion

const dataCreation = (data, targetElement) => {
	const ul = document.createElement('ul');
	document.body.appendChild(ul);
	for (let game of data) {
		const newLi = document.createElement('li');
		newLi.innerHTML = getScoreLine(game);
		newLi.classList.add(isWinner(game, targetElement) ? 'win' : 'loss');
		ul.appendChild(newLi);
	}
	return ul;
};

const isWinner = ({ homeTeam, awayTeam }, targetElement) => {
	const target = homeTeam.team === targetElement ? homeTeam : awayTeam;
	return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { points: homePoints } = homeTeam;
	const { points: awayPoints } = awayTeam;
	const teamNames = `${awayTeam.team} @ ${homeTeam.team} `;
	const awayWon = `<b>${awayPoints}</b> - ${homePoints}`;
	const homeWon = `${awayPoints} - <b>${homePoints}</b>`;
	function isBolded() {
		return awayPoints > homePoints ? awayWon : homeWon;
	}
	return `${teamNames} ${isBolded()}`;
};

const chart1 = dataCreation(warriorsGames, 'Houston');
document.body.appendChild(chart1);
