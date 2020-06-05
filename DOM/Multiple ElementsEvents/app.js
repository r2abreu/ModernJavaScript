// // Declaro variable con array

// const colors = [ 'red', 'yellow', 'purple', 'violet', 'green' ];

// // Itero sobre el array creando un div y asignandole el color de fondo correspondiente

// for (color of colors) {
// 	const div = document.createElement('div');
// 	div.style.backgroundColor = color;
// 	div.classList.add('box');
// 	document.querySelector('section').appendChild(div);
// }

// // Creo tambien botones iterando sobre el array

// for (let color of colors) {
// 	const box = document.createElement('button');
// 	box.innerText = 'click me';
// 	document.querySelector('section').appendChild(box);
// 	box.addEventListener('click', function() {
// 		//IMPORTANTE RECORDAR EL USO DE LA PALABRA THIS EN ARROW FUNCIONTS
// 		box.style.backgroundColor = color;
// 		console.log(this.innerText);
// 	});
// }

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(event) {
// 	console.log(event.key);
// });

// input.addEventListener('keyup', function(event) {
// 	console.log(event.key);
// });

const ul = document.querySelector('ul');
const input = document.querySelector('input');

input.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		if (!this.value) return; // Corrobora si hay valor o no en el campo
		const newLi = document.createElement('li');
		newLi.innerText = this.value;
		ul.appendChild(newLi);
		this.value = null;
	}
});
