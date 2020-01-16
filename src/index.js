const cssVariables = document.styleSheets[0].cssRules[0].style.cssText.split(
	';',
);

const tilesColors = {};

cssVariables.splice(0, 2);
cssVariables.splice(-2, 2);

for (let i = 0; i < cssVariables.length; i++) {
	let keyValuePairs = cssVariables[i].split(':');

	if (keyValuePairs[0] !== '') {
		tilesColors[keyValuePairs[0].trim()] = keyValuePairs[1].trim();
	}
}
console.log(tilesColors);
