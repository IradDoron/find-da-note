// imports from libraries
import { useContext } from 'react';
import styled from 'styled-components';

// import blocks
import LabelBox from '../../blocks/LabelBox';

// import contexts
import StateContext from '../../../contexts/StateContext';
import ThemeContext from '../../../contexts/ThemeContext';

// import constants
import ACTIONS from '../../../constants/ACTIONS';

// import helpers
import convertLatinNameToHebrew from '../../../helpers/convertLatinNameToHebrew';
import getColorByStatusAndType from '../../../helpers/getColorByStatusAndType';

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	& > * {
		cursor: pointer;
		user-select: none;
	}

	

	${({ theme }) => theme.breakpoints.down('sm')} {
		justify-content: center;
		& > * {
			margin: 0 ${({ theme }) => theme.spacing.getSpacing('xs2')};
			padding: ${({ theme }) => theme.spacing.getSpacing('xs')};
			font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
		}
	}

	${({ theme }) => theme.breakpoints.up('sm')} {
		justify-content: center;
		& > * {
			margin: 0 ${({ theme }) => theme.spacing.getSpacing('xs')};
			padding: ${({ theme }) => theme.spacing.getSpacing('sm')};
			font-size: ${({ theme }) => theme.typography.getFontSize('sm')};
		}
	}
`;

function UiNotesButtons() {
	const { theme, themeMode } = useContext(ThemeContext);
	const { state, dispatch } = useContext(StateContext);

	return (
		<FlexRow theme={theme}>
			{state.noteButtonsData.map((noteData, index) => {
				return (
					<LabelBox
						key={index}
						onClick={() =>
							dispatch({
								type: ACTIONS.UPDATE_USER_CHOICE,
								payload: {
									newChoice: noteData.noteName,
									buttonIndex: Number(index),
								},
							})
						}
						theme={theme}
						background={getColorByStatusAndType(
							noteData.status,
							'noteButton',
							theme,
							themeMode
						)}
						isPressed={noteData.status !== 'default'}
						padding="xs"
					>
						<LabelBox.Label>
							{convertLatinNameToHebrew(noteData.noteName)}
						</LabelBox.Label>
					</LabelBox>
				);
			})}
		</FlexRow>
	);
}

export default UiNotesButtons;
