import { Animation } from 'theme/animation/types';
import { Border } from 'theme/border/types';
import { Breakpoints } from 'theme/breakpoints/types';
import { Effects } from 'theme/effects/types';
import { Layout } from 'theme/layout/types';
import { Palette } from 'theme/palette/types';
import { Spacing } from 'theme/spacing/types';
import { Typography } from 'theme/typography/types';

export interface InitialState {
	dir: IntervalDirection;
	startNoteOptions: NoteBase[];
	startNote: NoteBase;
	intervalOptions: IntervalNumber[];
	intervalNumber: IntervalNumber;
	result: NoteBase;
	userChoice: NoteBase | '';
	noteButtonsData: NoteButton[];
	userChoiceButtonStatus: NoteButtonStatus;
}

export type ThemeMode = 'dark';

export interface Theme {
	palette: Palette;
	breakpoints: Breakpoints;
	typography: Typography;
	layout: Layout;
	spacing: Spacing;
	border: Border;
	animation: Animation;
	effects: Effects;
}

export type NoteBase = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';

export type Accidental = '' | '#' | 'b' | '##' | 'bb';

export type Octave = number;

export type Note = `${NoteBase}${Accidental}${Octave}`;

export type BaseNotesAndSharps = NoteBase | `${NoteBase}#`;

export type NoteName = `${NoteBase}${Accidental}`;

export type KeyboardKeyType = 'white' | 'black';

export type IntervalDirection = 'up' | 'down';

export type IntervalNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type KeyStatus =
	| 'default'
	| 'startNote'
	| 'userChoice'
	| 'correct'
	| 'incorrect';

export interface KeyData {
	note: Note;
	status: KeyStatus;
	type: KeyboardKeyType;
}

export type NoteButtonStatus = 'default' | 'correct' | 'incorrect' | 'selected';

export interface NoteButton {
	noteName: NoteBase;
	status: NoteButtonStatus;
}

export interface CustomProps {
	width?: string;
	height?: string;
	backgroundColor?: string;
	borderRadius?: string;
	boxShadow?: string;
	padding?: string;
	margin?: string;
	marginTop?: string;
	marginBottom?: string;
	marginLeft?: string;
	marginRight?: string;
	border?: string;
	fontSize?: string;
	fontWeight?: string;
	color?: string;
	alignItems?: string;
}

export interface BaseStylesProps {
	theme: Theme;
	themeMode?: ThemeMode;
	custom?: CustomProps;
}
