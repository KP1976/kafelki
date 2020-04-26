const HTMLTag = document.documentElement;
const switchButton = document.querySelector('.switch-mode-container__switch');

const changeThemeColorMode = () => {
	switchButton.addEventListener('change', (e) => {
		if (e.target.checked) {
			HTMLTag.dataset.colormode = 'light';
		} else {
			HTMLTag.dataset.colormode = 'dark';
		}
	});
};

export default changeThemeColorMode;
