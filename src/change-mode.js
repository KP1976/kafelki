const body = document.querySelector('body');
const switcher = document.querySelector('.switch-mode-container__switch');

const switchColorTheme = () => {
	switcher.addEventListener('click', function() {
		if (!this.checked) {
			body.classList.add('dark-mode');
		} else {
			body.classList.remove('dark-mode');
		}
	});
};

export default switchColorTheme;
