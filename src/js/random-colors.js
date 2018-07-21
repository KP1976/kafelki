export const RGBValues = [0, 23, 87, 101, 158, 195, 212, 250];

// Tworzenie randomowych kolorów z wartości jakie są w tablicy RGBValues
// Pierwsza składowa koloru (red) jest zawsze inna
export const makeRandomColor = i => {
	const red = RGBValues[i];
	const green = RGBValues[Math.floor(Math.random() * RGBValues.length)];
	const blue = RGBValues[Math.floor(Math.random() * RGBValues.length)];
	return [red, green, blue];
};
