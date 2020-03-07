const mainContainer = document.querySelector('.container');
const tilesContainer = document.querySelector('.tiles-grid');
let width;

const generateTilesGrid = (rows, columns) => {
	tilesContainer.innerHTML = '';
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			const tile = document.createElement('li');
			if (rows === 4) {
				tile.classList.add('tiles-grid__tile');
				if (window.innerWidth > 1200) {
					if (columns === 3) {
						width = '';
					} else {
						width = '930';
					}
				} else {
					width = '';
				}
			}
			if (rows === 5) {
				tile.classList.add('tiles-grid__tile');
				if (window.innerWidth > 1200) {
					if (columns === 4) {
						width = '930';
					}
				}
			}
			if (rows === 6) {
				tile.classList.add('tiles-grid__tile');
				if (window.innerWidth > 1200) {
					width = '800';
				}
			}
			tilesContainer.appendChild(tile);
		}
	}
	tilesContainer.dataset.gridColumns = columns;
	tilesContainer.dataset.gridRows = rows;
	mainContainer.dataset.width = width;
};

export default generateTilesGrid;
