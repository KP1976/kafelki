const htmlDOM = document.documentElement;
const switcher = document.querySelector('.switch-mode-container__switch');

const changeThemeColorMode = () => {
	switcher.addEventListener('click', switchColorTheme);
};

const switchColorTheme = e => {
	if (e.target.checked) {
		htmlDOM.setAttribute('data-colormode', 'light');
	} else {
		htmlDOM.setAttribute('data-colormode', 'dark');
	}
};

export default changeThemeColorMode;
