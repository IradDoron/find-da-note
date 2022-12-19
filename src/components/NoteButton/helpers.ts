import { NoteBase, NoteButtonStatus } from 'types';

import { theme } from 'theme';

export const getColorToNoteButtonByStatus = (status: NoteButtonStatus) => {
	const {
		default: defaultColor,
		correct,
		incorrect,
		selected,
	} = theme.palette.modes.dark.noteButton;

	switch (status) {
		case 'default':
			return defaultColor;
		case 'selected':
			return selected;
		case 'correct':
			return correct;
		case 'incorrect':
			return incorrect;
		default:
			return 'white';
	}
};

export const isNoteNameActive = (
	noteName: NoteBase | '',
	userChoice: NoteBase | ''
): boolean => {
	return noteName === userChoice;
};
