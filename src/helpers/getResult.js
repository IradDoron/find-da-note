function getResult(startNote, interval, dir) {
	const notesUp = [
		'C',
		'D',
		'E',
		'F',
		'G',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'A',
		'B',
	];

	const newNotesUp = notesUp.map((note) => {
		return note;
	});

	const notesDown = newNotesUp.reverse();

	if (dir === 'UP') {
		const res = notesUp[notesUp.indexOf(startNote) + interval - 1];
		return res;
	} else {
		const res = notesDown[notesDown.indexOf(startNote) + interval - 1];
		return res;
	}
}

export default getResult;
