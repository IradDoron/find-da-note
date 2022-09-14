// import constants
import ACTIONS from '../constants/ACTIONS';

// import helpers
import checkIfCorrect from './checkIfCorrect';
import getRandDir from './getRandDir';
import getRandInterval from './getRandInterval';
import getRandStartNote from './getRandStartNote';

function reducer(state, data) {
	const newState = { ...state };
	const { type, payload } = data;
	switch (type) {
		case ACTIONS.UPDATE_USER_CHOICE: {
			newState.userChoice = payload.newChoice;
			newState.noteButtonsData.map((noteData, index) => {
				return (noteData.status = 'default');
			});
			newState.noteButtonsData[payload.buttonIndex].status = 'active';
			return newState;
		}
		case ACTIONS.SUBMIT_RESULT: {
			const isCorrect = checkIfCorrect(
				newState.startNote,
				newState.dir,
				newState.interval,
				newState.userChoice
			);
			// if correct, change status of userChoice button to correct
			if (isCorrect) {
				newState.userChoiceButtonStatus = 'correct';
			} else {
				// if incorrect, change status of userChoice button to incorrect
				newState.userChoiceButtonStatus = 'incorrect';
			}

			return newState;
		}
		case ACTIONS.NEXT_QUESTION: {
			newState.startNote = getRandStartNote();
			newState.interval = getRandInterval();
			newState.dir = getRandDir();
			newState.userChoice = '';
			newState.noteButtonsData.map((noteData, index) => {
				return (noteData.status = 'default');
			});
			newState.userChoiceButtonStatus = 'default';


			return newState;
		}

		default: {
			return newState;
		}
	}
}

export default reducer;
