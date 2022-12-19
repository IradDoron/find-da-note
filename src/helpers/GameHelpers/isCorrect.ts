import { GameHelpers } from 'helpers';

import { IntervalDirection, IntervalNumber, NoteBase } from 'types';

export const isCorrect = (
	startNote: NoteBase,
	dir: IntervalDirection,
	interval: IntervalNumber,
	userChoice: NoteBase | ''
): boolean => {
	const correctResult = GameHelpers.getResult(startNote, interval, dir);
	return correctResult === userChoice;
};
