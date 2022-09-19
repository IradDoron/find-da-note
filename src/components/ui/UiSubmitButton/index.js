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

function UiSubmitButton() {
	const { theme, themeMode } = useContext(ThemeContext);
	const { state, dispatch } = useContext(StateContext);

	const [status, setStatus] = useState('default');

	useEffect(() => {
		if (state.userChoice === '' || state.userChoiceButtonStatus === 'correct') {
			setStatus('disabled');
		} else {
			setStatus('default');
		}
	}, [state.userChoice, state.userChoiceButtonStatus]);


	return (
		<>
			<LabelBox
				onClick={() =>
					status === 'default' &&
					dispatch({
						type: ACTIONS.SUBMIT_RESULT,
					})
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
				<LabelBox.Label>בחר</LabelBox.Label>
			</LabelBox>
		</>
	);
}

export default UiSubmitButton;
