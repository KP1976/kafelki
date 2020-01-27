const DOMTilesContainer = document.querySelector('.tiles-container');
const generateTiles = numberOfTiles => {
	for (let i = 0; i < numberOfTiles; i++) {
		const tile = document.createElement('li');
		tile.classList.add('tiles-container__tile');
		DOMTilesContainer.appendChild(tile);
	}
};

export { generateTiles, DOMTilesContainer };
