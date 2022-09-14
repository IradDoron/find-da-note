import getRandDir from '../helpers/getRandDir';
import getRandInterval from '../helpers/getRandInterval';
import getRandStartNote from '../helpers/getRandStartNote';

const initialState = {
	dir: getRandDir(),
	startNoteOptions: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
	startNote: getRandStartNote(),
	intervalOptions: ['1', '2', '3', '4', '5', '6', '7', '8'],
	interval: getRandInterval(),
	result: 'C',
	userChoice: '',
	noteButtonsData: [
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
	],
	userChoiceButtonStatus: 'default',
};

export default initialState;
