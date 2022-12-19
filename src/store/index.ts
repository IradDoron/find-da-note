import { atom } from 'recoil';

import {
	IntervalDirection,
	IntervalNumber,
	KeyData,
	NoteBase,
	NoteButton,
	ThemeMode,
} from 'types';

import { MusicHelpers } from 'helpers';

export const themeModeState = atom({
	key: 'currentThemeMode',
	default: 'dark' as ThemeMode,
});

export const directionState = atom({
	key: 'direction',
	default: MusicHelpers.getRandomDirection() as IntervalDirection,
});

export const resultState = atom({
	key: 'result',
	default: '' as NoteBase | '',
});

export const userChoiceState = atom({
	key: 'UserChoice',
	default: '' as NoteBase | '',
});

export const startNoteState = atom({
	key: 'startNote',
	default: MusicHelpers.getRandStartNote() as NoteBase,
});

export const intervalNumberState = atom({
	key: 'intervalNumber',
	default: MusicHelpers.getRandomIntervalNumber() as IntervalNumber,
});

export const keyboardDataState = atom({
	key: 'keyboardData',
	default: [] as KeyData[] | [],
});

export const isCorrectState = atom({
	key: 'isCorrect',
	default: false as boolean,
});

export const noteButtonsDataState = atom({
	key: 'noteButtonsData',
	default: [
		{
			noteName: 'C',
			status: 'default',
		},
		{
			noteName: 'D',
			status: 'default',
		},
		{
			noteName: 'E',
			status: 'default',
		},
		{
			noteName: 'F',
			status: 'default',
		},
		{
			noteName: 'G',
			status: 'default',
		},
		{
			noteName: 'A',
			status: 'default',
		},
		{
			noteName: 'B',
			status: 'default',
		},
	] as NoteButton[],
});
