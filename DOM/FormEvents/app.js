const form = document.querySelector('#signup-form');
const creditCard = document.querySelector('#cc');
const checkBox = document.querySelector('#terms');
const veggie = document.querySelector('#veggie');

const formData = {};

creditCard.addEventListener('input', function(event) {
	formData.cc = event.target.value;
});

checkBox.addEventListener('input', function() {
	formData.terms = event.target.checked;
});

veggie.addEventListener('input', function(event) {
	formData.veggie = event.target.value;
});
