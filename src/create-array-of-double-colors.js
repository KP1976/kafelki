const tilesColors = [
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

const createArrayOfDoubleColors = (numberOfTiles) => {
	const colorsOfTiles = [];
	const availableTileColors = numberOfTiles / 2;
	let j = 0;

	for (let i = 0; i < numberOfTiles; i++) {
		colorsOfTiles[i] = tilesColors[j];
		j++;
		if (j > availableTileColors - 1) {
			j = 0;
		}
	}

	return colorsOfTiles;
};

export default createArrayOfDoubleColors;
