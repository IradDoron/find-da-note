import { Button } from 'shared/Inputs';
import { Text } from 'shared/Typography';

import styled from 'styled-components';

export const StyledButton = styled(Button)``;

export const StyledText = styled(Text)`
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
