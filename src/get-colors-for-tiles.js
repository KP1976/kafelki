import cssVariables from './varaibles_from_css';

class Tile {
	constructor(lightColor, shadowColor, isClicked) {
		this.lightColor = lightColor;
		this.shadowColor = shadowColor;
		this.isClicked = isClicked;
	}
}

const cssVariablesColors = {};
let tilesColorsValues = [];
const allTiles = {};
let j = 0;

for (let i = 0; i < cssVariables.length; i++) {
	let keyValuePairs = cssVariables[i].split(':');
	tilesColorsValues[i] = cssVariables[i].slice(-7);
	if (keyValuePairs[0] !== '') {
		cssVariablesColors[keyValuePairs[0].trim()] = keyValuePairs[1].trim();
	}
}

const hexColorsNames = Object.keys(cssVariablesColors);

for (let i = 0; i < cssVariables.length / 2; i++) {
	const colorName = hexColorsNames[j].slice(2).slice(0, -6);
	allTiles[colorName] = new Tile(
		tilesColorsValues[j],
		tilesColorsValues[j + 1],
		false,
	);
	j += 2;
}

export default allTiles;
