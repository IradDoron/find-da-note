// imports from libraries
import { useContext } from 'react';

// import blocks
import LabelBox from '../../blocks/LabelBox';

// import contexts
import StateContext from '../../../contexts/StateContext';
import ThemeContext from '../../../contexts/ThemeContext';

// import constants
import ACTIONS from '../../../constants/ACTIONS';

function UiNextButton() {
	const { theme } = useContext(ThemeContext);
	const { dispatch } = useContext(StateContext);
	return (
		<>
			<LabelBox
				onClick={() => dispatch({ type: ACTIONS.NEXT_QUESTION })}
				theme={theme}
				background="#fff"
			>
				<LabelBox.Label>הבא</LabelBox.Label>
			</LabelBox>
		</>
	);
}

export default UiNextButton;
