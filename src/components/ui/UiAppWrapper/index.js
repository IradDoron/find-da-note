import { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';
import AppWrapper from '../../blocks/AppWrapper';

function UiAppWrapper({ children }) {
    const { theme, themeMode } = useContext(ThemeContext);
	return <AppWrapper theme={theme} themeMode={themeMode}>{children}</AppWrapper>;
}

export default UiAppWrapper;
