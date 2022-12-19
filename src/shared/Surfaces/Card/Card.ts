import styled from 'styled-components';

import { Props } from 'shared/Surfaces/Card/types';

import { theme } from 'theme';

export const Card = styled.div<Props>`
	display: flex;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
	padding: 16px;
	width: fit-content;

	${({ custom }) =>
		custom && {
			...custom,
		}}

	${({ theme }) => theme.breakpoints.down('sm')} {
		${({ mobileProps }) =>
			mobileProps && {
				...mobileProps,
			}}
	}
`;

Card.defaultProps = {
	theme,
};
