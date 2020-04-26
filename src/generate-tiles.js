const generateTiles = (rows, columns, container, tileClassName) => {
	for (let i = 0; i < rows * columns; i++) {
		const tile = document.createElement('li');
		tile.classList.add(tileClassName);
		container.appendChild(tile);
	}
};

export default generateTiles;
