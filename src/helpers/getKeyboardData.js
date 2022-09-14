import getNoteUp from './getNoteUp';

function getKeyboardData(startNote, endNote) {
	const keyboardData = [];
	const maxKeysCount = 81;

	let currNote = startNote;

	while (currNote !== endNote && keyboardData.length < maxKeysCount) {
		keyboardData.push({
			note: currNote,
			status: 'default',
			type: currNote.includes('#') ? 'black' : 'white',
		});

		currNote = getNoteUp(currNote);
	}

	keyboardData.push({
		note: endNote,
		status: 'default',
		type: currNote.includes('#') ? 'black' : 'white',
	});
	return keyboardData;
}

export default getKeyboardData;
