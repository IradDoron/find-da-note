import styled from 'styled-components';

import { Props } from 'shared/Inputs/Button/types';

import { theme } from 'theme';

export const Button = styled.button<Props>`
	font-size: 1.4rem;
	border-radius: 4px;

	cursor: pointer;
	background-color: ${({ theme }) =>
		theme.palette.modes.dark.noteButton.default};

	&:hover {
		box-shadow: ${({ theme }) => theme.effects.boxShadow.hover};
	}

	${({ custom }) =>
		custom && {
			...custom,
		}}

	${({ isDisabled }) =>
		isDisabled &&
		`
		  background-color: ${theme.palette.modes.dark.actionButton.disabled};
		  cursor: not-allowed;
		`}
`;

Button.defaultProps = {
	theme,
};
