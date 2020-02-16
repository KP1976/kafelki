const htmlDOM = document.documentElement;
const switcher = document.querySelector('.switch-mode-container__switch');
const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');

const changeThemeColorMode = () => {
	switcher.addEventListener('click', switchColorTheme);
};

const switchColorTheme = e => {
	if (e.target.checked) {
		htmlDOM.setAttribute('data-colormode', 'light');
		moon.classList.remove('isVisible');
		sun.classList.add('isVisible');
	} else {
		htmlDOM.setAttribute('data-colormode', 'dark');
		moon.classList.add('isVisible');
		sun.classList.remove('isVisible');
	}
};

export default changeThemeColorMode;
