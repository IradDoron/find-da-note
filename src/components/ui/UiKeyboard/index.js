// imports from libraries
import { useContext } from 'react';

// import blocks
import Keyboard from '../../blocks/Keyboard';

// import contexts
import ThemeContext from '../../../contexts/ThemeContext';

// import helpers
import convertLatinNameToHebrew from '../../../helpers/convertLatinNameToHebrew';
import getColorByStatusAndType from '../../../helpers/getColorByStatusAndType';

// import constants
import keyboardRange from '../../../constants/keyboardRange';

function UiKeyboard() {
	const { theme, themeMode } = useContext(ThemeContext);

	return (
		<Keyboard theme={theme}>
			{keyboardRange.map((key, index) => {
				return key.type === 'white' ? (
					<Keyboard.WhiteKeyContainer
						key={index}
						note={key.note}
						color={getColorByStatusAndType(
							key.status,
							'whiteKey',
							theme,
							themeMode
						)}
						theme={theme}
					>
						<Keyboard.WhiteKeyLabel theme={theme}>
							{convertLatinNameToHebrew(key.note)}
						</Keyboard.WhiteKeyLabel>
					</Keyboard.WhiteKeyContainer>
				) : (
					<Keyboard.BlackKeyContainer
						key={index}
						note={key.note}
						color={getColorByStatusAndType(
							key.status,
							'blackKey',
							theme,
							themeMode
						)}
						theme={theme}
					>
						<Keyboard.BlackKeyLabel theme={theme}>
							{convertLatinNameToHebrew(key.note)[0]}
						</Keyboard.BlackKeyLabel>
						<Keyboard.BlackKeyLabel theme={theme}>
							{convertLatinNameToHebrew(key.note)[1]}
						</Keyboard.BlackKeyLabel>
					</Keyboard.BlackKeyContainer>
				);
			})}
		</Keyboard>
	);
}

export default UiKeyboard;
