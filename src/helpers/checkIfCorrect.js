import getResult from './getResult';

function checkIfCorrect(startNote, dir, interval, userChoice) {
	const correctResult = getResult(startNote, interval, dir);
	return correctResult === userChoice;
}

export default checkIfCorrect;
