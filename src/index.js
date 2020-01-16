const cssVariables = document.styleSheets[0].cssRules[0].style.cssText.split(
	';',
);

const cssVariablesColors = {};
let tilesColors = [];
const allTiles = [];

cssVariables.splice(0, 2);
cssVariables.splice(-2, 2);

for (let i = 0; i < cssVariables.length; i++) {
	let keyValuePairs = cssVariables[i].split(':');
	tilesColors[i] = cssVariables[i].slice(-7);

	if (keyValuePairs[0] !== '') {
		cssVariablesColors[keyValuePairs[0].trim()] = keyValuePairs[1].trim();
	}
}

class Tile {
	constructor(lightColor, shadowColor, isClicked) {
		this.lightColor = lightColor;
		this.shadowColor = shadowColor;
		this.isClicked = isClicked;
	}
}

const hexColorsValues = Object.values(cssVariablesColors);
const hexColorsNames = Object.keys(cssVariablesColors);

for (let i = 0; i < cssVariables.length / 2; i += 2) {
	allTiles[hexColorsNames[i]] = new Tile(
		hexColorsValues[i],
		hexColorsValues[i + 1],
		false,
	);
}
console.dir(allTiles);
