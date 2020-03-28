import { generateTiles, DOMTilesContainer } from './create_tiles';
import generateRandomNumber from './random-numbers';
import { clickTile } from './click-tile';
// import allTiles from './get-colors-for-tiles';

const gameTiles = document.querySelector('.tiles-container');
const topBar = document.querySelector('.top-bar');
const mainContainer = document.querySelector('.container');
const bottomBar = document.querySelector('.bottom-bar.is-visible');
const tilesContainer = document.querySelector('.tiles-grid');

export const startGame = () => {
	gameTiles.classList.add('is-visible');
	topBar.classList.remove('is-visible');
	mainContainer.classList.remove('is-visible');
	bottomBar.classList.remove('is-visible');

	const allColors = [
		'black',
		'purple',
		'light-blue',
		'orange',
		'red',
		'blue',
		'green',
		'yellow',
		'pink',
		'brown',
	];
	let randomNumbers;
	let numbersOfTiles =
		tilesContainer.dataset.gridRows * tilesContainer.dataset.gridColumns;
	const pairColors = numbersOfTiles / 2;
	const arrayOfPairColors = [];
	const randomArrayOfPairColors = [];
	let j = 0;
	// let howManyClicks = 0;
	// let pairClicks = [];
	// let correctAnswers = 0;

	if (numbersOfTiles === 12 || numbersOfTiles === 18) {
		generateTiles(numbersOfTiles);
	}

	if (numbersOfTiles === 16 || numbersOfTiles === 20) {
		DOMTilesContainer.classList.add('four-columns');
		generateTiles(numbersOfTiles);
	}

	const tiles = document.querySelectorAll('.tiles-container__tile');

	randomNumbers = [...generateRandomNumber(numbersOfTiles)];

	for (let i = 0; i < numbersOfTiles; i++) {
		arrayOfPairColors[i] = allColors[j];
		if (j > pairColors - 2) {
			j = -1;
		}
		j++;
	}

	for (let i = 0; i < numbersOfTiles; i++) {
		randomArrayOfPairColors[i] = arrayOfPairColors[randomNumbers[i]];
	}

	tiles.forEach((tile, index) => {
		tile.classList.add(randomArrayOfPairColors[index]);
	});

	setTimeout(() => {
		const startTime = new Date().getTime();

		tiles.forEach((tile, index) => {
			tile.className = 'tiles-container__tile';

			tile.addEventListener(
				'click',
				clickTile.bind(this, index, startTime, tiles, randomArrayOfPairColors),
			);
		});
	}, 3000);
};
