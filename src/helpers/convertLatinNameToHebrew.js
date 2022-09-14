// imports from libraries
import { Note } from '@tonaljs/tonal';

// import helpers
import latinLetterToHebrew from './latinLetterToHebrew';

function convertLatinNameToHebrew(note) {
	// the parameter "note" is a note in the format: C3, C#3, Cb3

	// get the note object from tonaljs
	const noteObject = Note.get(note);

	// get the note name like those: C, C#
	const noteName = noteObject.pc;

	// different cases for white keys and black keys

	if (noteName.length === 1) {
		// white keys
		return latinLetterToHebrew(noteName);
	} else {
		// black keys
		// return array of two elements: [name with sharp, name with flat]
		const noteNameWithSharp = '♯' + latinLetterToHebrew(noteName[0]);
		const noteNameWithFlat =
			'♭' + latinLetterToHebrew(Note.transpose(noteName[0], '2M'));

		return [noteNameWithSharp, noteNameWithFlat];
	}
}

export default convertLatinNameToHebrew;
