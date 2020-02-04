const body = document.querySelector('body');
const startButton = document.querySelector('.button');
const radioLabels = document.querySelectorAll('.radios-container__radio-label');
const switcher = document.querySelector('.switch-mode-container__switch');
const titles = document.querySelectorAll('.title');

console.log(document.styleSheets[1].cssRules);

const switchColorTheme = () => {
	switcher.addEventListener('click', function() {
		if (this.checked) {
			body.classList.add('light-mode');
			startButton.classList.add('light-mode');
			for (let radioLabel of radioLabels) {
				radioLabel.classList.add('light-mode');
			}
			for (let title of titles) {
				title.classList.add('light-mode');
			}
		} else {
			body.classList.remove('light-mode');
			startButton.classList.remove('light-mode');
			for (let radioLabel of radioLabels) {
				radioLabel.classList.remove('light-mode');
			}
			for (let title of titles) {
				title.classList.remove('light-mode');
			}
		}
	});
};

export default switchColorTheme;
