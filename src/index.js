const DOMTiles = document.querySelectorAll('.tiles-container__tile');

class Tile {
	constructor(lightColor, shadowColor, isClicked) {
		this.lightColor = lightColor;
		this.shadowColor = shadowColor;
		this.isClicked = isClicked;
	}
}

const cssVariables = document.styleSheets[0].cssRules[0].style.cssText.split(
	';',
);
const cssVariablesColors = {};
let tilesColorsValues = [];
const allTiles = {};

cssVariables.splice(0, 2);
cssVariables.splice(-2, 2);

for (let i = 0; i < cssVariables.length; i++) {
	let keyValuePairs = cssVariables[i].split(':');
	tilesColorsValues[i] = cssVariables[i].slice(-7);
	if (keyValuePairs[0] !== '') {
		cssVariablesColors[keyValuePairs[0].trim()] = keyValuePairs[1].trim();
	}
}

const hexColorsNames = Object.keys(cssVariablesColors);

let j = 0;

for (let i = 0; i < cssVariables.length / 2; i++) {
	const colorName = hexColorsNames[j].slice(2).slice(0, -6);
	allTiles[colorName] = new Tile(
		tilesColorsValues[j],
		tilesColorsValues[j + 1],
		false,
	);
	j += 2;
}

j = 0;
for (const colors in allTiles) {
	console.dir(`${allTiles[colors].lightColor}`);
	DOMTiles[
		j
	].style.background = `linear-gradient(to right bottom, ${allTiles[colors].lightColor}, ${allTiles[colors].shadowColor})`;
	j++;
}
