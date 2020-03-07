import generateTilesGrid from './tiles-grid';

const radioInputs = document.querySelectorAll('.radios-container__radio-input');
let boardRows = 4;
let boardColumns = 3;

generateTilesGrid(boardRows, boardColumns);

const getTilesBoardDimension = () => {
	for (let i = 0; i < radioInputs.length; i++) {
		radioInputs[i].addEventListener('change', function(e) {
			const diemensionString = e.target.nextElementSibling.textContent;

			boardRows = parseInt(diemensionString.charAt(0));
			boardColumns = parseInt(
				diemensionString.charAt(diemensionString.length - 1),
			);

			if (e.target.checked) {
				generateTilesGrid(boardRows, boardColumns);
			}
		});
	}
};

export default getTilesBoardDimension;
