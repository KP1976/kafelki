const body = document.querySelector('body');
const startButton = document.querySelector('.radios-container__button');
const switcher = document.querySelector('.switch-mode-container__switch');

const switchColorTheme = () => {
	switcher.addEventListener('click', function() {
		if (!this.checked) {
			body.classList.add('dark-mode');
			startButton.classList.add('dark-mode');
		} else {
			body.classList.remove('dark-mode');
			startButton.classList.remove('dark-mode');
		}
	});
};

export default switchColorTheme;
