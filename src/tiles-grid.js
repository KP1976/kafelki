const mainContainer = document.querySelector('.container');
const tilesContainer = document.querySelector('.tiles-grid');
let margin;
let width;

const generateTilesGrid = (rows, columns) => {
	tilesContainer.innerHTML = '';
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			const tile = document.createElement('li');
			if (rows === 4) {
				tile.classList.add('tiles-grid__tile');
				tile.classList.remove('small-tile');
				tile.classList.remove('smallest-tile');
				margin = 'big';
				if (columns === 3) {
					width = '800';
				} else {
					width = '930';
				}
			}
			if (rows === 5) {
				tile.classList.add('tiles-grid__tile');
				tile.classList.add('small-tile');
				tile.classList.remove('smallest-tile');
				margin = 'medium';
				if (columns === 4) {
					width = '930';
				}
			}
			if (rows === 6) {
				tile.classList.add('tiles-grid__tile');
				tile.classList.remove('small-tile');
				tile.classList.add('smallest-tile');
				margin = 'small';
			}
			tilesContainer.appendChild(tile);
		}
	}
	tilesContainer.dataset.gridColumns = columns;
	tilesContainer.dataset.marginTiles = margin;
	mainContainer.dataset.width = width;
};

export default generateTilesGrid;
