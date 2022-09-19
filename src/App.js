import { useReducer, useState } from 'react';

import styled from 'styled-components';

import initialState from './constants/initialState';
import theme from './constants/theme';

import StateContext from './contexts/StateContext';
import ThemeContext from './contexts/ThemeContext';

import reducer from './helpers/reducer';

// import blocks

import ButtonsContainer from './components/blocks/ButtonsContainer';

// import UI components

import UiAppWrapper from './components/ui/UiAppWrapper';
import UiKeyboard from './components/ui/UiKeyboard';
import UiNextButton from './components/ui/UiNextButton';
import UiNotesButtons from './components/ui/UiNotesButtons';
import UiQuestion from './components/ui/UiQuestion';
import UiSubmitButton from './components/ui/UiSubmitButton';



function App() {
	const [themeMode, setThemeMode] = useState('dark');
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>
			<StateContext.Provider value={{ state, dispatch }}>
				<UiAppWrapper>
					<UiKeyboard />
					<UiQuestion />
					<UiNotesButtons />
					<ButtonsContainer theme={theme}>
						<UiSubmitButton />
						<UiNextButton />
					</ButtonsContainer>
				</UiAppWrapper>
			</StateContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;
