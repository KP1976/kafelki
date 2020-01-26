import cssVariables from './varaibles_from_css';
import randomNumbers from './random_numbers';

const DOMTiles = document.querySelectorAll('.tiles-container__tile');

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

const removeColorsFromTiles = () => {
	setTimeout(() => {
		for (let i = 0; i < DOMTiles.length; i++) {
			DOMTiles[i].classList = 'tiles-container__tile';
		}
	}, 2000);
};

j = 0;
for (let i = 0; i < DOMTiles.length; i++) {
	DOMTiles[[...randomNumbers][i]].classList.add(Object.keys(allTiles)[j]);
	j++;
	if (j > 5) {
		j = 0;
	}
}

removeColorsFromTiles();
