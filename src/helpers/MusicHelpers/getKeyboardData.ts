import { MusicHelpers } from 'helpers';

import { KeyData, Note } from 'types';

import { MAX_KEYS_COUNT } from 'consts';

export const getKeyboardData = (startNote: Note, endNote: Note): KeyData[] => {
	const keyboardData: KeyData[] = [];

	let currNote = startNote;

	while (currNote !== endNote && keyboardData.length < MAX_KEYS_COUNT) {
		keyboardData.push({
			note: currNote,
			status: 'default',
			type: currNote.includes('#') ? 'black' : 'white',
		});

		currNote = MusicHelpers.getNoteUp(currNote);
	}

	keyboardData.push({
		note: endNote,
		status: 'default',
		type: currNote.includes('#') ? 'black' : 'white',
	});

	return keyboardData;
};
