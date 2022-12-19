import { theme } from 'theme';
import { KeyboardKeyType, KeyStatus, ThemeMode } from 'types';

export const getColorByStatusAndType = (
	status: KeyStatus,
	keyType: KeyboardKeyType,
	themeMode: ThemeMode
) => {
	const { palette } = theme;
	const { modes } = palette;
	const mode = modes[themeMode];
	const { keyboard } = mode;
	const { white, black } = keyboard;
	return keyType === 'white' ? white[status] : black[status];
};
