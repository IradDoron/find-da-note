// imports from libraries
import { useContext } from 'react';
import styled from 'styled-components';

// import blocks
import Arrow from '../../blocks/Arrow';
import EqualSign from '../../blocks/EqualSign';
import LabelBox from '../../blocks/LabelBox';

// import contexts
import StateContext from '../../../contexts/StateContext';
import ThemeContext from '../../../contexts/ThemeContext';

// import helpers
import convertLatinNameToHebrew from '../../../helpers/convertLatinNameToHebrew';
import intervalNumberToWord from '../../../helpers/intervalNumberToWord';
import getColorByStatusAndType from '../../../helpers/getColorByStatusAndType';

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

function UiQuestion() {
	const { theme, themeMode } = useContext(ThemeContext);
	const { state, dispatch } = useContext(StateContext);

	return (
		<>
			<FlexRow theme={theme}>
				<LabelBox
					background="white"
					theme={theme}
					themeMode={themeMode}
					minWidth="62"
				>
					<LabelBox.Label>
						{convertLatinNameToHebrew(state.startNote)}
					</LabelBox.Label>
				</LabelBox>
				<Arrow dir={state.dir}>
					<Arrow.Head />
					<Arrow.Body />
				</Arrow>
				<LabelBox background="white" theme={theme} themeMode={themeMode}>
					<LabelBox.Label>
						{intervalNumberToWord(state.interval)}
					</LabelBox.Label>
				</LabelBox>
				<EqualSign>
					<EqualSign.Rect />
					<EqualSign.Rect />
				</EqualSign>
				<LabelBox
					
					theme={theme}
					themeMode={themeMode}
					minWidth="58"
					background={getColorByStatusAndType(
						state.userChoiceButtonStatus,
						'userChoiceButton',
						theme,
						themeMode
					)}
				>
					<LabelBox.Label>
						{state.userChoice
							? convertLatinNameToHebrew(state.userChoice)
							: '?'}
					</LabelBox.Label>
				</LabelBox>
			</FlexRow>
		</>
	);
}

export default UiQuestion;
