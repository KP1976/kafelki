export const DOMinit = () => {
	const DOM = {
		container: document.querySelector('.container'),
		header: document.querySelector('.header'),
		tilesContainer: document.querySelector('.tiles-container'),
		tiles: document.querySelectorAll('.tiles'),
		gameOverWrapper: document.querySelector('.game-over-wrapper'),
		gameTime: document.querySelector('.game-time'),
		gameOverBtn: document.querySelector('.game-over__btn'),
	};
	return DOM;
};
