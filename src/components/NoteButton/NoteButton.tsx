import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { isCorrectState, userChoiceState } from 'store';

import { Props } from 'components/NoteButton/types';

import {
	StyledButton as Button,
	StyledText as Text,
} from 'components/NoteButton/styles';

import { handleClick, useUpdateNotesStatus } from 'components/NoteButton/hooks';

import { MusicHelpers } from 'helpers';

export const NoteButton = ({ noteName, status }: Props) => {
	const setUserChoice = useSetRecoilState(userChoiceState);
	const [isDisabled, setIsDisabled] = useState(false);
	const isCorrect = useRecoilValue(isCorrectState);

	useUpdateNotesStatus(noteName);

	useEffect(() => {
		if (isCorrect) {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [isCorrect]);

	return (
		<Button
			onClick={
				isDisabled ? () => {} : () => handleClick(noteName, setUserChoice)
			}
			status={status}
			isDisabled={isDisabled}
		>
			<Text>{MusicHelpers.convertLatinNameToHebrew(noteName)}</Text>
		</Button>
	);
};
