// // function isValid(password, username) {
// // 	if (password.lenght < 8) {
// // 		console.log('The password must be 8 char long at least');
// // 		return false;
// // 	} else if (password.indexOf(' ') !== -1) {
// // 		console.log('The password must not contain any space');
// // 		return false;
// // 	} else if (password.indexOf(username) !== -1) {
// // 		console.log('The password must not contain the username');
// // 		return false;
// // 	} else {
// // 		return true;
// // 	}
// // }

// function avg(arr) {
// 	let sum = 0;
// 	for (i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	let avg = sum / arr.length;
// 	return avg;
// }

// function isPangram(str) {
// 	alphabet = 'abcdefghijklmnopqrstuvwxyz';
// 	string = str.toLowerCase();
// 	for (const char of alphabet) {
// 		if (!string.includes(char)) return false;
// 	}
// 	return true;
// }

// function pick(arr) {
// 	return Math.floor(Math.random() * arr.length);
// }

// function getCard() {
// 	let value = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];
// 	let suit = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	const card = {
// 		Value: value[pick(value)],
// 		Suit: suit[pick(suit)]
// 	};
// 	return card;
// }

// let button = document.getElementsByTagName('button');
// button[0].addEventListener('click', function() {
// 	alert('you have clicked me');
// });

// const annoyer = {
// 	phrases: [ 'literally', 'cray cray', 'I cant even', 'totes', 'YOLO', 'Cant Stop, Wont Stop' ],
// 	pick() {
// 		randomIdx = Math.floor(Math.random() * this.phrases.length);
// 		return this.phrases[randomIdx];
// 	},
// 	start() {
// 		this.timerId = setInterval(() => {
// 			console.log(this.pick());
// 		}, 3000);
// 	},
// 	stop() {
// 		clearInterval(this.timerId);
// 		console.log('Over');
// 	}
// };

// const newDeck = makeDeck();

// function makeDeck() {
// 	for (let value of values.split(',')) {
// 		for (let suit of suits) {
// 			deck.push({
// 				value,
// 				suit
// 			});
// 		}
// 	}
// 	return deck;
// }

// function drawRandomCard(deck) {
// 	return deck[Math.floor(Math.random() * deck.legth)];
// }

// function drawCardPop(deck) {
// 	return deck.pop();
// }

// const myDeck = {

// };

// Create multiple decks without new, classes or constructors

// const makeDeck = () => {
// 	return {
// 		deck: [],
// 		drawnCards: [],
// 		values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
// 		suits: [ 'hearts', 'diamonds', 'spade', 'clubs' ],
// 		initializeDeck() {
// 			for (let value of this.values.split(',')) {
// 				for (let suit of this.suits) {
// 					this.deck.push({
// 						value,
// 						suit
// 					});
// 				}
// 			}
// 		},
// 		drawCard() {
// 			const card = this.deck.pop();
// 			this.drawnCards.push(card);
// 			return card;
// 		},
// 		drawMultiple(num) {
// 			const cards = [];
// 			for (let i = 0; i < num; i++) {
// 				cards.push(this.drawCard());
// 			}
// 			return cards;
// 		},
// 		shuffle() {
// 			// Fisher yates shuffle algorithm
// 			const { deck } = this;
// 			for (let i = deck.length; i > 0; i--) {
// 				let j = Math.floor(Math.random() * (i + 1));
// 				[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
// 			}
// 			console.log(deck);
// 		}
// 	};
// };

// Ways to create an object

// Object Literal notation

const hotelQuay = {
	name: 'Quay',
	rooms: 45,
	booked: 20,
	availableRooms() {
		return this.booked - this.rooms;
	}
};

// Constructor notation

const hotelWok = new Object();
hotelWok.name = 'Wok';
hotelWok.rooms = 40;
hotelWok.booked = 20;
hotelWok.availableRooms = function() {
	return this.rooms - this.booked;
};

// Creating multiple objects with constructor notation

function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
}

const lido = new Hotel('lido', 40, 20);
