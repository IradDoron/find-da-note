import styled from 'styled-components';

import { Props } from 'shared/Layout/Flexbox/types';

import { theme } from 'theme';

export const Flexbox = styled.div<Props>`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	gap: ${({ gap }) => gap};
	${({ custom }) =>
		custom && {
			...custom,
		}}
`;

Flexbox.defaultProps = {
	theme,
	direction: 'column',
};
