import styled from 'styled-components';

import { Props } from 'shared/Typography/Text/types';

import { theme } from 'theme';

export const Text = styled.p<Props>`
	text-align: center;
	font-size: 1rem;
	${({ custom }) =>
		custom && {
			...custom,
		}}

	${({ size }) => {
		return `font-size: ${size};`;
	}}
`;

Text.defaultProps = {
	theme,
};
