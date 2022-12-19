import { IntervalDirection, IntervalNumber, NoteBase } from 'types';

export const getResult = (
	startNote: NoteBase,
	intervalNumber: IntervalNumber,
	intervalDirection: IntervalDirection
) => {
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

	if (intervalDirection === 'up') {
		const res = notesUp[notesUp.indexOf(startNote) + intervalNumber - 1];
		return res;
	} else {
		const res = notesDown[notesDown.indexOf(startNote) + intervalNumber - 1];
		return res;
	}
};
