import generateTilesGrid from './tiles-grid';

const radioInputs = document.querySelectorAll('.radios-container__radio-input');

generateTilesGrid(4, 3);

const getTilesBoardDimension = () => {
	const getRowsAndColumns = e => {
		const diemensionString = e.target.nextElementSibling.textContent;
		const boardRows = parseInt(diemensionString.charAt(0));
		const boardColumns = parseInt(
			diemensionString.charAt(diemensionString.length - 1),
		);

		if (e.target.checked) {
			generateTilesGrid(boardRows, boardColumns);
		}
	};

	for (let i = 0; i < radioInputs.length; i++) {
		radioInputs[i].addEventListener('change', getRowsAndColumns);
	}
};

export default getTilesBoardDimension;
