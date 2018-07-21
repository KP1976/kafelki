import './scss/main.scss';

import { DOMinit } from './js/dom';
import { shuffleTiles } from '../src/js/shuffle-tiles';
import { clickTile } from '../src/js/game';

const DOM = DOMinit();

// Zniknięcie komunikatu po 2 sekundach
setTimeout(_ => {
	DOM.tilesContainer.style.display = 'grid';
	DOM.header.style.display = 'none';
}, 2000);

// Umieszczenie odpowiednich kolorów do poszczególnych kafelków
DOM.tiles.forEach((tile, index) => {
	tile.style.backgroundColor = `rgba(${shuffleTiles[index][0]},${shuffleTiles[index][1]},${shuffleTiles[index][2]})`;
});

// Po 2 sekundach kolorowe kafelki zamieniane są na szare (2000ms + 2000ms z komunikatu na początku)
setTimeout(
	() =>
		DOM.tiles.forEach(tile => {
			tile.style.backgroundColor = '#505050';
			tile.addEventListener('click', clickTile);
		}),
	4000,
);
