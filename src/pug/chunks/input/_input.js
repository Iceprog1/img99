let rangeInput = document.querySelectorAll('.range-input');

for (let i = 0; i < rangeInput.length; i++) {
	changeInput(rangeInput[i]);
	rangeInput[i].addEventListener("input", (event) => {
		changeInput(rangeInput[i]);
	});
}

function changeInput(input) {
	let percentage = (input.value - input.min) / (input.max - input.min) * 96;
	let rangeNumb = input.parentElement.parentElement.querySelector('.range-numb');
	rangeNumb.textContent = input.value;
	input.style = `background: linear-gradient(to right, #626870 ${percentage}%, #D9D9D9 0%)`
}