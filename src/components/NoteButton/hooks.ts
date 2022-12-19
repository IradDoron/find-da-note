import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { isNoteNameActive } from 'components/NoteButton/helpers';

import { noteButtonsDataState, userChoiceState } from 'store';

import { NoteBase } from 'types';

export const useUpdateNotesStatus = (noteName: NoteBase | '') => {
	const setNoteButtonsData = useSetRecoilState(noteButtonsDataState);
	const userChoice = useRecoilValue(userChoiceState);

	useEffect(() => {
		const isActive = isNoteNameActive(noteName, userChoice);
		const newStatus = isActive ? 'selected' : 'default';
		setNoteButtonsData((prevNoteButtonsData) => {
			return prevNoteButtonsData.map((noteButtonData) => {
				if (noteButtonData.noteName === noteName) {
					return {
						...noteButtonData,
						status: newStatus,
					};
				}
				return noteButtonData;
			});
		});
	}, [noteName, setNoteButtonsData, userChoice]);
};

// TODO: fix any

export const handleClick = (noteName: NoteBase | '', setter: any): void => {
	setter(noteName);
};
