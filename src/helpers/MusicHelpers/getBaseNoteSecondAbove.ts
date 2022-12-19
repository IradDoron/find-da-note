import { Note } from '@tonaljs/tonal';

import { NoteBase } from 'types';

export const getBaseNoteSecondAbove = (note: NoteBase): NoteBase => {
	const noteUpAnSecond = Note.transpose(note, '2M') as NoteBase;

	return noteUpAnSecond;
};
