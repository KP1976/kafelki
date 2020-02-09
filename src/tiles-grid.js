const tilesContainer = document.querySelector('.tiles-grid');
const mainTitle = document.querySelector('.title');
const containerOfTiles = document.querySelector('.container-of-tiles');
const buttonStart = document.querySelector('.button');

const generateTilesGrid = (rows, columns) => {
	tilesContainer.innerHTML = '';
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			const tile = document.createElement('li');
			tile.classList.add('tiles-grid__tile');
			tilesContainer.appendChild(tile);
		}
	}
	tilesContainer.dataset.gridColumns = columns;
	tilesContainer.dataset.marginTiles = 2 * columns + 1;

	if (rows === 5) {
		mainTitle.classList.add('margin-five-rows');
		containerOfTiles.classList.add('margin-five-rows');
		buttonStart.classList.add('margin-five-rows');
		mainTitle.classList.remove('margin-six-rows');
		containerOfTiles.classList.remove('margin-six-rows');
		buttonStart.classList.remove('margin-six-rows');
	} else if (rows === 6) {
		mainTitle.classList.remove('margin-five-rows');
		containerOfTiles.classList.remove('margin-five-rows');
		buttonStart.classList.remove('margin-five-rows');
		mainTitle.classList.add('margin-six-rows');
		containerOfTiles.classList.add('margin-six-rows');
		buttonStart.classList.add('margin-six-rows');
	} else {
		mainTitle.classList.remove('margin-five-rows');
		containerOfTiles.classList.remove('margin-five-rows');
		buttonStart.classList.remove('margin-five-rows');
		mainTitle.classList.remove('margin-six-rows');
		containerOfTiles.classList.remove('margin-six-rows');
		buttonStart.classList.remove('margin-six-rows');
	}
};

export default generateTilesGrid;
