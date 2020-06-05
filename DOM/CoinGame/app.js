function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

// First Version (Mia)

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');
moveCoin();

let y = 100;
let x = 10;
window.addEventListener('keydown', function(event) {
	if (event.key === 'ArrowUp') {
		avatar.style.top = `${(y -= 10)}px`;
	} else if (event.key === 'ArrowDown') {
		avatar.style.top = `${(y += 10)}px`;
	} else if (event.key === 'ArrowRight') {
		avatar.style.left = `${(x += 10)}px`;
		avatar.style.transform = 'scale(1,1)';
	} else if (event.key === 'ArrowLeft') {
		avatar.style.left = `${(x -= 10)}px`;
		avatar.style.transform = 'scale(-1,1)';
	}
	if (isTouching(avatar, coin)) {
		moveCoin();
	}
});

// Second Version

// const avatar = document.querySelector('#player');

// window.addEventListener('keydown', function(event) {
// 	const currentTop = extPos(avatar.style.top);
// 	avatar.style.top = `${currentTop + 50}px`;
// });

// const extPos = (pos) => {
// 	if (!pos) return 100;
// 	return parseInt(pos.slice(0, -2));
// };

function moveCoin() {
	const yAxis = Math.floor(Math.random() * innerHeight);
	const xAxis = Math.floor(Math.random() * innerWidth);
	coin.style.top = `${yAxis}px`;
	coin.style.left = `${xAxis}px`;
}
