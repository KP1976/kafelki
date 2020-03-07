import { generateTiles, DOMTilesContainer } from './create_tiles';
import allTiles from './get-colors-for-tiles';
// import randomNumbers from './random_numbers';

console.log(allTiles);

const gameTiles = document.querySelector('.tiles-container');
const topBar = document.querySelector('.top-bar');
const mainContainer = document.querySelector('.container');
const bottomBar = document.querySelector('.bottom-bar.is-visible');
const startButton = document.querySelector('.start-button');
const tilesContainer = document.querySelector('.tiles-grid');

startButton.addEventListener('click', function() {
	gameTiles.classList.add('is-visible');
	topBar.classList.remove('is-visible');
	mainContainer.classList.remove('is-visible');
	bottomBar.classList.remove('is-visible');

	let numbersOfTiles =
		tilesContainer.dataset.gridRows * tilesContainer.dataset.gridColumns;

	if (numbersOfTiles === 12 || numbersOfTiles === 18) {
		generateTiles(numbersOfTiles);
	}

	if (numbersOfTiles === 16 || numbersOfTiles === 20) {
		DOMTilesContainer.classList.add('four-columns');
		generateTiles(numbersOfTiles);
	}
});

// const removeColorsFromTiles = () => {
// 	setTimeout(() => {
// 		for (let i = 0; i < DOMTiles.length; i++) {
// 			DOMTiles[i].classList = 'tiles-container__tile';
// 		}
// 	}, 2000);
// };

// j = 0;
// for (let i = 0; i < DOMTiles.length; i++) {
// 	DOMTiles[[...randomNumbers][i]].classList.add(Object.keys(allTiles)[j]);
// 	j++;
// 	if (j > 5) {
// 		j = 0;
// 	}
// }

// removeColorsFromTiles();
