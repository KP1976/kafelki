import { DOMinit } from './dom';
import { shuffleTiles } from './shuffle-tiles';
import { numberOfColors } from './make-tiles';

const DOM = DOMinit();

// Zamiana NodeList na Array
let tiles = [...DOM.tiles];

// Data w milisekundach przy starcie gry
const startGameTime = new Date().getTime();

let activeTile = ''; // aktywny kafelek
let activeTiles = []; // pary kafelków
const gamePairs = numberOfColors; // Liczba par kafelków jest równa liczbie kolorów
let gameResult = 0;

export const clickTile = function() {
	activeTile = this;

	// Gdy kliknięmy dwa razy na ten sam element
	if (activeTile === activeTiles[0]) return;

	// Pobieranie indeksu klikniętego kafelka
	const index = [...DOM.tiles].indexOf(this);

	// Wstawienie odpowiedniego koloru do kafelka
	this.style.backgroundColor = `rgba(${shuffleTiles[index][0]},${shuffleTiles[index][1]},${shuffleTiles[index][2]})`;

	// Pierwsze kliknięcie w kafelek
	if (activeTiles.length === 0) {
		activeTiles[0] = activeTile;
		return;
	}
	// drugie kliknięcie w kafelek
	else {
		// Blokada możliwości kliknięcia w inne kafelki
		tiles.forEach(tile => tile.removeEventListener('click', clickTile));
		activeTiles[1] = activeTile;

		setTimeout(_ => {
			// Sprawdzenie czy trafiliśmy dwa jednakowe kolory
			if (activeTiles[0].attributes[1].value === activeTiles[1].attributes[1].value) {
				// Gdy trafimy 2 takie same kolory to zmienia się wygląd kafelków
				activeTiles.forEach(tile => {
					tile.style.backgroundColor = 'white';
					tile.style.transform = 'scale(0.8)';
				});

				// Gdy trafimy dwa takie same kafelki gameResult zwiększamy o 1
				gameResult++;

				// Filtrowanie kafelków, by nie można było kliknąć tych co już zostały połączone w pary
				tiles = tiles.filter(tile => tile.attributes[1].value !== 'background-color: white; transform: scale(0.8);');

				// // Jeżeli gameResult będzie równa gamePairs gra zostanie zakończona
				if (gameResult === gamePairs) {
					// Data w milisekundach po skończonej grze
					const endGameTime = new Date().getTime();

					// Wynik gry w milisekundach
					const gameTime = (endGameTime - startGameTime) / 1000;

					setTimeout(_ => {
						// Po wygranej usuwamy kafelki z DOM
						DOM.tilesContainer.remove();

						// Wypisujemy na ekran komunikat o wygranej grze
						DOM.gameOverWrapper.style.display = 'block';
						DOM.gameTime.textContent = `${gameTime} s.`;

						// Ponowne uruchomienie gry
						DOM.gameOverBtn.addEventListener('click', _ => location.reload());
					}, 500);
				}
			} else {
				// Gdy nie trafimy 2 takich samych kolorów to kafelki ponownie są szare
				activeTiles.forEach(tile => (tile.style.backgroundColor = '#505050'));
			}

			// Resetowanie zmiennych przechowujących pary kolorów
			activeTile = '';
			activeTiles = [];

			// Ponowne ustawienie kafelków na kliknięcie
			tiles.forEach(tile => tile.addEventListener('click', clickTile));
		}, 500);
	}
};
