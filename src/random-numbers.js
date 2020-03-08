const randomNumbers = new Set();

const generateRandomNumber = numbersOfTiles => {
	if (numbersOfTiles) {
		while (randomNumbers.size !== numbersOfTiles) {
			randomNumbers.add(Math.floor(Math.random() * numbersOfTiles));
		}
		return randomNumbers;
	}
};

export default generateRandomNumber;
