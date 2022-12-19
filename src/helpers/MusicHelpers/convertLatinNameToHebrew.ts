import { Note } from '@tonaljs/tonal';

import { MusicHelpers } from 'helpers';

import { BaseNotesAndSharps, Note as NoteType, NoteBase } from 'types';

export const convertLatinNameToHebrew = (note: NoteType | NoteBase | '') => {
	const noteObject = Note.get(note);

	const noteName: BaseNotesAndSharps = noteObject.pc as BaseNotesAndSharps;

	if (MusicHelpers.isBaseNote(noteName)) {
		return MusicHelpers.latinLetterToHebrewLetter(noteName as NoteBase);
	} else {
		// black keys
		// return array of two elements: [name with sharp, name with flat]

		const baseNote = noteName[0] as NoteBase;

		const sharpSign = '♯';
		const flatSign = '♭';

		const hebrewSharpBaseNote =
			MusicHelpers.latinLetterToHebrewLetter(baseNote);
		const hebrewSharpNote = sharpSign + hebrewSharpBaseNote;

		const baseNoteUpAnSecond = Note.transpose(baseNote, '2M') as NoteBase;
		const hebrewFlatBaseNote =
			MusicHelpers.latinLetterToHebrewLetter(baseNoteUpAnSecond);
		const hebrewFlatNote = flatSign + hebrewFlatBaseNote;

		return [hebrewSharpNote, hebrewFlatNote];
	}
};
