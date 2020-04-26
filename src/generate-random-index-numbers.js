const generateRandomIndexNumbers = (numberOfTiles) => {
	const randomIndexNumbers = new Set();
	if (numberOfTiles) {
		while (randomIndexNumbers.size !== numberOfTiles) {
			randomIndexNumbers.add(Math.floor(Math.random() * numberOfTiles));
		}
	}
	return randomIndexNumbers;
};

export default generateRandomIndexNumbers;
