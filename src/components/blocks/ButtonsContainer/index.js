import styled from 'styled-components';

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	& > * {
		cursor: pointer;
		user-select: none;
	}

	${({ theme }) => theme.breakpoints.down('sm')} {
		& > * {
			margin: 0 ${({ theme }) => theme.spacing.getSpacing('lg')};
			font-size: ${({ theme }) => theme.typography.getFontSize('sm')};
		}
	}

	${({ theme }) => theme.breakpoints.up('sm')} {
		& > * {
			margin: 0 ${({ theme }) => theme.spacing.getSpacing('lg')};
			font-size: ${({ theme }) => theme.typography.getFontSize('md')};
		}
	}
`;

export default ButtonsContainer;
