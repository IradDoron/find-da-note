import styled from 'styled-components';

import { Card } from 'shared/Surfaces';
import { Text } from 'shared/Typography';

import { Props } from 'shared/Typography/Text/types';

import { theme } from 'theme';

interface StyledTextProps extends Props {}

export const StyledText = styled(Text)<StyledTextProps>`
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: 1rem;
	}

	${({ theme }) => theme.breakpoints.between('sm', 'md')} {
		font-size: 1.5rem;
	}

	${({ theme }) => theme.breakpoints.up('md')} {
		font-size: 1.7rem;
	}
`;

StyledText.defaultProps = {
	theme,
};

interface StyledCardProps extends Props {}

export const StyledCard = styled(Card)<StyledCardProps>`
	flex-direction: row;
	justify-content: center;
`;

StyledCard.defaultProps = {
	theme,
};
