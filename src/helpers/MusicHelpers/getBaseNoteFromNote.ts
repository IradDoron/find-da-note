import { Note, NoteBase } from 'types';

export const getBaseNoteFromNote = (note: Note): NoteBase => {
	const noteBase = note.slice(0, -1) as NoteBase;
	return noteBase;
};
