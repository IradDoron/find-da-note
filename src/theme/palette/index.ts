import { Palette } from 'theme/palette/types';

export const palette: Palette = {
	modes: {
		dark: {
			background: {
				main: '#4C506B',
				light: '#8287A8',
				dark: '#2E3148',
				contrastText: '#fff',
			},
			keyboard: {
				white: {
					default: '#fff',
					startNote: '#939DFF',
					userChoice: '#FFC75B',
					correct: '#90EF64',
					incorrect: '#FF5656',
				},
				black: {
					default: '#000',
					startNote: '#939DFF',
					userChoice: '#FFC75B',
					correct: '#90EF64',
					incorrect: '#FF5656',
				},
			},
			noteButton: {
				selected: '#939DFF',
				correct: '#90EF64',
				incorrect: '#FF5656',
				default: '#fff',
			},
			userChoiceButton: {
				correct: '#90EF64',
				incorrect: '#FF5656',
				default: '#fff',
			},
			actionButton: {
				default: '#fff',
				hover: '#8287A8',
				disabled: '#808185',
			},
		},
	},
};
