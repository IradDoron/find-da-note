import { MathHelpers } from 'helpers';

import { NoteBase } from 'types';

export const getRandStartNote = (): NoteBase => {
	const notes: NoteBase[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
	const randomNote = MathHelpers.getRandomElementFromArray(notes);
	return randomNote;
};
