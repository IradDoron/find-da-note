export const getRandomIntegerInRange = (min: number, max: number): number => {
	const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomInteger;
};

export const getRandomElementFromArray = <T>(array: T[]): T => {
	const randomIndex = getRandomIntegerInRange(0, array.length - 1);
	return array[randomIndex];
};
