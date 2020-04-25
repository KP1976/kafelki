const topBar = document.querySelector('.top-bar');
const tilesContainer = document.querySelector('.tiles-container');
const mainContainer = document.querySelector('.container');
const tilesGrid = document.querySelector('.tiles-grid');
const radioButtonInputs = document.querySelectorAll(
	'.radios-container__radio-input',
);
const switchButton = document.querySelector('.switch-mode-container__switch');
const HTMLTag = document.documentElement;
const startButton = document.querySelector('.start-button');
const tilesColors = [
	'black',
	'purple',
	'light-blue',
	'orange',
	'red',
	'blue',
	'green',
	'yellow',
	'pink',
	'brown',
];

let activeTile = '';
let pairsActiveTiles = [];
const shuffleTilesColors = [];
let randomIndexNumbers = [];
let correctAnswers = 0;
let startTime;
let endTime;
let gameScore;

const changeThemeColorMode = () => {
	switchButton.addEventListener('change', (e) => {
		if (e.target.checked) {
			HTMLTag.dataset.colormode = 'light';
		} else {
			HTMLTag.dataset.colormode = 'dark';
		}
	});
};

const generateTiles = (rows, columns, container, tileClassName) => {
	for (let i = 0; i < rows * columns; i++) {
		const tile = document.createElement('li');
		tile.classList.add(tileClassName);
		container.appendChild(tile);
	}
};

const clickRadioButtons = () => {
	radioButtonInputs.forEach((radioButtonInput) => {
		radioButtonInput.addEventListener('change', () => {
			const [rows, columns] = event.target.nextElementSibling.textContent.split(
				'x',
			);

			// Usuwanie wszystkich kafelków i ustawienie odpowiedniego grida dla kontenera
			// (zarówno na stronie początkowej jak i w grze)
			tilesGrid.innerHTML = '';
			tilesGrid.dataset.gridRows = rows;
			tilesGrid.dataset.gridColumns = columns;

			tilesContainer.dataset.gridRows = rows;
			tilesContainer.dataset.gridColumns = columns;

			generateTiles(+rows, +columns, tilesGrid, 'tiles-grid__tile');
		});
	});
};

const generateRandomIndexNumbers = (numberOfTiles) => {
	const randomIndexNumbers = new Set();
	if (numberOfTiles) {
		while (randomIndexNumbers.size !== numberOfTiles) {
			randomIndexNumbers.add(Math.floor(Math.random() * numberOfTiles));
		}
	}
	return randomIndexNumbers;
};

const createArrayOfDoubleColors = (numberOfTiles) => {
	const colorsOfTiles = [];
	const availableTileColors = numberOfTiles / 2;
	let j = 0;

	for (let i = 0; i < numberOfTiles; i++) {
		colorsOfTiles[i] = tilesColors[j];
		j++;
		if (j > availableTileColors - 1) {
			j = 0;
		}
	}

	return colorsOfTiles;
};

const generateRandomTilesColors = (numberOfTiles) => {
	const colorsOfTiles = createArrayOfDoubleColors(numberOfTiles);
	const tiles = document.querySelectorAll('.tiles-container__tile');

	randomIndexNumbers = [...generateRandomIndexNumbers(numberOfTiles)];

	for (let i = 0; i < numberOfTiles; i++) {
		shuffleTilesColors[i] = colorsOfTiles[randomIndexNumbers[i]];
	}

	tiles.forEach((tile, index) =>
		tile.classList.add(`${shuffleTilesColors[index]}`),
	);

	return tiles;
};

const clickTile = (tiles) => {
	// Usuwa po 2,5 sekundach kolory z kafelków i ustawia event listenery na każdy kafelek
	setTimeout(() => {
		tiles.forEach((tile) => {
			tile.className = 'tiles-container__tile';
			tile.addEventListener('click', clickTileHandler);
		});

		startTime = new Date().getTime();
	}, 2500);
};

const clickTileHandler = (e) => {
	const tiles = document.querySelectorAll('.tiles-container__tile');
	const index = [...tiles].indexOf(e.target);
	activeTile = e.target;

	// Jeżeli klikniemy w ten sam kafelek
	if (activeTile === pairsActiveTiles[0]) return;

	if (pairsActiveTiles.length === 0) {
		pairsActiveTiles[0] = activeTile;
		activeTile.classList.add(`${shuffleTilesColors[index]}`);
		return;
	} else {
		tiles.forEach((tile) =>
			tile.removeEventListener('click', clickTileHandler),
		);
		pairsActiveTiles[1] = activeTile;
		activeTile.classList.add(`${shuffleTilesColors[index]}`);

		setTimeout(() => {
			if (
				pairsActiveTiles[0].attributes[0].value ===
				pairsActiveTiles[1].attributes[0].value
			) {
				pairsActiveTiles.forEach((singleActiveTile) => {
					const correctAnswerSign = document.createElement('i');
					singleActiveTile.className = 'tiles-container__tile guessed';
					correctAnswerSign.className = 'fa fa-check';
					singleActiveTile.appendChild(correctAnswerSign);
				});

				correctAnswers++;

				if (correctAnswers === tiles.length / 2) {
					const endTime = new Date().getTime();
					gameScore = endTime - startTime;
					tiles.forEach((tile) => tile.remove());

					document.querySelector('body').insertAdjacentHTML(
						'afterBegin',
						`
							<div class="wrapper">
								<h1 class="wrapper__score-text">Twój wynik to <span class="time">${(
									gameScore / 1000
								).toFixed(1)}</span> s.</h1>
							</div>
						`,
					);

					setTimeout(() => {
						document.querySelector('.wrapper').remove();
						topBar.classList.add('is-visible');
						mainContainer.classList.add('is-visible');
						tilesContainer.classList.remove('is-visible');
						correctAnswers = 0;
					}, 3000);
				}
			} else {
				pairsActiveTiles.forEach(
					(tile) => (tile.className = 'tiles-container__tile'),
				);
			}

			// Resetowanie
			activeTile = '';
			pairsActiveTiles = [];

			// Ponowne ustawienie click eventa dla każdego kafelka
			tiles.forEach((tile) => tile.addEventListener('click', clickTileHandler));
		}, 500);
	}
};

const startGame = () => {
	startButton.addEventListener('click', () => {
		const rows = +tilesGrid.getAttribute('data-grid-rows');
		const columns = +tilesGrid.getAttribute('data-grid-columns');
		let tiles;

		topBar.classList.remove('is-visible');
		mainContainer.classList.remove('is-visible');
		tilesContainer.classList.add('is-visible');

		generateTiles(rows, columns, tilesContainer, 'tiles-container__tile');
		tiles = generateRandomTilesColors(rows * columns);
		clickTile(tiles);
	});
};

changeThemeColorMode();
generateTiles(4, 3, tilesGrid, 'tiles-grid__tile');
clickRadioButtons();
startGame();
