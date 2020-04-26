import createArrayOfDoubleColors from './create-array-of-double-colors';
import generateRandomIndexNumbers from './generate-random-index-numbers';

let randomIndexNumbers = [];
const shuffleTilesColors = [];

const generateRandomTilesColors = (numberOfTiles) => {
	const colorsOfTiles = createArrayOfDoubleColors(numberOfTiles);
	const tiles = document.querySelectorAll('.tiles-container__tile');

	randomIndexNumbers = [...generateRandomIndexNumbers(numberOfTiles)];

	for (let i = 0; i < numberOfTiles; i++) {
		shuffleTilesColors[i] = colorsOfTiles[randomIndexNumbers[i]];
	}

	tiles.forEach((tile, index) =>
		tile.classList.add(`${shuffleTilesColors[index]}`),
	);

	return tiles;
};

export { generateRandomTilesColors, shuffleTilesColors };
