let howManyClicks = 0;
let pairClicks = [];
let correctAnswers = 0;
const gameTiles = document.querySelector('.tiles-container');
const topBar = document.querySelector('.top-bar');
const mainContainer = document.querySelector('.container');
const bottomBar = document.querySelector('.bottom-bar.is-visible');

export function clickTile(
	index,
	startTime,
	tiles,
	randomArrayOfPairColors,
	event,
) {
	howManyClicks += 1;
	pairClicks.push(index);
	event.target.classList.add(randomArrayOfPairColors[index]);
	event.target.classList.add('clicked');

	if (howManyClicks === 2) {
		howManyClicks = 0;
		const firstClickedTile = tiles[pairClicks[0]];
		const secondClickedTile = tiles[pairClicks[1]];
		console.log(firstClickedTile, secondClickedTile);
		if (firstClickedTile.classList[1] === secondClickedTile.classList[1]) {
			const correctSign1 = document.createElement('i');
			const correctSign2 = document.createElement('i');
			correctSign1.className = 'fas fa-check';
			correctSign2.className = 'fas fa-check';
			firstClickedTile.className = 'tiles-container__tile guessed';
			secondClickedTile.className = 'tiles-container__tile guessed';
			firstClickedTile.insertAdjacentElement('afterbegin', correctSign1);
			secondClickedTile.insertAdjacentElement('afterbegin', correctSign2);
			correctAnswers++;

			if (correctAnswers === tiles.length / 2) {
				const finalText = document.createElement('h1');
				const endTime = new Date().getTime();

				gameTiles.classList.remove('is-visible');
				gameTiles.insertAdjacentElement('afterend', finalText);
				finalText.className = 'final-text';
				finalText.textContent = `Wygrałeś z czasem: ${(endTime - startTime) /
					1000}s`;

				console.log((endTime - startTime) / 1000);

				if (
					document.querySelector('html').getAttribute('data-colormode') ===
					'dark'
				) {
					finalText.classList.add('text-white');
				} else {
					finalText.classList.add('text-black');
				}

				setTimeout(() => {
					topBar.classList.add('is-visible');
					mainContainer.classList.add('is-visible');
					bottomBar.classList.add('is-visible');

					while (gameTiles.firstChild) {
						gameTiles.firstChild.remove();
					}

					finalText.remove();
				}, 1500);
			}
		} else {
			setTimeout(() => {
				event.target.classList.add('clicked');
				firstClickedTile.className = 'tiles-container__tile';
				secondClickedTile.className = 'tiles-container__tile';
			}, 1000);
		}
		pairClicks = [];
	}
}
