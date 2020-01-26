const randomNumbers = new Set();

const generateRandomNumbers = () => {
	while (randomNumbers.size !== 12) {
		randomNumbers.add(Math.floor(Math.random() * 12));
	}
	return randomNumbers;
};

generateRandomNumbers();

export default randomNumbers;
