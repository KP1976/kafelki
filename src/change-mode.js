const body = document.querySelector('body');
const startButton = document.querySelector('.button');
const radioLabels = document.querySelectorAll('.radios-container__radio-label');
const radioBoxes = document.querySelectorAll('.radios-container__radio-box');
const switcher = document.querySelector('.switch-mode-container__switch');
const titles = document.querySelectorAll('.title');
const isCheckedFonts = document.querySelectorAll('.fa-check');
const moonFont = document.querySelector('.fa-moon');
const sunFont = document.querySelector('.fa-sun');

console.log(radioLabels.length, radioBoxes.length, isCheckedFonts.length);

const switchColorTheme = () => {
	switcher.addEventListener('click', function() {
		for (let i = 0; i < radioLabels.length; i++) {
			radioLabels[i].classList.toggle('light-mode');
			radioBoxes[i].classList.toggle('light-mode');
			isCheckedFonts[i].classList.toggle('light-mode');
		}
		body.classList.toggle('light-mode');
		startButton.classList.toggle('light-mode');
		for (let title of titles) {
			title.classList.toggle('light-mode');
		}
		moonFont.classList.toggle('isVisible');
		sunFont.classList.toggle('isVisible');
	});
};

export default switchColorTheme;
