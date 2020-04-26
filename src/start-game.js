import generateTiles from './generate-tiles';
import { generateRandomTilesColors } from './generate-random-tiles-colors';
import clickTile from './click-tile';

const topBar = document.querySelector('.top-bar');
const tilesContainer = document.querySelector('.tiles-container');
const mainContainer = document.querySelector('.container');
const tilesGrid = document.querySelector('.tiles-grid');
const startButton = document.querySelector('.start-button');

const startGame = () => {
	startButton.addEventListener('click', () => {
		const rows = +tilesGrid.getAttribute('data-grid-rows');
		const columns = +tilesGrid.getAttribute('data-grid-columns');
		let tiles;

		topBar.classList.remove('is-visible');
		mainContainer.classList.remove('is-visible');
		tilesContainer.classList.add('is-visible');

		generateTiles(rows, columns, tilesContainer, 'tiles-container__tile');
		tiles = generateRandomTilesColors(rows * columns);
		clickTile(tiles);
	});
};

export default startGame;
