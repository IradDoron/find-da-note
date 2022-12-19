import { KeyStatus } from 'types';

export type Modes = 'dark';

export interface PaletteMode {
	background: {
		main: string;
		light: string;
		dark: string;
		contrastText: string;
	};
	keyboard: {
		white: {
			[key in KeyStatus]: string;
		};
		black: {
			[key in KeyStatus]: string;
		};
	};
	noteButton: {
		selected: string;
		correct: string;
		incorrect: string;
		default: string;
	};
	userChoiceButton: {
		default: string;
		correct: string;
		incorrect: string;
	};

	actionButton: {
		default: string;
		hover: string;
		disabled: string;
	};
}

export interface Palette {
	modes: {
		[key in Modes]: PaletteMode;
	};
}
