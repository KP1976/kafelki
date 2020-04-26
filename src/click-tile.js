import { shuffleTilesColors } from './generate-random-tiles-colors';

const topBar = document.querySelector('.top-bar');
const tilesContainer = document.querySelector('.tiles-container');
const mainContainer = document.querySelector('.container');

let startTime;
let activeTile = '';
let pairsActiveTiles = [];
let correctAnswers = 0;
let gameScore;

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

export default clickTile;
