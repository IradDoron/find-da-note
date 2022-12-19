import styled from 'styled-components';

import { Flexbox } from 'shared/Layout';

import { Theme, ThemeMode } from 'types';

import { theme } from 'theme';

interface StyledProps {
	children: React.ReactNode;
	themeMode: ThemeMode;
	theme: Theme;
}

export const StyledAppWrapper = styled(Flexbox)<StyledProps>`
	gap: 40px;
	${(props) => props.theme.layout.columnCenterCenter}
	background-color: ${(props) =>
		props.theme.palette.modes[props.themeMode].background.main};
	height: 100vh;
	width: 100vw;
	justify-content: center;
	z-index: -10;
	align-items: center;
`;

StyledAppWrapper.defaultProps = {
	theme: theme,
};
