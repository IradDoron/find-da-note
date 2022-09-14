function getRandInterval() {
	const min = 1;
	const max = 8;
	const interval = Math.floor(Math.random() * (max - min + 1)) + min;
	return interval;
}

export default getRandInterval;
