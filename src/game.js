import { generateTiles, DOMTilesContainer } from './create_tiles';
import generateRandomNumber from './random-numbers';
// import allTiles from './get-colors-for-tiles';

// console.log(allTiles);

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
	let howManyClicks = 0;
	let pairClicks = [];

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
		tiles.forEach((tile, index) => {
			tile.className = 'tiles-container__tile';
			tile.addEventListener('click', function() {
				howManyClicks += 1;
				pairClicks.push(index);
				this.classList.add(randomArrayOfPairColors[index]);
				this.classList.add('clicked');

				if (howManyClicks === 2) {
					howManyClicks = 0;
					const firstClickedTile = tiles[pairClicks[0]];
					const secondClickedTile = tiles[pairClicks[1]];
					if (
						firstClickedTile.classList[1] === secondClickedTile.classList[1]
					) {
						const correctSign1 = document.createElement('i');
						const correctSign2 = document.createElement('i');
						correctSign1.className = 'fas fa-check';
						correctSign2.className = 'fas fa-check';
						firstClickedTile.className = 'tiles-container__tile guessed';
						secondClickedTile.className = 'tiles-container__tile guessed';
						firstClickedTile.insertAdjacentElement('afterbegin', correctSign1);
						secondClickedTile.insertAdjacentElement('afterbegin', correctSign2);
					} else {
						setTimeout(() => {
							this.classList.add('clicked');
							firstClickedTile.className = 'tiles-container__tile';
							secondClickedTile.className = 'tiles-container__tile';
						}, 1000);
					}
					pairClicks = [];
				}
			});
		});
	}, 3000);
});
