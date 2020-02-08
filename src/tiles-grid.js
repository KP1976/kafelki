const tilesContainer = document.querySelector('.tiles-grid');

const generateTilesGrid = (rows, columns) => {
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			const tile = document.createElement('li');
			tile.classList.add('tiles-grid__tile');
			tilesContainer.appendChild(tile);
		}
	}
	tilesContainer.dataset.gridColumns = columns;
};

export default generateTilesGrid;
