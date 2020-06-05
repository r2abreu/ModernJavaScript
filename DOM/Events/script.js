// Seleccionamos los elementos

const h1 = document.querySelector('h1'),
	img = document.querySelector('img'),
	btn = document.querySelector('button');

// Agregamos event listener para que se mueva el elemento a una posicion aleatoria

btn.addEventListener('mouseover', () => {
	const y = Math.floor(Math.random() * innerHeight); // InnerHeight o InnerWidth dan las dimensiones actaules de el explorador del usuario
	const x = Math.floor(Math.random() * innerWidth);
	btn.classList.add('move'); // suavizada el movimiento con transition property
	btn.style.translate = `${y}px ${x}px`; // se usa template literal para pasarle valores de JS a CSS
});

btn.addEventListener('click', () => {
	document.body.classList.add('colors');
	alert('you did it');
	btn.innerText = 'You got me';
});
