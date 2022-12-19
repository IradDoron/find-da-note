import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { MusicHelpers } from 'helpers';

import {
	directionState,
	intervalNumberState,
	isCorrectState,
	startNoteState,
	userChoiceState,
} from 'store';

export const useNextQuestion = (status: string) => {
	const setUserChoice = useSetRecoilState(userChoiceState);
	const setIsCorrect = useSetRecoilState(isCorrectState);
	const setDirection = useSetRecoilState(directionState);
	const setStartNote = useSetRecoilState(startNoteState);
	const setIntervalNumber = useSetRecoilState(intervalNumberState);

	const updateState = () => {
		if (status === 'disabled') {
			return;
		} else if (status === 'default') {
			setUserChoice('');
			setIsCorrect(false);
			setDirection(MusicHelpers.getRandomDirection());
			setStartNote(MusicHelpers.getRandStartNote());
			setIntervalNumber(MusicHelpers.getRandomIntervalNumber());
		} else {
			return;
		}
	};

	return updateState;
};

export const useUpdateStatus = (
	setStatus: React.Dispatch<React.SetStateAction<string>>
) => {
	const isCorrect = useRecoilValue(isCorrectState);

	useEffect(() => {
		if (isCorrect) {
			setStatus('default');
		} else {
			setStatus('disabled');
		}
	}, [isCorrect, setStatus]);
};
