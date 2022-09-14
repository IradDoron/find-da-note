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
	justify-content: space-evenly;
`;

function UiNotesButtons() {
	const { theme, themeMode } = useContext(ThemeContext);
	const { state, dispatch } = useContext(StateContext);

	return (
		<FlexRow>
			{state.noteButtonsData.map((noteData, index) => {
				return (
					<LabelBox
						key={index}
						onClick={() =>
							dispatch({
								type: ACTIONS.UPDATE_USER_CHOICE,
								payload: { newChoice: noteData.noteName, buttonIndex: Number(index) },
							})
						}
						theme={theme}
						background={getColorByStatusAndType(
							noteData.status,
							'noteButton',
							theme,
							themeMode
						)}
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
