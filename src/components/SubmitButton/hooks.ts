import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { GameHelpers } from 'helpers';

import { NoteButtonStatus } from 'types';

import {
	directionState,
	intervalNumberState,
	isCorrectState,
	noteButtonsDataState,
	startNoteState,
	userChoiceState,
} from 'store';

export const useSetDisabled = (
	setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const userChoice = useRecoilValue(userChoiceState);
	const isCorrect = useRecoilValue(isCorrectState);

	useEffect(() => {
		if (isCorrect || userChoice === '') {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [isCorrect, setIsDisabled, userChoice]);
};

export const useHandleClick = (
	isDisabled: boolean,
	setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const startNote = useRecoilValue(startNoteState);
	const intervalNumber = useRecoilValue(intervalNumberState);
	const direction = useRecoilValue(directionState);
	const userChoice = useRecoilValue(userChoiceState);
	const setIsCorrect = useSetRecoilState(isCorrectState);
	const [noteButtonsData, setNoteButtonsData] =
		useRecoilState(noteButtonsDataState);

	const handleClick = () => {
		const isCorrect = GameHelpers.isCorrect(
			startNote,
			direction,
			intervalNumber,
			userChoice
		);

		if (isDisabled) return;

		if (isCorrect) {
			const newNoteButtonsData = noteButtonsData.map((noteButtonData) => {
				if (noteButtonData.noteName === userChoice) {
					return {
						...noteButtonData,
						status: 'correct' as NoteButtonStatus,
					};
				}
				return noteButtonData;
			});
			setNoteButtonsData(newNoteButtonsData);
			setIsDisabled(true);
			setIsCorrect(true);
		} else {
			const newNoteButtonsData = noteButtonsData.map((noteButtonData) => {
				if (noteButtonData.noteName === userChoice) {
					return {
						...noteButtonData,
						status: 'incorrect' as NoteButtonStatus,
					};
				}
				return noteButtonData;
			});
			setNoteButtonsData(newNoteButtonsData);
		}
	};

	return handleClick;
};
