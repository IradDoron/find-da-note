// imports from libraries
import { useContext, useEffect, useState } from 'react';

// import blocks
import LabelBox from '../../blocks/LabelBox';

// import contexts
import StateContext from '../../../contexts/StateContext';
import ThemeContext from '../../../contexts/ThemeContext';

// import constants
import ACTIONS from '../../../constants/ACTIONS';

// import helpers
import getColorByStatusAndType from '../../../helpers/getColorByStatusAndType';

function UiNextButton() {
	const { theme, themeMode } = useContext(ThemeContext);
	const { state, dispatch } = useContext(StateContext);

	const [status, setStatus] = useState('default');

	useEffect(() => {
		if (state.userChoiceButtonStatus === 'correct') {
			setStatus('default');
		} else {
			setStatus('disabled');
		}
	}, [state.userChoiceButtonStatus]);

	return (
		<>
			<LabelBox
				onClick={() =>
					status === 'default' && dispatch({ type: ACTIONS.NEXT_QUESTION })
				}
				theme={theme}
				background={getColorByStatusAndType(
					status,
					'submitButton',
					theme,
					themeMode
				)}
				isPressed={status === 'disabled'}
				isDisabled={status === 'disabled'}
			>
				<LabelBox.Label>הבא</LabelBox.Label>
			</LabelBox>
		</>
	);
}

export default UiNextButton;
