import styled from 'styled-components';

import { NoteButtonStatus } from 'types';

import { getColorToNoteButtonByStatus } from 'components/NoteButton/helpers';

import { theme } from 'theme';

import { Button } from 'shared/Inputs';
import { Text } from 'shared/Typography';

interface StyledButtonProps {
	status: NoteButtonStatus;
	onClick?: () => void;
	isDisabled?: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
	background-color: ${({ status }) => getColorToNoteButtonByStatus(status)};
	padding: ${({ theme }) => theme.spacing.getSpacing(5)};
	width: 60px;

	${({ isDisabled }) =>
		isDisabled && {
			opacity: 0.5,
			cursor: 'not-allowed',
		}}
`;

StyledButton.defaultProps = {
	theme,
};

interface StyledTextProps {
	children: React.ReactNode;
}

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
