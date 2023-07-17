const form = document.getElementById('form');

function submitForm(e) {
	e.preventDefault();

	const name = document.querySelector('[name="firstname"]'),
		age = document.querySelector("[name='age']"),
		plan = document.querySelector('[name="plan"]'),
		terms = document.querySelector('[name="terms"]');

	let userData = {
		name: name.value,
		age: age.value,
		plan: plan.value,
		terms: terms.checked,
	};
	console.log(userData);
}

form.addEventListener('submit', submitForm);
