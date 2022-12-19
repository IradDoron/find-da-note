import { NoteName } from 'types';

export const isBaseNote = (note: NoteName): boolean => {
	return note.length === 1;
};
