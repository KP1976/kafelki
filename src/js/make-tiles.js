import { makeRandomColor } from './random-colors';

export let tilesAll = []; // tablica ze wszystkimi kafelkami
let tilesColors = []; // tablica z różnymi kolorami kafelków
const numberOfTiles = 16; // liczba kafelków
export const numberOfColors = numberOfTiles / 2; // liczba kolorów kafelków

// Funkcja umieszcza w tablicy 8 dowolnych kolorów
function makeTilesColors() {
	for (let i = 0; i < numberOfColors; i++) {
		tilesColors.push(makeRandomColor(i));
	}
}

makeTilesColors();

// Umieszczenie w tablicy 16 kafelków o 8 różnych kolorach
tilesAll = tilesColors.concat(tilesColors);
