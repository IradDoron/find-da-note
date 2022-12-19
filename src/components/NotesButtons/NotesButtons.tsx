import { useRecoilValue } from 'recoil';

import { noteButtonsDataState } from 'store';

import { NoteButton } from 'components';

import { StyledFlexBox } from 'components/NotesButtons/styles';

export const NotesButtons = () => {
	const noteButtonsData = useRecoilValue(noteButtonsDataState);

	return (
		<StyledFlexBox direction="row" gap="10px">
			{noteButtonsData.map((noteData) => {
				const { noteName, status } = noteData;
				return (
					<NoteButton key={noteName} noteName={noteName} status={status} />
				);
			})}
		</StyledFlexBox>
	);
};
