import { useRecoilValue } from 'recoil';

import { GameHelpers, MusicHelpers } from 'helpers';

import { keyboardDataState, themeModeState } from 'store';

import {
	StyledBlackKeyContainer,
	StyledBlackKeyLabel,
	StyledKeyboardContainer,
	StyledWhiteKeyContainer,
	StyledWhiteKeyLabel,
} from 'components/Keyboard/styles';
import { NoteBase } from 'types';

export const Keyboard = () => {
	const themeMode = useRecoilValue(themeModeState);
	const keyboardData = useRecoilValue(keyboardDataState);

	return (
		<StyledKeyboardContainer direction="row">
			{keyboardData.map((key, index) => {
				const isWhiteKey = key.type === 'white';
				if (isWhiteKey) {
					return (
						<StyledWhiteKeyContainer
							key={index}
							// note={key.note} // TODO: check if needed
							color={GameHelpers.getColorByStatusAndType(
								key.status,
								'white',
								themeMode
							)}
						>
							<StyledWhiteKeyLabel>
								{MusicHelpers.convertLatinNameToHebrew(key.note)}
							</StyledWhiteKeyLabel>
						</StyledWhiteKeyContainer>
					);
				} else {
					const note = key.note;

					const baseNote = note[0] as NoteBase;
					const baseNoteInHebrew =
						MusicHelpers.latinLetterToHebrewLetter(baseNote);

					const sharpSign = '♯';
					const flatSign = '♭';

					const baseNoteSecondAbove =
						MusicHelpers.getBaseNoteSecondAbove(baseNote);

					const baseNoteSecondAboveInHebrew =
						MusicHelpers.latinLetterToHebrewLetter(baseNoteSecondAbove);

					return (
						<StyledBlackKeyContainer
							key={index}
							// note={key.note} // TODO: check if needed
							color={GameHelpers.getColorByStatusAndType(
								key.status,
								'black',
								themeMode
							)}
						>
							<StyledBlackKeyLabel>{baseNoteInHebrew}</StyledBlackKeyLabel>
							<StyledBlackKeyLabel
								custom={{
									marginTop: '-24px',
								}}
							>
								{sharpSign}
							</StyledBlackKeyLabel>

							<StyledBlackKeyLabel>
								{baseNoteSecondAboveInHebrew}
							</StyledBlackKeyLabel>
							<StyledBlackKeyLabel
								custom={{
									marginTop: '-24px',
								}}
							>
								{flatSign}
							</StyledBlackKeyLabel>
						</StyledBlackKeyContainer>
					);
				}
			})}
		</StyledKeyboardContainer>
	);
};
