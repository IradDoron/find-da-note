import { NoteBase, NoteButtonStatus } from 'types';

export interface Props {
	noteName: NoteBase | '';
	status: NoteButtonStatus;
}
