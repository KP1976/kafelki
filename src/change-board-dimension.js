import generateTiles from './generate-tiles';

const radioButtonInputs = document.querySelectorAll(
	'.radios-container__radio-input',
);
const tilesContainer = document.querySelector('.tiles-container');
const tilesGrid = document.querySelector('.tiles-grid');

const changeBoardDimension = () => {
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

export default changeBoardDimension;
